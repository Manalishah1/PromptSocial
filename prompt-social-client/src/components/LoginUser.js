import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation Login($username: String!) {
    login(username: $username) {
      id
      username
      email
    }
  }
`;

export default function LoginUser({ onUserLoggedIn }) {
    const [username, setUsername] = useState('');
    const [login, { loading, error }] = useMutation(LOGIN_USER);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({ variables: { username } });
            if (data.login) {
                localStorage.setItem('userId', data.login.id);
                localStorage.setItem('username', data.login.username);
                onUserLoggedIn(data.login.id, data.login.username);
            }
        } catch (err) {
            alert('User not found');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <button type="submit" disabled={loading}>Login</button>
            {error && <p style={{color: 'red'}}>User not found</p>}
        </form>
    );
}

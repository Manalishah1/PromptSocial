import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/queries';

export default function CreateUser({ onUserCreated }) {
    const [form, setForm] = useState({ username: '', email: '' });
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser({ variables: { ...form } });
        } catch (err) {
            if (err.message.includes('duplicate')) {
                alert('Username or email already exists');
            } else {
                alert('Error creating user: ' + err.message);
            }
        }
    };


    useEffect(() => {
        if (data?.createUser) {
            const { id, username } = data.createUser;
            localStorage.setItem('userId', id);
            localStorage.setItem('username', username);
            onUserCreated(id, username);
        }
    }, [data, onUserCreated]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <button type="submit" disabled={loading}>Create Account</button>
            {error && <p className="error">{error.message}</p>}
        </form>
    );
}

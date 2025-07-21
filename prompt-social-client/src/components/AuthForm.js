import React, { useState } from 'react';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';

export default function AuthForm({ onAuth }) {
    const [isNew, setIsNew] = useState(false);

    return (
        <div>
            {isNew ? (
                <CreateUser onUserCreated={onAuth} />
            ) : (
                <LoginUser onUserLoggedIn={onAuth} />
            )}
            <p style={{ textAlign: 'center' }}>
                {isNew ? 'Already have an account?' : 'Need an account?'}{' '}
                <button className="link-button" onClick={() => setIsNew(!isNew)}>
                    {isNew ? 'Log In' : 'Create Account'}
                </button>
            </p>
        </div>
    );
}

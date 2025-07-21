import React from 'react';

export default function LogoutBar({ username, onLogout }) {
    return (
        <div className="logout-bar">
            <span>{username}</span>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

import { useState, useEffect } from 'react';

export default function useUserSession() {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('userId');
        if (savedUser) setUserId(savedUser);
        const savedUserName = localStorage.getItem('username');
        if (savedUserName) setUsername(savedUserName);
    }, []);

    function login(id, name) {
        localStorage.setItem('userId', id);
        localStorage.setItem('username', name);
        setUserId(id);
        setUsername(name);
    }

    function logout() {
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        setUserId(null);
        setUsername(null);
    }

    return { userId, username, login, logout };
}

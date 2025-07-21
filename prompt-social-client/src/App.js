import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import PromptForm from './components/PromptForm';
import PromptList from './components/PromptList';
import SearchFilter from './components/SearchFilter';
import LogoutBar from './components/LogoutBar';
import './App.css';

export default function App() {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const [search, setSearch] = useState('');
    const [model, setModel] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem('userId');
        const name = localStorage.getItem('username');
        if (id && name) {
            setUserId(id);
            setUsername(name);
        }
    }, []);

    const logout = () => {
        localStorage.clear();
        setUserId(null);
        setUsername(null);
    };

    return (
        <>
            {userId && <LogoutBar username={username} onLogout={logout} />}
            <div className="container">
                <h1 className="page-title">Prompt Social</h1>
                {!userId ? (
                    <AuthForm onAuth={(id, name) => {
                        setUserId(id);
                        setUsername(name);
                    }} />
                ) : (
                    <div className="main-layout">
                        <div className="left-panel">
                            <SearchFilter search={search} setSearch={setSearch} model={model} setModel={setModel} tags={tags} setTags={setTags} />
                            <PromptList username={username} search={search} model={model} tags={tags} />
                        </div>
                        <div className="right-panel">
                            <h2>Add Prompt</h2>
                            <PromptForm authorId={userId} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

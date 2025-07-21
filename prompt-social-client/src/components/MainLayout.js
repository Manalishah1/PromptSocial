import React from 'react';
import SearchFilter from './SearchFilter';
import PromptList from './PromptList';
import PromptForm from './PromptForm';
import LogoutBar from './LogoutBar';

export default function MainLayout({ userId, username, search, setSearch, model, setModel, tags, setTags, onLogout }) {
    return (
        <div className="main-layout">
            <div className="header">
                <LogoutBar username={username} onLogout={onLogout} />
            </div>
            <div className="left-panel">
                <SearchFilter search={search} setSearch={setSearch} model={model} setModel={setModel} tags={tags} setTags={setTags} />
                <PromptList username={username} search={search} model={model} tags={tags} />
            </div>
            <div className="right-panel">
                <h2>Add Prompt</h2>
                <PromptForm authorId={userId} />
            </div>
        </div>
    );
}
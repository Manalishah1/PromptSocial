import React from 'react';
import { MODELS } from '../config/constants';

const SearchFilter = ({ search, setSearch, model, setModel, tags, setTags }) => {
    return (
        <div className="search-filter">
            <input
                className="search-input"
                type="text"
                placeholder="Search prompts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                className="tag-input"
                type="text"
                placeholder="Search by Tag"
                value={tags.join(', ')}
                onChange={(e) => {
                    const value = e.target.value
                        .split(',')
                        .map(tag => tag.trim())
                        .filter(tag => tag !== '');
                    setTags(value);
                }}
            />
            <select
                className="search-select"
                value={model}
                onChange={(e) => setModel(e.target.value)}
            >
                <option value="">All Models</option>
                {MODELS.map(({ label, value }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </div>
    );
};

export default SearchFilter;

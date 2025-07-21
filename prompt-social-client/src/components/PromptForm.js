import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROMPT } from '../graphql/queries';
import { MODELS } from '../config/constants';

export default function AddPrompt() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');
    const [model, setModel] = useState('GPT4');
    const [authorId, setAuthorId] = useState(null);
    const [username, setUsername] = useState('');
    const [resultsInput, setResultsInput] = useState('');

    useEffect(() => {
        const savedUserId = localStorage.getItem('userId');
        const savedUsername = localStorage.getItem('username');
        setAuthorId(savedUserId);
        setUsername(savedUsername);
    }, []);

    const [addPrompt, { loading, error }] = useMutation(ADD_PROMPT, {
        onCompleted: () => {
            alert('Prompt added!');
            setTitle('');
            setBody('');
            setTags('');
            setModel('GPT4');
            setResultsInput('');
        },
        refetchQueries: ['GET_PROMPTS'],
        awaitRefetchQueries: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!authorId || !username) {
            alert('Please create a user first');
            return;
        }

        const results = resultsInput
            .split('~')
            .map(r => r.trim())
            .filter(r => r !== '')
            .map(output => ({ output, username }));

        addPrompt({
            variables: {
                title,
                body,
                tags: tags.split(',').map(t => t.trim()),
                model,
                authorId,
                results,
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
                required
            />
            <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags (comma separated)"
            />
            <select value={model} onChange={(e) => setModel(e.target.value)}>
                <option value="">All Models</option>
                {MODELS.map(({ label, value }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
            <textarea
                value={resultsInput}
                onChange={(e) => setResultsInput(e.target.value)}
                placeholder="Results (If more than one, separate by ~)"
            />
            <button type="submit" disabled={loading}>Add Prompt</button>
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </form>
    );
}

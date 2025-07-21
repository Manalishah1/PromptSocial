import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
    GET_PROMPTS_BY_FILTERS,
    LIKE_PROMPT,
    ADD_RESULT_TO_PROMPT,
} from '../graphql/queries';
import ResultsList from './ResultList';

const PromptList = ({ username, search, model, tags }) => {
    const [likePrompt] = useMutation(LIKE_PROMPT);
    const [addResultToPrompt] = useMutation(ADD_RESULT_TO_PROMPT);
    const [resultInputs, setResultInputs] = useState({});
    const [showResultsId, setShowResultsId] = useState(null);

    const { data, loading, refetch } = useQuery(GET_PROMPTS_BY_FILTERS, {
        variables: { search, model, tags },
    });

    const handleLike = async (id) => {
        try {
            await likePrompt({ variables: { id } });
            refetch();
        } catch (err) {
            console.error('Failed to like prompt:', err.message);
        }
    };

    const handleResultChange = (id, value) => {
        setResultInputs((prev) => ({ ...prev, [id]: value }));
    };

    const handleAddResult = async (id) => {
        const output = resultInputs[id];
        if (!output || output.trim() === '') return;

        if (!username) {
            alert('Author not found. Please login.');
            return;
        }

        try {
            await addResultToPrompt({
                variables: { promptId: id, output, username },
            });
            setResultInputs((prev) => ({ ...prev, [id]: '' }));
            refetch();
        } catch (error) {
            console.error('Failed to add result:', error.message);
        }
    };

    if (loading) return <p>Loading prompts...</p>;

    const prompts = data?.filteredPrompts || [];

    return (
        <ul className="prompt-list">
            {prompts.map((p) => (
                <li key={p.id}>
                    <strong>{p.title}</strong> — {p.model} ({p.likes || 0} likes)
                    <button className="prompt-like-btn" onClick={() => handleLike(p.id)}>
                        👍 Like
                    </button>
                    <br />
                    by {p.author?.username || 'Unknown'}
                    <p>{p.body}</p>
                    <p><strong>Tags:</strong> {p.tags.join(', ')}</p>

                    <button
                        className="results-toggle-btn"
                        onClick={() => setShowResultsId(showResultsId === p.id ? null : p.id)}
                    >
                        {showResultsId === p.id ? 'Hide Results' : 'View Results'}
                    </button>

                    {showResultsId === p.id && <ResultsList results={p.results} />}

                    <div
                        style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}
                    >
                        <input
                            type="text"
                            className="add-result-input"
                            value={resultInputs[p.id] || ''}
                            placeholder="Result output"
                            onChange={(e) => handleResultChange(p.id, e.target.value)}
                        />
                        <button
                            className="add-result-btn"
                            onClick={() => handleAddResult(p.id)}
                        >
                            Add Result
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PromptList;

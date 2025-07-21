import React from 'react';

const ResultsList = ({ results }) => {
    if (!results || results.length === 0) return <p>No results yet.</p>;

    return (
        <div className="results-list">
            <strong>Results:</strong>
            <ul>
                {results.map((r, i) => (
                    <li key={i}>
                        <div>
                            <span className="result-username">{r.username || 'Anonymous'}</span>{' '}
                            <span className="result-timestamp">
                (
                                {r.createdAt && !isNaN(new Date(r.createdAt))
                                    ? new Date(r.createdAt).toLocaleString()
                                    : 'Invalid date'}
                                )
              </span>
                        </div>
                        <div className="result-output">{r.output}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsList;

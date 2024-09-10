import React from 'react';
import styles from './Movie.module.css'

function Movie({ title, openingText, releaseDate }) {
    return (
        <div className={styles['movie']}>
            <h2>{title}</h2>
            <h3>{releaseDate}</h3>
            <p>{openingText}</p>
        </div>
    );
}

export default Movie;
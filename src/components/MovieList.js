import React from 'react';
import styles from './MoviesList.module.css'

function MovieList(props) {
    return (
        <div className={styles['movies-list']}>
            {props.children}
        </div>
    );
}

export default MovieList;
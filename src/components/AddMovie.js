import React, { useState } from 'react';
import styles from './AddMovie.module.css'
import { postMovie } from '../ultilities/httpRequest';

function AddMovie({ movies, setMovies }) {
    const [title, setTitle] = useState('')
    const [openingText, setOpeningText] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    function clearInputs() {
        setTitle('')
        setOpeningText('')
        setReleaseDate('')
    }

    function onSubmit(e) {
        e.preventDefault()
        const movie = {
            title: title,
            openingText: openingText,
            releaseDate: releaseDate
        }
        async function addMovie(movie) {
            try {
                setMovies(prev => [movie, ...prev])
                await postMovie(movie)
            }
            catch (err) {
                setMovies(movies)
            }
        }
        addMovie(movie)

        clearInputs()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className={styles['control']}>
                <label>Title</label>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles['control']}>
                <label>Opening Text</label>
                <textarea value={openingText} onChange={e => setOpeningText(e.target.value)} />
            </div>
            <div className={styles['control']}>
                <label>Release Date</label>
                <input type='text' value={releaseDate} onChange={e => setReleaseDate(e.target.value)} />
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;
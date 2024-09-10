const DATABASE_URL = 'https://httprequestproj-default-rtdb.asia-southeast1.firebasedatabase.app/'

export async function postMovie(movie) {
    await fetch(`${DATABASE_URL}/movies.json`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function getMovies() {
    const res = await fetch(`${DATABASE_URL}/movies.json`)
    const data = await res.json()
    return data
}
import characterList from '../Character-Data/characterList';

const getGifs = (searchValue, limit) => {
    const myKey = process.env.REACT_APP_API_KEY_GIF
    const foundSearch = characterList.find(name => name === searchValue)

    if(foundSearch !== undefined) {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${foundSearch}&limit=${limit}&api_key=${myKey}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
    }
}

export { getGifs }
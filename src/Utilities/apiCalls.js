import characterList from '../Character-Data/characterList';

const getGifs = (searchValue, limit) => {
    // const myKey = process.env.REACT_APP_API_KEY_GIF
    const foundSearch = characterList.find(name => name === searchValue)

    if(foundSearch !== undefined) {
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${foundSearch}&limit=${limit}&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
    }
}

export { getGifs }
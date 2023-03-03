const getGifs = (searchValue, limit) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&limit=${limit}&api_key=QQRengN3S8waij1rwiejGypXXSF6lqN4`)
    .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
}

export { getGifs }
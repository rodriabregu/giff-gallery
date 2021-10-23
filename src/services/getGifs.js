const apiKey = 'eM8Mrq9MT4985iWqJ51FYjuiQ46IjEg0'

export default function getGifs ({ keyWord = 'panda' } = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(img => img.images.downsized_medium.url)
            return gifs;
        })
}
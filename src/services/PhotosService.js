const { AppState } = require("../AppState")


const baseQuery = {
    api_key: 'Ht8AYT943RPgfEOzPQdIgHBGW7xkzWg5LzCucrVI',
    query: ''
}

class PhotosService {
    async search(searchTerm) {
        baseQuery.query = searchTerm
        const res = await imageApi.get('', { params: baseQuery })
        const images = res.data.results.map(i => new Image(m))
        AppState.images = images
    }

}

export const photosService = new PhotosService()
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { nasaApi } from "./AxiosService"

const baseQuery = {
    api_key: 'Ht8AYT943RPgfEOzPQdIgHBGW7xkzWg5LzCucrVI',
    date: ''
}

class PhotosService {
    async search(searchTerm) {
        baseQuery.date = searchTerm
        const res = await nasaApi.get('', { params: baseQuery })
        const images = res.data
        AppState.image = images
        logger.log(res.data)
    }

}

export const photosService = new PhotosService()
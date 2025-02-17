import { ref } from 'vue'
import {type Photo } from '~/types/photo'

export const useUnsplash = () => {
  const config = useRuntimeConfig()
  const photos = ref<Photo[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const searchPhotos = async (query = 'boys') => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12`,
        {
          headers: {
            Authorization: `Client-ID ${config.public.unsplashAccessKey}`
          }
        }
      )

      const data = await response.json()
      photos.value = data.results
    } catch (e) {
      error.value = 'Failed to fetch photos'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {
    photos,
    loading,
    error,
    searchPhotos
  }
}


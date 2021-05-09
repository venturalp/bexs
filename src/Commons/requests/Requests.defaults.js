import axios from 'axios'
import { useApplicationStore } from 'Modules/application/Application.Store'

export const useRequests = () => {
  const { setIsLoading } = useApplicationStore()

  const ax = axios.create({
    baseURL: 'https://60981e24e48ec00017873616.mockapi.io/api/bexs',
  })
  const setupAxios = () => {
    ax.interceptors.request.use(config => {
      if (config.showLoading) setIsLoading(true)

      return config
    })
    ax.interceptors.response.use(
      response => {
        if (response.config.showLoading) setIsLoading(false)

        return response
      },
      error => {
        if (error?.config?.showLoading) setIsLoading(false)

        return Promise.reject(error)
      },
    )

    return ax
  }

  return setupAxios()
}

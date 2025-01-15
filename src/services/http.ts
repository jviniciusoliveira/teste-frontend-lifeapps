export const API_URL = 'http://localhost:3002/'

type HttpGetParams = {
  endpoint: string
  params?: Record<string, unknown>
  controller?: AbortController
}

export async function httpGet({ endpoint, params, controller }: HttpGetParams) {
  try {
    const url = new URL(`${API_URL}${endpoint}`)

    if (params) {
      Object.entries(params).forEach(([name, value]) => {
        url.searchParams.set(name, String(value))
      })
    }

    const response = await fetch(url, { signal: controller?.signal })
    const data = await response.json()

    return data
  } catch (error) {
    // TODO: adds error handler
    console.error(error)
  }
}

export const FETCH_START = '@search/FETCH_START'
export const FETCH_SUCCES = '@search/FETCH_SUCCES'
export const FETCH_ERROR = '@search/FETCH_ERROR'

export const sendReq = () => ({
    type: 'api',
    types: [FETCH_START, FETCH_SUCCES, FETCH_ERROR],
    promise: (apiClient) => apiClient('/events/type_event')
})

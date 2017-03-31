export const api = store => next => action => {
    if (action.type === 'api'){
        const dispatch = store.dispatch
        const types = action.types
        const promise = action.promise

        const [START, SUCCES, ERROR] = types

        const doFetch_getTypes = (url, options = {}) => {
        //const baseUrl = 'http://localhost:8080'
        return fetch(url, options)
        }
        promise(doFetch_getTypes)
        .then(result => {
                if(result.ok){
                    result.json().then(data => {
                        dispatch({
                            type: SUCCES,
                            payload: data
                        })
                    })
                }else{
                    dispatch({
                        type: ERROR,
                        data: result
                    })
                }
        })
    }else{
        return next(action)
    }
}

export default api
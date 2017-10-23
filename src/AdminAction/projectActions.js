require('es6-promise').polyfill();
require('isomorphic-fetch');

//Add user data

export function fetchProjectAddFailed(bool) {
    return {
        type: 'PROJECT_ADD_FAILURE',
        hasErrored: bool
    };
}
export function fetchProjectAddLoading(bool) {
    return {
        type: 'PROJECT_ADD_LOADING',
        isLoading: bool
    };
}
export function fetchProjectAddSuccess(items) {
    return {
        type: 'PROJECT_ADD_SUCCESS',
        items
    };
}

export function ProjectAddFetchData(url, payload) {
       return (dispatch) => {
       console.log('User', payload);
        dispatch(fetchProjectAddLoading(true));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    //console.log(response.statusText);
                 //   console.log('MedianIncome Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchProjectAddLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchProjectAddSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchProjectAddFailed(true))
            }
            );
    };
  
}


//Update Project data
export function fetchProjectUpdateFailed(bool) {
    return {
        type: 'PROJECT_UPDATE_FAILURE',
        hasErrored: bool
    };
}
export function fetchProjectUpdateLoading(bool) {
    return {
        type: 'PROJECT_UPDATE_LOADING',
        isLoading: bool
    };
}
export function fetchProjectUpdateSuccess(items) {
    return {
        type: 'PROJECT_UPDATE_SUCCESS',
        items
    };
}

export function projectUpdateFetchData(url, payload) {

    //console.log("url",url)
    

        return (dispatch) => {
       // console.log('Update Project payload', payload);
        dispatch(fetchProjectUpdateLoading(true));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                   // console.log(response.statusText);
                  //  console.log('response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchProjectUpdateLoading(false));
                return response;
            })
            .then(response => {
               // console.log('response 4'+response);
                return response.json();
            })
            .then((eventData) => {
               // console.log('response 2', eventData);
                dispatch(fetchProjectUpdateSuccess(eventData));
            })
            .catch((err) => {
                // console.log('response 3 error'+err);
                dispatch(fetchProjectUpdateFailed(true))
            }
            );
    };
  
}



//*****Project Delete Data****
export function fetchProjectDeleteFailed(bool) {
    return {
        type: 'PROJECT_DELETE_FAILURE',
        hasErrored: bool
    };
}
export function fetchProjectDeleteLoading(bool) {
    return {
        type: 'PROJECT_DELETE_LOADING',
        isLoading: bool
    };
}
export function fetchProjectDeleteSuccess(items) {
    return {
        type: 'PROJECT_DELETE_SUCCESS',
        items
    };
}

export function projectDeleteFetchData(url, payload) {

    console.log("url",url)
    

        return (dispatch) => {
       // console.log('MedianIncome Delete', payload);
        dispatch(fetchProjectDeleteLoading(true));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response.statusText);
                 //   console.log('Project Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchProjectDeleteLoading(false));
                return response;
            })
            .then(response => {
               // console.log('Project Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('Project Delete 2', eventData);
                dispatch(fetchProjectDeleteSuccess(eventData));
            })
            .catch((err) => {
                // console.log('Project Delete 3 error'+err);
                dispatch(fetchProjectDeleteFailed(true))
            }
            );
    };
  
}
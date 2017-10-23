require('es6-promise').polyfill();
require('isomorphic-fetch');

//Add user data

export function fetchUserAddFailed(bool) {
    return {
        type: 'USER_ADD_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserAddLoading(bool) {
    return {
        type: 'USER_ADD_LOADING',
        isLoading: bool
    };
}
export function fetchUserAddSuccess(items) {
    return {
        type: 'USER_ADD_SUCCESS',
        items
    };
}

export function UserAddFetchData(url, payload) {

    console.log("userAddFetchData Url",url)
    

        return (dispatch) => {
       console.log('User', payload);
        dispatch(fetchUserAddLoading(true));
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
                 //   console.log('MedianIncome Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserAddLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchUserAddSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchUserAddFailed(true))
            }
            );
    };
  
}

//Update user data
export function fetchUserUpadeteFailed(bool) {
    return {
        type: 'USER_UPDATE_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserUpadeteLoading(bool) {
    return {
        type: 'USER_UPDATE_LOADING',
        isLoading: bool
    };
}
export function fetchUserUpadeteSuccess(items) {
    return {
        type: 'USER_UPDATE_SUCCESS',
        items
    };
}

export function userUpadeteFetchData(url, payload) {

    console.log("url",url)
    

        return (dispatch) => {
        console.log('payload', payload);
        dispatch(fetchUserUpadeteLoading(true));
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
                    console.log('response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserUpadeteLoading(false));
                return response;
            })
            .then(response => {
                console.log('response 4'+response);
                return response.json();
            })
            .then((eventData) => {
                console.log('response 2', eventData);
                dispatch(fetchUserUpadeteSuccess(eventData));
            })
            .catch((err) => {
                 console.log('response 3 error'+err);
                dispatch(fetchUserUpadeteFailed(true))
            }
            );
    };
  
}




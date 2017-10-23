require('es6-promise').polyfill();
require('isomorphic-fetch');


//  *****User Actions Get*****
export function fetchUserDataLoading(bool) {
    return {
        type: 'USER_DATA_IS_LOADING', isReconLoading: bool
    };
}
export function fetchUserDataSuccess(reconData) {

    return {
        type: 'USER_DATA_SUCCESS', reconData
    };
}
export function fetchUserDataFailed(bool) {
    return {
        type: 'USER_DATA_FAILURE', hasReconErrored: bool
    };
}
export function fetchUserData(url, params) {
    // console.log("fetch recon action called");
    return (dispatch) => {
        // console.log('Ready to load', payload);
        dispatch(fetchUserDataLoading(true));
        //  fetch(url + '?' + params,   ***  
        fetch(url,
            {
                method: "GET", credentials: "same-origin",
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } dispatch(fetchUserDataLoading(false));
                return response;
            })
            .then(response => {
                return response.json();

            })
            .then((response) => {
                // console.log("api data",response)

                dispatch(fetchUserDataSuccess(response));
            }).catch(() => {
                dispatch(fetchUserDataFailed(true))
            }
            );
    };
}


//  *****User Actions Remove*****

export function fetchUserRemoveFailed(bool) {
    return {
        type: 'USER_DELETE_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserRemoveLoading(bool) {
    return {
        type: 'USER_DELETE_LOADING',
        isLoading: bool
    };
}
export function fetchUserRemoveSuccess(items) {
    return {
        type: 'USER_DELETE_SUCCESS',
        items
    };
}

export function fetchUserRemoveFetchData(url, payload) {

  //  console.log("url",url)
    

        return (dispatch) => {
       // console.log('RCA Delete', payload);
        dispatch(fetchUserRemoveLoading(true));
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
                 //   console.log('User Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserRemoveLoading(false));
                return response;
            })
            .then(response => {
               // console.log('User Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('User Delete 2', eventData);
                dispatch(fetchUserRemoveSuccess(eventData));
            })
            .catch((err) => {
                // console.log('User Delete 3 error'+err);
                dispatch(fetchUserRemoveFailed(true))
            }
            );
    };
  
}





//  *****User Actions Active Account*****

export function fetchUserActiveFailed(bool) {
    return {
        type: 'USER_ACTIVE_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserActiveLoading(bool) {
    return {
        type: 'USER_ACTIVE_LOADING',
        isLoading: bool
    };
}
export function fetchUserActiveSuccess(items) {
    return {
        type: 'USER_ACTIVE_SUCCESS',
        items
    };
}
 
export function fetchUserActiveFetchData(url, payload) {

  //  console.log("url",url)
    

        return (dispatch) => {
       // console.log('RCA Delete', payload);
        dispatch(fetchUserActiveLoading(true));
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
                 //   console.log('User Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserActiveLoading(false));
                return response;
            })
            .then(response => {
               // console.log('User Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('User Delete 2', eventData);
                dispatch(fetchUserActiveSuccess(eventData));
            })
            .catch((err) => {
                // console.log('User Delete 3 error'+err);
                dispatch(fetchUserActiveFailed(true))
            }
            );
    };
  
}



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



//User Login
export function fetchUserLoginFailed(bool) {
    return {
        type: 'USER_LOGIN_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserLoginLoading(bool) {
    return {
        type: 'USER_LOGIN_LOADING',
        isLoading: bool
    };
}
export function fetchUserLoginSuccess(items) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        items
    };
}

export function UserLoginFetchData(url, payload) {

  //  console.log(" User Log url",url)
    

        return (dispatch) => {
       // console.log('User Login payload', payload);
        dispatch(fetchUserLoginLoading(true));
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
                 //   console.log('User Login response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchUserLoginLoading(false));
                return response;
            })
            .then(response => {
               // console.log('User Login response 4'+response);
                return response.json();
            })
            .then((eventData) => {
               // console.log(' User Login response 2', eventData);
                dispatch(fetchUserLoginSuccess(eventData));
            })
            .catch((err) => {
                // console.log('User Login response 3 error'+err);
                dispatch(fetchUserLoginFailed(true))
            }
            );
    };
  
}

//Change Password
export function fetchChangePasswordFailed(bool) {
    return {
        type: 'CHANGE_PASSWORD_FAILURE',
        hasErrored: bool
    };
}
export function fetchChangePasswordLoading(bool) {
    return {
        type: 'CHANGE_PASSWORD_LOADING',
        isLoading: bool
    };
}
export function fetchChangePasswordSuccess(items) {
    return {
        type: 'CHANGE_PASSWORD_SUCCESS',
        items
    };
}

export function ChangePasswordFetchData(url, payload) {

  //  console.log(" User Log url",url)
    

        return (dispatch) => {
       console.log('Changepassword payload', payload);
        dispatch(fetchChangePasswordLoading(true));
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
                 //   console.log('User Login response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchChangePasswordLoading(false));
                return response;
            })
            .then(response => {
               // console.log('User Login response 4'+response);
                return response.json();
            })
            .then((eventData) => {
               // console.log(' User Login response 2', eventData);
                dispatch(fetchChangePasswordSuccess(eventData));
            })
            .catch((err) => {
                // console.log('User Login response 3 error'+err);
                dispatch(fetchChangePasswordFailed(true))
            }
            );
    };
  
}

//User Forget Password
export function fetchForgotPasswordFailed(bool) {
    return {
        type: 'FORGOT_PASSWORD_FAILURE',
        hasErrored: bool
    };
}
export function fetchForgotPasswordLoading(bool) {
    return {
        type: 'FORGOT_PASSWORD_LOADING',
        isLoading: bool
    };
}
export function fetchForgotPasswordSuccess(items) {
    return {
        type: 'FORGOT_PASSWORD_SUCCESS',
        items
    };
}

export function ForgotPasswordFetchData(url, payload) {

  //  console.log(" User Log url",url)
    

        return (dispatch) => {
       console.log('Forgetpassword payload', payload);
        dispatch(fetchForgotPasswordLoading(true));
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
                 //   console.log('User Login response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchForgotPasswordLoading(false));
                return response;
            })
            .then(response => {
               console.log('Forgetpassword 2'+response);
                return response.json();
            })
            .then((eventData) => {
               console.log(' Forgetpassword 1', eventData);
                dispatch(fetchForgotPasswordSuccess(eventData));
            })
            .catch((err) => {
                console.log('Forgetpassword error'+err);
                dispatch(fetchForgotPasswordFailed(true))
            }
            );
    };
  
}

// User Reset Password

export function fetchResetPasswordFailed(bool) {
    return {
        type: 'RESET_PASSWORD_FAILURE',
        hasErrored: bool
    };
}
export function fetchResetPasswordLoading(bool) {
    return {
        type: 'RESET_PASSWORD_LOADING',
        isLoading: bool
    };
}
export function fetchResetPasswordSuccess(items) {
    return {
        type: 'RESET_PASSWORD_SUCCESS',
        items
    };
}

export function ResetPasswordFetchData(url, payload) {

  //  console.log(" User Log url",url)
    

        return (dispatch) => {
       console.log('Resetpassword payload', payload);
        dispatch(fetchResetPasswordLoading(true));
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
                 //   console.log('User Login response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchResetPasswordLoading(false));
                return response;
            })
            .then(response => {
               console.log('Resetpassword 2'+response);
                return response.json();
            })
            .then((eventData) => {
               console.log(' Resetpassword 1', eventData);
                dispatch(fetchResetPasswordSuccess(eventData));
            })
            .catch((err) => {
                console.log('Resetpassword error'+err);
                dispatch(fetchResetPasswordFailed(true))
            }
            );
    };
  
}
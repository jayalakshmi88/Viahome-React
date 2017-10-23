require('es6-promise').polyfill();
require('isomorphic-fetch');


//  ***** Median Income  Get Data *****
export function fetchMedianIncomeLoading(bool) {
    return {
        type: 'MEDIAN_INCOME_IS_LOADING', isReconLoading: bool
    };
}
export function fetchMedianIncomeSuccess(reconData) {

    return {
        type: 'MEDIAN_INCOME_DATA_SUCCESS', reconData
    };
}
export function fetchMedianIncomeFailed(bool) {
    return {
        type: 'MEDIAN_INCOME_DATA_FAILURE', hasReconErrored: bool
    };
}
export function fetchMedianIncomeData(url, params) {
    // console.log("fetch recon action called");
    return (dispatch) => {
        // console.log('Ready to load', payload);
        dispatch(fetchMedianIncomeLoading(true));
        //  fetch(url + '?' + params,   ***  
        fetch(url,
            {
                method: "GET", credentials: "same-origin",
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } dispatch(fetchMedianIncomeLoading(false));
                return response;
            })
            .then(response => {
                return response.json();

            })
            .then((response) => {
               // console.log("api data", response)

                dispatch(fetchMedianIncomeSuccess(response));
            }).catch(() => {
                dispatch(fetchMedianIncomeFailed(true))
            }
            );
    };
}



//  ***** MedianIncome  UpadateData *****
export function fetchMedianIncomeUpadeteFailed(bool) {
    return {
        type: 'MEDIANINCOME_UPDATE_FAILURE',
        hasErrored: bool
    };
}
export function fetchMedianIncomeUpadeteLoading(bool) {
    return {
        type: 'MEDIANINCOME_UPDATE_LOADING',
        isLoading: bool
    };
}
export function fetchMedianIncomeUpadeteSuccess(items) {
    return {
        type: 'MEDIANINCOME_UPDATE_SUCCESS',
        items
    };
}

export function medianIncomeUpadeteFetchData(url, payload) {

   // console.log("url",url)
    

        return (dispatch) => {
        console.log('payload', payload);
        dispatch(fetchMedianIncomeUpadeteLoading(true));
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
                  //  console.log(response.statusText);
                    //console.log('response 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchMedianIncomeUpadeteLoading(false));
                return response;
            })
            .then(response => {
               // console.log('response 4'+response);
                return response.json();
            })
            .then((eventData) => {
                //console.log('response 2', eventData);
                dispatch(fetchMedianIncomeUpadeteSuccess(eventData));
            })
            .catch((err) => {
              //   console.log('response 3 error'+err);
                dispatch(fetchMedianIncomeUpadeteFailed(true))
            }
            );
    };
  
}

//***** MedianIncome  Delete Data *****
export function fetchMedianIncomeDeleteFailed(bool) {
    return {
        type: 'MEDIANINCOME_DELETE_FAILURE',
        hasErrored: bool
    };
}
export function fetchMedianIncomeDeleteLoading(bool) {
    return {
        type: 'MEDIANINCOME_DELETE_LOADING',
        isLoading: bool
    };
}
export function fetchMedianIncomeDeleteSuccess(items) {
    return {
        type: 'MEDIANINCOME_DELETE_SUCCESS',
        items
    };
}

export function medianIncomeDeleteFetchData(url, payload) {

    console.log("url",url)
    

        return (dispatch) => {
       // console.log('MedianIncome Delete', payload);
        dispatch(fetchMedianIncomeDeleteLoading(true));
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
                  //  console.log(response.statusText);
                 //   console.log('MedianIncome Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchMedianIncomeDeleteLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchMedianIncomeDeleteSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchMedianIncomeDeleteFailed(true))
            }
            );
    };
  
}



//***** MedianIncome  Add Data *****
export function fetchMedianIncomeAddFailed(bool) {
    return {
        type: 'MEDIANINCOME_ADD_FAILURE',
        hasErrored: bool
    };
}
export function fetchMedianIncomeAddLoading(bool) {
    return {
        type: 'MEDIANINCOME_ADD_LOADING',
        isLoading: bool
    };
}
export function fetchMedianIncomeAddSuccess(items) {
    return {
        type: 'MEDIANINCOME_ADD_SUCCESS',
        items
    };
}

export function medianIncomeAddFetchData(url, payload) {

    console.log("medianIncomeAddFetchData Url",url)
    

        return (dispatch) => {
       console.log('MedianIncome Add', payload);
        dispatch(fetchMedianIncomeAddLoading(true));
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
                dispatch(fetchMedianIncomeAddLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchMedianIncomeAddSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchMedianIncomeAddFailed(true))
            }
            );
    };
  
}
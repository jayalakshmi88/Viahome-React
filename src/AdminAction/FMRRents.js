require('es6-promise').polyfill();
require('isomorphic-fetch');


//  *****FMR Rents Get data*****
export function fetchFMRRentsLoading(bool){
            return{
                    type:'FMR_RENT_IS_LOADING',isReconLoading:bool
            };
}
export function fetchFMRRentsSuccess(reconData){

            return{
                    type:'FMR_RENT_DATA_SUCCESS',reconData
            };
}
export function fetchFMRRentsFailed(bool){
            return{
                    type:'FMR_RENT_DATA_FAILURE',hasReconErrored:bool
            };
}
export function fetchFMRRentsData(url, params) 
            {
                // console.log("fetch recon action called");
                  return (dispatch) => { 
                // console.log('Ready to load', payload);
                    dispatch(fetchFMRRentsLoading(true));
                       //  fetch(url + '?' + params,   ***  
                        fetch(url,
                            {method:"GET",  credentials: "same-origin",
                        })
                        .then((response) => { 
                            if(!response.ok) {
                                 throw Error(response.statusText);
                                } dispatch(fetchFMRRentsLoading(false));
                                    return response; 
                                        })
                                        .then(response=> { 
                                             return response.json();
                                                        
                                            })
                                            .then((response) => {
                                                // console.log("api data",response)
                                                                                                
                                                dispatch(fetchFMRRentsSuccess(response));
                                                     }).catch(() => { 
                                                            dispatch(fetchFMRRentsFailed(true))
                                                                     } 
                                                              );
                                };
             } 

//  ***** FMR Rents  UpadateData *****
export function fetchFMRRentsUpadeteFailed(bool) {
    return {
        type: 'FMR_RENT_UPDATE_FAILURE',
        hasErrored: bool
    };
}
export function fetchFMRRentsUpadeteLoading(bool) {
    return {
        type: 'FMR_RENT_UPDATE_LOADING',
        isLoading: bool
    };
}
export function fetchFMRRentsUpadeteSuccess(items) {
    return {
        type: 'FMR_RENT_UPDATE_SUCCESS',
        items
    };
}

export function FMRRentsUpadeteFetchData(url, payload) {

    console.log("FMRRentsUpadeteFetchData",url)
    

        return (dispatch) => {
        console.log('payload', payload);
        dispatch(fetchFMRRentsUpadeteLoading(true));
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
                dispatch(fetchFMRRentsUpadeteLoading(false));
                return response;
            })
            .then(response => {
                console.log('response 4'+response);
                return response.json();
            })
            .then((eventData) => {
                console.log('response 2', eventData);
                dispatch(fetchFMRRentsUpadeteSuccess(eventData));
            })
            .catch((err) => {
                 console.log('response 3 error'+err);
                dispatch(fetchFMRRentsUpadeteFailed(true))
            }
            );
    };
  
}

//***** FMRRents  Delete Data *****
export function fetchFMRRentsDeleteFailed(bool) {
    return {
        type: 'FMR_RENT_DELETE_FAILURE',
        hasErrored: bool
    };
}
export function fetchFMRRentsDeleteLoading(bool) {
    return {
        type: 'FMR_RENT_DELETE_LOADING',
        isLoading: bool
    };
}
export function fetchFMRRentsDeleteSuccess(items) {
    return {
        type: 'FMR_RENT_DELETE_SUCCESS',
        items
    };
}

export function FMRRentsDeleteFetchData(url, payload) {

    console.log("url",url)
    

        return (dispatch) => {
       // console.log('MedianIncome Delete', payload);
        dispatch(fetchFMRRentsDeleteLoading(true));
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
                dispatch(fetchFMRRentsDeleteLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchFMRRentsDeleteSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchFMRRentsDeleteFailed(true))
            }
            );
    };
  
}



//***** FMR Rents  Add Data *****
export function fetchFMRRentsAddFailed(bool) {
    return {
        type: 'FMR_RENT_ADD_FAILURE',
        hasErrored: bool
    };
}
export function fetchFMRRentsAddLoading(bool) {
    return {
        type: 'FMR_RENT_ADD_LOADING',
        isLoading: bool
    };
}
export function fetchFMRRentsAddSuccess(items) {
    return {
        type: 'FMR_RENT_ADD_SUCCESS',
        items
    };
}

export function FMRRentsAddFetchData(url, payload) {

    console.log("medianIncomeAddFetchData Url",url)
    

        return (dispatch) => {
       console.log('FMR Rents', payload);
        dispatch(fetchFMRRentsAddLoading(true));
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
                dispatch(fetchFMRRentsAddLoading(false));
                return response;
            })
            .then(response => {
               // console.log('MedianIncome Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('MedianIncome Delete 2', eventData);
                dispatch(fetchFMRRentsAddSuccess(eventData));
            })
            .catch((err) => {
                // console.log('MedianIncome Delete 3 error'+err);
                dispatch(fetchFMRRentsAddFailed(true))
            }
            );
    };
  
}
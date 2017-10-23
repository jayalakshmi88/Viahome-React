require('es6-promise').polyfill();
require('isomorphic-fetch');


//  *****RC Assumptions get data*****
export function fetchRcAssumptionsLoading(bool){
            return{
                    type:'RC_ASSUMPTIONS_IS_LOADING',isReconLoading:bool
            };
}
export function fetchRcAssumptionsSuccess(reconData){

            return{
                    type:'RC_ASSUMPTIONS_DATA_SUCCESS',reconData
            };
}
export function fetchRcAssumptionsFailed(bool){
            return{
                    type:'RC_ASSUMPTIONS_DATA_FAILURE',hasReconErrored:bool
            };
}
export function fetchRcAssumptionsData(url, params) 
            {
                // console.log("fetch recon action called");
                  return (dispatch) => { 
                // console.log('Ready to load', payload);
                    dispatch(fetchRcAssumptionsLoading(true));
                       //  fetch(url + '?' + params,   ***  
                        fetch(url,
                            {method:"GET",  credentials: "same-origin",
                        })
                        .then((response) => { 
                            if(!response.ok) {
                                 throw Error(response.statusText);
                                } dispatch(fetchRcAssumptionsLoading(false));
                                    return response; 
                                        })
                                        .then(response=> { 
                                             return response.json();
                                                        
                                            })
                                            .then((response) => {
                                              //  console.log("api data",response)
                                                                                                
                                                dispatch(fetchRcAssumptionsSuccess(response));
                                                     }).catch(() => { 
                                                            dispatch(fetchRcAssumptionsFailed(true))
                                                                     } 
                                                              );
                                };
             } 
//  *****RC Assumptions update data*****

export function fetchRCAssumptionUpadeteFailed(bool) {
    return {
        type: 'RC_ASSUMPTIONS_UPDATE_FAILURE',
        hasErrored: bool
    };
}
export function fetchRCAssumptionUpadeteLoading(bool) {
    return {
        type: 'RC_ASSUMPTIONS_UPDATE_LOADING',
        isLoading: bool
    };
}
export function fetchRCAssumptionUpadeteSuccess(items) {
    return {
        type: 'RC_ASSUMPTIONS_UPDATE_SUCCESS',
        items
    };
}

export function RCAssumptionUpadeteFetchData(url, payload) {

    console.log("url",url)
    

        return (dispatch) => {
        console.log('payload', payload);
        dispatch(fetchRCAssumptionUpadeteLoading(true));
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
                dispatch(fetchRCAssumptionUpadeteLoading(false));
                return response;
            })
            .then(response => {
                console.log('response 4'+response);
                return response.json();
            })
            .then((eventData) => {
                console.log('response 2', eventData);
                dispatch(fetchRCAssumptionUpadeteSuccess(eventData));
            })
            .catch((err) => {
                 console.log('response 3 error'+err);
                dispatch(fetchRCAssumptionUpadeteFailed(true))
            }
            );
    };
  
}

//***** RCAssumptions  Add Data *****
export function fetchRCAssumptionAddFailed(bool) {
    return {
        type: 'RC_ASSUMPTIONS_ADD_FAILURE',
        hasErrored: bool
    };
}
export function fetchRCAssumptionAddLoading(bool) {
    return {
        type: 'RC_ASSUMPTIONS_ADD_LOADING',
        isLoading: bool
    };
}
export function fetchRCAssumptionAddSuccess(items) {
    return {
        type: 'RC_ASSUMPTIONS_ADD_SUCCESS',
        items
    };
}

export function RCAssumptionAddFetchData(url, payload) {

    console.log("RCAssumptionAddFetchData Url",url)
    

        return (dispatch) => {
       console.log('FMR Rents', payload);
        dispatch(fetchRCAssumptionAddLoading(true));
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
                 //   console.log('RCA Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchRCAssumptionAddLoading(false));
                return response;
            })
            .then(response => {
               // console.log('RCA Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('RCA Delete 2', eventData);
                dispatch(fetchRCAssumptionAddSuccess(eventData));
            })
            .catch((err) => {
                // console.log('RCA Delete 3 error'+err);
                dispatch(fetchRCAssumptionAddFailed(true))
            }
            );
    };
  
}




//***** RCA  Delete Data *****
export function fetchRCAssumptionDeleteFailed(bool) {
    return {
        type: 'RC_ASSUMPTIONS_DELETE_FAILURE',
        hasErrored: bool
    };
}
export function fetchRCAssumptionDeleteLoading(bool) {
    return {
        type: 'RC_ASSUMPTIONS_DELETE_LOADING',
        isLoading: bool
    };
}
export function fetchRCAssumptionDeleteSuccess(items) {
    return {
        type: 'RC_ASSUMPTIONS_DELETE_SUCCESS',
        items
    };
}

export function fetchRCAssumptionDeleteFetchData(url, payload) {

  //  console.log("url",url)
    

        return (dispatch) => {
       // console.log('RCA Delete', payload);
        dispatch(fetchRCAssumptionDeleteLoading(true));
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
                 //   console.log('RCA Delete 1', response);
                    throw Error(response.statusText);
                }
                dispatch(fetchRCAssumptionDeleteLoading(false));
                return response;
            })
            .then(response => {
               // console.log('RCA Delete 4'+response);
                return response.json();
            })
            .then((eventData) => {
              //  console.log('RCA Delete 2', eventData);
                dispatch(fetchRCAssumptionDeleteSuccess(eventData));
            })
            .catch((err) => {
                // console.log('RCA Delete 3 error'+err);
                dispatch(fetchRCAssumptionDeleteFailed(true))
            }
            );
    };
  
}

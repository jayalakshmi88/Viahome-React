require('es6-promise').polyfill();
require('isomorphic-fetch');


//  *****ReconViewActions*****
export function fetchDashBoardDataLoading(bool){
            return{
                    type:'FETCH_DASHBOARD_IS_LOADING',isReconLoading:bool
            };
}
export function fetchDashBoardDataSuccess(reconData){

            return{
                    type:'FETCH_DASHBOARD_DATA_SUCCESS',reconData
            };
}
export function fetchDashBoardDataFailed(bool){
            return{
                    type:'FETCH_DASHBOARD_DATA_FAILURE',hasReconErrored:bool
            };
}
export function fetchDashBoardData(url, params) 
            {
                // console.log("fetch recon action called");
                  return (dispatch) => { 
                // console.log('Ready to load', payload);
                    dispatch(fetchDashBoardDataLoading(true));
                       //  fetch(url + '?' + params,   ***  
                        fetch(url,
                            {method:"GET",  credentials: "same-origin",
                        })
                        .then((response) => { 
                            if(!response.ok) {
                                 throw Error(response.statusText);
                                } dispatch(fetchDashBoardDataLoading(false));
                                    return response; 
                                        })
                                        .then(response=> { 
                                             return response.json();
                                                        
                                            })
                                            .then((response) => {
                                                //  console.log("api data",response)
                                                                                                
                                                dispatch(fetchDashBoardDataSuccess(response));
                                                     }).catch(() => { 
                                                            dispatch(fetchDashBoardDataFailed(true))
                                                                     } 
                                                              );
                                };
             } 

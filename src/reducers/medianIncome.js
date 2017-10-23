
//  ***** Median Income  Get Data *****
const INITIAL_STATE2 = { searchReconRecords: [] };

export function fetchMedianIncomeLoading(state = false, action) {
    switch (action.type) {
        case 'MEDIAN_INCOME_IS_LOADING':
            return action.isReconLoading;
        default:
            return state;
    }
}
export function fetchMedianIncomeFailure(state = false, action) {
    switch (action.type) {
        case 'MEDIAN_INCOME_DATA_FAILURE':
            return action.hasReconErrored;
        default:
            return state;
    }
}
export function fetchMedianIncomeData(state = INITIAL_STATE2, action) {
        switch (action.type) {
        case 'MEDIAN_INCOME_DATA_SUCCESS':
            {
                return action.reconData;
            }
        default:
            return state;
    }
}



//  ***** MedianIncome  UpadateData *****


const INITIAL_STATE = { isLoading:false,source:[],error:[],recon:[],success:[]}

export function fetchMeadinIncomeUpdateFailed(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_UPDATE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchMeadinIncomeUpdateLoading(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_UPDATE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchMeadinIncomeUpdate(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MEDIANINCOME_UPDATE_SUCCESS':
            {
                
                return action.items
            }
        default:
            return state;
    }
}

//  ***** MedianIncome  DeleteData *****


const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

export function fetchMedianIncomeDeleteFailed(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_DELETE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchMedianIncomeDeleteLoading(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_DELETE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchMedianIncomeDelete(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'MEDIANINCOME_DELETE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}


//  ***** MedianIncome  ADD *****



export function fetchMedianIncomeAddFailed(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_ADD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchMedianIncomeAddLoading(state = false, action) {
    switch (action.type) {
        case 'MEDIANINCOME_ADD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchMedianIncomeAdd(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'MEDIANINCOME_ADD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
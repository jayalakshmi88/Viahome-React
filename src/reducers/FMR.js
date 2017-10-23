
//  ***** FMR Rents  Get Data *****
const INITIAL_STATE = { searchReconRecords: [] };

export function fetchFMRRentsLoading(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_IS_LOADING':
            return action.isReconLoading;
        default:
            return state;
    }
}
export function fetchFMRRentsFailure(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_DATA_FAILURE':
            return action.hasReconErrored;
        default:
            return state;
    }
}
export function fetchFMRRentsData(state = INITIAL_STATE, action) {
        switch (action.type) {
        case 'FMR_RENT_DATA_SUCCESS':
            {
                return action.reconData;
            }
        default:
            return state;
    }
}

//  ***** FMR Rents UpadateData *****

const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

export function fetchFMRRentsUpadeteFailed(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_UPDATE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchFMRRentsUpadeteLoading(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_UPDATE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchFMRRentsUpdate(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'FMR_RENT_UPDATE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
//  ***** FMR Rents  DeleteData *****


const INITIAL_STATE2 = { source:[],error:[],recon:[],success:[]}

export function fetchFMRRentsDeleteFailed(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_DELETE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchFMRRentsDeleteLoading(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_DELETE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchFMRRentsDelete(state = INITIAL_STATE2, action) {
    switch (action.type) {
        case 'FMR_RENT_DELETE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}


//  ***** FMR Rents  ADD *****



export function fetchFMRRentsAddFailed(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_ADD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchFMRRentsAddLoading(state = false, action) {
    switch (action.type) {
        case 'FMR_RENT_ADD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchFMRRentsAdd(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'FMR_RENT_ADD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}


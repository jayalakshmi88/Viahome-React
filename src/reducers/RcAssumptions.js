

//  ***** RC Assumptions  Get Data *****
const INITIAL_STATE = { searchReconRecords: [] };

export function fetchRcAssumptionsLoading(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_IS_LOADING':
            return action.isReconLoading;
        default:
            return state;
    }
}
export function fetchRcAssumptionsFailure(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_DATA_FAILURE':
            return action.hasReconErrored;
        default:
            return state;
    }
}
export function fetchRcAssumptionsData(state = INITIAL_STATE, action) {
        switch (action.type) {
        case 'RC_ASSUMPTIONS_DATA_SUCCESS':
            {
                return action.reconData;
            }
        default:
            return state;
    }
}
//  ***** RC Assumption UpadateData *****

const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

export function fetchRCAssumptionUpadeteFailed(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_UPDATE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchRCAssumptionUpadeteLoading(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_UPDATE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchRCAssumptionUpdate(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_UPDATE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
//  ***** RC Assumption Add data *****

export function fetchRCAssumptionAddFailed(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_ADD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchRCAssumptionAddLoading(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_ADD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchRCAssumptionAdd(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_ADD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}



//  ***** FMR Rents  DeleteData *****


const INITIAL_STATE2 = { source:[],error:[],recon:[],success:[]}

export function fetchRCAssumptionDeleteFailed(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_DELETE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchRCAssumptionDeleteLoading(state = false, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_DELETE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchRCAssumptionDelete(state = INITIAL_STATE2, action) {
    switch (action.type) {
        case 'RC_ASSUMPTIONS_DELETE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}

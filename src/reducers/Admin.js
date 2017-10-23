const INITIAL_STATE = { searchReconRecords: [] };

export function fetchDashBoardDataLoading(state = false, action) {
    switch (action.type) {
        case 'FETCH_DASHBOARD_IS_LOADING':
            return action.isReconLoading;
        default:
            return state;
    }
}
export function fetchDashBoardFailure(state = false, action) {
    switch (action.type) {
        case 'FETCH_DASHBOARD_DATA_FAILURE':
            return action.hasReconErrored;
        default:
            return state;
    }
}
export function fetchDashBoardData(state = INITIAL_STATE, action) {
        switch (action.type) {
        case 'FETCH_DASHBOARD_DATA_SUCCESS':
            {
                return action.reconData;
            }
        default:
            return state;
    }
}
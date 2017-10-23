
const INITIAL_STATE = { };

export function fetchProjectAddFailed(state = false, action) {
    switch (action.type) {
        case 'PROJECT_ADD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchProjectAddLoading(state = false, action) {
    switch (action.type) {
        case 'PROJECT_ADD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchProjectAddSuccess(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PROJECT_ADD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}


const INITIAL_STATE2 = { isLoading:false,source:[],error:[],recon:[],success:[]}

export function fetchProjectUpdateFailed(state = false, action) {
    switch (action.type) {
        case 'PROJECT_UPDATE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchProjectUpdateLoading(state = false, action) {
    switch (action.type) {
        case 'PROJECT_UPDATE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchProjectUpdate(state = INITIAL_STATE2, action) {
    switch (action.type) {
        case 'PROJECT_UPDATE_SUCCESS':
            {
                
                return action.items
            }
        default:
            return state;
    }
}



const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

export function fetchProjectDeleteFailed(state = false, action) {
    switch (action.type) {
        case 'PROJECT_DELETE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchProjectDeleteLoading(state = false, action) {
    switch (action.type) {
        case 'PROJECT_DELETE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchProjectDelete(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'PROJECT_DELETE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
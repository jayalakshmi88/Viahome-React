const INITIAL_STATE = { searchReconRecords: [] };

export function fetchUserDataLoading(state = false, action) {
    switch (action.type) {
        case 'USER_DATA_IS_LOADING':
            return action.isReconLoading;
        default:
            return state;
    }
}
export function fetchUserDataFailure(state = false, action) {
    switch (action.type) {
        case 'USER_DATA_FAILURE':
            return action.hasReconErrored;
        default:
            return state;
    }
}
export function fetchUserData(state = INITIAL_STATE, action) {
        switch (action.type) {
        case 'USER_DATA_SUCCESS':
            {
                return action.reconData;
            }
        default:
            return state;
    }
}

// USER DELETE ACCOUNT

const INITIAL_STATE2 = { source:[],error:[],recon:[],success:[]}

export function fetchUserDeleteFailed(state = false, action) {
    switch (action.type) {
        case 'USER_DELETE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchUserDeleteLoading(state = false, action) {
    switch (action.type) {
        case 'USER_DELETE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchUserDelete(state = INITIAL_STATE2, action) {
    switch (action.type) {
        case 'USER_DELETE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}




// USER ACTIVE ACCOUNT


export function fetchUserActiveFailed(state = false, action) {
    switch (action.type) {
        case 'USER_ACTIVE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}

export function fetchUserActiveLoading(state = false, action) {
    switch (action.type) {
        case 'USER_ACTIVE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchUserActive(state = INITIAL_STATE2, action) {
    switch (action.type) {
        case 'USER_ACTIVE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}

//  ***** User Add data *****



export function fetchUserAddFailed(state = false, action) {
    switch (action.type) {
        case 'USER_ADD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchUserAddLoading(state = false, action) {
    switch (action.type) {
        case 'USER_ADD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchUserAdd(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USER_ADD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
//User Update data

const INITIAL_STATE1 = { source:[],error:[],recon:[],success:[]}

export function fetchUserUpadeteFailed(state = false, action) {
    switch (action.type) {
        case 'USER_UPDATE_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchUserUpadeteLoading(state = false, action) {
    switch (action.type) {
        case 'USER_UPDATE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchUserUpdate(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'USER_UPDATE_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}


// User Login
export function fetchUserLoginFailed(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchUserLoginLoading(state = false, action) {
    switch (action.type) {
        case 'USER_LOGIN_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchLogin(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}

// User Change Password
export function fetchChangePasswordFailed(state = false, action) {
    switch (action.type) {
        case 'CHANGE_PASSWORD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchChangePasswordLoading(state = false, action) {
    switch (action.type) {
        case 'CHANGE_PASSWORD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchChangePassword(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'CHANGE_PASSWORD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}

// Forgot Password
export function fetchForgotPasswordFailed(state = false, action) {
    switch (action.type) {
        case 'FORGOT_PASSWORD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchForgotPasswordLoading(state = false, action) {
    switch (action.type) {
        case 'FORGOT_PASSWORD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchForgotPassword(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'FORGOT_PASSWORD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}

//Reset Password
export function fetchResetPasswordFailed(state = false, action) {
    switch (action.type) {
        case 'RESET_PASSWORD_FAILURE':
            return action.hasErrored;
        default:
            return state;
    }
}
export function fetchResetPasswordLoading(state = false, action) {
    switch (action.type) {
        case 'RESET_PASSWORD_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function fetchResetPassword(state = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'RESET_PASSWORD_SUCCESS':
            {
                
                return action.items;}
        default:
            return state;
    }
}
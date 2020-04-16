const defaultState = {
    emailLog: '',
};

function reducer(state = defaultState, {type, payload}){
    switch (type) {
        case 'CHANGE_REG_FORM': {
            console.log(payload.text)
            return{...state.emailLog = payload.text,
                
        } 
        }
        default:
            return state;
    }

    
}

export default reducer;
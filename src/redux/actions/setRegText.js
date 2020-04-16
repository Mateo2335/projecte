const changeCurrentText = text => {
    return{
        type: 'CHANGE_REG_FORM',
        payload: text,
    }
}

export { changeCurrentText };
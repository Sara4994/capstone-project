import * as actionType from './types';

export const getNotes = () => async dispatch => {

    dispatch({type: actionType.GET_NOTES, notes})
}

export const getNote = (id) => async dispatch => {
    

    dispatch({type: actionType.GET_NOTE})
}

export const addNote = (data) => async dispatch => {
    
    dispatch({type: actionType.ADD_NOTE,note})
}

export const editNote = (data) => async dispatch => {
    

    dispatch({type: actionType.EDIT_NOTE, note})
}

export const removeNote = (id) => async dispatch => {


    dispatch({type: actionType.REMOVE_NOTE})
}

export const getLabels = () => async dispatch => {


    dispatch({type: actionType.GET_LABELS})
}

export const getLabel = (id) => async dispatch => {


    dispatch({type: actionType.GET_LABEL})
}

export const addLabel = (data) => async dispatch => {


    dispatch({type: actionType.ADD_LABEL})
}

export const editLabel = (data) => async dispatch => {


    dispatch({type: actionType.EDIT_LABEL})
}

export const removeLabel = (id) => async dispatch => {


    dispatch({type: actionType.REMOVE_LABEL})
}

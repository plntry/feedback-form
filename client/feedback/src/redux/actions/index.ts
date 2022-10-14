import { IFeedbackActionTypes } from "../../types/types1"

export const createFeedback = (fields: {}): Action => {
    return {
        type: IFeedbackActionTypes.CREATE_FEEDBACK,
        payload: fields
    }
}

export const fetchFeedbacks = (feedbacks: any): Action => ({
    type: 'FETCH_FEEDBACKS',
    payload: feedbacks
})

export const setNewUsername = (name: string): Action => ({
    type: IFeedbackActionTypes.SET_NEW_USERNAME,
    payload: name
})

export const setNewUserEmail = (email: string): Action => ({
    type: IFeedbackActionTypes.SET_NEW_USER_EMAIL,
    payload: email
})

export const setNewUserMessage = (message: string): Action => ({
    type: IFeedbackActionTypes.SET_NEW_USER_MESSAGE,
    payload: message
})
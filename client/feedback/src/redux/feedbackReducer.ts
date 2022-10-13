import { IFeedbackAction, IFeedbackActionTypes } from "../types/types1"

export const initialState: AppState = {
    feedbacksList: [],
    feedbackFields: {
        name: '',
        email: '',
        message: '',
    },
}

function updateNoteFields(
    state: AppState,
    payload: Action['payload'],
    fieldName: string
) {
    return {
        ...state,
        feedbackFields: {
            ...state.feedbackFields,
            [fieldName]: payload
        }
    }
}

const resetNoteFields = () => ({ name: '', email: '', message: '' });

export const feedbackReducer = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        case IFeedbackActionTypes.SET_NEW_USERNAME:
            return updateNoteFields(state, action.payload, 'name');

        case IFeedbackActionTypes.SET_NEW_USER_EMAIL:
            return updateNoteFields(state, action.payload, 'email');

        case IFeedbackActionTypes.SET_NEW_USER_MESSAGE:
            return updateNoteFields(state, action.payload, 'message');

        case IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS:
            const { name, email, message } = action.payload;
            
            const newFeedback: Feedback = {
                // id: Date.now().toString(),
                name,
                email,
                message
            }

            return {
                ...state,
                feedbacksList: [...state.feedbacksList, newFeedback],
                feedbackFields: resetNoteFields()
            }
        
        case 'FETCH_FEEDBACKS':
            return {
                ...state,
                feedbacksList: action.payload,
            }

        default:
            return state;    
    }
}
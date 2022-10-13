export enum IFeedbackActionTypes {
    CREATE_FEEDBACK_SUCCESS = 'CREATE_FEEDBACK_SUCCESS',
    CREATE_FEEDBACK = 'CREATE_FEEDBACK',
    FETCH_FEEDBACKS = 'FETCH_FEEDBACKS',
    SET_NEW_USERNAME = 'SET_NEW_USERNAME',
    SET_NEW_USER_EMAIL = 'SET_NEW_USER_EMAIL',
    SET_NEW_USER_MESSAGE = 'SET_NEW_USER_MESSAGE'
}

// export interface IFeedback {
//     id: string;
//     name: string;
//     email: string;
//     message: string;
// }



// export interface IFeedbackState {
//     feedbacks: Feedback[],
//     feedbackFields: {
//         name: string;
//         email: string;
//         message: string;
//     };
// }

// export interface IFeedbackReducer {
//     feedbackReducer: IFeedbackState
// }

export interface ICreateAction {
    type: IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS;
    payload: string;
}

export type IFeedbackAction = ICreateAction; 
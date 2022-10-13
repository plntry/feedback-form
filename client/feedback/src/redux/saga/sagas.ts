import { call, Effect, put, takeEvery } from "redux-saga/effects"
import { FeedbackApi } from "../../api"
import { IFeedbackActionTypes } from "../../types/types1"

function* sagaCreateFeedback(action: Action): Generator<Effect, void> {
    try {
        const newFeedback: Feedback = {
            name: action.payload.name,
            email: action.payload.email,
            message: action.payload.message
        }

        const feedback = yield call(FeedbackApi.createFeedback, newFeedback)
        
        yield put({ type: IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS, payload: feedback })
    } catch (error) {
        console.log('error', error);
        
    }
}

export function* sagaWatcher(): Generator<Effect, void> {
    yield takeEvery(IFeedbackActionTypes.CREATE_FEEDBACK, sagaCreateFeedback)
}
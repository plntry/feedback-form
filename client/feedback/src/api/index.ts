import axios from 'axios';
// import { Feedback, IFeedbackState } from "../types/types1";

export class FeedbackApi {
    static async createFeedback(feedback: Partial<Feedback>): Promise<AppState> {
        const res = await axios.post('http://localhost:3000/feedbacks', feedback);
        return res.data;
    }
}
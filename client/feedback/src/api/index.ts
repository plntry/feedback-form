import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'feedbacks'
    : 'http://localhost:3001/feedbacks';

export class FeedbackApi {
    static async createFeedback(feedback: Partial<Feedback>): Promise<AppState> {
        const res = await axios.post(baseURL, feedback);
        return res.data;
    }
}
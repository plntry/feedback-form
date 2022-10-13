type Feedback = {
    // id: string;
    name: string;
    email: string;
    message: string;
}

type AppState = {
    feedbacksList: Array<any>;
    feedbackFields: {
        name: string;
        email: string;
        message: string;
    };
}

type Action = {
    type: string;
    payload?: any;
}
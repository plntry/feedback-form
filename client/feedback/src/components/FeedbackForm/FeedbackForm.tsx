import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../../redux/actions";
// import { IFeedbackReducer, IFeedbackState, AppState } from "../../types/types1";
import { setNewUsername, setNewUserEmail, setNewUserMessage } from "../../redux/actions";

export const FeedbackForm = () => {
    // const [name, setName] = useState('')
    const dispatch = useDispatch()

    // const feedbacksList = useSelector((state: AppState) => state.feedbacksList || {})
    const { name, email, message } = useSelector((state: AppState) => state.feedbackFields)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        dispatch(createFeedback({ name, email, message }))   
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Reach out to us!</h3>
            <div>
                <input onChange={(e) => dispatch(setNewUsername(e.target.value))} value={name} type="text" placeholder="Your name*" />
                <input onChange={(e) => dispatch(setNewUserEmail(e.target.value))} value={email} type="text" placeholder="Your e-mail*" />
                <input onChange={(e) => dispatch(setNewUserMessage(e.target.value))} value={message} type="text" placeholder="Your message*" />
            </div>
            <button>Send message</button>
        </form>
    )
}
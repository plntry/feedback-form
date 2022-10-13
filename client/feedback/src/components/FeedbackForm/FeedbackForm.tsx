import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../../redux/actions";
import { setNewUsername, setNewUserEmail, setNewUserMessage } from "../../redux/actions";
// import { Button } from "../Button.style";
import { Button } from "../Button.style";
import { InputsContainer } from "../Container.style";
import { Form } from "../Form.style";
import { FormHeader } from "../FormHeader.style";
import { FormInput } from "../FormInput.style";
import { FormTextarea } from "../FormTextarea.style";

export const FeedbackForm = () => {
    const dispatch = useDispatch()

    const { name, email, message } = useSelector((state: AppState) => state.feedbackFields)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        dispatch(createFeedback({ name, email, message }))   
    }

    return (
        <>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <FormHeader>Reach out to us!</FormHeader>
                <InputsContainer>
                    <FormInput
                        onChange={(e) => dispatch(setNewUsername(e.target.value))}
                        value={name}
                        type="text"
                        placeholder="Your name*"
                    />
                    <FormInput
                        onChange={(e) => dispatch(setNewUserEmail(e.target.value))}
                        value={email}
                        type="text"
                        placeholder="Your e-mail*"
                    />
                    <FormTextarea
                        onChange={(e) => dispatch(setNewUserMessage(e.target.value))}
                        value={message}
                        rows={4}
                        placeholder="Your message*"
                    />
                </InputsContainer>
                <Button>Send message</Button>
            </Form>
        </>
        
    )
}
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
// import { IFeedbackReducer, IFeedbackState, AppState } from "./types/types1";
import { fetchFeedbacks } from './redux/actions';

const feedbacks = [
  {
    // id: 'sdd',
    name: 'fdsg',
    email: 'fdsfdsa',
    message: 'fsdfdsg'
  }
]

function App() {
  const dispatch = useDispatch();

  const feedbacksList = useSelector((state: AppState) => state.feedbacksList);
  // const { name, email, message } = useSelector((state: AppState) => state.feedbackFields)

  // console.log(name);
  

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [])

  useEffect(() => {
    const activeNotes = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    
    dispatch(fetchFeedbacks(activeNotes));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacksList));
  }, [feedbacksList]);

  console.log(feedbacksList);

  return (
    <main>
      <section>
        <FeedbackForm />
      </section>
    </main>
  );
}

export default App;

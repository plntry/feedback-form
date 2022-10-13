import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { fetchFeedbacks } from './redux/actions';
import { AppContainer } from './components/Container.style';

const feedbacks = [
  {
    name: 'fdsg',
    email: 'fdsfdsa',
    message: 'fsdfdsg'
  }
]

function App() {
  const dispatch = useDispatch();

  const feedbacksList = useSelector((state: AppState) => state.feedbacksList);

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
    <>
      <AppContainer>
        <main>
          <section>
            <FeedbackForm />
          </section>
        </main>
        <footer>

        </footer>
      </AppContainer>
    </>
  );
}

export default App;

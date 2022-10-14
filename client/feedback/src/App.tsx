import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { fetchFeedbacks } from './redux/actions';
import { AppContainer } from './components/Container.style';
import { MapImg } from './components/MapImg.style';
import { Footer } from './components/Footer';
import { Circle } from './components/Circle.style';
import { themeCircle1,
        themeCircle2,
        themeCircle3,
        themeCircle4,
        themeCircle5 } from './circleThems';

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
            <Circle theme={themeCircle1} />
            <Circle theme={themeCircle2} />
            <Circle theme={themeCircle3} />
            <Circle theme={themeCircle4} />
            <Circle theme={themeCircle5} />
            <MapImg />
            <FeedbackForm />        
        </main>
      <Footer />
      </AppContainer>
    </>
  );
}

export default App;

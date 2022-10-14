import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { fetchFeedbacks } from './redux/actions';
import { AppContainer } from './components/Container.style';
import { MapImg } from './components/figures/MapImg.style';
import { Footer } from './components/Footer/Footer';
import { Circle } from './components/figures/Circle.style';
import { themeCircle1,
        themeCircle2,
        themeCircle3,
        themeCircle4,
        themeCircle5 } from './components/stylesThems/circleThems';
import { Slice } from './components/figures/Slice.style';
import { themeSlice1,
        themeSlice2,
        themeSlice3, 
        themeSlice4,
        themeSlice5,
        themeSlice6,
        themeSlice7,
        themeSlice8,
        themeSlice9} from './components/stylesThems/sliceThems';

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
          
            <Circle theme={themeCircle1}>
              <Slice theme={themeSlice1} />
              <Slice theme={themeSlice2} />
              <Slice theme={themeSlice3} />
            </Circle>
            <Circle theme={themeCircle2}>
              <Slice theme={themeSlice4} />
              <Slice theme={themeSlice5} />
              <Slice theme={themeSlice6} />
            </Circle>
            <Circle theme={themeCircle3}>
              <Slice theme={themeSlice4} />
              <Slice theme={themeSlice5} />
              <Slice theme={themeSlice6} />
            </Circle>
            <Circle theme={themeCircle4}>
              <Slice theme={themeSlice4} />
              <Slice theme={themeSlice5} />
              <Slice theme={themeSlice6} />
            </Circle>
            <Circle theme={themeCircle5}>
              <Slice theme={themeSlice7} />
              <Slice theme={themeSlice8} />
              <Slice theme={themeSlice9} />
            </Circle>
            <MapImg />
            <FeedbackForm />        
        </main>
      <Footer />
      </AppContainer>
    </>
  );
}

export default App;

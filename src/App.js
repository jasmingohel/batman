
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Batman from './components/batman/Batman';
import Rise from './components/batman/Rise';
import Vegeance from './components/batman/Vegeance';
import Flight from './components/Flight/Flight';
import Header from './components/header/header';
import Idetification from './components/Identification/Idetification';
import Intro from './components/intro/Intro';
import Loader from './components/Loader/Loader';
import { setisLoading } from './store/slice';

function App() {
  let dispatch=useDispatch();
  const isLoading = useSelector((state) => state.counter.isLoading);
  const Glitch = useSelector((state) => state.counter.Glitch);

  useEffect(() => {
  setTimeout(() => {
    dispatch(setisLoading())
  },7000);  
  window.scrollTo({
    bottom: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  },[isLoading])
  if(isLoading)
  {
    return (<Loader/>)
  }
  
  return (
    <div className={`App ${Glitch ? 'GlitchingEffect':''}`}>
      <Header/>
    <Intro/>
    <Idetification/>
    {/* <Vegeance/> */}
    {/* <Rise/> */}
    {/* <Batman/> */}
    {/* <Flight/> */}
    </div>
  );
}

export default App;

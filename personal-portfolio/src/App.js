import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Loader from './components/loader/loader';
import { useEffect, useState } from 'react';

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    }
    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader /> 
  ) : (
    <>
      <NavBar />
      <Banner />
    </>
  );
}

export default App;


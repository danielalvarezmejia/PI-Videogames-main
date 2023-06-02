import { Routes, Route, useLocation } from 'react-router-dom';
import { Detail, Form, Home, Landing } from './Views';
import NavBar from './Components/NavBar/NavBar';
import { useEffect } from 'react';
import style from './App.module.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add(style.landing);
    } else {
      document.body.classList.remove(style.landing);
    }
  }, [location.pathname])

  return (
    <div className={style.container}>
      { location.pathname !== '/' && <NavBar /> }
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

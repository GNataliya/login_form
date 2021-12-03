import style from './style.module.css';
import Header from '../components/Header';
import { Routes, Route } from 'react-router-dom'; 

import Main from '../containers/Main';
import Login from '../containers/LoginForm';
import Signin from '../components/registration/Signin';

function App() {

  return (
    <div className={style.body}>
      <Header />

      <Routes>
          <Route path='*' element={<Main />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signin' element={<Signin />} />
      </Routes>

    </div>
  );
}

export default App;

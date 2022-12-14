import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {Routes, Route} from 'react-router-dom';
import Authentication from './components/routes/authentication/authentication.component';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';
import { setCurrentUser } from './assets/store/user/user.action';





import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element = {<Shop/>}/>
        <Route path='auth' element = {<Authentication/>}/>
        <Route path='checkout' element = {<Checkout/>} />
      </Route>
    </Routes>
  )
}
export default App;

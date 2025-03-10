import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { fetchContacts } from './redux/contacts/operations';
import { refreshUserThunk } from './redux/auth/operations';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(refreshUserThunk())
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? null : ( 
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='contacts' element={<PrivateRoute><ContactsPage/></PrivateRoute>}/>
        </Route>
        <Route path='login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts'/>}/>
        <Route path='register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts'/>}/>
      </Routes>
      

    </>
  )
}

export default App

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Branches from './components/branches/Branches'
import Schedule from './components/schedule/Schedule';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/NotFound';
import Details from './components/details/Details';
import Login from './components/login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/private/PrivateRoute';
import ServicesProvider from './context/ServicesProvider';

function App() {
  return (
    <AuthProvider>
      <ServicesProvider>
      <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route exact path='/'>
        <Banner></Banner>
        <Services></Services>
        <Schedule></Schedule>
        <Branches></Branches>
      </Route>
      <Route path='/home'>
        <Banner></Banner>
        <Services></Services>
        <Schedule></Schedule>
        <Branches></Branches>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <PrivateRoute path='/contact'>
        <Contact></Contact>
      </PrivateRoute>
      <PrivateRoute path='/details/:serviceId'>
        <Details></Details>
      </PrivateRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
      </ServicesProvider>
    </AuthProvider>
  );
}

export default App;

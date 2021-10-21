
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BreakfastSingleItem from './Components/Breakfast/BreakfastSingleItem/BreakfastSingleItem';


function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
      <Header></Header>
      <Banner></Banner>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>

      <Route path='/login'>
        <Login></Login>
      </Route>

      <Route path='/signUp'>
        <SignUp></SignUp>
      </Route>


      </Switch>
      <Footer></Footer>

      </Router>
      
        </AuthProvider>
      
     
    </div>
  );
}

export default App;

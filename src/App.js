
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';

import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';


import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Admin from './Components/Admin/Admin';
import AddBreakfast from './Components/AddBreakfast/AddBreakfast';
import AddLunch from './Components/AddLunch/AddLunch';
import AddDiner from './Components/AddDinner/AddDiner';
import ShowDinner from './Components/ShowDinner/ShowDinner';
import ShowBreakfast from './Components/ShowBreakfast/ShowBreakfast';
import ShowLunch from './Components/ShowLunch/ShowLunch';
import UpdateDinner from './Components/ShowDinner/UpdateDinner';
import UpdateBreakfast from './Components/ShowBreakfast/UpdateBreakfast';
import UpdateLunch from './Components/ShowLunch/UpdateLunch';



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          
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
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>

            <Route path='/addBreakfast'>
             <AddBreakfast></AddBreakfast>
            </Route>
            <Route path='/addLunch'>
             <AddLunch></AddLunch>
            </Route>
            <Route path='/addDinner'>
              <AddDiner></AddDiner>
            </Route>
            <Route path='/showDinner'>
             <ShowDinner></ShowDinner>
            </Route>
            <Route path='/showBreakfast'>
             <ShowBreakfast></ShowBreakfast>
            </Route>

            <Route path='/showLunch'>
           <ShowLunch></ShowLunch>
            </Route>

            <Route path='/updateDinner/:dinnerId'>
             <UpdateDinner></UpdateDinner>
            </Route>
            <Route path='/updateBreakfast/:breakfastId'>
              <UpdateBreakfast></UpdateBreakfast>
            </Route>

            <Route path='/updateLunch/:lunchId'>
             <UpdateLunch></UpdateLunch>

            </Route>




          </Switch>
          <Footer></Footer>

        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;

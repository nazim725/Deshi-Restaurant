import React from 'react';
import About from '../About/About';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BreakfastSingleItem from '../Breakfast/BreakfastSingleItem/BreakfastSingleItem';
import AuthProvider from '../../Context/AuthProvider';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
import LunchSingleItem from '../LunchSingleItem/LunchSingleItem';
import DinnerSingleItem from '../DinnerSingleItem/DinnerSingleItem'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Banner></Banner>
                    <Navbar></Navbar>
                   
                    <Switch>
                        <Route path='/breakfast'>
                            <Breakfast></Breakfast>
                        </Route>


                        <Route path='/lunch'>
                            <Lunch></Lunch>

                        </Route>
                        <Route path='/dinner'>
                            <Dinner></Dinner>
                        </Route>


                        <PrivateRoute path='/breakfastSingleItem/:breakfastId'>
                            <BreakfastSingleItem></BreakfastSingleItem>
                        </PrivateRoute>

                        <PrivateRoute path='/lunchSingleItem/:lunchId'>
                            <LunchSingleItem></LunchSingleItem>

                        </PrivateRoute>

                        <PrivateRoute path='/dinnerSingleItem/:dinnerId'>
                            <DinnerSingleItem></DinnerSingleItem>
                        </PrivateRoute>
                       

                       

                        <Route path='/login'>
                            <Login></Login>
                        </Route>



                    </Switch>
                </Router>

            </AuthProvider>




            <About></About>
        </div>
    );
};

export default Home;
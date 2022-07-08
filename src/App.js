import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import LifePage from "./pages/life/life.component";
import FoodPage from "./pages/food/food.component";
import HealthPage from "./pages/health/health.component";
import RelationshipsPage from "./pages/relationships/relationships.component";
import HappinessPage from "./pages/happiness/happiness.component";
import WeeklyPlanner from "./pages/weekly-planner/weekly-planner.component";
import PlaygroundPage from "./pages/playground/playground.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.scss";
import MoneyPage from "./pages/money/money.component";
import SettingPage from "./pages/setting/setting.component";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentUser ? (
              // <Navigate replace to="/" />
              <LifePage />
            ) : (
              <HomePage />
            )
          }
        />
        <Route
          exact
          path="/health"
          activeClassName="active"
          element={<HealthPage />}
        />
        <Route
          exact
          path="/relationships"
          activeClassName="active"
          element={<RelationshipsPage />}
        />
        <Route
          exact
          path="/money"
          activeClassName="active"
          element={<MoneyPage />}
        />
        <Route
          exact
          path="/happiness"
          activeClassName="active"
          element={<HappinessPage />}
        />
        <Route
          exact
          path="/food"
          activeClassName="active"
          element={<FoodPage />}
        />
        <Route
          exact
          path="/playground"
          activeClassName="active"
          element={<PlaygroundPage />}
        />
        <Route
          exact
          path="/setting"
          activeClassName="active"
          element={<SettingPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FoodDetail from "./components/FoodDetails";
import FoodContextProvider from "./contexts/FoodContext";

function App() {
  return (
    <Router>
      <div className="App">
        <FoodContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food-detail/:food_id" component={FoodDetail} />
          </Switch>
        </FoodContextProvider>
      </div>
    </Router>
  );
}

export default App;

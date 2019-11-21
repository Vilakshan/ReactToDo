import React from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import ToDoDetail from "./ToDoDetail";
import reducer from "./Redux/Reducers";

const store = createStore(reducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ToDoDetail" component={ToDoDetail}></Route>
      </Router>
    </Provider>
  );
}

export default App;

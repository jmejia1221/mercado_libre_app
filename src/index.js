import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// CSS
import './index.scss';

// Components
import Home from './pages/home/home';
import ProductsPage from "./pages/Products";
import ProductPageDetail from "./pages/Products/Details";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/items/:id" exact component={ProductPageDetail} />
              <Route path="/items" exact component={ProductsPage} />
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

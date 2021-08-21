import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import './index.scss';

// Components
import Home from './pages/home/home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              {/*<Route path="/items/:id" exact component={SearchByProduct} />*/}
              {/*<Route path="/items" exact component={ProductList} />*/}
              {/*<Route path="/not-found" component={NotFound} />*/}
              <Route exact path="/" component={Home} />
              {/*<Route component={NoPage} />*/}
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

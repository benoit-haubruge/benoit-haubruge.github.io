import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutMePage from './components/pages/aboutMePage/AboutMePage'
import VisitePage from './components/pages/aboutMePage/VisitePage';

const Routes = () => (
  <Switch>
      <Route path="/">
          <AboutMePage />
      </Route>
      <Route path="/second">
          <VisitePage />
      </Route>

  </Switch>
);

const App: React.FC<any> = () => {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/">
            <AboutMePage/>
          </Route>
          <Route exact path="/visites">
            <VisitePage />
          </Route>
        </Switch>
      </Router>
      </div>
  )
}

export default App

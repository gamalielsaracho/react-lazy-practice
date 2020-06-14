import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

import Loading from './Loading'
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const DashboardMaps = lazy(() => import('./DashboardMaps'));

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard-maps">Dashboard Maps</Link></li>
        </nav>
        
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/dashboard-maps' component={DashboardMaps}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

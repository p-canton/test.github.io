import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import LandingPage from './landingpage';
import Project from './project';
import User1 from './user1';
import Profile from './profile';
import Survey from './survey';


const Main = () => (
  <>
  <ScrollToTop />
    <Switch>
      <Route exact path="/test.github.io/" component={LandingPage}/>
      <Route path="/test.github.io/project" component={Project} />
      <Route path="/test.github.io/user1" component={User1} />
      <Route path="/test.github.io/profile" component={Profile} />
      <Route path="/test.github.io/survey" component={Survey} />
    </Switch>
  </>
)

export default Main;

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Content/Home';
import Result from './components/Content/Result';
import NotFound from './components/NotFound';
import Register from './components/Content/Register';
import TestYourEnglish from './components/Content/TestYourEnglish';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/register" component={Register} />
        <Route path="/test-your-english" component={TestYourEnglish} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

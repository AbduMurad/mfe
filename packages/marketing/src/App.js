import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { stylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div>
      <stylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </stylesProvider>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
// import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import AdminLogin from '../TwoFast/Login/Admin/AdminLogin';
import Application from './Application';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import Validate from '../TwoFast/services/Validate';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              {/* <Route path="/" exact component={LoginDedicated} /> */}
              <Route path="/" exact component={AdminLogin} />
              <Validate>
                <Route
                  path="/app"
                  render={(props) => (
                    <Application {...props} changeMode={changeMode} />
                  )}
                />
              </Validate>
              <Route component={Auth} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;

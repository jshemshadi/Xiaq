import * as React from "react";
import { useEffect, Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Routes from "./routes";

import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

import { Route, Switch } from "react-router-dom";
import DeepRacer from "./screens/DeepRacer";

const jss = create({ plugins: [...jssPreset().plugins] });

const Main = ({ history, store }) => {
  useEffect(() => {}, []);

  return (
    <div
      style={{
        minHeight: "100%",
        height: "100%",
        direction: "ltr",
      }}
    >
      <StylesProvider jss={jss}>
        <ThemeProvider
          theme={theme({
            direction: "ltr",
          })}
        >
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/" component={DeepRacer} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default Main;

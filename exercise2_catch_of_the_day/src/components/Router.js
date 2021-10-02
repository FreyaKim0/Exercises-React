import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./storepicker";
import NotFound from "./NotFound";
import App from "./app";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

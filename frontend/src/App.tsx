import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Footer } from "./components/organisms/Footer";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import { routes } from "./router/routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map( route => (
            <Route key={route.path} exact path={route.path}>
              <HeaderLayout>{route.children}</HeaderLayout>
              <Footer />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

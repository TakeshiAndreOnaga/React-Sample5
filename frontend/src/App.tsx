import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/organisms/Footer";
import { PostList } from "./components/pages/PostList";
import { Top } from "./components/pages/Top";
import { HeaderLayout } from "./components/templates/HeaderLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HeaderLayout><Top /></HeaderLayout>
            <Footer />
          </Route>
          <Route path="/posts">
            <HeaderLayout><PostList /></HeaderLayout>
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "./components/organisms/Footer";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import { routes } from "./router/routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderLayout>
        <Routes>
          {routes.map( route => (
            <Route key={route.path} path={route.path} element={route.children}>
            </Route>
          ))}
        </Routes>
        </HeaderLayout>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

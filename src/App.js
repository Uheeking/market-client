import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPageComponent />
        </Route>
        <Route exact path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

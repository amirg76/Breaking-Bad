import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReviewsPage from "./components/ReviewsPage/ReviewsPage";
import MediaPage from "./components/MediaPage/MediaPage";
import MainPage from "./components/MainPage/MainPage";
import CharacterMore from "./components/CharacterMore/CharacterMore";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter forceRefresh={true}>
        <Header />

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/media" exact component={MediaPage} />
          <Route path="/reviews" exact component={ReviewsPage} />
          <Route path="/:id" exact component={CharacterMore} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

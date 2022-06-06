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
    <div>
      <BrowserRouter forceRefresh={true}>
        <Header />
        {/* <div className="sticky-header"> */}
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/media" exact component={MediaPage} />
          <Route path="/reviews" exact component={ReviewsPage} />
          <Route path="/:id" exact component={CharacterMore} />
        </Switch>
        {/* </div> */}
        {/* <MainPage /> */}
        {/* <MediaPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

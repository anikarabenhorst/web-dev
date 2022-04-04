import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/cyborg/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import ExploreScreen from "./components/tuiter/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index element={<Labs />} />
                      <Route path="labs"
                             element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          {/*no NotificationScreen for undergrad*/}
                          {/*<Route path="notifications"*/}
                          {/*       element={<NotificationScreen/>}/>*/}
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

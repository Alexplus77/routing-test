import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import {TitlePage} from "./Pages/TitlePage";
import {Registration} from "./Pages/Registration";
import {PrivatePage} from "./Pages/PrivatePage";
import {PrivatePage2} from "./Pages/PrivatePage2";
import {Layout} from "./Pages/Layout";
import {RequireAuth} from "./hocs/RequaireAuth";

function App() {
  return (
    <div className="App">
<Routes>
  <Route path={'/'} element={<Layout/>}>
    <Route index  element={<TitlePage/>}/>
    <Route path={'/registration'} element={<Registration/>}/>
    <Route path={'/private'} element={
      <RequireAuth>
        <PrivatePage/>
      </RequireAuth>
    }/>
    <Route path={'/private2'} element={
      <RequireAuth>
        <PrivatePage2/>
      </RequireAuth>
    }/>
  </Route>

</Routes>
    </div>

  );
}

export default App;

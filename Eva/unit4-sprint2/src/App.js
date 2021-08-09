import { Das } from './component/Dashboard';
import './App.css';
import { Nav } from './component/navbar';
import { Route, Switch } from 'react-router-dom';
import { Detail } from './component/Details';
import {ActorDetail}  from "./component/actorDetail"
import { useSelector } from 'react-redux';

function App() {
 const state = useSelector(state => state.payload)
  const handleMovie2 = (data) => {
    console.log(data)
    //const newdata=state.filter(e=>e.name===data)
  }
  return (
    <div className="App">
      <Nav handleMovie2={handleMovie2} />
      
      <Switch>
        <Route exact path="/dashboard">
            <Das/>
        </Route>
        <Route exact path="/dashboard/:id">
        <Detail/>
        </Route>
        <Route exact path="/actor">
        <ActorDetail/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;

import { Das } from './component/Dashboard';
import './App.css';
import { Nav } from './component/navbar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/dashboard">
            <Das/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;

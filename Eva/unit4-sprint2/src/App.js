import { Das } from './component/Dashboard';
import './App.css';
import { Nav } from './component/navbar';
import { Route, Switch } from 'react-router-dom';
import { Detail } from './component/Details';
import {ActorDetail}  from "./component/actorDetail"
import { useSelector } from 'react-redux';
import { Search } from './component/searchResult';
import { useState } from 'react';

function App() {
  const [searchData,setSearchData]=useState([])
 const state = useSelector(state => state.payload)
  const handleMovie2 = (data) => {
    
    const newdata = state.filter(e => e.name === data)
    setSearchData(newdata)
    
  }
  return (
    <div className="App">
      <Nav handleMovie2={handleMovie2} />
     
      <Switch>
        <Route exact path="/result">
 {searchData.map(e => <div>
        <img src={e.img} alt="Done" />
        <p>{e.name}</p>
        <p>{ e.imdb}</p>
       </div>)}
        </Route>
         
       
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

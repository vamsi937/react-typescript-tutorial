import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {

  const [people,setPeople]=useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img:"https://th.bing.com/th/id/OIP.4lp4bqSXYpiCFl-NqVsy2gHaLf?w=125&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;

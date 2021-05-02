
import { useEffect, useState } from 'react';
import './App.css';
import PlayerData from './components/Players-data/Data.json';
import Details from './components/Players-details/Details';
import Display from './components/Selected-player/Display';
import Player from './components/Squad-price/Player';

function App() {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() =>{
       setPlayer(PlayerData)
  }, [])

  const handleAddPlayer =(details) =>{
    const newCart =[...team, details];
    setTeam(newCart);
   }

  return (
    <div className="App-div"> 
   <div className="card-div" >
   
   {
    player.map(data =><Details data ={data} handleAddPlayer={handleAddPlayer} key={data.id}></Details>)
   }
   </div>
    
  
 <div className="man-div">
 <Player data={team}></Player>
 {
   team.map(player =><Display player={player}></Display>)
 }
 
 </div>

    </div>
  );
}

export default App;

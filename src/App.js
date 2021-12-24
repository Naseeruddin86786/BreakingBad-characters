// import logo from './logo.svg';
import './App.css';
// import Header from './FlipkartHeader';
// import Options from "./FlipkrtOptions"
// import Carousal from "./FlipkartCarousal"
import axios from "axios";
import  {useEffect, useState} from "react";
import Card from "./Components/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    breakingbadPromise();
  },[]);
  const breakingbadPromise = () => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((recivedData) => setData(recivedData));
  };
  console.log(data);
  return (
    <div className="App">
      {/* <Header/>
      <Options/>
      <Carousal/> */}
      <div>
        {data.map((user) => (
          <div>
            <Card src={user.img} name={user.name} birthday={user.birthday} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

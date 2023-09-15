import { BoatsIndex } from "./BoatsIndex";
import { BoatsNew } from "./BoatsNew";
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {
  const [boats, setBoats] = useState([]);

    const handleIndexBoats = () => {
      axios.get("http://localhost:3000/boats.json").then((response) => {
        console.log(response.data);
        setBoats(response.data);
      });
    };

   const handleCreateBoat = (params, successCallback) => {
     console.log("handleCreateBoat", params);
     axios.post("http://localhost:3000/boats.json", params).then((response) => {
       setBoats([...boats, response.data]);
       successCallback();
     });
   };

    useEffect(handleIndexBoats, []);


  return (
    <div>
      <BoatsNew onCreateBoat={handleCreateBoat}/>
      <BoatsIndex boats={boats}/>
    </div>
  )
}
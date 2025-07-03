import { useState } from "react";
import Bill from "./Bill"
import Service from "./Service"
import Conclusion from "./Conclusion"
import Reset from "./Reset"

function App() {

  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  

  return (
    <div className="flex flex-col justify-center gap-6 bg-gray-50">
      <Bill bill={bill} onSetBill={handleBill} />
      <Service 
       percentage = {percentage1}
       onSelect = {setPercentage1}>
    
        How did you like the service
      </Service>
      <Service 
      percentage = {percentage2}
      onSelect = {setPercentage2}>
      How did your friend like the service
      </Service>
      <Conclusion bill={bill} />
      <Reset />
    </div>
  )
}

export default App;

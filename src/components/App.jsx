import { useState } from "react";
import Bill from "./Bill"
import Service from "./Service"
import Conclusion from "./Conclusion"
import Reset from "./Reset"

function App() {

  const [bill,setBill] = useState("");
  function handleBill(e){
      setBill(Number(e.target.value));
  }


  return (
    <div className="flex flex-col justify-center gap-6 bg-gray-50">
      <Bill bill={bill} onSetBill={handleBill} />
      <Service text="How did you like the service" />
      <Service text="How did your friend like the service"/>
      <Conclusion/>
      <Reset />
    </div>
  )
}

export default App;

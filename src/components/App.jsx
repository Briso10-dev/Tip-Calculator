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
  function handleReset() {
    setBill("");
    setPercentage1(0);
    SetPercentage2(0);
  }

  const tip = (bill * (percentage1 + percentage2) / 2 / 100);  //Here a derived State

  return (
    <div className="flex flex-col justify-center gap-6 bg-gray-50 px-[2rem] py-[2rem]">
      <Bill bill={bill} onSetBill={handleBill} />
      <Service
        percentage={percentage1}
        onSelect={setPercentage1}>
        How did you like the service
      </Service>
      <Service
        percentage={percentage2}
        onSelect={setPercentage2}>
        How did your friend like the service
      </Service>
      {bill > 0 && (
        <>
          <Conclusion bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  )
}

export default App;

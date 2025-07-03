import { useState } from "react";
import Bill from "./Bill"
import Service from "./Service"
import Conclusion from "./Conclusion"
import Reset from "./Reset"

function App() {

  const values = {
    value1: 0,
    value2: 5,
    value3: 10,
    value4: 20,
  }
  const apreciations = {

    appreciation1: "Dissatisfied(0%)",
    appreciation2: "It was okay(5%)",
    appreciation3: "It was good(10%)",
    appreciation4: "Absolute amazing(20%)"
  }

  const [bill, setBill] = useState("");
  const [service,setService] = useState("");

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  return (
    <div className="flex flex-col justify-center gap-6 bg-gray-50">
      <Bill bill={bill} onSetBill={handleBill} />
      <Service text="How did you like the service">
        <select
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border-s-8 text-3xl bg-gray-200">
          <option value={values.value1}>{apreciations.appreciation1}</option>
          <option value={values.value2}>{apreciations.appreciation2}</option>
          <option value={values.value3}>{apreciations.appreciation3}</option>
          <option value={values.value4}> {apreciations.appreciation4} </option>
        </select>
      </Service>
      <Service text="How did your friend like the service">
        <select
          key={service.value}
          type="text"
          value={service.appreciation}
          onChange={(e) => setService(e.target.value)}
          className="border-s-8 text-3xl bg-gray-200">
          <option value={values.value1}>{apreciations.appreciation1}</option>
          <option value={values.value2}>{apreciations.appreciation2}</option>
          <option value={values.value3}>{apreciations.appreciation3}</option>
          <option value={values.value4}> {apreciations.appreciation4} </option>
        </select>
      </Service>
      <Conclusion bill={bill} />
      <Reset />
    </div>
  )
}

export default App;

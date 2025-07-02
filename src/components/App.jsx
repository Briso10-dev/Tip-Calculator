import Bill from "./Bill"
import Service from "./Service"
import Conclusion from "./Conclusion"
import Reset from "./Reset"

function App() {

  return (
    <>
      <Bill />
      <Service text="How did you like the service" />
      <Service text="How did your friend like the service"/>
      <Conclusion />
      <Reset />
    </>
  )
}

export default App;

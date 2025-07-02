import Bill from "./Bill"
import Service from "./Service"
import Conclusion from "./Conclusion"
import Reset from "./Reset"

function App() {

  return (
    <div className="flex flex-col justify-center gap-6 bg-gray-50">
      <Bill />
      <Service text="How did you like the service" />
      <Service text="How did your friend like the service"/>
      <Conclusion />
      <Reset />
    </div>
  )
}

export default App;

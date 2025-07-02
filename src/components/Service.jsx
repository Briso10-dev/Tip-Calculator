import { useState } from "react";

function Service({text}){
    const services = [ 
        {
            value : 0,
            appreciation : "Dissatisfied"

        },
        {
            value : 10,
            appreciation : "It was okay"

        },
        {
            value : 10,
            appreciation : "It was good"

        },
        {
            value : 20,
            appreciation : "Absolute amazing"

        }
    ]

    const [service, setService] = useState("");

     return(
        <div className="flex items-center gap-6 text-4xl font-medium">
            <p> {text} </p>
            <select 
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border-s-8 text-3xl bg-gray-200">
            <option value="Dissatisfied">Dissatisfied(0%)</option>
            <option value="okay">It was okay(5%)</option>
            <option value="good">It was good(10%)</option>
            <option value="wow">Absolute amazing!</option>      
            </select>
        </div>
    )

}

export default Service;
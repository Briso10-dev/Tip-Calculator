import { useState } from "react";

function Service({ text }) {
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

    const [service, setService] = useState([]);

    return (
        <div className="flex items-center gap-6 text-4xl font-medium">
            <p> {text} </p>
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
        </div>
    )

}

export default Service;

function Service(){
     return(
        <div className="flex items-center gap-4 text-4xl font-medium">
            <p> How did you like the service? </p>
            <select 
            type="text"
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
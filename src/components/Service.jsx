
function Service({ children, percentage, onSelect }) {

    return (
        <div className="flex items-center gap-6 text-4xl font-medium">
            <label> {children} </label>
            <select value={percentage}
                onChange={e => onSelect(Number(e.target.value))}
                className="border-s border-none text-3xl bg-gray-200">
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good(10%)</option>
                <option value="20">Absolutely amazing! (20%)  </option>
            </select>
        </div>
    )

}

export default Service;
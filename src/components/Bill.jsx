
function Bill({bill,onSetBill}){

    return(
        <div className="flex items-center gap-6 text-4xl font-medium">
            <label>How much was the bill ? </label>
            <input 
            type="text"
            placeholder="Bill value"
            className="outline-none border-s-8 rounded-md border-gray-200 p-2 text-2xl bg-gray-200"
            value={bill} 
            onChange={onSetBill}
            />
        </div>
    )

}

export default Bill;
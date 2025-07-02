
function Bill(){
    return(
        <div className="flex items-center gap-4 text-4xl font-medium">
            <p className="m-10">How much was the bill ? </p>
            <input 
            type="text"
            className="outline-none border-s-8 rounded-md border-gray-200 p-2 text-2xl bg-gray-200" />
        </div>
    )

}

export default Bill;
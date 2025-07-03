
function Service({ text,children }) {

    return (
        <div className="flex items-center gap-6 text-4xl font-medium">
            <p> {text} </p>
            {children}
        </div>
    )

}

export default Service;
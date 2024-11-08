const Result = ({scoreO, scoreX}) => (
    
        <div className="h-16 w-96 flex justify-center translate-x-36">
            <div className=" flex justify-center items-center bg-gray-700 p-10 pb-12 w-full border-l-8 border-emerald-200">
                <p className="text-white text-7xl font-bold ">{scoreX}</p>
            </div>
            <div className="flex justify-center items-center bg-gray-700 p-10 pb-12 w-full border-r-8 border-red-600">
                <p className="text-white text-7xl font-bold">{scoreO}</p>
            </div>
        </div> 
  )


export default Result

import { useState } from "react"
interface Jok {
setup:string,
delivery:string,
lang:string
}

function JokCard({setup, delivery}:Jok) {
    const [show, setShow] = useState<boolean>(false)
    const toggleAnswer = () => {
        setShow(!show)
    }
  return (
    <div className="w-[300px] relative bg-transparent border-green-900 border-2 rounded-xl">
    <div className="w-[100%] p-3 mb-10">
        {setup}
    </div>
    <button onClick={toggleAnswer} className=" rounded-md py-3 px-5 bg-green-950 text-white  bottom-0 left-0 right-0 absolute">{show?'Hide Answer':'Show Answer'}</button>
    {show?( <div className="w-[100%] p-3 mb-10">
        {delivery}
    </div>):''}
   
</div>
  )
}

export default JokCard
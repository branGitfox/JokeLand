import { useState } from "react"

function JokCard() {
    const [show, setShow] = useState<boolean>(false)
    const toggleAnswer = () => {
        setShow(!show)
    }
  return (
    <div className="w-[300px] relative bg-transparent border-green-900 border-2 rounded-xl">
    <div className="w-[100%] p-3 mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis tempora quasi quas magnam cum repellat excepturi ducimus temporibus hic, quae velit, blanditiis reprehenderit maiores aliquid amet expedita debitis qui libero.
    </div>
    <button onClick={toggleAnswer} className=" rounded-md py-3 px-5 bg-green-950 text-white  bottom-0 left-0 right-0 absolute">{show?'Hide Answer':'Show Answer'}</button>
    {show?( <div className="w-[100%] p-3 mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis tempora quasi quas magnam cum repellat excepturi ducimus temporibus hic, quae velit, blanditiis reprehenderit maiores aliquid amet expedita debitis qui libero.
    </div>):''}
   
</div>
  )
}

export default JokCard
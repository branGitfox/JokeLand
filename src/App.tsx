import JokCard from "./components/JokCard"
import { useGetJoksQuery } from "./assets/app/service/JokAPI"
import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners"
import { Jok } from "./components/JokCard"

function App() {
  const [lang, setLang] = useState<string>('fr')
  const changeLang = (lang:string) => {
    setLang(lang)
    console.log(lang);
    
  }

  const [joks, setJoks] = useState<Jok[]>([])
  

  
  const {data, isLoading} = useGetJoksQuery(lang)

 
  useEffect(() => {
  }, [lang])
  
 
  return (
    <div className="w-[100%] md:w-[1100px] min-h-[100vh]  m-auto bg-green-200">
        <nav className="w-[100%] h-[70px] bg-green-500 flex justify-between items-center p-3">

            <h2 className="text-white text-2xl font-bold">J🤪keLand </h2>
            <select onChange={(e) => changeLang(e.target.value)}  className="p-3 bg-green-800 text-white rounded-md" >
                <option value="eng">ENG</option>
                <option  value="fr">FR</option>
            </select>
        </nav>
        <section className="mt-10 w-[100%] p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum excepturi asperiores nisi quasi itaque libero nostrum delectus optio distinctio, tempora sapiente omnis nobis odio doloremque soluta ab voluptatum corporis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui nam perferendis unde incidunt placeat obcaecati asperiores. Veritatis sed rem libero nihil consequatur ducimus dignissimos? Earum repudiandae aperiam dicta mollitia!
        </section>
        <hr className="border-green-300"/>
        <div className="mt-5 flex flex-wrap w-[100%] gap-4 p-3 justify-evenly">
        {isLoading?<PacmanLoader  color={'green'}
        loading={isLoading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader" />
        :
        data.jokes.map((jok:Jok, index:number) => <JokCard key={index} lang={jok.lang} setup={jok.setup} delivery={jok.delivery}/>)
       }
        </div>
        
    </div>
  )
}

export default App
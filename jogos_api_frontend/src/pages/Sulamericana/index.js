import React ,{useState, useEffect, Fragment, useRef} from 'react'
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../Navbar";

function Sulamericana(){
    const [nome, setNome]=useState('')
    const [url, setUrl]=useState('')
  const[lista,setLista]=useState([])

    useEffect( () => {
        dados()
      }, []);

      async    function dados(){
            await       axios.get(`http://www.localhost:8080/sulamericana`)
            .then((response) => {
              const data = response.data ;
              setLista(data);
            });
            //console.log(lista)
        }
return(
    <>
  <div className="App">
    <p>Sulamericana</p>
    <br></br>
    <div>
    {lista.map((item,index)=>( 
    <>
   
    
     <p>{item.equipeCasa.nomeEquipe}  {item.placarEquipeCasa}x{item.placarEquipeVisitante}  {item.equipeVisitante.nomeEquipe} 
     {item.tempoPartida}</p>
     <p>  </p>
    
     
   
      </>
      ))}
  </div>
  </div>
    </>
    
)
}
export default Sulamericana;
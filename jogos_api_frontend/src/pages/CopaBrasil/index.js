import React ,{useState, useEffect, Fragment, useRef} from 'react'
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../Navbar";

function CopaBrasil(){
    const [nome, setNome]=useState('')
    const [url, setUrl]=useState('')
  const[lista,setLista]=useState([])

    useEffect( () => {
        dados()
      }, []);

      async    function dados(){
            await       axios.get(`http://www.localhost:8080/copabrasil`)
            .then((response) => {
              const data = response.data ;
              setLista(data);
            });
            //console.log(lista)
        }
return(
    <>
  <div className="App">
    <p>CopaBrasil</p>
    <br></br>
    <div>
    {lista.map((item,index)=>( 
    <>
   
    
     <p>{item.equipeCasa.nomeEquipe}  {item.placarEquipeCasa}x{item.placarEquipeVisitante}  {item.equipeVisitante.nomeEquipe} 
     {item.tempoPartida}</p>
     <span style={{fontSize:10}}> {item.golsEquipeCasa} </span>  <span style={{fontSize:10}}>{item.golsEquipeVisitante}</span>
    
     
   
      </>
      ))}
  </div>
  </div>
    </>
    
)
}
export default CopaBrasil;
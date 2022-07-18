import React ,{useState, useEffect, Fragment, useRef} from 'react'
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../Navbar";

function Brasileiro(){
    const [nome, setNome]=useState('')
    const [url, setUrl]=useState('')
  const[lista,setLista]=useState([])

    useEffect( () => {
        dados()
      }, []);

      async    function dados(){
            await       axios.get(`https://jogos-api.herokuapp.com//brasileiro`)
            .then((response) => {
              const data = response.data ;
              setLista(data);
            });
            //console.log(lista)
        }

        async function handleSubmitUrl  (evt) {
          evt.preventDefault();
      alert(url)
      axios.get(`https://jogos-api.herokuapp.com//${url}`)
     // axios.get(`http://www.localhost:8080/sulamericana`)
      .then((response) => {
        const data = response.data ;
       // alert(response.status)
       console.log(data)
        setLista(data);
      });
      setUrl('')
        }
return(
    <>
    <div className="App">
    <p>Brasileiro</p>
    <br></br>
    <form onSubmit={handleSubmitUrl}> 
    <label>
      Name:</label>
      <input type="text"  value={url} onChange={e => setUrl(e.target.value)} />
    
      <button onClick={handleSubmitUrl} color='primary'>Cadastrar URL</button>
  </form>
  <br></br>
    <div>
    {lista.map((item,index)=>( 
    <>
   
    
     <p>{item.equipeCasa.nomeEquipe}  {item.placarEquipeCasa}x{item.placarEquipeVisitante}  {item.equipeVisitante.nomeEquipe}   {item.tempoPartida}</p>

     <span style={{fontSize:10}}> {item.golsEquipeCasa} </span>  <span style={{fontSize:10}}>{item.golsEquipeVisitante}</span>
    
     
   
      </>
      ))}
  </div>
  </div>
    </>
    
)
}
export default Brasileiro;
//import logo from './logo.svg';
//import './App.css';
import React ,{useState, useEffect, Fragment, useRef} from 'react'
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "../Navbar";

function Libertadores(){
    const [nome, setNome]=useState('')
    const [url, setUrl]=useState('')
  const[lista,setLista]=useState([])
  
    useEffect(() => {
      axios.get('http://www.localhost:8080/libertadores')
        .then((response) => {
          const data = response.data ;
          setLista(data);
        });
        console.log(lista.length)
    }, []);
  
   /*async function handleSubmit  (evt) {
      evt.preventDefault();
  alert(nome)
  setNome('')
    }*/
    /*async function handleSubmitUrl  (evt) {
      evt.preventDefault();
  alert(url)
  axios.get(`http://www.localhost:8080/${url}`)
 // axios.get(`http://www.localhost:8080/sulamericana`)
  .then((response) => {
    const data = response.data ;
   // alert(response.status)
   console.log(data)
    setLista(data);
  });
  setUrl('')
    }*/
    return (
      <div className="App">
        <p>Libertadores</p>
        <br></br>
        {/*
            <form onSubmit={handleSubmit}> 
    <label>
      Name:</label>
      <input type="text"  value={nome} onChange={e => setNome(e.target.value)} />
    
      <button onClick={handleSubmit} color='primary'>Cadastrar</button>
  </form>
       
   
  <br></br>
  <form onSubmit={handleSubmitUrl}> 
    <label>
      Name:</label>
      <input type="text"  value={url} onChange={e => setUrl(e.target.value)} />
    
      <button onClick={handleSubmitUrl} color='primary'>Cadastrar URL</button>
  </form>
   */}
  <div>
    {lista.map((item,index)=>( 
    <>
   
    
     <p>{item.equipeCasa.nomeEquipe}  {item.placarEquipeCasa}x{item.placarEquipeVisitante}  {item.equipeVisitante.nomeEquipe}   {item.tempoPartida}</p>
     <p>  </p>
    
     
   
      </>
      ))}
  </div>
      </div>
    );
}
export default Libertadores;
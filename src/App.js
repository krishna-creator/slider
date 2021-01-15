import './App.css';
import data from './data';
import React,{useState,useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function App() {
  const [person,setData]=useState(data);
  const [index,setIndex]=useState(0);
  useEffect(()=>{
      if(index<0){
        setIndex(person.length-1);
      }
      if(index>person.length-1){
        setIndex(0);
      }
    },[index]);
    useEffect(()=>{
      var s=setTimeout(
        ()=>{
          setIndex(index+1);
          },3000
        );
        return ()=>{
          clearInterval(s);
        }
    })
    return (
    <>
    <h1 className="jumbotron text-center">Slider</h1>
    <div className="container d-flex section-center">
      {person.map((people,ind)=>{
        let position="nextSlide";
        if(index===ind){
          position="activeSlide";
        }
        if(ind===index-1 || (index===0 && ind===person.length-1)){
          position="lastSlide";
        }
        const {id,image,name,quote}=people;
        return(
          <article className={position} key={id}>
            <h1>{name}</h1>
            <img className="person-img" src={image}></img>
            <h4><q>{quote}</q></h4>
          </article>
        )
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
    </div>
    </>
  );
}

export default App;

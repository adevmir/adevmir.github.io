import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Devmir from '../components/Devmir';
import icon from '../imgs/icon.jpeg';

function Home() {
  const [isSkills, setIsSkills] = useState(true);
    
  return (
    <>
      <Header />
        <Devmir />
        <div id="content">
          <h1 id="complete_name" > Ademir Ferreira Da Silva Junior </h1>
          <div id="profile">
            <img src={icon} alt="devmir_icon" id="icon"></img>
            <p> Brasileiro! vivendo atualmente em: <br/> Almenara, Minas gerais.</p>
          </div>
          <div id="skills_title">
            <div id="skills_select">
              <button type="button" id="skillButton" onClick={() => setIsSkills(true)}>Hard Skills:</button>
              <h2>|</h2>
              <button type="button" id="skillButton" onClick={() => setIsSkills(false)}>Soft Skills:</button>
            </div>
            <div id="skills">
              {isSkills ? (
                <>
                  <ul>
                    <li> Git </li>
                    <li> CSS </li>
                    <li> Python </li>
                    <li> POO </li>
                    <li> Algoritmos </li>
                    <li> Context API  </li>
                    
                  </ul>
                  <ul>
                    <li> JavaScript </li>
                    <li className="java"> - Dom </li>
                    <li className="java"> - Web Storage </li>
                    <li className="java"> - ES6 </li>
                    <li className="java"> - Responsividade </li>
                  </ul>
                  <ul>
                    <li> React Js </li>
                    <li> Redux </li>
                    <li> RTL </li>
                    <li> Docker </li>
                    <li> Raspagem de dados  </li>
                    <li> Padrões de projetos </li>
                  </ul>
                </>
      ) : (
        <>
                <ul>
                  <li> Criatividade </li>
                  <li> liderança </li>
                  <li> comunicação</li>
                  <li> colaboração  </li>
                </ul>
                <ul>
                  <li> inteligência emocional </li>
                  <li> pensamento crítico</li>
                  <li> metodologia ágil </li>
                  <li> trabalho em equipe </li>
                </ul>
              </>
      )}
                
              </div>
            </div>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Home;
  
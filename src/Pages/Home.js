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
            <img src={icon} alt="devmir_icon" id="icon"></img>
          <div id="skills_title">
            <div id="skills_select">
              <button type="button" id="skillButton" onClick={() => setIsSkills(true)}>Hard Skills:</button>
              <button type="button" id="skillButton" onClick={() => setIsSkills(false)}>Soft Skills:</button>
            </div>
            <div id="skills">
              {isSkills ? (
                <>
                  <ul>
                    <li> JavaScript </li>
                    <li> CSS </li>
                    <li> Git </li>
                    <li> Context API </li>
                    <li> Algoritmos </li>
                    <li> Python  </li>
                    <li> NodeJS </li>
                  </ul>
                  <ul>
                    <li> React </li>
                    <li> Redux </li>
                    <li> RTL </li>
                    <li> Docker </li>
                    <li> Web Scraping </li>
                    <li> Testes Unitários </li>
                    <li> MySQL // MongoDB </li>
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
  
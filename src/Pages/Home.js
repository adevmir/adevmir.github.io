import Header from '../components/Header';
import Footer from '../components/Footer';
import Devmir from '../components/Devmir';
import icon from '../imgs/icon.jpeg';

function skillSelect(skill) {
    
}

function Home() {
    return (
      <>
        <Header />
          <Devmir />
          <div id="content">
            <h1> Ademir Ferreira Da Silva Junior </h1>
            <div id="profile">
              <img src={icon} alt="devmir_icon" id="icon"></img>
              <p> Brasileiro! vivendo atualmente em: <br/> Almenara, Minas gerais.</p>
            </div>
            <div id="skills_title">
              <div id="skills_select">
                <h2 onClick={skillSelect('hard')}>Hard Skills:</h2>
                <h2>|</h2>
                <h2 onClick={skillSelect('soft')}>Soft Skills:</h2>
              </div>
              <div id="skills">
                <ul>
                  <li> Git </li>
                  <li> CSS </li>
                  <li> Posicionamento em CSS </li>
                  <li> HTML Semântico  </li>
                  <li> JavaScript </li>
                </ul>
                <ul>
                  <li> JavaScript </li>
                  <li class="java"> - Dom </li>
                  <li class="java"> - Web Storage </li>
                  <li class="java"> - ES6 </li>
                  <li class="java"> - Responsividade </li>
                </ul>
                <ul>
                  <li> React Js </li>
                  <li> Redux </li>
                  <li> RTL </li>
                  <li> Context API  </li>
                  <li> Docker </li>
                </ul>
              </div>
            </div>
          </div>
        <Footer />
      </>
    );
  }
  
  export default Home;
  
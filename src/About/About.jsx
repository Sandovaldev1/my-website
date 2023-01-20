import {Fragment} from 'react';
import './about.css';



function About () { 

    return (
      <Fragment>
     <div className="contenedor">
      <main className='contenido'>
        <h3>Sobre mí</h3>
          <p>Soy una persona entusiasta y autodidacta, me apasiona la tecnología desde niño, siempre me interesó el desarrollo y diseño de páginas web lo que me llevo a investigar la creación de las mismas logrando formarme como desarrollador web junior , actualmente sigo estudiando y capacitándome más acorde a las exigencias del mercado.</p>
          </main>
          <aside className='sidebar'>
          <h1>Conocimiento tecnológico</h1>
    <button className='buton1'>JavaScript</button>
    <button className='buton2'>HTML</button>
    <button className='buton3'>CSS</button>
    <button className='buton6'>API REST</button>
    <button className='buton3'>C#</button>
    <button className='buton4'>Python</button>
    <button className='buton5'>.NET</button>
    <button className='buton6'>SQL Server</button>
    <button className='buton7'>MySql</button>
    <button className='buton8'>Git/Github</button>
    <button className='buton9'>Azure DevOps</button>
    <h3>Librerias</h3>
    <button className='buton10'>React.js</button>
    <h3>Frameworks</h3>
    <button className='buton11'>Bootstrap 5</button>
    <button className='buton12'>Material UI</button>
    <button className='buton10'>React-Bootstrap</button>
          </aside>
      </div>
        </Fragment>
    );
    }
    
    export {About};
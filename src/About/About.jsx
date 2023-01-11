import {Fragment} from 'react';
import './about.css';



function About () { 

    return (
      <Fragment>

<div className="container-about">
  <div className="container-text">
    <h1>About me</h1>
    <p className="">I am an enthusiastic and self-taught person, I am passionate about technology since I was a child, I am always interested in the development and design of web pages which led me to investigate the creation of them managing to train as a junior web developer, currently I continue studying and training more according to the demands of the market.</p>
  </div>
  </div>

  <div className="container-tech">
  <div className="container-text">
    <h1>Technological knowlegde</h1>
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
    <h3>Libraries</h3>
    <button className='buton10'>React.js</button>
    <h3>Frameworks</h3>
    <button className='buton11'>Bootstrap 5</button>
    <button className='buton12'>Material UI</button>
    <button className='buton10'>React-Bootstrap</button>
  </div>
</div>


  
        </Fragment>
    );
    }
    
    export {About};
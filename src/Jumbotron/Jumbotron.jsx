import React from "react";
import './Jumbotron.css';
import Figure from 'react-bootstrap/Figure';


function Jumbotron () { 

return (
<div className="jumbotron jumbotron-fluid">
  <div className="container1">
    <p className="lead"> I'm a Junior Front-end developer specialized in React, JavaScript and other Microsoft technologies, with 2 years of experience in the design and development of websites as well as solutions.</p>
  </div>
  
  <Figure className="figuritas">
  <a href="https://twitter.com/">
      <Figure.Image
        width={100}
        height={180}
        alt=""
        src="https://imgs.search.brave.com/blJUjGaB1Mn9zCRB1F19TWbmcGRhJvesch_DPBYnbcs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9rZXlz/dG9saXRlcmFjeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvdHdpdHRl/ci1sb2dvLXRyYW5z/cGFyZW50LTE1LnBu/Zw"
      />
      </a>
      <a href="https://www.linkedin.com/in/v%C3%ADctor-salinas-sandoval-979b9717a/">
      <Figure.Image
        width={100}
        height={180}
        alt=""
        src="https://imgs.search.brave.com/YKkPwjTZAmihPFmFtO63AP9HDmfSG4xOYmLh0agmFj8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9teWNs/b3VkZG9vci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTEvTGlua2VkaW4t/bG9nby5wbmc"
      />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100087921491484">
      <Figure.Image
        width={100}
        height={180}
        alt=""
        src="https://imgs.search.brave.com/3hoRI2pICAZGO_ywQDgAIi9usVuAHsYMVQ1sbpiHnBI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGFz/c2ljcm9jazk5NS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTEvRmFjZWJv/b2stbG9nby5wbmc"
      />
      </a>
      <Figure.Caption>
      </Figure.Caption>
    </Figure>
  </div>

);
}

export {Jumbotron};
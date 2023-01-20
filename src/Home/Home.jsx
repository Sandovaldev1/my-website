import React from "react";
import {Fragment} from 'react';
import { BarraNav } from '../Navbar/Navbar';
import {Jumbotron} from '../Jumbotron/Jumbotron';
import { About } from "../About/About";
import {Cards} from "../Cards/Cards";
import './Home.css';



function Home () { 

    return (
      <Fragment>
        <BarraNav/>
        <Jumbotron/>
        <About/>
        <Cards/>

        
        </Fragment>
    );
    }
    
    export {Home};
import React, { Component } from 'react';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import Harta from '../pjeset/tePerbashketa/Harta';
import About from '../pjeset/RrethNesh/About';
import Kembet from '../pjeset/tePerbashketa/Kembet';
import './RrethNesh.sass';

class RrethNesh extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div id="RrethNesh">
                <Menu selected="About us" />
                <Koka titulli="About us" nentitulli="" />
                <About />
                <Harta />
                <Kembet />
            </div>
        )
    }
}

export default RrethNesh;
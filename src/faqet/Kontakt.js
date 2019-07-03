import React, { Component } from 'react';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import Harta from '../pjeset/tePerbashketa/Harta';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Kontakt extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="Kontakt">
                <Menu />
                <Koka titulli="Ballina" nentitulli="" />
                <Harta />
                <Kembet />
            </div>
        )
    }
}

export default Kontakt;
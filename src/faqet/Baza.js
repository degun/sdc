import React, { Component } from 'react';
import Menu from '../pjeset/tePerbashketa/Menu';
import Slider from '../pjeset/Baza/Slider';
import Llojet from '../pjeset/Baza/Llojet';
import Stafi from '../pjeset/Baza/Stafi';
import Harta from '../pjeset/tePerbashketa/Harta';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Baza extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="Baza">
                <Menu selected="Home" />
                <Slider />
                <Llojet />
                <Stafi />
                <Harta />
                <Kembet />
            </div>
        )
    }
}

export default Baza;
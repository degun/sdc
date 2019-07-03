import React from 'react';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import Stafi from '../pjeset/Baza/Stafi';
import ShortInfo from '../pjeset/Persona/ShortInfo';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Persona extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div id="Persona">
                <Menu selected="Our staff" />
                <Koka titulli="Our staff" nentitulli="" />
                <ShortInfo />
                <Stafi />
                <Kembet />
            </div>
        )
    }
}

export default Persona
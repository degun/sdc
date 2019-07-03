import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import ProjektDetaje from '../pjeset/Projekt/ProjektDetaje';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Projekt extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        const {projects} = this.props;
        let selected = projects.filter(project => project.id === this.props.match.params.id)[0]
        return(
            <div className="Projekt">
                <Menu selected="projekt" />
                <Koka 
                    titulli={selected && selected.name}
                    nentitulli="Details" />
                {selected && <ProjektDetaje data={selected} />}
                <Kembet />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps)(Projekt);
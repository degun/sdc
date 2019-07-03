import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import LlojetTabs from '../pjeset/Projekte/LlojetTabs';
import Projektet from '../pjeset/Projekte/Projektet';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Projekte extends Component{
    constructor(props){
        super(props);
        this.state = {
            projektet: []
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        const {projects} = this.props;
        return(
            <div className="Projekte">
                <Menu selected="Projects" />
                <Koka 
                    titulli="Projects"
                    nentitulli="" />
                <LlojetTabs location={this.props.location} />
                <Projektet projektet={projects}/>
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

export default connect(mapStateToProps)(Projekte);
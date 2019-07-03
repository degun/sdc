import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/projectsActions';
import IconText from '../tePerbashketa/IconText';
import icon1 from '../../imazhet/sector_civil_engineering_icon.svg';
import icon2 from '../../imazhet/sector_construction_icon.svg';
import './Llojet.sass';

class Llojet extends Component{
    render(){
        return(
            <section id="Llojet">
                <h1 className="titull">Our Sectors</h1>
                <div className="skedat">
                    <Link to="/projects" onClick={()=> this.props.setFilter("supervision")}>
                        <IconText src={icon1} titulli = "Supervision" />
                    </Link>
                    <Link to="/projects" onClick={()=> this.props.setFilter("design")}>
                        <IconText src={icon2} titulli = "Design" />
                    </Link>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setFilter(filter))
    }
}

export default connect(null, mapDispatchToProps)(Llojet);
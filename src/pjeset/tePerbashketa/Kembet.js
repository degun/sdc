import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/projectsActions';
import { Link } from 'react-router-dom';
import LogoKembet from './Logo/LogoKembet';
import './Kembet.sass';

class Kembet extends Component{
    render(){
        const {members} = this.props;
        return(
            <div className="Kembet">
                <div className="linqet">
                    <ul>
                        <li></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/members">Our staff</Link></li>
                        <li><Link to="/about">About us</Link></li>
                    </ul>
                    <ul>
                        <li>Sectors</li>
                        <li><Link to="/projects" onClick={()=> this.props.setFilter("supervision")}>Supervision</Link></li>
                        <li><Link to="/projects" onClick={()=> this.props.setFilter("design")}>Design</Link></li>
                    </ul>
                    <ul>
                        <li>Staff members</li>
                        {members && members.map(({name, _id})=>{
                            return <li key={_id}><Link to={`/members/${_id}`}>{name}</Link></li>
                        })}
                    </ul>
                    <div style={{height: "280px", width: "150px"}}><LogoKembet /></div>
                </div>
                <div className="shënime">
                    <ul className="ligjore">
                        <li>Statuti</li>
                        <li>Qëllimi</li>
                        <li>NUIS</li>
                    </ul>
                    <div className="ndërtoi">Website designed by <span>Edlir Velaj</span></div>
                    <div className="copyright">&copy; SDC {new Date().getFullYear()}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setFilter: filter => dispatch(setFilter(filter))
    }
}



const mapStateToProps = state => {
    return {
        members: state.members.members
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kembet);
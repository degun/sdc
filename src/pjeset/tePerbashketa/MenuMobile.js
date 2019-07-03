import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/projectsActions';
import { Link } from 'react-router-dom';
import Stagger from 'react-stagger';
import './MenuMobile.sass';

const Appear = ({ children, inside, delay = 100 }) =>
  <Stagger in={inside} delay={delay}>
    {({ value, delay }) =>
      <div
        style={{
          opacity: value ? 1 : 0,
          transition: `opacity 300ms ${delay}ms`,
        }}
      >
        {children}
      </div>
    }
  </Stagger>

class MenuMobile extends Component{
    render(){
        const {members} = this.props;
        return(
            <div className="MenuMobile">
                <div className="linqet">
                    <ul>
                        <Appear><li><Link to="/">Home</Link></li></Appear>
                        <Appear><li><Link to="/projects">Projects</Link></li></Appear>
                        <Appear><li><Link to="/members">Our staff</Link></li></Appear>
                        <Appear><li><Link to="/about">About us</Link></li></Appear>
                    </ul>
                    <ul>
                        <Appear><li>Sectors</li></Appear>
                        <Appear><li><Link to="/projects" onClick={()=> this.props.setFilter("supervision")}>Supervision</Link></li></Appear>
                        <Appear><li><Link to="/projects" onClick={()=> this.props.setFilter("design")}>Design</Link></li></Appear>
                    </ul>
                    <ul>
                        <Appear><li>Staff members</li></Appear>
                        {members && members.map(({name, _id})=>{
                            return <Appear><li key={_id}><Link to={`/members/${_id}`}>{name}</Link></li></Appear>
                        })}
                    </ul>
                    <h1>SDC</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile);
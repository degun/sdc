import React, { Component } from 'react';
import { setFilter } from '../../store/actions/projectsActions';
import { connect } from 'react-redux';
import './LlojetTabs.sass';

class LlojetTabs extends Component{
    render(){
        const {filter} = this.props;
        return(
            <div className="LlojetTabs">
                <ul>
                    <li onClick={({target})=>this.props.setFilter(target.textContent.toLowerCase())} className={filter === "supervision" ? "selected" : ""}>Supervision</li>
                    <li onClick={({target})=>this.props.setFilter(target.textContent.toLowerCase())} className={filter === "design" ? "selected" : ""}>Design</li>
                    <li onClick={({target})=>this.props.setFilter(target.textContent.toLowerCase())} className={filter === "all" ? "selected" : ""}>All</li>
                </ul>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        filter: state.projects.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setFilter(filter))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LlojetTabs);
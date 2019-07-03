import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Stafi.sass';

function Anetar({emri, roli, src}){
    return(
        <div className="Anetar">
            <img src={src} alt="profile"/>
            <div className="emri">{emri}</div>
            <div className="roli">{roli}</div>
        </div>
    )
}

class Stafi extends Component{
    render(){
        const {members} = this.props;
        return(
            <section id="Stafi">
                <h1 className="titull">Staff members</h1>
                <div className="skedat">
                    {members && members.map(({profile_picture, title, name, _id}) => {
                        return <Link key={_id} to={`members/${_id}`}><Anetar src={`http://46.101.140.145:1337${profile_picture.url}`} emri={name} roli={title} /></Link>
                    })}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.members.members
    }
}

export default connect(mapStateToProps)(Stafi);
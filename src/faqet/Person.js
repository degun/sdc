import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from '../pjeset/tePerbashketa/Menu';
import Koka from '../pjeset/tePerbashketa/Koka';
import PersonDetaje from '../pjeset/Person/PersonDetaje';
import Kembet from '../pjeset/tePerbashketa/Kembet';

class Person extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(nextProps){
        let thisId = nextProps.match.params.id;
        let lastId = this.props.match.params.id;
        if(thisId !== lastId){
            window.scrollTo(0, 0)
        }
    }
    render(){
        const {members} = this.props;
        const member = members.filter(member => member._id === this.props.match.params.id)[0]
        return(
            <div className="Person">
                <Menu selected="Stafi" />
                <Koka 
                    titulli="Staff member"
                    nentitulli="" />
                {member && <PersonDetaje personi={member} />}
                <Kembet />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.members.members
    }
}

export default connect(mapStateToProps)(Person);
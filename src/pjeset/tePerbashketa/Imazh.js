import React from 'react';
import {Spring} from 'react-spring/renderprops';
import {connect} from 'react-redux';
import './Imazh.sass';

class Imazh extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            offsetTop: 0
        }
    }
    componentDidMount(){
        this.setState({offsetTop: this.figura.offsetTop})
    }
    render(){
        const {offsetTop} = this.state;
        const {photo_url, short_name, scroll} = this.props;
        const diff = offsetTop - scroll;
        return(
            <Spring from={{opacity: 0.5}} to={{opacity: diff < 600 ?  1 : 0.5}} >
                {({opacity}) => <figure ref={ref=>this.figura=ref}>
                    <img style={{opacity}} src={photo_url} alt={short_name}/>
                </figure>}
            </Spring>
        )
    }
}

const mapStateToProps = state => {
    return {
        scroll: state.app.scroll
    }
}

export default connect(mapStateToProps)(Imazh);
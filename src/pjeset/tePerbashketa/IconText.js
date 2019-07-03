import React, { Component } from 'react';
import './IconText.sass';

class IconText extends Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        }
    }
    render(){
        const {src, titulli} = this.props;
        const {hovered} = this.state;
        return(
            <div className={"IconText" + (hovered ? " hovered" : '')}
                onMouseOver={() =>this.setState({hovered: true})}
                onMouseOut={() =>this.setState({hovered: false})} 
            >
                <img src={src} alt="icon" />
                <h4>{titulli}</h4>
            </div>
        )
    }
}

export default IconText;
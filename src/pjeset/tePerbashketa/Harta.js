import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { IoIosPin } from 'react-icons/io'
import SkedeKontakti from './Harta/SkedeKontakti';
import './Harta.sass';

class Harta extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewport : {
                width: 0,
                height: 0,
                latitude:  41.316520,
                longitude: 19.816953,
                zoom: 16,
                mapboxApiAccessToken: 'pk.eyJ1IjoiZGVndW4iLCJhIjoiY2pzcmdud2R6MWRtOTQzcWx6anVsdTB3biJ9.-L09KeP2_b8Xjp5tH5GEkg'
              }
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        let viewport = Object.assign({}, this.state.viewport);
        viewport.width = window.innerWidth;
        viewport.height = window.innerHeight*0.7;
        this.setState({ viewport });
    }
    render(){
        const {viewport} = this.state;
        const {latitude, longitude} = viewport;
        return(
            <div id="Harta">
                <SkedeKontakti />
                <div className="overlay"></div>
                <ReactMapGL
                    {...viewport}
                    mapStyle="mapbox://styles/degun/cjx4ikm6505ag1co7tk050jvo"
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    <Marker className="marker" latitude={latitude} longitude={longitude}>
                        <IoIosPin size={26} fill="#FF7F7F" />
                    </Marker>
                </ReactMapGL>
            </div>
        )
    }
}

export default Harta;
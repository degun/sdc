import React, { Component } from 'react';
import i01 from '../../imazhet/slider/01.jpg';
import i02 from '../../imazhet/slider/02.jpg';
import i03 from '../../imazhet/slider/03.jpg';
import i04 from '../../imazhet/slider/04.jpg';
import i05 from '../../imazhet/slider/05.jpg';
import i06 from '../../imazhet/slider/06.jpg';
import i07 from '../../imazhet/slider/07.jpg';
import i08 from '../../imazhet/slider/08.jpg';
import i09 from '../../imazhet/slider/09.jpg';
import i10 from '../../imazhet/slider/10.jpg';
import i11 from '../../imazhet/slider/11.jpg';
import { Spring } from 'react-spring/renderprops';
import './Slider.sass';

const images = [i01, i02, i03, i04, i05, i06, i07, i08, i09, i10, i11];

class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 0
        }
        this.changeSlide = this.changeSlide.bind(this);
        this.setSlide = this.setSlide.bind(this)
    }
    setSlide(current){
        this.setState({current});
        clearInterval(this.slideInterval);
        const that = this;
        setTimeout(() => {
            this.slideInterval = setInterval(() => {
                that.changeSlide()
            }, 7000);
        }, 1000);
    }
    changeSlide(){
        let {current} = this.state;
        current < (images.length -1) ? current++ : current = 0
        this.setState({current})
    }
    componentDidMount(){
        const that = this;
        this.slideInterval = setInterval(() => {
            that.changeSlide()
        }, 7000);
    }
    componentWillUnmount(){
        clearInterval(this.slideInterval);
    }
    render(){
        const {current} = this.state;
        return(
            <section id="Slider">
                <div className="container">
                    {images.map((src, i) => {
                        return  <Spring key={i} from={{x: i===current ? "-100%" : (i<current ? "-100%" : "100%")}} to={{x: i===current ? "0%" : (i<current ? "-100%" : "100%")}} >
                                    {({x}) => <img src={src} style={{transform: `translateX(${x})`}} alt="description of our work"/>}
                                </Spring>
                    })}
                </div>
                <div className="dots">
                    {images.map((src, i) => {
                        return <div key={i*7} className={`dot ${current === i ? "selected" : ""}`} onClick={() => this.setSlide(i)}></div>
                    })}
                </div>
            </section>
        )
    }
}

export default Slider;
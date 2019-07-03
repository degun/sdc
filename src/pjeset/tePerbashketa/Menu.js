import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/projectsActions';
import LogoHorizontal from './Logo/LogoHorizontal';
import LogoVertikal from './Logo/LogoVertikal';
import LogoHomeNoScroll from './Logo/LogoHomeNoScroll';
import './Menu.sass';
import MenuMobile from './MenuMobile';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled: false,
            mobileMenu: false,
            searchable: [],
            results: [],
            value: ''
        }
        this.setScroll = this.setScroll.bind(this);
        this.search = this.search.bind(this);
    }
    setScroll(){
        const scrolled = !!window.pageYOffset;
        this.setState({scrolled});
    }
    search({target}){
        const {value} = target;
        const {searchable} = this.state;
        let results = [];
        if(value !== ""){
            searchable.forEach(s => {
                if(s.nameLower.includes(value)){
                    results.push(s)
                }
            })
        }
        this.setState({results, value})
    }
    componentDidMount(){
        window.addEventListener("scroll", this.setScroll)
    }
    componentDidUpdate(){
        const {projects} = this.props;
        if(this.state.searchable.length === 0 && projects.length !== 0){
            const searchable = projects.map(project => {
                return {
                    id: project._id,
                    nameLower: project.name.toLowerCase(),
                    name: project.name
                }
            })
            this.setState({searchable})
        }
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.setScroll)
    }
    render(){
        const {scrolled, results, mobileMenu} = this.state;
        const {selected} = this.props;
        return(
            <div className="Menu" style={{backgroundColor: scrolled ? "#1eb6e1": "transparent"}}>
                <div className="logo" style={{fontSize: scrolled ? "3em" : "5em"}}>
        <Link to="/"><div className="logo">{scrolled ? <LogoHorizontal /> : (selected === "Home" ? <LogoHomeNoScroll /> : <LogoVertikal />)}</div></Link>
                </div>
                <nav>
                    <Link style={{color: scrolled ? "white" : (selected === "Home" ? "black" : "white")}} to="/" className={selected === "Home" ? "selected" : ""}>Home</Link>
                    <Link style={{color: scrolled ? "white" : (selected === "Home" ? "black" : "white")}} to="/projects" className={selected === "Projects" ? "selected" : ""} onClick={()=> this.props.setFilter("all")}>Projects</Link>
                    <Link style={{color: scrolled ? "white" : (selected === "Home" ? "black" : "white")}} to="/members" className={selected === "Our staff" ? "selected" : ""}>Our staff</Link>
                    <Link style={{color: scrolled ? "white" : (selected === "Home" ? "black" : "white")}} to="/about" className={selected === "About us" ? "selected" : ""}>About us</Link>
                </nav>
                <input type="search" style={{backgroundColor: scrolled ? "white" : (selected === "Home" ? "rgba(0,0,0,0.3)" : "white")}} value={this.state.value} onChange={this.search}/>
                {!mobileMenu ? 
                    <IoIosMenu className="menuIcon" size={40} color="white" onClick={() => this.setState({mobileMenu: true})}/> :
                    <IoIosClose className="menuIcon" size={40} color="white" onClick={() => this.setState({mobileMenu: false})}/>
                }

                {results.length ? <div className="results">
                    <ul>
                        {results.map((result,i) => {
                            return <li key={i}><Link to={`/projects/${result.id}`} onClick={()=>this.setState({results: [], value: ""})}>{result.name}</Link></li>
                        })}
                    </ul>
                </div> : null}
                {mobileMenu ? <MenuMobile /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
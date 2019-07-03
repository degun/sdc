import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Baza from './faqet/Baza';
import Projekte from './faqet/Projekte';
import Projekt from './faqet/Projekt';
import Person from './faqet/Person';
import Persona from './faqet/Persona';
import RrethNesh from './faqet/RrethNesh';
import Kontakt from './faqet/Kontakt';
import { getProjects, getTableOfProjects } from './store/actions/projectsActions';
import { getMembers } from './store/actions/membersActions';
import { setScrollPosition } from './store/actions/appActions';

class App extends React.Component{
  componentDidMount(){
    this.props.getProjects();
    this.props.getMembers();
    this.props.getTableOfProjects();
    window.addEventListener("scroll", ()=>{
      this.props.setScrollPosition(window.scrollY)
    })
  }
  render(){
    return (
      <div className="App" style={{overflow: "hidden"}}>
        <Switch>
          <Route exact path="/" component={Baza} />
          <Route exact path="/projects" component={Projekte} />
          <Route exact path="/projects/:id" component={Projekt} />
          <Route exact path="/members" component={Persona} />
          <Route exact path="/members/:id" component={Person} />
          <Route exact path="/about" component={RrethNesh} />
          <Route exact path="/contact" component={Kontakt} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scrollPosition: state.app.scroll
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects()),
    getMembers: () => dispatch(getMembers()),
    getTableOfProjects: () => dispatch(getTableOfProjects()),
    setScrollPosition: scroll => dispatch(setScrollPosition(scroll))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

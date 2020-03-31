import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Column from './components/column';
import Navv from './components/nav.jsx';
import Register from './components/register.jsx';


class App extends React.Component{

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })

  }
  
  render(){
    return <div>
    <Header drawerClickHandler={this.drawerToggleClickHandler}/>
      <Router>
        <Navv />
        <Column show={this.state.sideDrawerOpen}/>
        <Route exact path="/" render={() => {
          return <div className="page-wrapper">  
            <h3 className="title" >Gorka crack</h3>       
          </div> 
        }}> 
        </Route>
        <Route exact path="/Reg" render={() => {
          return <div className="page-wrapper">
            <Register/>
          </div> 
        }}> 
        </Route>
        <Route exact path="/Help" render={() => {
          return <div className="page-wrapper">
        <h3>Ajuda</h3>
          </div> 
        }}> 
        </Route>
      </Router>
    <Footer/>
    </div>
  }
}

export default App;


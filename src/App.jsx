import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Column from './components/column';
import Navv from './components/nav.jsx';
import Register from './components/regForm';
import { Provider } from 'react-redux'; 
import store from './redux/store';

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
      <Provider store={store}>
    <Header drawerClickHandler={this.drawerToggleClickHandler}/>
      <Router>
        <Navv />
        <Column show={this.state.sideDrawerOpen}/>
        <Route exact path="/" render={() => {
          return <div className="page-wrapper">  
            <h3 className="title">Aquí habrá mas contenido</h3>       
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
        <h3>Registrado satisfactoriamente</h3>
          </div> 
        }}> 
        </Route>
      </Router>
    <Footer/>
    </Provider>
    </div>
  }
}

export default App;


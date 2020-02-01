import React, { Component } from 'react';
import BasicNav from './Component/BasicNav';
import Showcase from './Component/Showcase'; 
import {Context} from './Api/appContext'




class App extends Component {

  state = {
    user: {
      name: "ZH Emran",
      email: "emrans@gmail.com",
      languages: [
        'Javascript',
        'Python',
        'Dart'
      ] 
    },
    isAuthenticated: false
  };

  login = () => {
    this.setState({isAuthenticated: true})
  };

  logout = () => {
    this.setState({isAuthenticated: false})
  };

  addInShowcase = item => {
    const user = {...this.state.user};
    user.languages.push(item);
    this.setState({user});
  }

  render() {
    return (
      <Context.Provider value={{...this.state, login: this.login, logout: this.logout, addInShowcase: this.addInShowcase}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <h1 className="my-2">My Portfolio Site</h1>
              <hr/>

              <BasicNav></BasicNav>

              <hr />

              {this.state.isAuthenticated && (
                <Showcase></Showcase>
              )}

            </div>
          </div>
        </div>
        </Context.Provider>
    );
  }
}

export default App;

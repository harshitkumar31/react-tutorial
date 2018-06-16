### Routing
Install react-router 
```bash
npm install react-router-dom --save-dev
```

```jsx
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Header, Sample} from './Header';
import { CollegesList } from './CollegesList';
import CollegeDetail from './CollegeDetail';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      collegesList: null
    };
  }

componentDidMount() {
  var self = this;
  console.log(this);
  fetch("http://localhost:8000/api/v1/colleges/")
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ collegesList: responseJson });
    })
    .catch(e => {
      console.log(e);
      console.log("Error occured in second catch");
    });
}

  render(){
      const { title } = this.props;
      const { count } = this.state;

      return (
        <React.Fragment>
          <Header title="Mentor App" isLoggedIn={true}/>

          <Router>
            <React.Fragment>
              <Switch >
              <Route exact path="/">
                <CollegesList collegesList={this.state.collegesList}/>
              </Route>

              <Route
                exact
                path="/college/:id"
                component={
                  (props)=>
                  <CollegeDetail college={this.state.collegesList ?this.state.collegesList[props.match.params.id - 1-] : {}} {...props}/>
                }>

              </Route>
              </Switch>
            </React.Fragment>
          </Router>
        </React.Fragment>
      );
  }
}

export default App;
```

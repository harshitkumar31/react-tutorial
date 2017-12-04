# Lesson 2

## Props and State

React components need data to work with. There are two ways of combining components and data - using props or state. Props and state determine the behaviour of a component.

### Props: 

   Most components can be customized when they are created, with different parameters. These creation parameters are called props. If components are like functions, props are like parameters of that function.

   ![alt text](res/props.jpg)

   Props are read only. A component must act like pure functions with respect to their props.

   Example:

```javascript
   import React from 'react';

   const Image = (props) => { // Arrow functions* 

       return <img src={props.url}></img>;
   }

   // Usage:
   const xyz = () => {
       return <Image url="https://static.boredpanda.com/blog/wp-content/uploads/2014/04/irony-funny-pictures-40.jpg"
       />
   }
```

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


### State:

State is an object owned by the component and its scope is limited to the component. A component can initialize the state and update it when required. 

![alt text](res/state.jpg)

Example:
```javascript
import React, {Component} from 'react';

class StatefulExample extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 1, // this updates count
        });
    }

    render(){
        const { title } = this.props;
        const { count } = this.state;

        return (<div>
        <h2>{title}</h2>
        <button>{`I was clicked ${count} times`}</button>{/* Template literal */}
        </div>);
    }

}

```

[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### When to use what?

It all comes down to presentational and container components. 

**Presentational Components** don't specify how data should be loaded or mutated.They simply receive data via props.They do not have dependencies. They are written as functional components(statesless). They may contain presentational or container components inside. 
    
    Example:
```javascript
    
    import React from 'react';

    const List = (props) => {
        return (<ul>
            {
                props.items.map(
                    (item, index)=>{
                        return (<li>
                                {item}
                                </li>);
                })
            }
        </ul>);
    }


```

**Container Components** know about data,it's shape and where it comes from. They contain the business logic. Container components normally fetch data, reformat data for so that it's easy to be used by presentational components. 

Example:

```javascript

    import React, { Component } from 'react';

    import CommentList from "./CommentList";

    class ListContainer extends Component {
        constructor() {
            super();
            this.state = { list: [] }
        }
        
        componentDidMount() {
            fetch("/list")
            .then(res => res.json())
            .then(list => this.setState({ list }))
        }
        
        render() {
            return <List items={this.state.list} />;
        }
    }

```
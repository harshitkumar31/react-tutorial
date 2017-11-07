# Lesson 2

## Props and State

React components need data to work with. There are two ways of combining components and data - using props or state. Props and state determine the behaviour of a component.

### Props: 

   Most components can be customized when they are created, with different parameters. These creation parameters are called props. If components are like functions, props are like parameters of that function.

   ![alt text](res/props.jpg)

   Props are read only. A component must act like pure functions with respect to their props.

   Example:

```javascript
   const Image = (props) => { // Arrow functions* 

       return <img src={props.url}></img>;
   }

   // Usage:
   const xyz = () => {
       return <Image url="https://static.boredpanda.com/blog/wp-content/uploads/2014/04/irony-funny-pictures-40.jpg" />
   }
```

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


### State:

State is an object owned by the component and its scope is limited to the component. A component can initialize the state and update it when required. 

![alt text](res/state.jpg)
# Lesson 3

## Conditional Rendering

Used when you want to render different content based on a condition.

```jsx
const sampleComponent = ({ isTrue }) => {
  return isTrue && <p>True!</p>
};
```

## Event Handlers

```jsx
class Switcher extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Name in state' };
  }

  render() {
    return (
      <button onClick={ this._handleButtonClick }>
        click me
      </button>
    );
  }
  _handleButtonClick() {
    console.log('Button is clicked in ${ this.state.name }');
    // will throw an error because the code doesn't keep scope
  }
}
```



3 ways of binding handlers:

Inline:
```jsx
<button onClick={ this._handleButtonClick.bind(this) }>
  click me
</button>
```

Constructor:
```jsx
constructor(props) {
    super(props);
    this.state = { name: 'React in patterns' };
    this._buttonClick = this._handleButtonClick.bind(this);
  }
```

Fat Arrow:

```jsx
_handleButtonClick = () => {
    console.log(`Button is clicked inside ${ this.state.name }`);
  }
```
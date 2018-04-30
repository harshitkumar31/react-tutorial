### Error Handling in React

```jsx
class ShowMyError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            Error.toString(): {this.state.error.toString()}
          </h1>
          
          <label>error.info.componentStack</label>
          {this.state.info &&
            this.state.info.componentStack.split("\n").map(i => {
              return (
                <div style={{textAlign: "left", maxWidth: "400px", margin: "0 auto"}} key={i}>
                  {i}
                </div>
              );
            })}
        </div>
      );
    }
    return this.props.children;
  }
}

class Broken extends React.Component {
  constructor(props) {
    super(props);
    this.state = { throw: false, count: 0 };
  }

  render() {
    if (this.state.throw) {
      throw new Error("XYZ");
    }

    return (
      <div>
        <button
          onClick={e => {
            this.setState({ throw: true });
          }}
        >
          button will render error.
        </button>
        
        <button onClick={e => {
          this.setState(({ count }) => ({
            count: count + 1
          }));
        }}>button will not throw</button>

        <div>
          {"All good here. Count: "}{this.state.count}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    return (
      <div style={styles}>
        <Hello name="ShowMyError" />
        <h2>Start clicking to see some {"\u2728"}magic{"\u2728"}</h2>
          <ShowMyError>
            <Broken />
          </ShowMyError>
      </div>
    );
  }
}

```
import React from 'react';

export default class App extends React.Component {

  handleSubmit (event) {
    console.log("event", event)
    // event.nativeEvent;
    event.preventDefault();
    var text = this.handleChange.text;
    console.log("form submitted value", text);
  }

  handleChange (event) {
    var text = event.target.value;
    console.log("text", text);
  }

  render () {
    return  <div>
              <p> TODO </p>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button> Submit </button>
              </form>
            </div>;
  }
}

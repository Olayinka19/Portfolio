import React, { Component , useState, useEffect} from 'react';

class ReverseTextForm extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',     // User input
      reversedText: '',  // Reversed text to display
    };
  }

  // Handle user input changes
  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const reversedText = this.reverseText(this.state.inputText);
    this.setState({ reversedText });
  }

  // Function to reverse the text
  reverseText = (text) => {
    return text.split('').reverse().join('');
  }

  render() {
    return (
      <div>
      <br/>
      <br/>
      <br/>
      
        <h2>Reverse Text Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter text:
            <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Reverse</button>
        </form>
        <p>Reversed Text:<h1> {this.state.reversedText}</h1></p>
      </div>
    );
  }
}

export default ReverseTextForm;

import React, { Component } from "react";
import "./App.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class App extends Component {
  constructor() {
    super();
    this.state = {
      address: "San Francisco, CA"
    };
    this.onChange = address => this.setState({ address });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address).then(results =>
      console.log(results[0])
    );
    // .then(latLng => console.log("Success", latLng))
    // .catch(error => console.error("Error", error));
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const options = {
      componentRestrictions: { country: "us" }
      // types: ['address']
    };

    return (
      <div className="reactSearch">
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} options={options} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

import CVForm from "./components/sections/CVForm";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        fullName: "(Your Full Name)",
        phone: "(Your Phone Number)",
        email: "(Your Email)",
        homeCity: "(Your City)",
        homeState: "(State)",
        personalSiteURL: "(Your Website)",
        linkedInURL: "(Your LinkedIn)",
      },
    };

    this.updateClickHandler = this.updateClickHandler.bind(this);
  }

  updateClickHandler() {
    console.log(this.state);
  }

  handleInputChange = (e) => {
    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <CVForm
        handleInputChange={this.handleInputChange}
        updateClickHandler={this.updateClickHandler}
      />
    );
  }
}

export default App;

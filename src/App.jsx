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
  }

  render() {
    return <CVForm />;
  }
}

export default App;

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
      skillList: [],
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

  handleSkillClick = (value) => {
    this.setState(
      (prevState) => {
        return { skillList: [...prevState.skillList, value] };
      },
      () => {
        console.log(this.state.skillList);
      }
    );
  };

  deleteItem = (index) => {
    const tempList = this.state.skillList;

    tempList.splice(index, 1);

    this.setState({ skillList: tempList }, () => {
      console.log(this.state.skillList);
    });
  };

  render() {
    return (
      <CVForm
        handleInputChange={this.handleInputChange}
        updateClickHandler={this.updateClickHandler}
        skillList={this.state.skillList}
        handleSkillClick={this.handleSkillClick}
        deleteHandle={this.deleteItem}
      />
    );
  }
}

export default App;

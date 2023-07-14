import { Component } from "react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";

export default class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BasicInfo />
        <Skills />
        <Education />
        <Work />
      </div>
    );
  }
}

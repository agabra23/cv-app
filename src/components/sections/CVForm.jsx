import { Component } from "react";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import UpdateButton from "../utils/UpdateButton";

export default class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInputChange, updateClickHandler } = this.props;

    return (
      <div className="CVForm">
        <BasicInfo handleInputChange={handleInputChange} />
        <Skills />
        <Education />
        <Work />

        <UpdateButton updateClickHandler={updateClickHandler} />
      </div>
    );
  }
}

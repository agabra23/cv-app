import { Component } from "react";
import TextInput from "../utils/TextInput";
import EmailInput from "../utils/EmailInput";
import "../../styles/BasicInfo.css";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo } = this.props.personalInfo;

    return (
      <div className="basic-info">
        <h3 className="section-title">Basic Info</h3>

        <form action="#" id="basicInfoForm">
          <TextInput title="Name" />
          <TextInput title="Phone" />
          <EmailInput title="Email" />
          <TextInput title="City" />
          <TextInput title="State" />
          <TextInput title="Personal Website URL" />
          <TextInput title="LinkedIn URL" />
        </form>
      </div>
    );
  }
}

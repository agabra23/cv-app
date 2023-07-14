import { Component } from "react";
import TextInput from "../utils/TextInput";
import "../../styles/BasicInfo.css";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInputChange } = this.props;

    return (
      <div className="basic-info">
        <h3 className="section-title">Basic Info</h3>

        <form action="#" id="basicInfoForm">
          <TextInput
            name="fullName"
            title="Name"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="phone"
            title="Phone"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="email"
            title="Email"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="homeCity"
            title="City"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="homeState"
            title="State"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="personalSiteURL"
            title="Personal Website URL"
            handleInputChange={handleInputChange}
          />
          <TextInput
            name="linkedInURL"
            title="LinkedIn URL"
            handleInputChange={handleInputChange}
          />
        </form>
      </div>
    );
  }
}

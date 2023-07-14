import { Component } from "react";
import SkillOverview from "./SkillOverview";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: "",
    };
  }

  handleSkillChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  updateSkillsList = () => {
    this.props.handleSkillClick(this.state.currentValue);

    this.setState({ currentValue: "" });

    
  };

  render() {
    const { currentValue } = this.state;
    const skillList = this.props.skillList;

    return (
      <div id="skillsSection">
        <input
          type="text"
          placeholder="Add Skill"
          value={currentValue}
          onChange={this.handleSkillChange}
        />
        <button type="button" onClick={this.updateSkillsList}>
          Add Skill
        </button>
        <SkillOverview skillList={skillList} />
      </div>
    );
  }
}

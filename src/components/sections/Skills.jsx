import { Component } from "react";
import SkillOverview from "./SkillOverview";

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: "",
      skillList: [],
    };
  }

  handleSkillChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  handleSkillClick = () => {
    this.setState((prevState) => {
      return { skillList: [...prevState.skillList, prevState.currentValue] };
    });
    this.setState({ currentValue: "" });
  };

  render() {
    const { currentValue, skillList } = this.state;

    return (
      <div id="skillsSection">
        <input
          type="text"
          placeholder="Add Skill"
          value={currentValue}
          onChange={this.handleSkillChange}
        />
        <button type="button" onClick={this.handleSkillClick}>
          Add Skill
        </button>
        <SkillOverview skillList={skillList} />
      </div>
    );
  }
}

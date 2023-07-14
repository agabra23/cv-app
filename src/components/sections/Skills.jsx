import { Component } from "react";
import SkillOverview from "./SkillOverview";
import "../../styles/Skills.css";

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
    const deleteHandle = this.props.deleteHandle;

    return (
      <div id="skillsSection">
        <div className="skill-input">
          <input
            type="text"
            placeholder="Add Skill"
            value={currentValue}
            onChange={this.handleSkillChange}
          />
          <button type="button" onClick={this.updateSkillsList}>
            Add Skill
          </button>
        </div>
        <SkillOverview skillList={skillList} deleteHandle={deleteHandle} />
      </div>
    );
  }
}

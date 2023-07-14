import { Component } from "react";

export default class SkillOverview extends Component {
  render() {
    const skills = this.props.skillList.map((skill, index) => {
      return (
        <div className="skill-item" key={index}>
          <li className="skill-bullet">{skill}</li>
          <button onClick={() => this.props.deleteHandle(index)}>Remove</button>
        </div>
      );
    });

    return (
      <div className="skill-list">
        <ul>{skills}</ul>
      </div>
    );
  }
}

import React from "react";
class Course extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ border: "1px solid black" }}>
        <h3>Course Information</h3>
        <h4>Course Name : {this.props.cName}</h4>
        <h4>Course Duration : {this.props.duration}</h4>
        <h4>Salary : {this.props.salary}</h4>
        <h4>Seasons : {this.props.seasons}</h4>
      </div>
    );
  }
}
export default Course;

import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm"
import Success from "./Success"

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    bio: "",
    city: "",
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // handle field state
  handleChange = (input) => (e) => {
    console.log("input",[input]);
    console.log("val", e.target.value);

    this.setState({
      [input]: e.target.value,
      // value: e.target.value
    });
    console.log("state",this.state);
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, city, occupation, email, bio } = this.state;
    const values = { firstName, lastName, city, occupation, email, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
          nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            />
        );
      case 4:
        return (
          <Success/>
        );
    }
  }
}

export default UserForm;

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SinginForm from "../forms/SigninForm";
import { signin } from "../../actions/auth";


class SigninPage extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  submit = data =>
    this.props.signin(data).then(() => {
    this.props.history.push("/");
  });

  render() {
    return (
      <div>
        <h1>Sign_In page</h1>

        <SinginForm submit={this.submit} />

      </div>
    );
  }
}

SigninPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { signin })(SigninPage);
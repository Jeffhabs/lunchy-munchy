import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginPage extends Component {
  renderField = (field) =>  (
    <div className="form-group">
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
      {field.meta.error}
    </div>
  );

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="email"
            label="Email"
            component={this.renderField}
          />
          <Field
            name="password"
            label="Password"
            component={this.renderField}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Login</button>
          </span>
        </form>
        
      </div>
    );
  };
}

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Enter an email!";
  }
  if (!values.password) {
    errors.password = "Enter a password!";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: 'LogsInUser'
})(LoginPage);

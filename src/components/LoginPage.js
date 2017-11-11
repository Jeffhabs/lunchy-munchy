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
    </div>
  );

  render() {
    return (
      <div>
        <form>
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
        </form>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Login</button>
        </span>
      </div>
    );
  };
}

export default reduxForm({
  form: 'LogsInUser'
})(LoginPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../actions/registerAction';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
      fName: '',
      lName: '',
      email: '',
      password: '',
      comfPassword: ''
    };

    this.fNameChanged = this.fNameChanged.bind(this);
    this.lNameChanged = this.lNameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.comfPasswordChanged = this.comfPasswordChanged.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  fNameChanged(event) {
    console.log(`First name: ${event.target.value}`);
    this.setState({ fName: event.target.value });
  }

  lNameChanged(event) {
    console.log(`Last name: ${event.target.value}`);
    this.setState({ lName: event.target.value });
  }

  emailChanged(event) {
    console.log(`Email: ${event.target.value}`);
    this.setState({ email: event.target.value });
  }

  passwordChanged(event) {
    console.log(`Password: ${event.target.value}`);
    this.setState({ password: event.target.value });
  }

  comfPasswordChanged(event) {
    console.log(`Comfirm Password: ${event.target.value}`);
    this.setState({ comfPassword: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault()
    // TODO: check if password matches the confim password
    console.log("EMAIL ", this.state.email);
    this.props.registerUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="container">
        <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default">
			 			<div className="panel-body">
			    		<form onSubmit={this.onSubmitForm} role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input onChange={this.fNameChanged} type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"></input>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input onChange={this.lNameChanged} type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"></input>
			    					</div>
			    				</div>
			    			</div>

                <div className="form-group">
			    				<input onChange={this.emailChanged} type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"></input>
                </div>

			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input onChange={this.passwordChanged} type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"></input>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input onChange={this.comfPasswordChanged} type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"></input>
			    					</div>
			    				</div>
			    			</div>
			    			<input onClick={this.onSubmitForm} type="submit" value="Register" className="btn btn-info btn-block"></input>
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegisterPage);
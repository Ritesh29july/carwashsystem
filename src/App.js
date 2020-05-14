import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import './App.css';

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/washer">Washer</Link>
            </li>
             <li>
              <Link to="/CarWashBooking">CarWashBooking</Link>
            </li>
            
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route path="/washer" component={Washer} />
             <Route path="/CarWashBooking" component={CarWashBooking} />
          
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
 
class About  extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
class Washer  extends React.Component {
  render() {
    return (
      <div>
        <h2>Washer</h2>
      </div>
    );
  }
}
 
class Admin extends React.Component {
  render( ) {
    return (
      <div>
        <h2>Admin</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/assignWasher`}>
              Assign Washer
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/addEdit`}>Add/Edit</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/ViewWasher`}>
              ViewWasher
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/orderManaament`}>
              OrderManaament
            </Link>
          </li>
        </ul>
 
        <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                Please select a topic.
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}
 
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}
 
 class CarWashBooking extends React.Component {
 constructor(props) {
    super(props);
 
    this.state = {
      fullName: ""
    };
  }
 
  handleSubmitForm(event) {
    alert("Full Name: " + this.state.fullName);
    event.preventDefault();
  }
 
  handleChange(event) {
    var value = event.target.value;
 
    this.setState({
      fullName: value
    });
  }
    render() {
 return (
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <label>
          First Name:
          <input
            type="text"
            value={this.state.fullName}
            onChange={event => this.handleChange(event)}
          />
        </label>
      <br />
        <label>
          Last Name:
          <input
            type="text"
            value={this.state.lastName}
            />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={this.state.phoneNumber}
            />
        </label>
        <br />
        <label>
          Vehicle Number:
          <input
            type="text"
            value={this.state.vehicleNumber}
            />
        </label><br />
      <label>
          Message: </label>
        <textarea cols="45" rows="5"
          value={this.state.content}
          onChange={event => this.handleChange(event)} />
        <br />
          <input
            type="textarea"
            value={this.state.message}
            />
       <br />
        <input type="submit" value="Booking Confirm" />
        <p>{this.state.fullName}</p>        
      </form>
    );
  }
}

 class AssignWasher extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>AssignWasher</h2>
      </div>
    );
  }
}
class AddEdit extends React.Component {
   render()  {
    return (
      <div>
        <h2>AddEdit</h2>
      </div>
    );
  }
}

class ViewWasher extends React.Component {
   render()  {
    return (
      <div>
        <h2>ViewWasher</h2>
      </div>
    );
  }
}

class OrderManaament extends React.Component {
   render()  {
    return (
      <div>
        <h2>OrderManaament</h2>
      </div>
    );
  }
}


export default App;
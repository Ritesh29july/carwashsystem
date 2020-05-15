import React from "react";
import { BrowserRouter, Route, Link , NavLink} from "react-router-dom";
 import './App.css';

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink activeStyle={{color: 'red'}} to="/">Home</NavLink>
            </li>
            <li>
              <Link activeStyle={{color: 'red'}} to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/carwasher">CarWasher</Link>
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
            <Route path="/carwasher" component={CarWasher} />
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
class CarWasher  extends React.Component {
  render() {
    return (
      <div>
        <h2>Washer</h2>
        <Content />
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

class Content extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: [
        {
          "id": 1,
          "firstName": "Raj" ,
          "lastName": "Kappor",
          "email": "raj@gmail.com",
          "phoneNumber": "9999999",
          "vehicleNumber": "111130"
        },
        {
          "id": 2,
           "firstName": "Raj" ,
          "lastName": "Kappor",
          "email": "raj@gmail.com",
          "phoneNumber": "9999999",
          "vehicleNumber": "111130"
        },
        {
          "id": 3,
          "firstName": "Raj" ,
          "lastName": "Kappor",
          "email": "raj@gmail.com",
          "phoneNumber": "9999999",
          "vehicleNumber": "111130"
        }
      ]
    };
  }
  render() {
    return (
    <div>
      <p className="App-intro">
         <table border="1" >
          <thead>
            <th> 
              <td>Id</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Email</td>
              <td>Phone Number</td>
              <td>Vehicle Number</td>
              <td>Accept/Reject</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/> )}
          </tbody>
        </table>
      </p>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (

      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.firstName}</td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.phoneNumber}</td>
        <td>{this.props.data.vehicleNumber}</td>
      </tr>
    );
  }
}
export default App;
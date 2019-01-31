class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // on click, change the state to render something else

  render() {
    return(
      <div>
        <F1 />
      </div>
    )
  }
}

function Checkout (props) {
  return (
    <div>
      {/* we'll make this a general button, next component
      each component will use this to move to the next page 
      each time the state will change to render the new component*/}
      <h1>Cart</h1>
      <button className="checkout" onClick={() => { alert('you\'ll never get off the island') }}>Check out</button>
    </div>
    )
}

class F1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  dataChange(val){
    this.setState({
      [val.target.name]: val.target.value
    })
  }

  sendForm (event) {
    event.preventDefault();
    console.log('this is the form speaking')
    axios.post('/', this.state)
    .then(function (response) {
      console.log('what you want me to say', response);
    })
    .catch(function (err) {
      console.log('this is an error:', err)
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.dataChange.bind(this)}></input>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.dataChange.bind(this)}></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.dataChange.bind(this)}></input>
        </div>
        <div>
          <button type="button" onClick={this.sendForm.bind(this)}>Log In</button>
        </div>
      </form>
    )
 }
}

function F2 (props) {
  return (
    <form action="/" method="POST">
      <div>
        <label>Shipping Address:</label>
        <input type="text" id="address1" placeholder="Street address"></input>
      </div>
      <div>
        <label>Shipping Address Line 2:</label>
        <input type="text" id="address2" placeholder="Apt, Suit, Etc."></input>
      </div>
      <div>
        <label>City:</label>
        <input type="text" id="city" placeholder="City"></input>
      </div>
      <div>
        <label>State:</label>
        <input type="text" id="state" placeholder="State"></input>
      </div>
      <div>
        <label>Zipcode:</label>
        <input type="number" id="zipcode" placeholder="Zipcode"></input>
      </div>
      <div>
        <input type="submit" onClick={() => {alert('this is you')}}></input>
      </div>
    </form>
  )
}

function F3 (props) {
  return (
    <form action="/" method="POST">
      <div>
        <label>Credit Card #:</label>
        <input type="number" id="cc" placeholder="CC#" max="19"></input>
      </div>
      <div>
        <label>Expiry Date:</label>
        <input type="date" id="expdate" min="2019-01-31" max="2030-12-31"></input>
      </div>
      <div>
        <label>CVV:</label>
        <input type="number" id="cvv" placeholder="123" max="3"></input>
      </div>
      <div>
        <label>Billing Zipcode:</label>
        <input type="number" id="billzip" placeholder="Zipcode" max="5"></input>
      </div>
      <div>
        <input type="submit" onClick={() => {alert('payment successful!')}}></input>
      </div>
    </form>
  )
}

ReactDOM.render(
  <F1 />,
  document.getElementById('hello')
);
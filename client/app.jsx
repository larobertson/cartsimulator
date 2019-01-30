class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div>
      {/* we'll make this a general button, next component
      each component will use this to move to the next page */}
      <button className="checkout" onClick={() => { alert('you\'ll never get off the island') }}>Check out</button>
    </div>
    )
  }
}

ReactDOM.render(
  <Cart />,
  document.getElementById('hello')
);


{/* <form action="/" method="POST">
  <div>
    <label>Name:</label>
    <input type="text"></input>
  </div>
</form> */}
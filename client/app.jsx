class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1>Hello World! We are working!</h1>
    </div>)
  }
}

ReactDOM.render(
  <Cart />,
  document.getElementById('hello')
);
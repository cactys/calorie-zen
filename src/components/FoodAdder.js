import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      FoodList: '',
    };
  }

  handleChange = (evt) => {
    console.log(this.state.FoodList);
    this.setState({ FoodList: evt.target.value });
  };

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <form className="food-adder">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Добавьте продукты"
        />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;

import { Component } from "react";
import "../styles/classstyles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleGuess(this.state.userInput);
    this.setState({ userInput: "" });
  }

  render() {
    const { fishIndex } = this.props;
    const { userInput } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishIndex.url} alt={fishIndex.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" onChange={({ target: { value } }) => this.setState({ userInput: value})}
            value={userInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

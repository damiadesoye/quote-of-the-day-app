import React from "react";
import freeAPI from "./api/freeApi";
import QuoteOfTheDay from "./Components/QuoteOfTheDay";
import Loader from "./Components/Loader";
import "./App.css";
import Avatar from "./Components/Avatar/Avatar";

class App extends React.Component {
  state = {
    quote:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: "John Simone",
    loading: false,
  };
  /*
   * Sends a request to the FreeAPI to get a random quote
   */
  getQuote = async () => {
    this.setState({
      loading: true,
    });
    const response = await freeAPI.get();
    var quote = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(this.state);
    this.setState({
      quote: quote.text,
      author: quote.author,
      loading: false,
    });
  };

  getContent() {
    if (this.state.loading === true) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <i className="hand point down outline icon main-icon"></i>
          <QuoteOfTheDay quote={this.state.quote} author={this.state.author} />
          <div className="footer">
            <hr />
            <div className="ui grid">
              <div className="four column row">
                <div className="left floated column vertical-align">
                  <Avatar />
                </div>
                <div className="right floated column ">
                  <button
                    className="ui labeled icon button action-button"
                    onClick={this.getQuote}
                  >
                    <i className="redo icon"></i>
                    Generate Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <div className="ui raised very padded text container segment">
          {this.getContent()}
        </div>
      </div>
    );
  }
}
export default App;

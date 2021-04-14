import React from "react";
import freeAPI from "./api/freeApi";
import QuoteOfTheDay from "./Components/QuoteOfTheDay";
import Loader from "./Components/Loader";
import "./App.css";
import Avatar from "./Components/Avatar/Avatar";

class App extends React.Component {
  state = {
    quotes: null,
    quote:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
    author: "John Simone",
  };
  componentDidMount = () => {
    this.fetchQuotes();
    this.fetchNewQuote();
  };
  /*
   * Sends a request to the FreeAPI to get list of quotess
   */
  fetchQuotes = async () => {
    const response = await freeAPI.get();
    this.setState({
      quotes: response.data.filter((quote) => {
        if (quote.author) {
          return quote.author[0] !== "B";
        }
        return true;
      }),
    });
  };
  /*
   * Generate a random new quote
   */
  fetchNewQuote = () => {
    if (!this.state.quotes) {
      return;
    }
    var quote = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
    this.setState({
      quote: quote.text,
      author: quote.author,
    });
  };

  getContent() {
    if (!this.state.quotes) {
      return <Loader />;
    } else {
      return (
        <React.Fragment>
          <QuoteOfTheDay quote={this.state.quote} author={this.state.author} />
          <br />
          <div className="sixteen wide column footer">
            <p className="text-center">
              <button
                className="ui labeled icon button action-button"
                onClick={this.fetchNewQuote}
              >
                <i className="redo icon"></i>
                Generate Quote
              </button>
            </p>
            <div className="flex items-center mt-2">
              <div className="spacer flex-grow"></div>
              <div className="px-2 mb-2">
                <Avatar />
              </div>
              <div className="spacer flex-grow"></div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <div className="ui raised very padded text container bg-white centered grid ">
          {this.getContent()}
        </div>
      </div>
    );
  }
}
export default App;

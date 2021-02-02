import React from "react";

const QuoteOfTheDay = (props) => {
  return (
    <div className="quote-of-the-day">
      <div className="quote">"{props.quote}"</div>
      <div className="author">{props.author}</div>
    </div>
  );
};
export default QuoteOfTheDay;

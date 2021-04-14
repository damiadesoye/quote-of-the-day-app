import React from "react";
import "./QuoteOfTheDay.css";
const QuoteOfTheDay = (props) => {
  return (
    <div className="quote-of-the-day mt-2">
      <div className="quote ribbon">
        <strong className="ribbon-content">"{props.quote}"</strong>
        <div className="author">- {props.author}</div>
      </div>
    </div>
  );
};
export default QuoteOfTheDay;

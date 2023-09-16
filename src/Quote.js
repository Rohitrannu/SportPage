import React from 'react'
import  { useEffect, useState } from 'react';
import './Quote.css'



const Quote = () => {

    const api_url = 'http://api.quotable.io/random';
    const [quoteData, setQuoteData] = useState({ content: '', author: '' });
  
    useEffect(() => {
      getQuote(api_url);
    }, []);
  
    const getQuote = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setQuoteData({ content: data.content, author: data.author });
    };
  
    const tweet = () => {
      const tweetText = encodeURIComponent(
        `${quoteData.content} - ${quoteData.author}`
      );
      window.open(
        `https://twitter.com/intent/tweet?text=${tweetText}`,
        'Tweet Window',
        'width=600, height=300'
      );
    };
  return (
    <>
    
    <div className="quote-box">
        <h2>Quote of the day</h2>
        <blockquote id="Quote">{quoteData.content}</blockquote>
        <span id="author">{quoteData.author}</span>
        <div>
            <button  onClick={() => getQuote(api_url)}>New Quote</button>
            <button onClick={tweet}>Tweet</button>
        </div>
    </div>
    
    </>
  )
}

export default Quote


import { useEffect, useState } from 'react';
import { HalfCircleSpinner } from 'react-epic-spinners';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=death', {
      headers: { 'X-Api-Key': '+wNDNQQDL7FhXthHVazGEQ==nICHvEvsNxGiIEFl' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't fetch");
        }

        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container flex-grow-1 d-flex justify-content-center align-items-center"><HalfCircleSpinner color="#333" size="100" /></div>;
  }
  if (error) {
    return <div className="container d-flex justify-content-center align-items-center"><h2>{error}</h2></div>;
  }
  return (
    <div className="quote-container container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <figure className="border border-white figure-container bg-white overflow-auto shadow">
        <blockquote className="blockquote fs-2">
          &ldquo;
          {quote}
          &ldquo;
        </blockquote>
        <figcaption className="blockquote-footer text-end">
          {author}
        </figcaption>
      </figure>
    </div>
  );
};

export default Quote;

import { useEffect, useState } from 'react';

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
    return <div><h2>Loading...</h2></div>;
  }
  if (error) {
    return <div><h2>{error}</h2></div>;
  }
  return (
    <div>
      <h2>
        &ldquo;
        {quote}
        &ldquo;
      </h2>
      <h3>
        {author}
      </h3>
    </div>
  );
};

export default Quote;

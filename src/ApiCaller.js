import React, { useState } from 'react';

function ApiCaller() {
  const [inputNumber, setInputNumber] = useState(1); // Initial input value is 1
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputNumber}`);
      const result = await response.json();
      console.log('Data fetched:', result)
      setData(result.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokemon API Caller</h1>
      <label>
        Pokemon Number:
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          min="1"
        />
      </label>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Pokemon Data'}
      </button>
      {data && (
        <div>
          <h2>Pokemon Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiCaller;
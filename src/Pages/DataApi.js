import React, { useState, useEffect } from 'react';

const DataApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error('No Data');
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Day 8 DATA:</h1>
      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
         
        ))}
      </ul>
    </div>
  );
};

export default DataApi;
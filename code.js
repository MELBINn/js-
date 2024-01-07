<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Request Example</title>
</head>

<body>
    <h2>Make a GET Request</h2>

    <script>
        // Function to make a GET request
        async function makeGetRequest(pageNumber) {
            
                try {
                             
                             const apiUrl = `https://jsonmock.hackerrank.com/api/countries?page=2`;
                             
                             
                             const response = await fetch(apiUrl);
                             
                             if (!response.ok) {
                                 throw new Error(`HTTP error! Status: ${response.status}`);
                             }
             
                             
                             const data = await response.json();
                             
                             const countries = data.data;
                             
                             const matchingCountry = countries.find((country)=>country. alpha2Code === code)
                             
                             
                             console.log('Result:', matchingCountry);
                         } catch (error) {
                             console.error('Error:', error.message);
                         }
                     }
        
        // Call the function with the desired page number (e.g., page 1)
        makeGetRequest(1);
    </script>
</body>

</html>


import React, { useState } from 'react';

const CountryLanguageForm = () => {
  // State to manage selected country and language
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  
  // State to store submitted values
  const [submittedValues, setSubmittedValues] = useState(null);

  // Handler functions for updating state on dropdown changes
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the submitted values state
    setSubmittedValues({ country: selectedCountry, language: selectedLanguage });
  };

  return (
    <div>
      <h2>Select Country and Language</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Select Country:</label>
        <select id="country" name="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>

        <br />

        <label htmlFor="language">Select Language:</label>
        <select id="language" name="language" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more languages as needed */}
        </select>

        <br />

        <input type="submit" value="Submit" />
      </form>

      {submittedValues && (
        <div>
          <h3>Submitted Values:</h3>
          <p>Selected Country: {submittedValues.country}</p>
          <p>Selected Language: {submittedValues.language}</p>
        </div>
      )}
    </div>
  );
};

export default CountryLanguageForm;

{/* get the data extracted from a response from a get request */}

{/* like countries in a server if we pass a code of country the country must be deliverd as a response */}
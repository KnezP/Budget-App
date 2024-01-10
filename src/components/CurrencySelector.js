import React, { useState } from 'react';

const CurrencySelector = ({ currentCurrency, onCurrencyChange }) => {
  const currencies = [
    { symbol: '$', display: 'Dollar $' },
    { symbol: '€', display: 'Euro €' },
    { symbol: '£', display: 'Pound £' },
    { symbol: '₹', display: 'Rupee ₹' },
  ];

  const [selectedDisplay, setSelectedDisplay] = useState(`Currency${currentCurrency ? ` - ${currentCurrency}` : ''}`);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    const foundCurrency = currencies.find((currency) => currency.symbol === newCurrency);
    if (foundCurrency) {
      setSelectedDisplay(`Currency - ${foundCurrency.display}`);
      onCurrencyChange(newCurrency);
    }
  };

  return (
    <div>
      <select
        id="currency"
        value=""
        onChange={handleCurrencyChange}
        style={{ backgroundColor: '#d0ffd0', color: 'black' }}
      >
        <option value="" disabled>
          {selectedDisplay}
        </option>
        {currencies.map((currency, index) => (
          <option key={index} value={currency.symbol}>
            {currency.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;

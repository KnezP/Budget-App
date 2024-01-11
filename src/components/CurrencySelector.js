import React, { useState } from 'react';
import { useCurrency } from './CurrencyContext';

const CurrencySelector = () => {
  const { currentCurrency, setCurrency } = useCurrency();

  const currencies = [
    { symbol: '$', display: 'Dollar $' },
    { symbol: '€', display: 'Euro €' },
    { symbol: '£', display: 'Pound £' },
    { symbol: '₹', display: 'Rupee ₹' },
  ];

  const [selectedDisplay, setSelectedDisplay] = useState(
    `Currency${currentCurrency ? ` - ${currentCurrency}` : ''}`
  );

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    const foundCurrency = currencies.find((currency) => currency.symbol === newCurrency);
    if (foundCurrency) {
      setSelectedDisplay(`Currency - ${foundCurrency.display}`);
      setCurrency(newCurrency);
    }
  };

  return (
    <div className='alert alert-secondary'>
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

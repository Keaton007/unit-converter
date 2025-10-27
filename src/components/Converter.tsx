'use client';

import React, { useState, useEffect } from 'react';
import { 
  conversionCategories, 
  convertValue, 
  getUnitByName, 
  formatNumber,
  fetchCurrencyRates,
  type ConversionCategory,
  type ConversionUnit 
} from '@/utils/conversions';

const Converter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ConversionCategory>(conversionCategories[0]);
  const [fromUnit, setFromUnit] = useState<ConversionUnit>(conversionCategories[0].units[0]);
  const [toUnit, setToUnit] = useState<ConversionUnit>(conversionCategories[0].units[1]);
  const [inputValue, setInputValue] = useState<string>('1');
  const [result, setResult] = useState<string>('');
  const [funFact, setFunFact] = useState<string>('');
  const [loadingFact, setLoadingFact] = useState<boolean>(false);

  const sanitizeNumericInput = (value: string): string => {
    // Allow users to type thousands separators like commas; strip them for math
    // Also trim spaces to be safe
    return value.replace(/,/g, '').trim();
  };

  // Update result when inputs change
  useEffect(() => {
    const parsed = Number(sanitizeNumericInput(inputValue || ''));
    if (inputValue && inputValue.trim() !== '' && !isNaN(parsed)) {
      const convertedValue = convertValue(parsed, fromUnit, toUnit, selectedCategory);
      setResult(formatNumber(convertedValue));
      // Trigger fun fact only when there is a valid, non-empty value
      const controller = new AbortController();
      const timeout = setTimeout(async () => {
        try {
          setLoadingFact(true);
          const res = await fetch('/api/funfact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              value: parsed,
              fromUnitName: fromUnit.name,
              fromUnitSymbol: fromUnit.symbol,
              toUnitName: toUnit.name,
              toUnitSymbol: toUnit.symbol,
              categoryName: selectedCategory.name,
              resultValue: convertedValue,
            }),
            signal: controller.signal,
          });
          const data = await res.json();
          if (res.ok && data?.fact) {
            setFunFact(data.fact);
          } else {
            setFunFact('');
          }
        } catch (_err) {
          setFunFact('');
        } finally {
          setLoadingFact(false);
        }
      }, 500); // debounce
      return () => {
        controller.abort();
        clearTimeout(timeout);
      };
    } else {
      setResult('');
      setFunFact('');
    }
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  // Reset units when category changes
  useEffect(() => {
    const newFromUnit = selectedCategory.units[0];
    const newToUnit = selectedCategory.units[1];
    setFromUnit(newFromUnit);
    setToUnit(newToUnit);
    if (selectedCategory.name === 'Currency') {
      // Warm the currency rates cache; ignore failures
      fetchCurrencyRates().then(() => {
        const parsed = Number(sanitizeNumericInput(inputValue || ''));
        if (inputValue && inputValue.trim() !== '' && !isNaN(parsed)) {
          const convertedValue = convertValue(parsed, newFromUnit, newToUnit, selectedCategory);
          setResult(formatNumber(convertedValue));
        }
      });
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryName: string) => {
    const category = conversionCategories.find(cat => cat.name === categoryName);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const handleFromUnitChange = (unitName: string) => {
    const unit = getUnitByName(selectedCategory, unitName);
    if (unit) {
      setFromUnit(unit);
    }
  };

  const handleToUnitChange = (unitName: string) => {
    const unit = getUnitByName(selectedCategory, unitName);
    if (unit) {
      setToUnit(unit);
    }
  };

  const swapUnits = () => {
    // Store current values before swapping
    const currentFromUnit = fromUnit;
    const currentToUnit = toUnit;
    const currentInputValue = inputValue;
    const currentResult = result;
    
    // Swap the units
    setFromUnit(currentToUnit);
    setToUnit(currentFromUnit);
    
    // Swap the values only if we have a valid result
    if (currentResult && !isNaN(Number(sanitizeNumericInput(currentResult)))) {
      setInputValue(currentResult);
    }
  };

  const clearInput = () => {
    setInputValue('');
    setResult('');
  };

  const copyToClipboard = async () => {
    if (result) {
      try {
        await navigator.clipboard.writeText(result);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const handleQuickConversion = (fromValue: number, fromUnitName: string, toUnitName: string, categoryName: string) => {
    // Find the category
    const category = conversionCategories.find(cat => cat.name === categoryName);
    if (!category) return;

    // Set the category
    setSelectedCategory(category);

    // Find the units
    const fromUnit = getUnitByName(category, fromUnitName);
    const toUnit = getUnitByName(category, toUnitName);

    if (fromUnit && toUnit) {
      setFromUnit(fromUnit);
      setToUnit(toUnit);
      setInputValue(fromValue.toString());
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'r':
            event.preventDefault();
            swapUnits();
            break;
          case 'k':
            event.preventDefault();
            clearInput();
            break;
          case 'c':
            if (result) {
              event.preventDefault();
              copyToClipboard();
            }
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputValue, fromUnit, toUnit, result]);

  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: string } = {
      'Length': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z',
      'Weight': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      'Temperature': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'Volume': 'M12 2.25c-3.5 3.5-6.75 7.25-6.75 10.5a6.75 6.75 0 1013.5 0c0-3.25-3.25-7-6.75-10.5z',
      'Area': 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      'Speed': 'M13 10V3L4 14h7v7l9-11h-7z',
      'Time': 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      'Data': 'M4 6h16v4H4V6zm0 6h16v6H4v-6z',
      'Pressure': 'M12 6v12m-6-6h12',
      'Energy': 'M13 10V3L4 14h7v7l9-11h-7z'
      , 'Data Rate': 'M3 12h4l3 8 4-16 3 8h4',
      'Currency': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2'
    };
    return icons[categoryName] || 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
  };

  const getCategoryColor = (categoryName: string) => {
    const colors: { [key: string]: string } = {
      'Length': 'text-indigo-500',
      'Weight': 'text-purple-500',
      'Temperature': 'text-red-500',
      'Volume': 'text-blue-500',
      'Area': 'text-lime-600',
      'Speed': 'text-amber-500',
      'Time': 'text-gray-600',
      'Data': 'text-cyan-600',
      'Data Rate': 'text-cyan-600',
      'Pressure': 'text-slate-600',
      'Energy': 'text-yellow-500',
      'Currency': 'text-green-600',
    };
    return colors[categoryName] || 'text-indigo-500';
  };

  type QuickTile = { fromValue: number; fromUnit: string; toUnit: string; title: string; subtitle: string };

  const quickConversionsByCategory: Record<string, QuickTile[]> = {
    'Length': [
      { fromValue: 1, fromUnit: 'Kilometers', toUnit: 'Meters', title: '1 km = 1000 m', subtitle: 'Kilometers to Meters' },
      { fromValue: 1, fromUnit: 'Inches', toUnit: 'Centimeters', title: '1 in ≈ 2.54 cm', subtitle: 'Inches to Centimeters' },
      { fromValue: 1, fromUnit: 'Miles', toUnit: 'Kilometers', title: '1 mi ≈ 1.609 km', subtitle: 'Miles to Kilometers' },
      { fromValue: 10, fromUnit: 'Feet', toUnit: 'Meters', title: '10 ft → m', subtitle: 'Feet to Meters' },
    ],
    'Weight': [
      { fromValue: 1, fromUnit: 'Kilograms', toUnit: 'Pounds', title: '1 kg = 2.20 lbs', subtitle: 'Kilograms to Pounds' },
      { fromValue: 1, fromUnit: 'Ounces', toUnit: 'Grams', title: '1 oz ≈ 28.35 g', subtitle: 'Ounces to Grams' },
    ],
    'Temperature': [
      { fromValue: 0, fromUnit: 'Celsius', toUnit: 'Fahrenheit', title: '0°C = 32°F', subtitle: 'Celsius to Fahrenheit' },
      { fromValue: 32, fromUnit: 'Fahrenheit', toUnit: 'Celsius', title: '32°F = 0°C', subtitle: 'Fahrenheit to Celsius' },
      { fromValue: 0, fromUnit: 'Celsius', toUnit: 'Kelvin', title: '0°C = 273.15 K', subtitle: 'Celsius to Kelvin' },
    ],
    'Volume': [
      { fromValue: 1, fromUnit: 'Liters', toUnit: 'Gallons (US)', title: '1 L ≈ 0.264 gal (US)', subtitle: 'Liters to Gallons' },
      { fromValue: 1, fromUnit: 'Cups', toUnit: 'Milliliters', title: '1 cup ≈ 236.59 mL', subtitle: 'Cups to Milliliters' },
      { fromValue: 1, fromUnit: 'Tablespoons (US)', toUnit: 'Teaspoons (US)', title: '1 tbsp = 3 tsp', subtitle: 'Tablespoons to Teaspoons' },
      { fromValue: 1, fromUnit: 'Gallons (US)', toUnit: 'Liters', title: '1 gal (US) ≈ 3.785 L', subtitle: 'Gallons to Liters' },
    ],
    'Speed': [
      { fromValue: 60, fromUnit: 'Miles per hour', toUnit: 'Kilometers per hour', title: '60 mph → km/h', subtitle: 'Miles per hour to Kilometers per hour' },
      { fromValue: 1, fromUnit: 'Meters per second', toUnit: 'Kilometers per hour', title: '1 m/s → km/h', subtitle: 'Meters per second to km/h' },
      { fromValue: 1, fromUnit: 'Knots', toUnit: 'Miles per hour', title: '1 kn → mph', subtitle: 'Knots to Miles per hour' },
    ],
    'Area': [
      { fromValue: 1, fromUnit: 'Acres', toUnit: 'Hectares', title: '1 ac → ha', subtitle: 'Acres to Hectares' },
      { fromValue: 100, fromUnit: 'Square Feet', toUnit: 'Square Meters', title: '100 ft² ≈ 9.29 m²', subtitle: 'Square Feet to Square Meters' },
    ],
    'Time': [
      { fromValue: 60, fromUnit: 'Minutes', toUnit: 'Hours', title: '60 min = 1 h', subtitle: 'Minutes to Hours' },
      { fromValue: 2, fromUnit: 'Hours', toUnit: 'Minutes', title: '2 h = 120 min', subtitle: 'Hours to Minutes' },
    ],
    'Data': [
      { fromValue: 1024, fromUnit: 'Megabytes (MB)', toUnit: 'Gigabytes (GB)', title: '1024 MB = 1 GB', subtitle: 'Megabytes to Gigabytes' },
    ],
    'Data Rate': [
      { fromValue: 100, fromUnit: 'Megabits per second', toUnit: 'Megabytes per second', title: '100 Mbps → MB/s', subtitle: 'Megabits to Megabytes per second' },
    ],
    'Pressure': [
      { fromValue: 30, fromUnit: 'PSI', toUnit: 'Kilopascals', title: '30 psi → kPa', subtitle: 'PSI to Kilopascals' },
    ],
    'Energy': [
      { fromValue: 1, fromUnit: 'Kilowatt-hours', toUnit: 'Joules', title: '1 kWh = 3,600,000 J', subtitle: 'Kilowatt-hours to Joules' },
    ],
    'Currency': [
      { fromValue: 100, fromUnit: 'US Dollar', toUnit: 'Euro', title: 'USD → EUR', subtitle: '100 USD to Euro' },
      { fromValue: 100, fromUnit: 'US Dollar', toUnit: 'Canadian Dollar', title: 'USD → CAD', subtitle: '100 USD to Canadian Dollar' },
      { fromValue: 100, fromUnit: 'US Dollar', toUnit: 'Mexican Peso', title: 'USD → MXN', subtitle: '100 USD to Mexican Peso' },
    ],
  };

  const isValidInput = inputValue.trim() !== '' && !isNaN(Number(sanitizeNumericInput(inputValue)));

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Convert Anything, Instantly</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Transform measurements, currencies, and units with precision and style. Experience the most intuitive converter ever built.</p>
      </div>

      <div id="category-selector" className="mb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {conversionCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-md ${
                selectedCategory.name === category.name
                  ? 'active bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border'
              }`}
            >
              <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getCategoryIcon(category.name)} />
              </svg>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div id="converter-card" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-up">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{selectedCategory.name} Converter</h3>
          <p className="text-indigo-100">Convert between different {selectedCategory.name.toLowerCase()} measurements</p>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-center gap-6">
            {/* From Section */}
            <div id="from-section" className="space-y-4 w-96">
              <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
              <div className="relative">
                <input 
                  type={selectedCategory.name === 'Currency' ? 'text' : 'number'} 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-4 text-3xl font-semibold border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200" 
                  placeholder="Enter value"
                  inputMode="decimal"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2h-.01z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select 
                  value={fromUnit.name}
                  onChange={(e) => handleFromUnitChange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none font-medium appearance-none cursor-pointer transition-all duration-200"
                >
                  {selectedCategory.units.map((unit) => (
                    <option key={unit.name} value={unit.name}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Swap Button - Centered */}
            <div className="flex items-center justify-center">
              <button 
                onClick={swapUnits}
                className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            {/* To Section */}
            <div id="to-section" className="space-y-4 w-96">
              <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={result || '0'}
                  className="w-full px-4 py-4 text-3xl font-semibold border-2 border-gray-200 rounded-2xl bg-gray-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200" 
                  readOnly
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select 
                  value={toUnit.name}
                  onChange={(e) => handleToUnitChange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none font-medium appearance-none cursor-pointer transition-all duration-200"
                >
                  {selectedCategory.units.map((unit) => (
                    <option key={unit.name} value={unit.name}>
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div id="result-display" className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Conversion Result</h4>
              <p className="text-3xl font-bold text-green-900" id="result-text">
                {isValidInput ? `${inputValue} ${fromUnit.symbol} = ${result} ${toUnit.symbol}` : 'Enter a value to convert'}
              </p>
              <p className="text-sm text-green-600 mt-2" id="result-description">
                {isValidInput ? `${inputValue} ${fromUnit.name} equals ${result} ${toUnit.name}` : ''}
              </p>
            </div>
          </div>

          {/* Fun Fact Section */}
          <div className="mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 shadow-sm text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
                </svg>
                <h4 className="text-sm font-semibold text-blue-800">Fun Fact</h4>
              </div>
              {loadingFact ? (
                <p className="text-blue-700/70 text-sm">Thinking of something interesting...</p>
              ) : funFact ? (
                <p className="text-blue-900 text-sm">{funFact}</p>
              ) : (
                <p className="text-blue-700/60 text-sm">Enter a value to see a fun fact.</p>
              )}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={copyToClipboard}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-200 shadow-lg"
            >
              <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Result
            </button>
            <button 
              onClick={clearInput}
              className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div id="quick-conversions" className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Conversions</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(quickConversionsByCategory[selectedCategory.name] || []).map((qc, idx) => (
            <div
              key={`${selectedCategory.name}-${idx}`}
              className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-200 cursor-pointer"
              onClick={() => handleQuickConversion(qc.fromValue, qc.fromUnit, qc.toUnit, selectedCategory.name)}
            >
              <div className="flex items-center justify-between mb-4">
                <svg className={`w-8 h-8 ${getCategoryColor(selectedCategory.name)}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getCategoryIcon(selectedCategory.name)} />
                </svg>
                <span className="text-sm font-medium text-gray-500">{selectedCategory.name}</span>
              </div>
              <h4 className="font-semibold text-gray-900">{qc.title}</h4>
              <p className="text-sm text-gray-600">{qc.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Converter;

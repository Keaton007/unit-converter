'use client';

import React, { useState, useEffect } from 'react';
import { 
  conversionCategories, 
  convertValue, 
  getUnitByName, 
  formatNumber,
  type ConversionCategory,
  type ConversionUnit 
} from '@/utils/conversions';

const Converter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ConversionCategory>(conversionCategories[0]);
  const [fromUnit, setFromUnit] = useState<ConversionUnit>(conversionCategories[0].units[0]);
  const [toUnit, setToUnit] = useState<ConversionUnit>(conversionCategories[0].units[1]);
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  // Update result when inputs change
  useEffect(() => {
    if (inputValue && !isNaN(Number(inputValue))) {
      const convertedValue = convertValue(Number(inputValue), fromUnit, toUnit, selectedCategory);
      setResult(formatNumber(convertedValue));
    } else {
      setResult('');
    }
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  // Reset units when category changes
  useEffect(() => {
    const newFromUnit = selectedCategory.units[0];
    const newToUnit = selectedCategory.units[1];
    setFromUnit(newFromUnit);
    setToUnit(newToUnit);
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
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    // Also swap the input value if there's a valid result
    if (inputValue && !isNaN(Number(inputValue))) {
      const currentResult = convertValue(Number(inputValue), fromUnit, toUnit, selectedCategory);
      setInputValue(result);
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
        // You could add a toast notification here if desired
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Unit Converter
        </h2>
        <p className="text-gray-600">
          Convert between different units instantly
        </p>
      </div>

      <div className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory.name}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
          >
            {conversionCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Conversion Inputs */}
        <div className="space-y-6">
          {/* Unit Selection Row */}
          <div className="flex items-center gap-4">
            {/* From Unit Selection */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={fromUnit.name}
                onChange={(e) => handleFromUnitChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                {selectedCategory.units.map((unit) => (
                  <option key={unit.name} value={unit.name}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex items-center">
              <button
                onClick={swapUnits}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
                title="Swap units (Ctrl+R)"
              >
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>

            {/* To Unit Selection */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toUnit.name}
                onChange={(e) => handleToUnitChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                {selectedCategory.units.map((unit) => (
                  <option key={unit.name} value={unit.name}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Value Input and Result Row */}
          <div className="flex items-center gap-4">
            {/* Input Value */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Value
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                />
                {inputValue && (
                  <button
                    onClick={clearInput}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Clear (Ctrl+K)"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="flex items-center">
              <div className="p-3 text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            {/* Result */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg bg-gray-50 text-lg text-gray-700">
                  {result || '0'}
                </div>
                {result && (
                  <button
                    onClick={copyToClipboard}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy result to clipboard"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Formula Display */}
        {inputValue && !isNaN(Number(inputValue)) && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg animate-fade-in">
            <p className="text-sm text-blue-800">
              <span className="font-medium">{inputValue}</span> {fromUnit.symbol} = <span className="font-medium">{result}</span> {toUnit.symbol}
            </p>
          </div>
        )}

        {/* Keyboard Shortcuts Help */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Keyboard Shortcuts</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Swap units:</span>
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Ctrl+R</kbd>
            </div>
            <div className="flex justify-between">
              <span>Clear input:</span>
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Ctrl+K</kbd>
            </div>
            <div className="flex justify-between">
              <span>Copy result:</span>
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Ctrl+C</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;

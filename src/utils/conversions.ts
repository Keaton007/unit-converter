// Conversion utility functions for different unit types

export interface ConversionUnit {
  name: string;
  symbol: string;
  factor: number; // Conversion factor to base unit
}

export interface ConversionCategory {
  name: string;
  units: ConversionUnit[];
  baseUnit: string;
}

// Length conversions (base unit: meters)
export const lengthUnits: ConversionCategory = {
  name: 'Length',
  baseUnit: 'meters',
  units: [
    { name: 'Meters', symbol: 'm', factor: 1 },
    { name: 'Kilometers', symbol: 'km', factor: 1000 },
    { name: 'Centimeters', symbol: 'cm', factor: 0.01 },
    { name: 'Millimeters', symbol: 'mm', factor: 0.001 },
    { name: 'Miles', symbol: 'mi', factor: 1609.344 },
    { name: 'Feet', symbol: 'ft', factor: 0.3048 },
    { name: 'Inches', symbol: 'in', factor: 0.0254 },
    { name: 'Yards', symbol: 'yd', factor: 0.9144 },
  ],
};

// Weight conversions (base unit: kilograms)
export const weightUnits: ConversionCategory = {
  name: 'Weight',
  baseUnit: 'kilograms',
  units: [
    { name: 'Kilograms', symbol: 'kg', factor: 1 },
    { name: 'Grams', symbol: 'g', factor: 0.001 },
    { name: 'Pounds', symbol: 'lbs', factor: 0.453592 },
    { name: 'Ounces', symbol: 'oz', factor: 0.0283495 },
    { name: 'Tons', symbol: 't', factor: 1000 },
    { name: 'Stone', symbol: 'st', factor: 6.35029 },
  ],
};

// Temperature conversions (special case - no base unit)
export const temperatureUnits: ConversionCategory = {
  name: 'Temperature',
  baseUnit: 'celsius',
  units: [
    { name: 'Celsius', symbol: '°C', factor: 1 },
    { name: 'Fahrenheit', symbol: '°F', factor: 1 },
    { name: 'Kelvin', symbol: 'K', factor: 1 },
  ],
};

// Volume conversions (base unit: liters)
export const volumeUnits: ConversionCategory = {
  name: 'Volume',
  baseUnit: 'liters',
  units: [
    { name: 'Liters', symbol: 'L', factor: 1 },
    { name: 'Milliliters', symbol: 'mL', factor: 0.001 },
    { name: 'Gallons (US)', symbol: 'gal', factor: 3.78541 },
    { name: 'Gallons (UK)', symbol: 'gal', factor: 4.54609 },
    { name: 'Cups', symbol: 'cup', factor: 0.236588 },
    { name: 'Fluid Ounces', symbol: 'fl oz', factor: 0.0295735 },
    { name: 'Pints', symbol: 'pt', factor: 0.473176 },
    { name: 'Quarts', symbol: 'qt', factor: 0.946353 },
  ],
};

export const conversionCategories: ConversionCategory[] = [
  lengthUnits,
  weightUnits,
  temperatureUnits,
  volumeUnits,
];

// Generic conversion function for most units
export function convertValue(
  value: number,
  fromUnit: ConversionUnit,
  toUnit: ConversionUnit,
  category: ConversionCategory
): number {
  if (category.name === 'Temperature') {
    return convertTemperature(value, fromUnit.name, toUnit.name);
  }

  // Convert to base unit first, then to target unit
  const baseValue = value * fromUnit.factor;
  const result = baseValue / toUnit.factor;
  
  return Math.round(result * 1000000) / 1000000; // Round to 6 decimal places
}

// Special temperature conversion function
function convertTemperature(value: number, from: string, to: string): number {
  let celsius: number;

  // Convert to Celsius first
  switch (from) {
    case 'Celsius':
      celsius = value;
      break;
    case 'Fahrenheit':
      celsius = (value - 32) * (5 / 9);
      break;
    case 'Kelvin':
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target unit
  switch (to) {
    case 'Celsius':
      return Math.round(celsius * 100) / 100;
    case 'Fahrenheit':
      return Math.round((celsius * (9 / 5) + 32) * 100) / 100;
    case 'Kelvin':
      return Math.round((celsius + 273.15) * 100) / 100;
    default:
      return celsius;
  }
}

// Get unit by name from a category
export function getUnitByName(category: ConversionCategory, unitName: string): ConversionUnit | undefined {
  return category.units.find(unit => unit.name === unitName);
}

// Format number for display
export function formatNumber(num: number): string {
  if (num === 0) return '0';
  if (Math.abs(num) < 0.000001) return num.toExponential(2);
  if (Math.abs(num) >= 1000000) return num.toExponential(2);
  return num.toLocaleString();
}

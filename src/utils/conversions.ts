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

// Live currency rates cache (base: USD)
let liveCurrencyRates: Record<string, number> | null = null;

// Fetch live currency rates from a free API (no key required)
export async function fetchCurrencyRates(): Promise<Record<string, number> | null> {
  try {
    if (liveCurrencyRates) return liveCurrencyRates;
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) return liveCurrencyRates;
    const data = await res.json();
    if (data && data.result === 'success' && data.rates) {
      liveCurrencyRates = data.rates as Record<string, number>;
      return liveCurrencyRates;
    }
    // Fallback: exchangerate.host
    const res2 = await fetch('https://api.exchangerate.host/latest?base=USD');
    if (!res2.ok) return liveCurrencyRates;
    const data2 = await res2.json();
    if (data2 && data2.rates) {
      liveCurrencyRates = data2.rates as Record<string, number>;
      return liveCurrencyRates;
    }
  } catch (_err) {
    // Ignore network errors; we'll fall back to static factors
  }
  return liveCurrencyRates;
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
    { name: 'Micrometers', symbol: 'µm', factor: 1e-6 },
    { name: 'Nanometers', symbol: 'nm', factor: 1e-9 },
    { name: 'Nautical Miles', symbol: 'nmi', factor: 1852 },
    { name: 'Furlongs', symbol: 'fur', factor: 201.168 },
    { name: 'Astronomical Units', symbol: 'AU', factor: 149597870700 },
    { name: 'Light Years', symbol: 'ly', factor: 9.4607304725808e15 },
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
    { name: 'Cubic Meters', symbol: 'm³', factor: 1000 },
    { name: 'Cubic Centimeters', symbol: 'cm³', factor: 0.001 },
    { name: 'Cubic Inches', symbol: 'in³', factor: 0.016387064 },
    { name: 'Cubic Feet', symbol: 'ft³', factor: 28.316846592 },
    { name: 'Tablespoons (US)', symbol: 'tbsp', factor: 0.0147868 },
    { name: 'Teaspoons (US)', symbol: 'tsp', factor: 0.00492892 },
    { name: 'Barrels (Oil)', symbol: 'bbl', factor: 158.987294928 },
  ],
};

// Area conversions (base unit: square meters)
export const areaUnits: ConversionCategory = {
  name: 'Area',
  baseUnit: 'square meters',
  units: [
    { name: 'Square Meters', symbol: 'm²', factor: 1 },
    { name: 'Square Kilometers', symbol: 'km²', factor: 1000000 },
    { name: 'Square Centimeters', symbol: 'cm²', factor: 0.0001 },
    { name: 'Square Millimeters', symbol: 'mm²', factor: 0.000001 },
    { name: 'Hectares', symbol: 'ha', factor: 10000 },
    { name: 'Acres', symbol: 'ac', factor: 4046.8564224 },
    { name: 'Square Miles', symbol: 'mi²', factor: 2589988.110336 },
    { name: 'Square Yards', symbol: 'yd²', factor: 0.83612736 },
    { name: 'Square Feet', symbol: 'ft²', factor: 0.09290304 },
    { name: 'Square Inches', symbol: 'in²', factor: 0.00064516 },
  ],
};

// Speed conversions (base unit: meters per second)
export const speedUnits: ConversionCategory = {
  name: 'Speed',
  baseUnit: 'meters per second',
  units: [
    { name: 'Meters per second', symbol: 'm/s', factor: 1 },
    { name: 'Kilometers per hour', symbol: 'km/h', factor: 0.2777777778 },
    { name: 'Miles per hour', symbol: 'mph', factor: 0.44704 },
    { name: 'Knots', symbol: 'kn', factor: 0.514444 },
    { name: 'Feet per second', symbol: 'ft/s', factor: 0.3048 },
    { name: 'Kilometers per second', symbol: 'km/s', factor: 1000 },
    { name: 'Meters per minute', symbol: 'm/min', factor: 1 / 60 },
    { name: 'Kilometers per minute', symbol: 'km/min', factor: 1000 / 60 },
    { name: 'Mach (approx.)', symbol: 'Ma', factor: 340.29 },
    { name: 'Speed of light fraction', symbol: 'c', factor: 299792458 },
  ],
};

// Data Rate conversions (base unit: bits per second)
export const dataRateUnits: ConversionCategory = {
  name: 'Data Rate',
  baseUnit: 'bits per second',
  units: [
    { name: 'Bits per second', symbol: 'bps', factor: 1 },
    { name: 'Kilobits per second', symbol: 'kbps', factor: 1000 },
    { name: 'Megabits per second', symbol: 'Mbps', factor: 1_000_000 },
    { name: 'Gigabits per second', symbol: 'Gbps', factor: 1_000_000_000 },
    { name: 'Bytes per second', symbol: 'B/s', factor: 8 },
    { name: 'Kilobytes per second', symbol: 'KB/s', factor: 8_000 },
    { name: 'Megabytes per second', symbol: 'MB/s', factor: 8_000_000 },
    { name: 'Gigabytes per second', symbol: 'GB/s', factor: 8_000_000_000 },
  ],
};

// Currency conversions (base unit: USD)
export const currencyUnits: ConversionCategory = {
  name: 'Currency',
  baseUnit: 'USD',
  units: [
    { name: 'US Dollar', symbol: 'USD', factor: 1 },
    { name: 'Euro', symbol: 'EUR', factor: 1.08 },
    { name: 'British Pound', symbol: 'GBP', factor: 1.27 },
    { name: 'Japanese Yen', symbol: 'JPY', factor: 0.0068 },
    { name: 'Canadian Dollar', symbol: 'CAD', factor: 0.73 },
    { name: 'Australian Dollar', symbol: 'AUD', factor: 0.66 },
    { name: 'Swiss Franc', symbol: 'CHF', factor: 1.09 },
    { name: 'Chinese Yuan', symbol: 'CNY', factor: 0.137 },
    { name: 'Indian Rupee', symbol: 'INR', factor: 0.012 },
    { name: 'Bitcoin', symbol: 'BTC', factor: 68000 },
    { name: 'Mexican Peso', symbol: 'MXN', factor: 0.058 },
    { name: 'Philippine Peso', symbol: 'PHP', factor: 0.018 },
    { name: 'Chilean Peso', symbol: 'CLP', factor: 0.0011 },
    { name: 'Colombian Peso', symbol: 'COP', factor: 0.00024 },
    { name: 'Argentine Peso', symbol: 'ARS', factor: 0.001 },
    { name: 'Brazilian Real', symbol: 'BRL', factor: 0.19 },
    { name: 'New Zealand Dollar', symbol: 'NZD', factor: 0.6 },
    { name: 'Singapore Dollar', symbol: 'SGD', factor: 0.73 },
    { name: 'Hong Kong Dollar', symbol: 'HKD', factor: 0.128 },
    { name: 'South African Rand', symbol: 'ZAR', factor: 0.055 },
    { name: 'Swedish Krona', symbol: 'SEK', factor: 0.089 },
    { name: 'Norwegian Krone', symbol: 'NOK', factor: 0.09 },
    { name: 'Danish Krone', symbol: 'DKK', factor: 0.14 },
    { name: 'Turkish Lira', symbol: 'TRY', factor: 0.03 },
    { name: 'Thai Baht', symbol: 'THB', factor: 0.0275 },
    { name: 'Malaysian Ringgit', symbol: 'MYR', factor: 0.21 },
    { name: 'Indonesian Rupiah', symbol: 'IDR', factor: 0.000062 },
    { name: 'UAE Dirham', symbol: 'AED', factor: 0.272 },
    { name: 'Saudi Riyal', symbol: 'SAR', factor: 0.266 },
    { name: 'Russian Ruble', symbol: 'RUB', factor: 0.011 },
    { name: 'Polish Zloty', symbol: 'PLN', factor: 0.25 },
    { name: 'Czech Koruna', symbol: 'CZK', factor: 0.043 },
  ],
};

function convertCurrency(value: number, from: string, to: string): number {
  const rates = liveCurrencyRates;
  // If live rates are available, compute via USD base
  if (rates && rates['USD']) {
    let valueInUsd: number;
    if (from === 'USD') {
      valueInUsd = value;
    } else if (rates[from]) {
      valueInUsd = value / rates[from];
    } else {
      // Unknown in live rates; fall back to static factors
      const fromUnit = currencyUnits.units.find(u => u.symbol === from);
      valueInUsd = fromUnit ? value * fromUnit.factor : value;
    }

    if (to === 'USD') {
      return Math.round(valueInUsd * 1000000) / 1000000;
    }
    if (rates[to]) {
      const result = valueInUsd * rates[to];
      return Math.round(result * 1000000) / 1000000;
    }
    const toUnit = currencyUnits.units.find(u => u.symbol === to);
    const fallback = toUnit ? valueInUsd / (1 / toUnit.factor) : valueInUsd;
    return Math.round(fallback * 1000000) / 1000000;
  }

  // Fallback to static factors (approximate)
  const fromUnit = currencyUnits.units.find(u => u.symbol === from);
  const toUnit = currencyUnits.units.find(u => u.symbol === to);
  if (!fromUnit || !toUnit) return value;
  const baseValue = value * fromUnit.factor; // to USD (base)
  const result = baseValue / toUnit.factor; // from USD to target
  return Math.round(result * 1000000) / 1000000;
}

// Time conversions (base unit: seconds)
export const timeUnits: ConversionCategory = {
  name: 'Time',
  baseUnit: 'seconds',
  units: [
    { name: 'Seconds', symbol: 's', factor: 1 },
    { name: 'Minutes', symbol: 'min', factor: 60 },
    { name: 'Hours', symbol: 'h', factor: 3600 },
    { name: 'Days', symbol: 'd', factor: 86400 },
    { name: 'Weeks', symbol: 'wk', factor: 604800 },
    { name: 'Months (avg)', symbol: 'mo', factor: 2629800 },
    { name: 'Years (avg)', symbol: 'yr', factor: 31557600 },
  ],
};

// Data conversions (base unit: bytes)
export const dataUnits: ConversionCategory = {
  name: 'Data',
  baseUnit: 'bytes',
  units: [
    { name: 'Bits', symbol: 'b', factor: 0.125 },
    { name: 'Bytes', symbol: 'B', factor: 1 },
    { name: 'Kilobytes (KB)', symbol: 'KB', factor: 1024 },
    { name: 'Megabytes (MB)', symbol: 'MB', factor: 1024 * 1024 },
    { name: 'Gigabytes (GB)', symbol: 'GB', factor: 1024 * 1024 * 1024 },
    { name: 'Terabytes (TB)', symbol: 'TB', factor: 1024 * 1024 * 1024 * 1024 },
  ],
};

// Pressure conversions (base unit: pascals)
export const pressureUnits: ConversionCategory = {
  name: 'Pressure',
  baseUnit: 'pascals',
  units: [
    { name: 'Pascals', symbol: 'Pa', factor: 1 },
    { name: 'Kilopascals', symbol: 'kPa', factor: 1000 },
    { name: 'Bar', symbol: 'bar', factor: 100000 },
    { name: 'Atmospheres', symbol: 'atm', factor: 101325 },
    { name: 'PSI', symbol: 'psi', factor: 6894.757293168 },
    { name: 'Millimeters of mercury', symbol: 'mmHg', factor: 133.322368 },
  ],
};

// Energy conversions (base unit: joules)
export const energyUnits: ConversionCategory = {
  name: 'Energy',
  baseUnit: 'joules',
  units: [
    { name: 'Joules', symbol: 'J', factor: 1 },
    { name: 'Kilojoules', symbol: 'kJ', factor: 1000 },
    { name: 'Calories', symbol: 'cal', factor: 4.184 },
    { name: 'Kilocalories', symbol: 'kcal', factor: 4184 },
    { name: 'Watt-hours', symbol: 'Wh', factor: 3600 },
    { name: 'Kilowatt-hours', symbol: 'kWh', factor: 3600000 },
    { name: 'Electronvolts', symbol: 'eV', factor: 1.602176634e-19 },
  ],
};

export const conversionCategories: ConversionCategory[] = [
  lengthUnits,
  weightUnits,
  temperatureUnits,
  volumeUnits,
  areaUnits,
  speedUnits,
  timeUnits,
  dataUnits,
  dataRateUnits,
  pressureUnits,
  energyUnits,
  currencyUnits,
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
  if (category.name === 'Currency') {
    return convertCurrency(value, fromUnit.symbol, toUnit.symbol);
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

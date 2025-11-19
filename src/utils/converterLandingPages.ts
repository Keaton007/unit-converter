export interface ConverterLandingPage {
  slug: string;
  title: string;
  summary: string;
  category: string;
  fromUnit: string;
  toUnit: string;
  heroStat: string;
  heroContext: string;
  steps: string[];
  formula: {
    expression: string;
    explanation: string;
    tip?: string;
  };
  scenarioHighlights: {
    title: string;
    description: string;
  }[];
  quickTable: {
    input: string;
    output: string;
    context: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
}

export const converterLandingPages: ConverterLandingPage[] = [
  {
    slug: 'meters-to-feet',
    title: 'Meters to Feet Converter Guide',
    summary:
      'Architects and DIY builders often need to translate metric plans into imperial measurements. Use this walkthrough to convert meters to feet with confidence.',
    category: 'Length',
    fromUnit: 'Meters',
    toUnit: 'Feet',
    heroStat: '1 meter = 3.28084 feet',
    heroContext: 'Multiply your measurement in meters by 3.28084 to get feet.',
    steps: [
      'Open the UnitFlow converter and pick the Length category.',
      'Select Meters in the “From” dropdown and Feet in the “To” dropdown.',
      'Enter the value in meters. The result updates instantly in feet.',
      'Use the swap button if you need to go from feet back to meters.',
    ],
    formula: {
      expression: 'feet = meters × 3.28084',
      explanation:
        'The meter is the SI base unit of length. One foot equals 0.3048 meters, so inverting that factor yields 3.28084.',
      tip: 'For quick head math, 1 m ≈ 3.28 ft, and 10 m ≈ 32.8 ft.',
    },
    scenarioHighlights: [
      {
        title: 'Job-site layout',
        description: 'Converting 12.5 meters to feet helps US-based teams cut lumber correctly (12.5 m ≈ 41.01 ft).',
      },
      {
        title: 'Ceiling heights',
        description: 'Many European apartments list 2.7 m ceilings, which equals ~8.86 ft for US renovation crews.',
      },
    ],
    quickTable: [
      { input: '1 m', output: '3.2808 ft', context: 'Base conversion factor' },
      { input: '5 m', output: '16.4042 ft', context: 'Small room dimension' },
      { input: '25 m', output: '82.0209 ft', context: 'Swimming pool length' },
      { input: '100 m', output: '328.084 ft', context: 'Track straightaway' },
    ],
    faqs: [
      {
        question: 'Is a meter exactly 3.28 feet?',
        answer:
          'Not exactly. One foot is precisely 0.3048 meters by international agreement, which means one meter equals 3.28084 feet. Rounding to 3.28 is fine for rough estimates.',
      },
      {
        question: 'What about inches?',
        answer: 'Multiply meters by 39.3701 to get inches. For example, 2 m ≈ 78.74 inches.',
      },
    ],
    keywords: ['meters to feet', 'convert meters feet', 'metric to imperial length'],
  },
  {
    slug: 'kilograms-to-pounds',
    title: 'Kilograms to Pounds Converter Guide',
    summary:
      'Track fitness progress or ship international packages by converting kilograms to pounds with the standard 2.20462 multiplier.',
    category: 'Weight',
    fromUnit: 'Kilograms',
    toUnit: 'Pounds',
    heroStat: '1 kilogram = 2.20462 pounds',
    heroContext: 'Multiply the mass in kilograms by 2.20462 to see pounds.',
    steps: [
      'Choose the Weight category in the UnitFlow converter.',
      'Set Kilograms as the source unit and Pounds as the target unit.',
      'Enter your kilogram value to instantly view pounds.',
      'Tap Copy Result to share with nutrition apps or shipping forms.',
    ],
    formula: {
      expression: 'pounds = kilograms × 2.20462',
      explanation:
        'The pound is defined as 0.45359237 kilograms. Dividing 1 by 0.45359237 gives 2.20462 pounds per kilogram.',
      tip: 'For kitchen math, round to 2.2 for speed. A 5 kg bag of flour weighs about 11 lb.',
    },
    scenarioHighlights: [
      {
        title: 'Strength training',
        description: 'A 100 kg deadlift equals 220.46 lb, which is handy when US gyms list plates in pounds.',
      },
      {
        title: 'Parcel logistics',
        description: 'If a package weighs 8 kg, most US carriers need to know it is 17.64 lb for rate tables.',
      },
    ],
    quickTable: [
      { input: '1 kg', output: '2.2046 lb', context: 'Single kilogram reference' },
      { input: '5 kg', output: '11.023 lb', context: 'Produce bag or dumbbell set' },
      { input: '20 kg', output: '44.092 lb', context: 'Checked luggage limit' },
      { input: '90 kg', output: '198.416 lb', context: 'Average adult weight' },
    ],
    faqs: [
      {
        question: 'Why does the factor use so many decimals?',
        answer:
          'Because the pound is defined exactly in terms of kilograms, keeping six decimals avoids drift when converting large loads.',
      },
      {
        question: 'Do stones follow the same method?',
        answer: 'Yes. First convert kilograms to pounds, then divide by 14 to get stones.',
      },
    ],
    keywords: ['kilograms to pounds', 'kg to lb calculator', 'metric weight conversion'],
  },
  {
    slug: 'celsius-to-fahrenheit',
    title: 'Celsius to Fahrenheit Converter Guide',
    summary:
      'Travelers, meteorologists, and cooks often jump between Celsius and Fahrenheit. This page shows the formula and shortcuts.',
    category: 'Temperature',
    fromUnit: 'Celsius',
    toUnit: 'Fahrenheit',
    heroStat: '°F = (°C × 9/5) + 32',
    heroContext: 'Multiply Celsius by 9/5 (or 1.8) and add 32 to get Fahrenheit.',
    steps: [
      'Choose the Temperature category inside the converter.',
      'Enter your Celsius value in the input field.',
      'Pick Fahrenheit as the target unit to view the converted temperature.',
      'Use Kelvin for scientific work because the tool handles zero-offset math for you.',
    ],
    formula: {
      expression: 'fahrenheit = (celsius × 1.8) + 32',
      explanation:
        'Fahrenheit degrees are smaller than Celsius degrees. The slopes differ by 9/5, while the intercept (32) aligns the freezing point of water.',
      tip: 'Quick rule: double the °C value and add 30 for an approximate °F reading when speed matters.',
    },
    scenarioHighlights: [
      {
        title: 'Cooking abroad',
        description: 'A recipe calling for 180°C equates to 356°F, so set US ovens accordingly.',
      },
      {
        title: 'Weather planning',
        description: 'If a forecast lists 5°C, that is 41°F, so bundle up for morning commutes.',
      },
    ],
    quickTable: [
      { input: '-10°C', output: '14°F', context: 'Winter storm' },
      { input: '0°C', output: '32°F', context: 'Freezing point of water' },
      { input: '20°C', output: '68°F', context: 'Room temperature' },
      { input: '37°C', output: '98.6°F', context: 'Average human body temperature' },
    ],
    faqs: [
      {
        question: 'Why does 0°C equal 32°F?',
        answer:
          'Because Daniel Fahrenheit set 32° as the point where fresh water freezes. Anders Celsius used 0° for the same event, so the offset is baked into the formula.',
      },
      {
        question: 'What about negative numbers?',
        answer: 'The same formula works. Multiply the negative Celsius value by 1.8 and add 32.',
      },
    ],
    keywords: ['celsius to fahrenheit', '°C to °F conversion', 'temperature formula'],
  },
  {
    slug: 'liters-to-gallons',
    title: 'Liters to Gallons Converter Guide',
    summary:
      'Beverage companies and home cooks often compare metric liters to US or UK gallons. This guide shows both options and provides kitchen-ready charts.',
    category: 'Volume',
    fromUnit: 'Liters',
    toUnit: 'Gallons (US)',
    heroStat: '1 liter = 0.264172 US gallons',
    heroContext: 'Multiply liters by 0.264172 for US gallons, or 0.219969 for UK gallons.',
    steps: [
      'Select the Volume category.',
      'Choose Liters in the “From” field and Gallons (US) or Gallons (UK) in the “To” field.',
      'Enter the volume you want to convert and results update immediately.',
      'Switch to cups, quarts, or milliliters using the dropdowns for recipe scaling.',
    ],
    formula: {
      expression: 'us gallons = liters × 0.264172',
      explanation:
        'A US liquid gallon contains 231 cubic inches, which equals 3.78541 liters. Dividing 1 by 3.78541 yields 0.264172.',
      tip: 'To approximate quickly, remember that 4 liters is just over 1 gallon (1.056 gal).',
    },
    scenarioHighlights: [
      {
        title: 'Craft beverage batching',
        description: 'Converting 50 L brewing batches to US gallons (50 L ≈ 13.21 gal) simplifies US labeling.',
      },
      {
        title: 'Recipe scaling',
        description: 'A 3 L soup recipe uses about 0.79 gal for US stock pots.',
      },
    ],
    quickTable: [
      { input: '1 L', output: '0.2642 gal (US)', context: 'Water bottle' },
      { input: '5 L', output: '1.3209 gal (US)', context: 'Small beverage keg' },
      { input: '10 L', output: '2.6417 gal (US)', context: 'Bulk cooking' },
      { input: '25 L', output: '6.6043 gal (US)', context: 'Craft brewery pilot batch' },
    ],
    faqs: [
      {
        question: 'Is a UK gallon larger?',
        answer:
          'Yes. The imperial gallon equals 4.54609 liters, so multiply liters by 0.219969 when working with UK measurements.',
      },
      {
        question: 'How many cups are in a liter?',
        answer: '1 liter equals roughly 4.22675 US cups. Use the converter’s dropdown to jump directly.',
      },
    ],
    keywords: ['liters to gallons', 'L to gal conversion', 'metric to imperial volume'],
  },
  {
    slug: 'psi-to-kpa',
    title: 'PSI to Kilopascals Converter Guide',
    summary:
      'Technicians outside the US often need PSI readings expressed in kilopascals for manuals and regulatory paperwork. This page covers the conversion and safety ranges.',
    category: 'Pressure',
    fromUnit: 'PSI',
    toUnit: 'Kilopascals',
    heroStat: '1 PSI = 6.89476 kilopascals',
    heroContext: 'Multiply PSI by 6.89476 to get kPa.',
    steps: [
      'Switch the converter to the Pressure category.',
      'Set PSI (pounds per square inch) as the source unit and Kilopascals as the destination.',
      'Input the PSI reading from your gauge to see the equivalent kPa.',
      'Use the quick conversions list for common tire and HVAC pressures.',
    ],
    formula: {
      expression: 'kPa = psi × 6.89476',
      explanation:
        'The pascal equals one newton per square meter. Because 1 psi equals 6,894.757 Pa, dividing by 1,000 produces kilopascals.',
      tip: 'For tire checks, 32 psi is about 220.6 kPa. Multiply psi by 7 for a quick ballpark.',
    },
    scenarioHighlights: [
      {
        title: 'Automotive service',
        description: 'Canadian manuals list tire pressures in kPa. A sticker showing 240 kPa should read about 34.8 psi.',
      },
      {
        title: 'HVAC systems',
        description: 'Technicians balancing refrigerant lines often convert 120 psi suction pressure to ~827 kPa.',
      },
    ],
    quickTable: [
      { input: '15 psi', output: '103.42 kPa', context: 'Scuba tank near empty' },
      { input: '32 psi', output: '220.63 kPa', context: 'Passenger vehicle tire' },
      { input: '65 psi', output: '448.16 kPa', context: 'Highway truck tire' },
      { input: '120 psi', output: '827.37 kPa', context: 'HVAC line pressure example' },
    ],
    faqs: [
      {
        question: 'Are kPa and bar related?',
        answer: 'Yes. 1 bar equals 100 kPa. Divide kPa by 100 to get bar, or multiply psi by 0.06895.',
      },
      {
        question: 'How precise do I need to be?',
        answer: 'Safety-critical systems should keep four decimal places during calculations, even if gauges display whole numbers.',
      },
    ],
    keywords: ['psi to kpa', 'pressure conversion', 'tire pressure kpa'],
  },
  {
    slug: 'usd-to-eur',
    title: 'USD to EUR Converter Guide',
    summary:
      'Freelancers, travelers, and importers often plan budgets months in advance. Learn how UnitFlow sources USD → EUR rates and how to forecast fees.',
    category: 'Currency',
    fromUnit: 'US Dollar',
    toUnit: 'Euro',
    heroStat: 'Live rate updated hourly',
    heroContext: 'UnitFlow fetches USD → EUR rates from open.er-api.com and exchangerate.host with automatic fallbacks.',
    steps: [
      'Choose the Currency category in the converter.',
      'Set US Dollar as the source currency and Euro as the target currency.',
      'Enter the USD amount. The converter fetches the latest available rate and shows EUR.',
      'Use Copy Result to paste into invoices or budgeting sheets.',
    ],
    formula: {
      expression: 'EUR = USD × current_rate',
      explanation:
        'Because exchange rates fluctuate, we cache the most recent successful API response for six hours. When offline, we fall back to a manual rate published on the page.',
      tip: 'Add 2-3% to cover bank or card fees when budgeting trips.',
    },
    scenarioHighlights: [
      {
        title: 'Remote work invoices',
        description: 'If you earn $2,500 USD, converting to EUR helps EU clients understand the amount (≈ €2,300 at 0.92).',
      },
      {
        title: 'Travel budgets',
        description: 'Plan daily spending by converting $150 USD to approximately €138 at recent averages.',
      },
    ],
    quickTable: [
      { input: '$100', output: '≈ €92', context: 'Souvenir budget (rate 0.92)' },
      { input: '$500', output: '≈ €460', context: 'Weekend getaway' },
      { input: '$1,000', output: '≈ €920', context: 'Monthly rent deposit' },
      { input: '$5,000', output: '≈ €4,600', context: 'Invoice for creative services' },
    ],
    faqs: [
      {
        question: 'How fresh are the rates?',
        answer:
          'We call two public APIs every time you open the converter. If neither responds, we display the last known rate timestamp so you can verify with your bank.',
      },
      {
        question: 'Do you store my currency data?',
        answer: 'No. Inputs remain in your browser. Only anonymized conversion metadata is cached for 6 hours to limit API calls.',
      },
    ],
    keywords: ['usd to eur', 'dollar to euro', 'currency conversion guide'],
  },
  {
    slug: 'cups-to-milliliters',
    title: 'Cups to Milliliters Converter Guide',
    summary:
      'From US cups to metric milliliters, this guide helps bakers and beverage teams convert recipes accurately, including spoons, ounces, and pinch-level shortcuts.',
    category: 'Cooking',
    fromUnit: 'Cups (US)',
    toUnit: 'Milliliters',
    heroStat: '1 US cup = 236.588 milliliters',
    heroContext: 'Multiply the number of cups by 236.588 to get milliliters (or 250 for the metric cup).',
    steps: [
      'Select the Cooking category in the converter.',
      'Choose Cups (US) in the “From” dropdown and Milliliters in the “To” dropdown.',
      'Enter the number of cups from your recipe to see the equivalent milliliters.',
      'Use the quick conversions to jump straight to tablespoons, teaspoons, or fluid ounces.',
    ],
    formula: {
      expression: 'milliliters = cups × 236.588',
      explanation:
        'A US legal cup is defined as 240 mL for nutrition labels, but recipes and measuring cups typically use 236.588 mL. We rely on the latter for consistency with standard kitchenware.',
      tip: 'If you are following an Australian or metric cookbook, use 250 mL per cup. The converter includes “Cups (Metric)” for that scenario.',
    },
    scenarioHighlights: [
      {
        title: 'International baking',
        description: 'Convert European cake recipes to US kitchenware or vice versa without grabbing a calculator mid-bake.',
      },
      {
        title: 'Beverage batching',
        description: 'Scale cocktails, salad dressings, or sauce batches by switching between cups, ounces, and milliliters.',
      },
    ],
    quickTable: [
      { input: '⅛ cup', output: '≈ 29.57 mL', context: 'Splash of cream or spirits' },
      { input: '¼ cup', output: '≈ 59.15 mL', context: 'Sauce reductions' },
      { input: '½ cup', output: '≈ 118.29 mL', context: 'Baking wet ingredients' },
      { input: '2 cups', output: '≈ 473.18 mL', context: 'Broth or soup additions' },
    ],
    faqs: [
      {
        question: 'Why do some cups equal 240 mL and others 236.588 mL?',
        answer:
          'Nutrition labels in the US use a rounded 240 mL, but most measuring cups and cookbooks follow the traditional 8 US fluid ounces per cup (236.588 mL). Always follow the standard your recipe specifies; otherwise, stick with 236.588 mL for accuracy.',
      },
      {
        question: 'How many tablespoons are in a cup?',
        answer: 'One US cup contains 16 tablespoons. Multiply cups by 16 to get tablespoons, or by 48 to get teaspoons.',
      },
      {
        question: 'Can I convert directly to grams?',
        answer: 'Grams depend on ingredient density. Use this converter for volume conversions, then consult ingredient-specific charts (e.g., flour vs. sugar) for gram equivalents.',
      },
    ],
    keywords: ['cups to milliliters', 'cooking converter', 'cup to ml', 'kitchen measurement conversion'],
  },
];

export function getConverterLanding(slug: string): ConverterLandingPage | undefined {
  return converterLandingPages.find((page) => page.slug === slug);
}


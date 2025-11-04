// Educational content for each unit category

export interface CategoryEducation {
  categoryName: string;
  overview: string;
  history: string;
  applications: string[];
  interestingFacts: string[];
  relatedUnits: string;
}

export const categoryEducation: Record<string, CategoryEducation> = {
  'Length': {
    categoryName: 'Length',
    overview: 'Length measurement is one of the most fundamental concepts in physics and everyday life. It quantifies the distance between two points and has been essential for trade, construction, navigation, and scientific research throughout human history.',
    history: 'The meter, the base unit of length in the metric system, was originally defined in 1793 by the French Academy of Sciences as one ten-millionth of the distance from the North Pole to the Equator. Today, it\'s defined as the distance light travels in a vacuum in 1/299,792,458 of a second. The imperial system (feet, inches, yards) evolved from ancient Roman measurements and was standardized in England in the Middle Ages. The foot was based on the human foot, while the yard was originally the length of a belt or girdle.',
    applications: [
      'Construction and architecture: Measuring building dimensions, room sizes, and material quantities',
      'Navigation: GPS coordinates, map distances, and route planning rely on accurate length measurements',
      'Manufacturing: Precision engineering requires exact measurements in millimeters or micrometers',
      'Sports: Track and field events, swimming pools, and playing fields all depend on precise length measurements',
      'Science: Astronomical distances measured in light-years, atomic structures in nanometers',
      'Everyday tasks: Measuring furniture, clothing sizes, and personal height'
    ],
    interestingFacts: [
      'The Great Wall of China is approximately 21,196 kilometers (13,171 miles) long',
      'A light-year is about 9.46 trillion kilometers - the distance light travels in one year',
      'Human hair is roughly 0.1 millimeters thick, while a sheet of paper is about 0.1 millimeters',
      'The meter was originally intended to be based on the Earth\'s circumference'
    ],
    relatedUnits: 'Length measurements often relate to area (square meters) and volume (cubic meters) for calculating space and capacity.'
  },
  'Weight': {
    categoryName: 'Weight',
    overview: 'Weight, or mass, measures how much matter an object contains. While mass is constant regardless of location, weight can vary with gravity. These measurements are crucial in science, commerce, cooking, and daily life.',
    history: 'The kilogram, the base unit of mass, was originally defined by a platinum-iridium cylinder kept in Paris called the "International Prototype Kilogram." In 2019, it was redefined using Planck\'s constant. The pound originated from Roman libra (balance scales) and was standardized in medieval England as 16 ounces. In ancient times, merchants used stones, grains, and seeds as weight standards, which is why we still use terms like "stone" and "grain."',
    applications: [
      'Cooking and baking: Precise measurements are essential for recipes, with grams and ounces being most common',
      'Shipping and logistics: Package weights determine shipping costs and transportation capacity',
      'Health and fitness: Body weight monitoring, portion control, and nutritional tracking',
      'Manufacturing: Quality control requires exact weight specifications for products',
      'Science and research: Laboratory measurements often require precision to the milligram',
      'Retail and commerce: Product pricing and inventory management depend on accurate weight measurements'
    ],
    interestingFacts: [
      'The kilogram is the only SI base unit still defined by a physical artifact (though recently changed)',
      'A US dollar bill weighs approximately 1 gram',
      'An average adult human brain weighs about 1.4 kilograms (3 pounds)',
      'The heaviest recorded pumpkin weighed over 1,226 kilograms (2,703 pounds)'
    ],
    relatedUnits: 'Weight relates to force (newtons) through gravity and to density (mass per volume) in scientific calculations.'
  },
  'Temperature': {
    categoryName: 'Temperature',
    overview: 'Temperature measures the average kinetic energy of particles in a substance - essentially, how hot or cold something is. It\'s fundamental to physics, chemistry, meteorology, and everyday comfort.',
    history: 'The Celsius scale was developed by Anders Celsius in 1742, originally with 0° for boiling water and 100° for freezing (later reversed). Fahrenheit, created by Daniel Fahrenheit in 1724, set 0° at the coldest temperature he could achieve with a salt-ice mixture. Kelvin, named after Lord Kelvin, was developed in 1848 as an absolute temperature scale starting from absolute zero (-273.15°C), where molecular motion theoretically stops.',
    applications: [
      'Meteorology: Weather forecasting and climate monitoring depend on accurate temperature readings',
      'Cooking: Oven temperatures, meat doneness, and candy-making require precise temperature control',
      'Medicine: Body temperature is a key vital sign for diagnosing illness and monitoring health',
      'Industry: Manufacturing processes require specific temperatures for materials like steel, glass, and chemicals',
      'HVAC systems: Heating and cooling systems maintain comfortable indoor temperatures',
      'Science: Chemical reactions, phase changes, and material properties all depend on temperature'
    ],
    interestingFacts: [
      'Absolute zero (-273.15°C or 0K) is the theoretical lowest possible temperature',
      'Water boils at 100°C (212°F) at sea level, but at higher altitudes it boils at lower temperatures',
      'Normal human body temperature is 37°C (98.6°F), though it can vary throughout the day',
      'The surface of the Sun reaches about 5,500°C (9,932°F)'
    ],
    relatedUnits: 'Temperature is closely related to heat energy (joules, calories) and thermal expansion measurements.'
  },
  'Volume': {
    categoryName: 'Volume',
    overview: 'Volume measures the three-dimensional space that a substance occupies. It\'s essential for liquids, gases, and bulk materials, playing a critical role in cooking, chemistry, construction, and shipping.',
    history: 'The liter was defined in 1795 as one cubic decimeter (1 dm³). The gallon has a complex history: the US gallon (3.785 L) differs from the imperial gallon (4.546 L) used in the UK. These differences date back to different wine gallon standards in England. Ancient civilizations used containers like amphorae and barrels, standardizing volumes based on practical trade needs. The fluid ounce and cup measurements evolved from household cooking containers.',
    applications: [
      'Cooking and baking: Recipe measurements, liquid ingredients, and portion sizing',
      'Beverage industry: Bottle sizes, serving volumes, and packaging standards',
      'Construction: Concrete and material volume calculations for building projects',
      'Chemistry and medicine: Precise volume measurements for solutions and dosages',
      'Shipping and storage: Container capacities and cargo volume calculations',
      'Automotive: Engine displacement measured in liters (e.g., 2.0L engine)'
    ],
    interestingFacts: [
      'One milliliter of water weighs exactly one gram at standard temperature and pressure',
      'A US gallon is smaller than a UK imperial gallon by about 20%',
      'The Great Lakes contain approximately 22,671 cubic kilometers of water',
      'A standard Olympic swimming pool holds about 2.5 million liters of water'
    ],
    relatedUnits: 'Volume connects to length (cubic meters) and relates to capacity and mass through density calculations.'
  },
  'Area': {
    categoryName: 'Area',
    overview: 'Area measures the two-dimensional space within a boundary - how much surface something covers. It\'s fundamental to real estate, agriculture, construction, and geographic measurements.',
    history: 'The hectare (10,000 square meters) was adopted in 1795 during the French Revolution. The acre originally represented the amount of land a yoke of oxen could plow in one day. Square measurements evolved from length units. A square foot is literally a square with one-foot sides. Ancient civilizations developed area measurements for taxation, agriculture, and property rights, often based on practical units like the amount of land needed to support a family.',
    applications: [
      'Real estate: Property sizes, lot measurements, and land valuation',
      'Construction: Floor plans, roofing, painting, and material coverage calculations',
      'Agriculture: Farm field sizes, crop yields per acre/hectare, and land management',
      'Interior design: Room sizes, carpeting, and furniture placement',
      'Geography: Country sizes, city areas, and environmental studies',
      'Manufacturing: Material surface area for cutting, coating, and packaging'
    ],
    interestingFacts: [
      'One acre equals approximately 43,560 square feet or about the size of an American football field',
      'Russia is the largest country by area at over 17 million square kilometers',
      'A square mile contains 640 acres',
      'The hectare is commonly used worldwide except in the United States, which primarily uses acres'
    ],
    relatedUnits: 'Area is derived from length (square units) and relates to volume through height in three-dimensional calculations.'
  },
  'Speed': {
    categoryName: 'Speed',
    overview: 'Speed measures how fast an object moves. The rate of change of position over time. It\'s crucial in transportation, sports, physics, and technology, determining everything from vehicle performance to internet connections.',
    history: 'The meter per second became standard with the metric system. Miles per hour originated from measuring travel time in horse-drawn carriages. Knots, still used in aviation and maritime navigation, comes from sailors using a "chip log". They would take a rope with knots tied at regular intervals and throw it overboard to measure ship speed. The term "knot" originally meant the number of knots passing through a sailor\'s hands in a timed period.',
    applications: [
      'Transportation: Vehicle speed limits, aircraft velocity, and navigation systems',
      'Sports: Track and field events, swimming speeds, and athletic performance metrics',
      'Technology: Internet connection speeds measured in megabits per second (Mbps)',
      'Physics and engineering: Calculating forces, energy, and motion in mechanical systems',
      'Meteorology: Wind speeds, storm tracking, and weather prediction',
      'Manufacturing: Production line speeds and machine operation rates'
    ],
    interestingFacts: [
      'The speed of light in a vacuum is approximately 299,792,458 meters per second',
      'Sound travels at about 343 meters per second (1,235 km/h) in air at sea level',
      'The fastest land animal, the cheetah, can reach speeds of up to 120 km/h (75 mph)',
      'One knot equals approximately 1.852 kilometers per hour or 1.151 miles per hour'
    ],
    relatedUnits: 'Speed relates to distance (length) and time, and connects to acceleration and force in physics calculations.'
  },
  'Time': {
    categoryName: 'Time',
    overview: 'Time is the continuous progression of events from past through present to future. While time itself may be a fundamental dimension, its measurement in seconds, minutes, and hours structures human life and scientific understanding.',
    history: 'The second was originally defined as 1/86,400 of a mean solar day. In 1967, it was redefined using the oscillation frequency of cesium-133 atoms, making it one of the most precise measurements. Minutes and hours come from ancient Babylonian mathematics based on 60 (sexagesimal system). Days, weeks, and months align with astronomical cycles - Earth\'s rotation, moon phases, and seasonal patterns. The seven-day week has religious and cultural origins spanning thousands of years.',
    applications: [
      'Daily life: Scheduling, appointments, and time management',
      'Science and research: Precise timing for experiments, astronomical observations, and physics calculations',
      'Transportation: Timetables, travel duration, and logistics coordination',
      'Technology: Computer processing, network latency, and system performance',
      'Sports: Race times, game duration, and performance metrics',
      'Business: Work hours, project timelines, and productivity measurement'
    ],
    interestingFacts: [
      'A second is defined by 9,192,631,770 oscillations of a cesium-133 atom',
      'A day on Earth is gradually getting longer by about 1.7 milliseconds per century',
      'A year is approximately 365.25 days, which is why we have leap years',
      'The week is one of the oldest human time measurements, used by ancient civilizations'
    ],
    relatedUnits: 'Time connects to speed (distance/time), frequency (cycles/time), and is fundamental to all rate calculations.'
  },
  'Data': {
    categoryName: 'Data',
    overview: 'Data storage measures digital information capacity - how much information can be stored in computer systems. From single bits to terabytes, these measurements are fundamental to modern technology.',
    history: 'The bit (binary digit) was coined by Claude Shannon in 1948. A byte (8 bits) was standardized in the 1960s. Kilobyte, megabyte, and gigabyte prefixes follow the metric system (kilo=1000), though computer systems often use binary (1024) multipliers. The confusion between decimal (1000) and binary (1024) led to separate units like kibibyte (KiB) for binary measurements. Storage capacity has grown exponentially: from kilobytes in the 1970s to terabytes today.',
    applications: [
      'Computing: Hard drive capacity, RAM size, and file storage',
      'Digital media: Photo, video, and audio file sizes',
      'Cloud storage: Online storage services and data backup',
      'Software development: Program sizes, database capacities, and system requirements',
      'Mobile devices: Smartphone storage, app sizes, and download limits',
      'Internet: Data transfer limits and bandwidth usage'
    ],
    interestingFacts: [
      'One terabyte can store approximately 250,000 photos, 500 hours of HD video, or 17,000 hours of music',
      'A single character of text typically requires 1 byte (8 bits) of storage',
      'The first 1GB hard drive (1980) weighed 550 pounds and cost $40,000',
      'A standard DVD holds about 4.7 GB, while a Blu-ray disc holds 25-50 GB'
    ],
    relatedUnits: 'Data storage relates to data rate (transfer speed) and connects to information theory and computer architecture.'
  },
  'Data Rate': {
    categoryName: 'Data Rate',
    overview: 'Data rate measures how quickly digital information transfers, the speed of data transmission over networks. It determines internet speeds, download times, and streaming quality in our connected world.',
    history: 'Data rates evolved with telecommunications. Early modems transferred data at 300 bits per second (bps) in the 1960s. Broadband standards emerged in the 1990s, with DSL and cable providing megabits per second (Mbps). Fiber optic technology now enables gigabits per second (Gbps) speeds. The distinction between bits per second (bps) and bytes per second (B/s) comes from network protocols that transfer data in bits, while storage is measured in bytes.',
    applications: [
      'Internet connectivity: Home broadband, mobile data, and Wi-Fi speeds',
      'Streaming media: Video quality (SD, HD, 4K) requires different data rates',
      'File downloads: Download time calculations depend on data rate',
      'Gaming: Online gaming requires low latency and stable data rates',
      'Video conferencing: Bandwidth requirements for video calls',
      'Cloud services: Data synchronization and backup speeds'
    ],
    interestingFacts: [
      '5G networks can theoretically reach speeds up to 10 Gbps (10,000 Mbps)',
      'A typical HD video stream requires about 5-8 Mbps, while 4K needs 25-50 Mbps',
      'Fiber optic cables can transmit data at nearly the speed of light',
      'Early dial-up internet operated at 56 kbps - about 1,800 times slower than modern broadband'
    ],
    relatedUnits: 'Data rate combines data (bits/bytes) with time, determining how quickly information can be transmitted or received.'
  },
  'Pressure': {
    categoryName: 'Pressure',
    overview: 'Pressure measures force per unit area - how much force is applied over a given surface. It\'s crucial in physics, engineering, meteorology, and many practical applications from tire inflation to deep-sea diving.',
    history: 'The pascal, named after Blaise Pascal, was adopted in 1971. PSI (pounds per square inch) comes from the imperial system and remains common in the US. The bar (approximately atmospheric pressure) was introduced in the early 1900s for meteorology. Atmospheric pressure was first measured by Evangelista Torricelli using mercury in 1643, leading to the invention of the barometer. Pressure measurements became critical with the Industrial Revolution and steam engine development.',
    applications: [
      'Automotive: Tire pressure for safety and fuel efficiency',
      'Aviation: Cabin pressurization and altimeter readings',
      'Meteorology: Weather forecasting using barometric pressure',
      'Scuba diving: Depth measurements and decompression calculations',
      'Medical: Blood pressure monitoring and respiratory therapy',
      'Industrial: Hydraulic systems, pneumatic tools, and process control'
    ],
    interestingFacts: [
      'At sea level, atmospheric pressure is about 101,325 pascals (101.3 kPa or 14.7 PSI)',
      'At the bottom of the Mariana Trench (deepest ocean point), pressure reaches about 1,100 atmospheres',
      'Blood pressure is measured in millimeters of mercury (mmHg), with normal being around 120/80',
      'Car tires typically need 30-35 PSI, while bicycle tires require 60-100 PSI'
    ],
    relatedUnits: 'Pressure relates to force (newtons) and area (square meters), and connects to volume in gas laws (Boyle\'s law).'
  },
  'Energy': {
    categoryName: 'Energy',
    overview: 'Energy measures the capacity to do work - the ability to cause change or motion. From the food we eat to electricity powering our devices, energy is fundamental to all physical processes and human civilization.',
    history: 'The joule, named after James Prescott Joule, was adopted in 1889. The calorie was defined in the 19th century as the heat needed to raise 1 gram of water by 1°C. The kilowatt-hour (kWh) emerged with electricity distribution in the late 1800s. Energy concepts evolved from ancient ideas about "force" and "motion" to the modern understanding that energy can neither be created nor destroyed, only transformed (conservation of energy).',
    applications: [
      'Electricity: Household energy consumption measured in kilowatt-hours (kWh)',
      'Nutrition: Food energy content measured in calories or kilocalories',
      'Physics: Mechanical work, heat transfer, and kinetic/potential energy calculations',
      'Renewable energy: Solar panel output and battery storage capacity',
      'Transportation: Fuel efficiency and vehicle energy requirements',
      'Exercise: Calorie burn during physical activity and metabolism'
    ],
    interestingFacts: [
      'One calorie (food calorie) is actually 1,000 calories (1 kilocalorie) in scientific terms',
      'A typical AA battery stores about 10,000 joules of energy',
      'The average US household uses approximately 900 kWh of electricity per month',
      'Einstein\'s famous equation E=mc² shows that mass itself is a form of energy'
    ],
    relatedUnits: 'Energy relates to power (watts = joules/second), work (force × distance), and connects to mass through E=mc².'
  },
  'Currency': {
    categoryName: 'Currency',
    overview: 'Currency represents the medium of exchange for goods and services. While not a physical unit like length or weight, currency conversion is essential for international trade, travel, and global economics.',
    history: 'Currency systems date back thousands of years, evolving from barter to coins (Lydia, 7th century BCE) to paper money (China, 7th century CE). The US dollar became the world\'s reserve currency after World War II with the Bretton Woods agreement. Exchange rates fluctuate based on economic factors, inflation, interest rates, and geopolitical events. Modern digital currencies like Bitcoin represent a new evolution in monetary systems. The Euro, introduced in 1999, unified currencies across multiple European nations.',
    applications: [
      'International trade: Converting prices between different national currencies',
      'Travel: Understanding purchasing power and exchange rates when abroad',
      'Investment: Foreign exchange (forex) trading and international portfolio management',
      'E-commerce: Online purchases from international sellers',
      'Remittances: Sending money across borders to family and friends',
      'Business: Multinational corporations managing operations in different currencies'
    ],
    interestingFacts: [
      'Exchange rates fluctuate constantly based on supply, demand, and economic indicators',
      'The British Pound Sterling is one of the world\'s oldest currencies still in use',
      'Cryptocurrencies like Bitcoin operate without central bank control',
      'Some countries use the US dollar as their official currency (dollarization)'
    ],
    relatedUnits: 'Currency relates to economics, purchasing power, and can be compared through exchange rates and purchasing power parity (PPP).'
  }
};



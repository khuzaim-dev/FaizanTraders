import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const makes = [
  { make: 'Toyota', models: ['Prius', 'Aqua', 'Land Cruiser', 'Raize', 'Yaris', 'Yaris Cross'] },
  { make: 'Suzuki', models: ['Alto', 'Wagon R'] },
  { make: 'Nissan', models: ['Dayz', 'Note'] },
  { make: 'Daihatsu', models: ['Hijet Truck'] },
  { make: 'Audi', models: ['Q2'] },
  { make: 'BMW', models: ['2 Series'] }
];

const bodyTypes = ['Sedan', 'Hatchback', 'SUV', 'Van', 'Kei Car', 'Truck'];
const grades = ['3.5', '4.0', '4.5', '5.0', 'R', 'RA'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cars = [];

for (let i = 1; i <= 100; i++) {
  const makeObj = getRandomItem(makes);
  const make = makeObj.make;
  const model = getRandomItem(makeObj.models);
  const year = getRandomNumber(2015, 2023);
  const mileageKm = getRandomNumber(5000, 120000);
  const pricePkr = (getRandomNumber(15, 120) * 100000).toLocaleString(); // e.g. 15,00,000 to 1,20,00,000
  const isFeatured = i <= 20; // First 20 are featured

  let bType = 'Sedan';
  if (['Prius', 'Aqua', 'Note', 'Yaris'].includes(model)) bType = 'Hatchback';
  if (['Land Cruiser', 'Raize', 'Q2', 'Yaris Cross'].includes(model)) bType = 'SUV';
  if (['Alto', 'Wagon R', 'Dayz'].includes(model)) bType = 'Kei Car';
  if (['Hijet Truck'].includes(model)) bType = 'Truck';

  let fuel = 'Petrol';
  if (['Prius', 'Aqua'].includes(model)) fuel = 'Hybrid';
  if (getRandomNumber(1, 4) === 1 && fuel !== 'Electric') fuel = 'Hybrid'; // Randomly make some hybrid

  const modelImages = {
    'Prius': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2026-05-25/0_87858300_1779731357/1.jpg',
    'Aqua': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260710/aqua/6a50d6aa1a8db/aqua-920-0.jpeg',
    'Land Cruiser': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260709/land-cruiser-prado/6a4f03316fd07/land-cruiser-prado-33204-0.jpeg',
    'Alto': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg',
    'Dayz': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg',
    'Wagon R': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg',
    'Raize': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/raize/2026-05-15/0_54573900_1778828057/1.jpg',
    'Note': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg',
    'Yaris': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/yaris/2025-07-15/0_54532100_1752560423/1.jpg',
    'Q2': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg',
    '2 Series': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg',
    'Hijet Truck': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg',
    'Yaris Cross': 'https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg'
  };

  const imageUrl = modelImages[model] || modelImages['default'];

  cars.push({
    id: `car-${i.toString().padStart(3, '0')}`,
    make,
    model,
    year,
    bodyType: bType,
    mileageKm,
    auctionGrade: getRandomItem(grades),
    price: `PKR ${pricePkr}`,
    transmission: getRandomNumber(1, 10) > 8 ? 'Manual' : 'Automatic',
    fuelType: fuel,
    images: [imageUrl],
    featured: isFeatured,
  });
}

const fileContent = `
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  bodyType: string;
  mileageKm: number;
  auctionGrade?: string;
  price: string;
  transmission: string;
  fuelType: string;
  images: string[];
  featured?: boolean;
}

export const cars: Car[] = ${JSON.stringify(cars, null, 2)};
`;

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(path.join(dataDir, 'cars.ts'), fileContent.trim());
console.log('Successfully generated 100 car entries in data/cars.ts');

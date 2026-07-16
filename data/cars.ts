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

export const cars: Car[] = [
  {
    "id": "car-001",
    "make": "Nissan",
    "model": "Note",
    "year": 2020,
    "bodyType": "Hatchback",
    "mileageKm": 50116,
    "auctionGrade": "4.0",
    "price": "PKR 7,800,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": true
  },
  {
    "id": "car-002",
    "make": "Nissan",
    "model": "Note",
    "year": 2015,
    "bodyType": "Hatchback",
    "mileageKm": 102732,
    "auctionGrade": "4.5",
    "price": "PKR 11,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": true
  },
  {
    "id": "car-003",
    "make": "BMW",
    "model": "2 Series",
    "year": 2019,
    "bodyType": "Sedan",
    "mileageKm": 55179,
    "auctionGrade": "RA",
    "price": "PKR 2,200,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-004",
    "make": "Audi",
    "model": "Q2",
    "year": 2015,
    "bodyType": "SUV",
    "mileageKm": 21375,
    "auctionGrade": "5.0",
    "price": "PKR 2,100,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-005",
    "make": "BMW",
    "model": "2 Series",
    "year": 2018,
    "bodyType": "Sedan",
    "mileageKm": 52718,
    "auctionGrade": "5.0",
    "price": "PKR 11,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-006",
    "make": "Audi",
    "model": "Q2",
    "year": 2019,
    "bodyType": "SUV",
    "mileageKm": 35079,
    "auctionGrade": "RA",
    "price": "PKR 4,500,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-007",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2016,
    "bodyType": "Kei Car",
    "mileageKm": 62238,
    "auctionGrade": "4.0",
    "price": "PKR 3,100,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-008",
    "make": "Nissan",
    "model": "Note",
    "year": 2022,
    "bodyType": "Hatchback",
    "mileageKm": 20781,
    "auctionGrade": "3.5",
    "price": "PKR 1,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": true
  },
  {
    "id": "car-009",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 97636,
    "auctionGrade": "3.5",
    "price": "PKR 2,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-010",
    "make": "Toyota",
    "model": "Aqua",
    "year": 2015,
    "bodyType": "Hatchback",
    "mileageKm": 49046,
    "auctionGrade": "4.5",
    "price": "PKR 9,500,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260710/aqua/6a50d6aa1a8db/aqua-920-0.jpeg"
    ],
    "featured": true
  },
  {
    "id": "car-011",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2023,
    "bodyType": "Kei Car",
    "mileageKm": 32860,
    "auctionGrade": "R",
    "price": "PKR 5,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-012",
    "make": "BMW",
    "model": "2 Series",
    "year": 2018,
    "bodyType": "Sedan",
    "mileageKm": 101611,
    "auctionGrade": "5.0",
    "price": "PKR 9,700,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-013",
    "make": "Audi",
    "model": "Q2",
    "year": 2021,
    "bodyType": "SUV",
    "mileageKm": 82896,
    "auctionGrade": "5.0",
    "price": "PKR 2,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-014",
    "make": "Audi",
    "model": "Q2",
    "year": 2020,
    "bodyType": "SUV",
    "mileageKm": 28630,
    "auctionGrade": "5.0",
    "price": "PKR 11,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-015",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2018,
    "bodyType": "SUV",
    "mileageKm": 72785,
    "auctionGrade": "4.5",
    "price": "PKR 6,500,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-016",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2016,
    "bodyType": "Kei Car",
    "mileageKm": 40500,
    "auctionGrade": "RA",
    "price": "PKR 7,900,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-017",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2018,
    "bodyType": "Kei Car",
    "mileageKm": 84768,
    "auctionGrade": "3.5",
    "price": "PKR 2,300,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-018",
    "make": "BMW",
    "model": "2 Series",
    "year": 2019,
    "bodyType": "Sedan",
    "mileageKm": 102377,
    "auctionGrade": "RA",
    "price": "PKR 9,200,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-019",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2018,
    "bodyType": "Kei Car",
    "mileageKm": 117816,
    "auctionGrade": "4.5",
    "price": "PKR 9,500,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-020",
    "make": "BMW",
    "model": "2 Series",
    "year": 2021,
    "bodyType": "Sedan",
    "mileageKm": 46643,
    "auctionGrade": "RA",
    "price": "PKR 9,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": true
  },
  {
    "id": "car-021",
    "make": "Nissan",
    "model": "Note",
    "year": 2019,
    "bodyType": "Hatchback",
    "mileageKm": 99228,
    "auctionGrade": "4.5",
    "price": "PKR 10,500,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-022",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 53968,
    "auctionGrade": "4.5",
    "price": "PKR 2,000,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-023",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 22557,
    "auctionGrade": "5.0",
    "price": "PKR 5,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-024",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2018,
    "bodyType": "Kei Car",
    "mileageKm": 74226,
    "auctionGrade": "4.5",
    "price": "PKR 3,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-025",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2018,
    "bodyType": "Truck",
    "mileageKm": 64803,
    "auctionGrade": "4.0",
    "price": "PKR 10,200,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-026",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2022,
    "bodyType": "Truck",
    "mileageKm": 74096,
    "auctionGrade": "RA",
    "price": "PKR 2,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-027",
    "make": "Nissan",
    "model": "Note",
    "year": 2020,
    "bodyType": "Hatchback",
    "mileageKm": 6567,
    "auctionGrade": "R",
    "price": "PKR 8,800,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-028",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 95193,
    "auctionGrade": "4.0",
    "price": "PKR 9,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-029",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2022,
    "bodyType": "Truck",
    "mileageKm": 102537,
    "auctionGrade": "RA",
    "price": "PKR 8,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-030",
    "make": "Toyota",
    "model": "Raize",
    "year": 2018,
    "bodyType": "SUV",
    "mileageKm": 45928,
    "auctionGrade": "RA",
    "price": "PKR 2,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/raize/2026-05-15/0_54573900_1778828057/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-031",
    "make": "Audi",
    "model": "Q2",
    "year": 2017,
    "bodyType": "SUV",
    "mileageKm": 17973,
    "auctionGrade": "RA",
    "price": "PKR 11,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-032",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2017,
    "bodyType": "Truck",
    "mileageKm": 9657,
    "auctionGrade": "5.0",
    "price": "PKR 8,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-033",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2016,
    "bodyType": "Kei Car",
    "mileageKm": 103595,
    "auctionGrade": "RA",
    "price": "PKR 8,300,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-034",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2021,
    "bodyType": "Kei Car",
    "mileageKm": 116588,
    "auctionGrade": "3.5",
    "price": "PKR 7,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-035",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2022,
    "bodyType": "Kei Car",
    "mileageKm": 52717,
    "auctionGrade": "3.5",
    "price": "PKR 4,600,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-036",
    "make": "Audi",
    "model": "Q2",
    "year": 2019,
    "bodyType": "SUV",
    "mileageKm": 24385,
    "auctionGrade": "RA",
    "price": "PKR 2,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-037",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2019,
    "bodyType": "Truck",
    "mileageKm": 118068,
    "auctionGrade": "4.5",
    "price": "PKR 5,400,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-038",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2019,
    "bodyType": "SUV",
    "mileageKm": 117129,
    "auctionGrade": "4.0",
    "price": "PKR 2,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-039",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2016,
    "bodyType": "Kei Car",
    "mileageKm": 7601,
    "auctionGrade": "3.5",
    "price": "PKR 8,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-040",
    "make": "Audi",
    "model": "Q2",
    "year": 2017,
    "bodyType": "SUV",
    "mileageKm": 96562,
    "auctionGrade": "4.5",
    "price": "PKR 5,200,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-041",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2018,
    "bodyType": "Kei Car",
    "mileageKm": 58098,
    "auctionGrade": "4.0",
    "price": "PKR 3,700,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-042",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 109241,
    "auctionGrade": "4.0",
    "price": "PKR 4,400,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-043",
    "make": "Audi",
    "model": "Q2",
    "year": 2017,
    "bodyType": "SUV",
    "mileageKm": 58026,
    "auctionGrade": "3.5",
    "price": "PKR 3,600,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-044",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 115590,
    "auctionGrade": "3.5",
    "price": "PKR 10,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-045",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2017,
    "bodyType": "SUV",
    "mileageKm": 63620,
    "auctionGrade": "R",
    "price": "PKR 5,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-046",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2017,
    "bodyType": "Truck",
    "mileageKm": 91255,
    "auctionGrade": "5.0",
    "price": "PKR 5,500,000",
    "transmission": "Manual",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-047",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 31750,
    "auctionGrade": "5.0",
    "price": "PKR 7,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-048",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2022,
    "bodyType": "Kei Car",
    "mileageKm": 10688,
    "auctionGrade": "R",
    "price": "PKR 9,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-049",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 23396,
    "auctionGrade": "5.0",
    "price": "PKR 11,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-050",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2016,
    "bodyType": "Kei Car",
    "mileageKm": 75087,
    "auctionGrade": "R",
    "price": "PKR 2,400,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-051",
    "make": "Toyota",
    "model": "Yaris",
    "year": 2019,
    "bodyType": "Hatchback",
    "mileageKm": 116334,
    "auctionGrade": "5.0",
    "price": "PKR 2,500,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/yaris/2025-07-15/0_54532100_1752560423/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-052",
    "make": "Nissan",
    "model": "Note",
    "year": 2019,
    "bodyType": "Hatchback",
    "mileageKm": 56387,
    "auctionGrade": "4.0",
    "price": "PKR 2,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-053",
    "make": "BMW",
    "model": "2 Series",
    "year": 2016,
    "bodyType": "Sedan",
    "mileageKm": 86568,
    "auctionGrade": "RA",
    "price": "PKR 8,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-054",
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2018,
    "bodyType": "SUV",
    "mileageKm": 36030,
    "auctionGrade": "3.5",
    "price": "PKR 8,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260709/land-cruiser-prado/6a4f03316fd07/land-cruiser-prado-33204-0.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-055",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2015,
    "bodyType": "Kei Car",
    "mileageKm": 45809,
    "auctionGrade": "R",
    "price": "PKR 5,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-056",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2017,
    "bodyType": "Kei Car",
    "mileageKm": 57176,
    "auctionGrade": "R",
    "price": "PKR 9,000,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-057",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2019,
    "bodyType": "Truck",
    "mileageKm": 6515,
    "auctionGrade": "3.5",
    "price": "PKR 2,600,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-058",
    "make": "Audi",
    "model": "Q2",
    "year": 2023,
    "bodyType": "SUV",
    "mileageKm": 58098,
    "auctionGrade": "RA",
    "price": "PKR 9,800,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-059",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2023,
    "bodyType": "Kei Car",
    "mileageKm": 65562,
    "auctionGrade": "4.0",
    "price": "PKR 4,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-060",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2018,
    "bodyType": "Truck",
    "mileageKm": 51289,
    "auctionGrade": "3.5",
    "price": "PKR 11,700,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-061",
    "make": "Audi",
    "model": "Q2",
    "year": 2019,
    "bodyType": "SUV",
    "mileageKm": 60178,
    "auctionGrade": "3.5",
    "price": "PKR 8,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-062",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2017,
    "bodyType": "Kei Car",
    "mileageKm": 101548,
    "auctionGrade": "4.0",
    "price": "PKR 3,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-063",
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2016,
    "bodyType": "SUV",
    "mileageKm": 25146,
    "auctionGrade": "4.5",
    "price": "PKR 8,700,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260709/land-cruiser-prado/6a4f03316fd07/land-cruiser-prado-33204-0.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-064",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2022,
    "bodyType": "Kei Car",
    "mileageKm": 73312,
    "auctionGrade": "RA",
    "price": "PKR 8,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-065",
    "make": "BMW",
    "model": "2 Series",
    "year": 2020,
    "bodyType": "Sedan",
    "mileageKm": 84347,
    "auctionGrade": "5.0",
    "price": "PKR 7,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-066",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2022,
    "bodyType": "Kei Car",
    "mileageKm": 18933,
    "auctionGrade": "4.0",
    "price": "PKR 9,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-067",
    "make": "BMW",
    "model": "2 Series",
    "year": 2017,
    "bodyType": "Sedan",
    "mileageKm": 85571,
    "auctionGrade": "4.0",
    "price": "PKR 8,600,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-068",
    "make": "Audi",
    "model": "Q2",
    "year": 2023,
    "bodyType": "SUV",
    "mileageKm": 115891,
    "auctionGrade": "4.5",
    "price": "PKR 10,100,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-069",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2023,
    "bodyType": "Kei Car",
    "mileageKm": 60376,
    "auctionGrade": "R",
    "price": "PKR 11,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-070",
    "make": "Toyota",
    "model": "Raize",
    "year": 2020,
    "bodyType": "SUV",
    "mileageKm": 90313,
    "auctionGrade": "3.5",
    "price": "PKR 7,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/raize/2026-05-15/0_54573900_1778828057/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-071",
    "make": "BMW",
    "model": "2 Series",
    "year": 2016,
    "bodyType": "Sedan",
    "mileageKm": 68766,
    "auctionGrade": "4.5",
    "price": "PKR 6,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-072",
    "make": "BMW",
    "model": "2 Series",
    "year": 2023,
    "bodyType": "Sedan",
    "mileageKm": 112621,
    "auctionGrade": "5.0",
    "price": "PKR 11,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-073",
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2015,
    "bodyType": "SUV",
    "mileageKm": 11758,
    "auctionGrade": "R",
    "price": "PKR 6,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260709/land-cruiser-prado/6a4f03316fd07/land-cruiser-prado-33204-0.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-074",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 67756,
    "auctionGrade": "4.0",
    "price": "PKR 9,800,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-075",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2018,
    "bodyType": "Kei Car",
    "mileageKm": 24086,
    "auctionGrade": "5.0",
    "price": "PKR 8,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-076",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2017,
    "bodyType": "SUV",
    "mileageKm": 25695,
    "auctionGrade": "R",
    "price": "PKR 11,700,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-077",
    "make": "Nissan",
    "model": "Note",
    "year": 2020,
    "bodyType": "Hatchback",
    "mileageKm": 70936,
    "auctionGrade": "4.5",
    "price": "PKR 7,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-078",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2021,
    "bodyType": "SUV",
    "mileageKm": 36575,
    "auctionGrade": "R",
    "price": "PKR 10,200,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-079",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2020,
    "bodyType": "Truck",
    "mileageKm": 114730,
    "auctionGrade": "3.5",
    "price": "PKR 11,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-080",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 63372,
    "auctionGrade": "5.0",
    "price": "PKR 7,100,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-081",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2017,
    "bodyType": "Kei Car",
    "mileageKm": 13970,
    "auctionGrade": "RA",
    "price": "PKR 9,200,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-082",
    "make": "BMW",
    "model": "2 Series",
    "year": 2023,
    "bodyType": "Sedan",
    "mileageKm": 92668,
    "auctionGrade": "3.5",
    "price": "PKR 8,400,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-083",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2017,
    "bodyType": "Truck",
    "mileageKm": 36860,
    "auctionGrade": "4.5",
    "price": "PKR 8,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-084",
    "make": "Audi",
    "model": "Q2",
    "year": 2021,
    "bodyType": "SUV",
    "mileageKm": 78742,
    "auctionGrade": "RA",
    "price": "PKR 3,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-085",
    "make": "Toyota",
    "model": "Raize",
    "year": 2021,
    "bodyType": "SUV",
    "mileageKm": 37958,
    "auctionGrade": "4.0",
    "price": "PKR 6,500,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/raize/2026-05-15/0_54573900_1778828057/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-086",
    "make": "Audi",
    "model": "Q2",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 94403,
    "auctionGrade": "4.5",
    "price": "PKR 10,600,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260706/q2/6a4bbc954d373/q2-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-087",
    "make": "Toyota",
    "model": "Yaris Cross",
    "year": 2015,
    "bodyType": "SUV",
    "mileageKm": 27452,
    "auctionGrade": "RA",
    "price": "PKR 5,500,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/aucneo/20260703/yaris-cross/6a483c91bcfc6/yaris-cross-0.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-088",
    "make": "Nissan",
    "model": "Note",
    "year": 2018,
    "bodyType": "Hatchback",
    "mileageKm": 76660,
    "auctionGrade": "RA",
    "price": "PKR 8,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/note/2026-02-10/0_87005000_1770711056/1.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-089",
    "make": "BMW",
    "model": "2 Series",
    "year": 2017,
    "bodyType": "Sedan",
    "mileageKm": 82401,
    "auctionGrade": "4.0",
    "price": "PKR 8,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-090",
    "make": "Nissan",
    "model": "Dayz",
    "year": 2023,
    "bodyType": "Kei Car",
    "mileageKm": 96834,
    "auctionGrade": "4.5",
    "price": "PKR 11,000,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/dayz/2026-04-29/0_53806500_1777492434/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-091",
    "make": "BMW",
    "model": "2 Series",
    "year": 2021,
    "bodyType": "Sedan",
    "mileageKm": 117487,
    "auctionGrade": "5.0",
    "price": "PKR 2,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-092",
    "make": "BMW",
    "model": "2 Series",
    "year": 2021,
    "bodyType": "Sedan",
    "mileageKm": 44308,
    "auctionGrade": "5.0",
    "price": "PKR 7,600,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-093",
    "make": "Suzuki",
    "model": "Wagon R",
    "year": 2020,
    "bodyType": "Kei Car",
    "mileageKm": 110673,
    "auctionGrade": "5.0",
    "price": "PKR 4,100,000",
    "transmission": "Manual",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/wagon_r/2025-10-14/0_83925800_1760447427/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-094",
    "make": "Toyota",
    "model": "Land Cruiser",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 8917,
    "auctionGrade": "5.0",
    "price": "PKR 2,700,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/iauc_wholesale/20260709/land-cruiser-prado/6a4f03316fd07/land-cruiser-prado-33204-0.jpeg"
    ],
    "featured": false
  },
  {
    "id": "car-095",
    "make": "BMW",
    "model": "2 Series",
    "year": 2021,
    "bodyType": "Sedan",
    "mileageKm": 53530,
    "auctionGrade": "3.5",
    "price": "PKR 4,800,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-096",
    "make": "Daihatsu",
    "model": "Hijet Truck",
    "year": 2018,
    "bodyType": "Truck",
    "mileageKm": 92421,
    "auctionGrade": "3.5",
    "price": "PKR 3,900,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/hijet_truck/2025-12-02/0_16611100_1764654262/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-097",
    "make": "Toyota",
    "model": "Yaris",
    "year": 2023,
    "bodyType": "Hatchback",
    "mileageKm": 72468,
    "auctionGrade": "RA",
    "price": "PKR 4,300,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/yaris/2025-07-15/0_54532100_1752560423/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-098",
    "make": "BMW",
    "model": "2 Series",
    "year": 2019,
    "bodyType": "Sedan",
    "mileageKm": 105477,
    "auctionGrade": "R",
    "price": "PKR 8,400,000",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/bmw_2_series_gran_coupe/2026-06-30/0_70354200_1782818169/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-099",
    "make": "Toyota",
    "model": "Raize",
    "year": 2022,
    "bodyType": "SUV",
    "mileageKm": 89215,
    "auctionGrade": "3.5",
    "price": "PKR 9,200,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/raize/2026-05-15/0_54573900_1778828057/1.jpg"
    ],
    "featured": false
  },
  {
    "id": "car-100",
    "make": "Suzuki",
    "model": "Alto",
    "year": 2021,
    "bodyType": "Kei Car",
    "mileageKm": 92468,
    "auctionGrade": "5.0",
    "price": "PKR 4,500,000",
    "transmission": "Automatic",
    "fuelType": "Petrol",
    "images": [
      "https://d36dyyw8x5qpnf.cloudfront.net/photos/alto/2026-06-15/0_38271900_1781540569/1.jpg"
    ],
    "featured": false
  }
];
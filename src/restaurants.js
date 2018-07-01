const restaurants = [
  {
    url: "hattori-hanzo-sushi",
    img: '/images/hattori-hanzo-sushi/header.jpg',
    name: "Hattori Hanzo Sushi",
    categories: [
      'Japanese',
      'Sushi',
    ],
    openingHours: "10:00",
    endingHours: "20:00",
    street: "ul. Świętego Mikołaja 8",
    postCode: "55-222",
    city: "Wrocław",
    menu: [
      {
        url: 'popular',
        categoryName: "Popular",
        products: [
          {
            id: 1,
            name: "Mosaic sushi roll",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 14.00,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/1.jpg',
          },
          {
            id: 2,
            name: "Kumo Sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 12.00,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/2.jpg',
          },
          {
            id: 3,
            name: "Haiku Sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 15.00,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/3.jpg',
          },
          {
            id: 4,
            name: "Hand Roll Sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 8.00,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/4.jpg',
          },
        ],
      },
      {
        url: 'appetizers',
        categoryName: "Appetizers",
        products: [
          {
            name: "Spicy Summer Wrap",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 9.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/5.jpg',
          },
          {
            name: "Sashimi Salad",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 4.55,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/6.jpg',
          },
          {
            name: "Seafood Starter",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/7.jpg',
          },
          {
            name: "Shrimp Nachos",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.39,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/8.jpg',
          },
          {
            name: "Spicy Summer Wrap",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 9.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/5.jpg',
          },
          {
            name: "Sashimi Salad",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 4.55,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/6.jpg',
          },
          {
            name: "Seafood Starter",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/7.jpg',
          },
          {
            name: "Shrimp Nachos",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.39,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/8.jpg',
          },
          {
            name: "Spicy Summer Wrap",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 9.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/5.jpg',
          },
          {
            name: "Sashimi Salad",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 4.55,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/6.jpg',
          },
          {
            name: "Seafood Starter",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/7.jpg',
          },
          {
            name: "Shrimp Nachos",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 3.39,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/8.jpg',
          },
        ],
      },
      {
        url: 'soups',
        categoryName: "Soups",
        products: [
          {
            name: "Noodle Soup",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 4.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/9.jpg',
          },
          {
            name: "Tsuru Sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 4.45,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/10.jpg',
          },
          {
            name: "Salmon miso soup with sesame sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 12.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/11.jpg',
          },
          {
            name: "Salmon Pho",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 7.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/12.jpg',
          },
        ],
      },
      {
        url: 'rice',
        categoryName: "Rice",
        products: [
          {
            name: "Sushi Rice Bowls",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 24.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/13.jpg',
          },
          {
            name: "Scattered sushi rice salad",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 8.00,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/14.jpg',
          },
          {
            name: "Chirashizushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 18.49,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/15.jpg',
          },
          {
            name: "Hand Roll Sushi",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 31.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/16.jpg',
          },
        ],
      },
      {
        url: 'tempura',
        categoryName: "Tempura",
        products: [
          {
            name: "Asparagus Tempura & Cream Cheese",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 19.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/17.jpg',
          },
          {
            name: "Philadelphia Sushi Roll",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 21.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/18.jpg',
          },
          {
            name: "Exotic Veg Tempura",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 13.29,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/19.jpg',
          },
          {
            name: "Sake Tempura",
            description: "Lorem ipsum dolor sit amet elit sed do eiusmod tempor",
            price: 14.95,
            currency: {
              name: "złoty",
              sign: "zł"
            },
            img: '/images/hattori-hanzo-sushi/20.jpg',
          },
        ],
      },
    ],
  },
];

export default restaurants;
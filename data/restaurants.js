// Fake restaurants data
export const restaurants = [
  {
    id: 1,
    name: 'Hometown BBQ',
    image:
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    category: 'American Food',
    description: `Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!`,
    open: true,
    schedule: [
      { day: 'MONDAY', start: '07:15', end: '20:45' },
      { day: 'TUESDAY', start: '07:15', end: '20:45' },
      { day: 'WEDNESDAY', start: '07:15', end: '20:45' },
      { day: 'THURSDAY', start: '07:15', end: '20:45' },
      { day: 'FRIDAY', start: '07:15', end: '20:45' },
      { day: 'SATURDAY', start: '07:15', end: '20:45' },
    ],
  },
  {
    id: 2,
    name: 'Mission Chinese Food',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: 'Asian fast-foods',
    open: true,
    description: `Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.`,
    schedule: [
      { day: 'SUNDAY', start: '10:00', end: '23:00' },
      { day: 'MONDAY', start: '07:30', end: '23:00' },
      { day: 'TUESDAY', start: '07:30', end: '23:00' },
      { day: 'WEDNESDAY', start: '07:30', end: '23:00' },
      { day: 'THURSDAY', start: '07:30', end: '23:00' },
      { day: 'FRIDAY', start: '07:30', end: '23:00' },
      { day: 'SATURDAY', start: '10:00', end: '23:00' },
    ],
  },
  {
    id: 3,
    name: 'Superiority Burger',
    image:
      'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: 'Menu Fast-foods',
    open: true,
    description: `Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person.`,
    schedule: [
      { day: 'MONDAY', start: '08:00', end: '18:00' },
      { day: 'TUESDAY', start: '08:00', end: '18:00' },
      { day: 'WEDNESDAY', start: '08:00', end: '18:00' },
      { day: 'THURSDAY', start: '08:00', end: '18:00' },
      { day: 'FRIDAY', start: '08:00', end: '18:00' },
      { day: 'SATURDAY', start: '08:00', end: '18:00' },
    ],
  },
  {
    id: 4,
    name: 'Casa Enrique',
    image:
      'https://images.unsplash.com/photo-1564758866811-4780aa0a1f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: 'Coffee Snacks',
    open: true,
    description: `Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars.`,
    schedule: [
      { day: 'MONDAY', start: '07:30', end: '23:00' },
      { day: 'TUESDAY', start: '07:30', end: '23:00' },
      { day: 'WEDNESDAY', start: '07:30', end: '23:00' },
      { day: 'THURSDAY', start: '07:30', end: '23:00' },
      { day: 'FRIDAY', start: '07:30', end: '23:00' },
    ],
  },
]

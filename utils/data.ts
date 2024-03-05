export const homeData = [
  { id: 'header' },
  { id: 'hero' },
  { id: 'valueBanner' },
  { id: 'about' },
  { id: 'hServices' },
  { id: 'contact' },
  { id: 'footer' },
]

export const servicesData = [
  { id: 'header' },
  { id: 'services' },
  { id: 'special' },
  { id: 'bookAService' },
  { id: 'footer' },
]

export const sServiceCardData = [
  {
    title: 'Dog',
    services: [
      {
        type: 'boarding',
        title: 'Standard',
        price: 40,
        description:
          'Includes a comforatable sleeping area, basic meals and access to outdoor play areas',
      },
      {
        type: 'boarding',
        title: 'Deluxe',
        price: 60,
        description:
          'Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as bedtime stories or cuddle time.',
      },
      {
        type: 'boarding',
        title: 'Luxury Suite',
        price: 80,
        description:
          'Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as additional walks and/or playtime.',
      },
      {
        type: 'daycare',
        title: 'Basic',
        price: 25,
        description:
          'Includes supervised playtime in our indoor and outdoor play areas, as well as a midday meal (ONLY small treat(s) will be provided).',
      },
      {
        type: 'daycare',
        title: 'Standard',
        price: 35,
        description:
          'Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as group training sessions or spa treatments.',
      },
      {
        type: 'daycare',
        title: 'Premium',
        price: 50,
        description:
          'Includes premium supervised play sessions with structured activities, enrichment programs, specialized attention from staff, and additional amenities such as gourmet treats or personalized playtime.',
      },
      {
        type: 'grooming',
        title: 'Basic Bath & Brush',
        price: 30,
        description:
          'Includes a basic grooming package with a bath, brush, and nail trim.',
      },
      {
        type: 'grooming',
        title: 'Standard Grooming',
        price: 50,
        description:
          'Includes a full grooming package with bath, brush, nail trim, ear cleaning, and optional add-ons such as teeth brushing or de-shedding treatments.',
      },
      {
        type: 'grooming',
        title: 'Premium Grooming',
        price: 75,
        description:
        'Includes a full grooming package with bath, brush, nail trim, ear cleaning, and optional add-ons such as teeth brushing or de-shedding treatments.',
      },
      {
        type: 'training',
        title: 'Basic Obedience',
        price: 30,
        description:
          'Includes basic obedience training with group sessions or beginner-level classes.',
      },
      {
        type: 'training',
        title: 'Personalized Training',
        price: 50,
        description: `Includes personalized training sessions with a certified trainer, focusing on specific behaviors or commands tailored to your dog's needs.`,
      },
      {
        type: 'training',
        title: 'Advanced Training',
        price: 100,
        description:
          'Includes advanced training programs with one-on-one attention, behavior modification plans, and specialized training techniques such as agility or therapy dog training.',
      },
    ],
  },
  {
    title: 'Cat',
    services: [
      {
        type: 'boarding',
        title: 'Standard',
        price: 30,
        description:
          'Includes a comfortable sleeping area, basic meals, and access to outdoor play areas.',
      },
      {
        type: 'boarding',
        title: 'Deluxe',
        price: 50,
        description:
          'Includes a spacious sleeping area, premium meals, access to indoor and outdoor play areas, and webcam access for pet parents to check in.',
      },
      {
        type: 'boarding',
        title: 'Luxury Suite',
        price: 70,
        description:
          'Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as toys or scratching posts.',
      },
      {
        type: 'daycare',
        title: 'Basic',
        price: 20,
        description: 'Includes supervised play sessions and basic amenities.',
      },
      {
        type: 'daycare',
        title: 'Standard',
        price: 30,
        description:
          'Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as interactive toys or climbing structures.',
      },
      {
        type: 'daycare',
        title: 'Premium',
        price: 45,
        description:
          'Includes premium supervised play sessions with enrichment activities, specialized attention from staff, and additional amenities such as treats or cozy hideaways..',
      },
      {
        type: 'grooming',
        title: 'Basic Bath & Brush',
        price: 20,
        description:
          'Includes a basic grooming package with a bath, brush, and nail trim.',
      },
      {
        type: 'grooming',
        title: 'Standard Grooming',
        price: 40,
        description:
          'Includes a full grooming package with bath, brush, nail trim, and optional add-ons such as ear cleaning or flea treatments.',
      },
      {
        type: 'grooming',
        title: 'Premium Grooming',
        price: 60,
        description:
          'Includes a premium grooming experience with high-quality products, gentle handling, and extra pampering such as a fur massage or nail buffing..',
      },
    ],
  },
]

// export const petServicesData = [
//   {
//     label: 'Overnight Boarding',
//     service: 'overnightBoarding',
//     petType: 'dog',
//     serviceType: [
//       {
//         name: 'Standard',
//         price: 40,
//         description: `Includes a comfortable sleeping area, basic meals, and access to outdoor play areas.`,
//       },
//       {
//         name: 'Deluxe',
//         price: 60,
//         description: `Includes a spacious sleeping area, premium meals, access to indoor and outdoor play areas, and webcam access for pet parents to check in.`,
//       },
//       {
//         name: 'Premium',
//         price: 80,
//         description: `Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as bedtime stories or cuddle time.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/KKj5MJ8/toller-dog-lies-in-blue-bed-2024-02-08-20-45-19-utc.jpg`
//   },
//   {
//     label: 'Daycare',
//     service: 'daycare',
//     petType: 'dog',
//     serviceType: [
//       {
//         name: 'Basic',
//         price: 25,
//         description: `Includes supervised play sessions and basic amenities.`,
//       },
//       {
//         name: 'Standard',
//         price: 35,
//         description: `Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as group training sessions or spa treatments.`,
//       },
//       {
//         name: 'Premium',
//         price: 50,
//         description: `Includes premium supervised play sessions with structured activities, enrichment programs, specialized attention from staff, and additional amenities such as gourmet treats or personalized playtime.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/T1D188T/australian-cattle-dog-puppy-outdoor-blue-and-red-2023-11-27-05-11-52-utc.jpg`
//   },
//   {
//     label: 'Grooming',
//     service: 'grooming',
//     petType: 'dog',
//     serviceType: [
//       {
//         name: 'Basic Bath & Brush',
//         price: 30,
//         description: `Includes a basic grooming package with a bath, brush, and nail trim.`,
//       },
//       {
//         name: 'Standard Grooming',
//         price: 50,
//         description: `Includes a full grooming package with bath, brush, nail trim, ear cleaning, and optional add-ons such as teeth brushing or de-shedding treatments.`,
//       },
//       {
//         name: 'Premium Grooming',
//         price: 75,
//         description: `Includes a premium grooming expeirence with specialized shampoos and conditioners, breed-specific styling, and extra pamperings such as paw massages or aromatherapy treatments.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/5sjg0J1/lovely-poodle-enjoying-treatment-in-pet-salon-2023-11-27-04-52-12-utc.jpg`
//   },
//   {
//     label: 'Training',
//     service: 'training',
//     petType: 'dog',
//     serviceType: [
//       {
//         name: 'Standard',
//         price: 30,
//         description: `Includes a basic obedience training with group sessions or beginner-level classes.`,
//       },
//       {
//         name: 'Deluxe',
//         price: 50,
//         description: `Includes personalized training sessions with a certified trainer, focusing on specific behaviors or commands tailored to your dog's needs.`,
//       },
//       {
//         name: 'Premium',
//         price: 100,
//         description: `Includes advanced training programs with one-on-one attention, behavior modification plans, and specialized training techniques such as agility or therapy dog training.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/C8tzcGz/female-trainer-teaching-an-obedient-cute-beagle-th-2023-11-27-05-07-37-utc.jpg`
//   },
//   {
//     label: 'Overnight Boarding',
//     service: 'overnightBoarding',
//     petType: 'cat',
//     serviceType: [
//       {
//         name: 'Standard',
//         price: 30,
//         description: `Includes a comfortable sleeping area, basic meals, and access to outdoor play areas.`,
//       },
//       {
//         name: 'Deluxe',
//         price: 50,
//         description: `Includes a spacious sleeping area, premium meals, access to indoor and outdoor play areas, and webcam access for pet parents to check in.`,
//       },
//       {
//         name: 'Premium',
//         price: 70,
//         description: `Includes a luxury suite with plush bedding, gourmet meals, personalized attention from staff, daily enrichment activities, and additional amenities such as toys or scratching posts.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/W06YbTT/british-cat-lying-cat-tree-scratching-post-2023-11-27-05-05-26-utc.jpg`
//   },
//   {
//     label: 'Daycare',
//     service: 'daycare',
//     petType: 'cat',
//     serviceType: [
//       {
//         name: 'Basic',
//         price: 20,
//         description: `Includes supervised play sessions and basic amenities.`,
//       },
//       {
//         name: 'Standard',
//         price: 30,
//         description: `Includes supervised play sessions, access to indoor and outdoor play areas, and optional add-ons such as interactive toys or climbing structures.`,
//       },
//       {
//         name: 'Premium',
//         price: 45,
//         description: `Includes premium supervised play sessions with enrichment activities, specialized attention from staff, and additional amenities such as gourmet treats or cozy hideaways.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/dWm2mhq/a-small-brown-leopard-tiger-bengal-kitten-plays-wi-2023-11-27-04-56-33-utc.jpg`
//   },
//   {
//     label: 'Grooming',
//     service: 'grooming',
//     petType: 'cat',
//     serviceType: [
//       {
//         name: 'Basic Bath & Brush',
//         price: 25,
//         description: `Includes a basic grooming package with a bath, brush, and nail trim.`,
//       },
//       {
//         name: 'Standard Grooming',
//         price: 40,
//         description: `Includes a full grooming package with bath, brush, nail trim, and optional add-ons such as ear cleaning or flea treatments.`,
//       },
//       {
//         name: 'Premium Grooming',
//         price: 60,
//         description: `Includes a premium grooming expeirence with high-quality products, gentle handling, and extra pampering such as a fur massage or nail buffing.`,
//       },
//     ],
//     imageUrl: `https://i.ibb.co/k5DtpWT/cutting-the-nails-scottish-fold-cat-is-in-the-gro-2023-11-27-05-30-55-utc.jpg`
//   },
// ]

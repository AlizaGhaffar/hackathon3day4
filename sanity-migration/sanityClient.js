// require('dotenv').config({ path: '.env.local' });
// const sanityClient = require('@sanity/client');

// const client = sanityClient({
//   projectId: 'your-project-id', // replace with your project ID
//   dataset: 'your-dataset', // replace with your dataset name
//   apiVersion: '2025-01-19', // use the current date
//   token: process.env.SANITY_TOKEN, // use the environment variable
//   useCdn: false // `false` if you want to ensure fresh data
// });

// module.exports = client;




// import { createClient } from 'next-sanity';

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vsi0gz9n',  // Ensure this is set
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,  // Ensure this is correct
//   apiVersion: '2022-05-17',  // Use a specific API version
//   useCdn: false  // Use the live API
// });

// export { client };

// console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
// console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
// console.log('Auth Token:', process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN);

import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "1d9j4bao",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-01-01",
    token: process.env.SANITY_API_TOKEN,
});


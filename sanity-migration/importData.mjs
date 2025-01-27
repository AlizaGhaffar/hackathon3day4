// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const axios_1 = __importDefault(require("axios"));
// const sanityClient_js_1 = require("./sanityClient.js");
// const slugify_1 = __importDefault(require("slugify"));
// // const axios = require('axios');
// // const client = require('./sanityClient.js');
// // const slugify = require('slugify');

// ///////////////////////////////////////////////////////////////////////////////////
// // async function uploadImageToSanity(imageUrl: string): Promise<string|null> {
// //   try {
// //     // Fetch the image from the URL and convert it to a buffer
// //     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
// //     const buffer = Buffer.from(response.data);
// //     // Upload the image to Sanity
// //     const asset = await client.assets.upload('image', buffer, {
// //       filename: imageUrl.split('/').pop(), // Extract the filename from URL
// //     });
// //     // Debugging: Log the asset returned by Sanity
// //     console.log('Image uploaded successfully:', asset);
// //     return asset._id; // Return the uploaded image asset reference ID
// //   } catch (error) {
// //     console.error('❌ Failed to upload image:', imageUrl, error);
// //     throw error;
// //   }
// // }
// ////////////////////////++++++++++++++++++++++++//////////////////////////
// // async function uploadImageToSanity(imageUrl) {
// //     try {
// //         // Fetch the image from the URL and convert it to a buffer
// //         const response = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
// //         const buffer = Buffer.from(response.data);
// //         // Upload the image to Sanity
// //         const asset = await sanityClient_js_1.client.assets.upload('image', buffer, {
// //             filename: imageUrl.split('/').pop(), // Extract the filename from URL
// //         });
// //         // Debugging: Log the asset returned by Sanity
// //         console.log('Image uploaded successfully:', asset);
// //         return asset._id; // Return the uploaded image asset reference ID
// //     }
// //     catch (error) {
// //         console.error('❌ Failed to upload image:', imageUrl, error);
// //         return null;
// //         //throw error;
// //     }
// // }
// ///////

// async function uploadImageToSanity(imageUrl) {
//     try {
//         const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
//         const buffer = Buffer.from(response.data);
//         const asset = await client.assets.upload('image', buffer, {
//             filename: imageUrl.split('/').pop(), // Extract the filename from URL
//         });
//         console.log('Image uploaded successfully:', asset);
//         return asset._id; // Return the uploaded image asset reference ID
//     } catch (error) {
//         console.error('❌ Failed to upload image:', imageUrl, error);
//         return null;
//     }
// }

// async function createCategory(category, counter) {
//     try {
//         const categoryExist = await client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
//         if (categoryExist) {
//             return categoryExist._id;
//         }
//         const catObj = {
//             _type: "category",
//             _id: category.slug + "-" + counter,
//             name: category.name,
//             slug: category.slug
//         };
//         const response = await client.createOrReplace(catObj);
//         console.log('Category created successfully', response);
//         return response._id;
//     } catch (error) {
//         console.error('❌ Failed to create category:', category.name, error);
//     }
// }


// ///////
// async function createCategory(category, counter) {
//     try {
//         const categoryExist = await sanityClient_js_1.client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
//         if (categoryExist) {
//             return categoryExist._id;
//         }
//         const catObj = {
//             _type: "category",
//             _id: category.slug + "-" + counter,
//             name: category.name,
//             slug: category.slug
//         };
//         const response = await sanityClient_js_1.client.createOrReplace(catObj);
//         // Debugging: Log the asset returned by Sanity
//         console.log('Category created successfully', response);
//         return response._id; // Return the uploaded image asset reference ID
//     }
//     catch (error) {
//         console.error('❌ Failed to category:', category.name, error);
//         //throw error;
//     }
// }
// async function importData() {
//     try {
//         // Fetch data from external API
//         const response = await axios_1.default.get('https://hackathon-apis.vercel.app/api/products');
//         const products = response.data;
//         //console.log(products)
//         let counter = 1;
//         // Iterate over the products
//         for (const product of products) {
//             let imageRef = null;
//             let catRef = null;
//             // Upload image and get asset reference if it exists
//             if (product.image) {
//                 //imageRef = await uploadImageToSanity(product.imageUrl);
//                 imageRef = await uploadImageToSanity(product.image);
//             }
//             if (product.category.name) {
//                 catRef = await createCategory(product.category, counter);
//             }
//             const sanityProduct = {
//                 _id: `product-${counter}`, // Prefix the ID to ensure validity
//                 _type: 'product',
//                 name: product.name,
//                 slug: {
//                     _type: 'slug',
//                     current: (0, slugify_1.default)(product.name || 'default-product', {
//                         lower: true, // Ensure the slug is lowercase
//                         strict: true, // Remove special characters
//                     }),
//                 },
//                 price: product.price,
//                 category: {
//                     _type: 'reference',
//                     _ref: catRef ? catRef : undefined
//                 },
//                 tags: product.tags ? product.tags : [],
//                 quantity: 50,
//                 image: imageRef ? {
//                     _type: 'image',
//                     asset: {
//                         _type: 'reference',
//                         _ref: imageRef, // Set the correct asset reference ID
//                     },
//                 } : undefined,
//                 description: product.description ? product.description : "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
//                 features: product.features ? product.features : [
//                     "Premium material",
//                     "Handmade upholstery",
//                     "Quality timeless classic",
//                 ],
//                 dimensions: product.dimensions ? product.dimensions : {
//                     _type: 'dimensions', // Custom object type for dimensions
//                     height: "110cm",
//                     width: "75cm",
//                     depth: "50cm",
//                 }
//             };
//             counter++;
//             // Log the product before attempting to upload it to Sanity
//             console.log('Uploading product:', sanityProduct);
//             // Import data into Sanity
//             await sanityClient_js_1.client.createOrReplace(sanityProduct);
//             console.log(`✅ Imported product: ${sanityProduct.name}`);
//         }
//         console.log('✅ Data import completed!');
//     }
//     catch (error) {
//         console.error('❌ Error importing data:', error);
//     }
// }
// importData();


//the latest code using

// "use strict";
// import axios from 'axios';
// import { client } from './sanityClient.js'; // Assuming this is the corrected version with 'createClient'
// import slugify from 'slugify';

// // Function to upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//     try {
//         // Fetch the image from the URL and convert it to a buffer
//         const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
//         const buffer = Buffer.from(response.data);
//         // Upload the image to Sanity
//         const asset = await client.assets.upload('image', buffer, {
//             filename: imageUrl.split('/').pop(), // Extract the filename from URL
//         });
//         console.log('Image uploaded successfully:', asset);
//         return asset._id; // Return the uploaded image asset reference ID
//     } catch (error) {
//         console.error('❌ Failed to upload image:', imageUrl, error);
//         return null;
//     }
// }

// // Function to create category in Sanity
// async function createCategory(category, counter) {
//     try {
//         const categoryExist = await client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
//         if (categoryExist) {
//             return categoryExist._id; // Return the existing category ID
//         }
//         const catObj = {
//             _type: "category",
//             _id: category.slug + "-" + counter,
//             name: category.name,
//             slug: category.slug
//         };
//         const response = await client.createOrReplace(catObj);
//         console.log('Category created successfully:', response);
//         return response._id; // Return the newly created category ID
//     } catch (error) {
//         console.error('❌ Failed to create category:', category.name, error);
//         return null;
//     }
// }

// // Main data import function
// async function importData() {
//     try {
//         // Fetch data from the external API
//         const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
//         const products = response.data;
//         let counter = 1;

//         // Iterate over the products
//         for (const product of products) {
//             let imageRef = null;
//             let catRef = null;

//             // Upload image and get asset reference if it exists
//             if (product.image) {
//                 imageRef = await uploadImageToSanity(product.image);
//             }

//             // Create category and get reference if it exists
//             if (product.category && product.category.name) {
//                 catRef = await createCategory(product.category, counter);
//             }

//             // Create the product object for Sanity
//             const sanityProduct = {
//                 _id: `product-${counter}`, // Prefix the ID to ensure validity
//                 _type: 'product',
//                 name: product.name,
//                 slug: {
//                     _type: 'slug',
//                     current: slugify(product.name || 'default-product', {
//                         lower: true, // Ensure the slug is lowercase
//                         strict: true, // Remove special characters
//                     }),
//                 },
//                 price: product.price,
//                 category: {
//                     _type: 'reference',
//                     _ref: catRef ? catRef : undefined, // Use category reference if available
//                 },
//                 tags: product.tags || [],
//                 quantity: 50,
//                 image: imageRef ? {
//                     _type: 'image',
//                     asset: {
//                         _type: 'reference',
//                         _ref: imageRef, // Set the correct asset reference ID
//                     },
//                 } : undefined,
//                 description: product.description || "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
//                 features: product.features || [
//                     "Premium material",
//                     "Handmade upholstery",
//                     "Quality timeless classic",
//                 ],
//                 dimensions: product.dimensions || {
//                     _type: 'dimensions', // Custom object type for dimensions
//                     height: "110cm",
//                     width: "75cm",
//                     depth: "50cm",
//                 },
//             };

//             counter++;
//             // Log the product before attempting to upload it to Sanity
//             console.log('Uploading product:', sanityProduct);

//             // Import data into Sanity
//             await client.createOrReplace(sanityProduct);
//             console.log(`✅ Imported product: ${sanityProduct.name}`);
//         }

//         console.log('✅ Data import completed!');
//     } catch (error) {
//         console.error('❌ Error importing data:', error);
//     }
// }

// // Start the data import process
// importData();


////the code chatgpt gives

"use strict";

import axios from "axios";
import { client } from "./sanityClient.js"; // Assuming you correctly configured and exported createClient
import slugify from "slugify";

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
    try {
        const response = await axios.get(imageUrl, {
            responseType: "arraybuffer",
            timeout: 10000, // Timeout for image request
        });
        const buffer = Buffer.from(response.data);
        const asset = await client.assets.upload("image", buffer, {
            filename: imageUrl.split("/").pop(), // Extract filename from the URL
        });
        console.log("✅ Image uploaded successfully:", asset.url);
        return asset._id; // Return asset reference ID
    } catch (error) {
        console.error("❌ Failed to upload image:", imageUrl, error.message);
        return null;
    }
}

// Function to create category in Sanity
async function createCategory(category, counter) {
    try {
        const categoryExist = await client.fetch(
            `*[_type == "category" && slug.current == $slug][0]`,
            { slug: category.slug }
        );
        if (categoryExist) {
            console.log(`✅ Category exists: ${category.name}`);
            return categoryExist._id;
        }

        const catObj = {
            _type: "category",
            _id: `category-${category.slug}-${counter}`, // Unique category ID
            name: category.name,
            slug: {
                _type: "slug",
                current: slugify(category.name, { lower: true, strict: true }),
            },
        };
        const response = await client.createOrReplace(catObj);
        console.log("✅ Category created successfully:", response.name);
        return response._id;
    } catch (error) {
        console.error("❌ Failed to create category:", category.name, error.message);
        return null;
    }
}

// Main data import function
async function importData() {
    try {
        const API_URL =
            process.env.PRODUCTS_API_URL ||
            "https://hackathon-apis.vercel.app/api/products"; // Use environment variable for API URL
        const response = await axios.get(API_URL, { timeout: 15000 });
        const products = response.data;

        let counter = 1;

        for (const product of products) {
            try {
                console.log(`🚀 Processing product #${counter}: ${product.name}`);

                // Upload image
                let imageRef = null;
                if (product.image) {
                    imageRef = await uploadImageToSanity(product.image);
                }

                // Create category
                let catRef = null;
                if (product.category?.name) {
                    catRef = await createCategory(product.category, counter);
                }

                // Create the product object for Sanity
                const sanityProduct = {
                    _id: `product-${counter}`,
                    _type: "product",
                    name: product.name,
                    slug: {
                        _type: "slug",
                        current: slugify(`${product.name}-${counter}`, {
                            lower: true,
                            strict: true,
                        }),
                    },
                    price: product.price,
                    category: catRef
                        ? { _type: "reference", _ref: catRef }
                        : undefined,
                    tags: product.tags || [],
                    quantity: 50,
                    image: imageRef
                        ? {
                              _type: "image",
                              asset: {
                                  _type: "reference",
                                  _ref: imageRef,
                              },
                          }
                        : undefined,
                    description:
                        product.description ||
                        "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
                    features:
                        product.features || [
                            "Premium material",
                            "Handmade upholstery",
                            "Quality timeless classic",
                        ],
                    dimensions: product.dimensions || {
                        _type: "dimensions",
                        height: "110cm",
                        width: "75cm",
                        depth: "50cm",
                    },
                };

                // Upload product to Sanity
                await client.createOrReplace(sanityProduct);
                console.log(`✅ Product imported successfully: ${product.name}`);
            } catch (productError) {
                console.error(
                    `❌ Error processing product: ${product.name}`,
                    productError.message
                );
            }

            counter++;
        }

        console.log("✅ Data import completed successfully!");
    } catch (error) {
        console.error("❌ Critical error during data import:", error.message);
    }
}

// Start the data import process
importData();

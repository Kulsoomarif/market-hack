import { type SchemaTypeDefinition } from 'sanity';
import productSchema from './product'; // Import the product schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema], // Include the product schema in the types array
};
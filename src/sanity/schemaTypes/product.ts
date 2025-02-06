// sanity/schemaTypes/product.js
import { defineType, defineField } from 'sanity';

const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name:"slug",
      type:"slug",
      options:{
        source:"title"},
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productImage',
      type: 'image',
      title: 'Product Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'inventory',
      type: 'number',
      title: 'inventory',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'discountPercentage',
      type: 'number',
      title: 'discountPercentage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isNew',
      type: 'boolean',
      title: 'New Badge',
      validation: (rule) => rule.required(),
    }),
  ],
});
export default productSchema;
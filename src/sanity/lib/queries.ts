import { defineQuery } from "next-sanity";

// Helper function to convert template literals to strings
const query = (strings: TemplateStringsArray, ...values: unknown[]) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
};

export const allproducts = defineQuery(query`*[_type == 'product']`);
export const four = defineQuery(query`*[_type == 'product'][0..3]`);
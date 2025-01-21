import { createClient } from "next-sanity";

const client = createClient({
  projectId: "cboeybqj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

export async function sanityFetch({ query, params = [] }: { query: string; params?: unknown[] }) {
  return await client.fetch(query, params);
}
// import db from "~/db";
// import { topics } from "./schema";

// export const getTopics = async () => {
//   const allTopics = await db
//     .select({ topic: topics.topic, slug: topics.slug })
//     .from(topics);
//   return allTopics;
// };

import client from "~/supabase-client";

export const getTopics = async () => {
  const { data, error } = await client.from("topics").select("name, slug");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getPosts = async () => {
  const { data, error } = await client.from("community_post_list_view").select(`
        *
        `);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
};

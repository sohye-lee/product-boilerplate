import {
  pgTable,
  bigint,
  text,
  timestamp,
  uuid,
  primaryKey,
  type AnyPgColumn
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

export const topics = pgTable("topics", {
  topic_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  topic: text().notNull(),
  slug: text().notNull(),
  created_at: timestamp("created_at").defaultNow()
});

export const posts = pgTable("posts", {
  post_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  content: text().notNull(),
  topic_id: bigint({ mode: "number" }).references(() => topics.topic_id, {
    onDelete: "cascade"
  }),
  profile_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade"
  }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});

export const post_upvotes = pgTable(
  "post_upvotes",
  {
    post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
      onDelete: "cascade"
    }),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade"
    }),
    created_at: timestamp("created_at").defaultNow()
  },
  (table) => [primaryKey({ columns: [table.post_id, table.profile_id] })]
);

export const post_replies = pgTable("post_replies", {
  reply_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  post_id: bigint({ mode: "number" })
    .references(() => posts.post_id, {
      onDelete: "cascade"
    })
    .notNull(),
  profile_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade"
    })
    .notNull(),
  reply: text().notNull(),
  parent_id: bigint({ mode: "number" }).references(
    (): AnyPgColumn => post_replies.reply_id,
    {
      onDelete: "cascade"
    }
  ),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});

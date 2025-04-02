import {
  pgTable,
  bigint,
  text,
  timestamp,
  integer,
  uuid,
  primaryKey
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

export const ideas = pgTable("ideas", {
  idea_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  idea: text().notNull(),
  views: integer().notNull().default(0),
  claimed_at: timestamp(),
  claimed_by: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade"
  }),
  created_at: timestamp("created_at").defaultNow()
});

export const ideasLikes = pgTable(
  "ideas_likes",
  {
    idea_id: bigint({ mode: "number" }).references(() => ideas.idea_id, {
      onDelete: "cascade"
    }),
    profile_id: uuid().references(() => profiles.profile_id, {
      onDelete: "cascade"
    }),
    created_at: timestamp("created_at").defaultNow()
  },
  (table) => [primaryKey({ columns: [table.idea_id, table.profile_id] })]
);

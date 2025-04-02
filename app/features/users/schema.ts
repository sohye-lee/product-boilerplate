import {
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";

const users = pgSchema("auth").table("users", {
  id: uuid("id").primaryKey()
});

export const roles = pgEnum("role", [
  "developer",
  "designer",
  "manager",
  "marketer",
  "founder",
  "product-manager"
]);

export const profiles = pgTable("profiles", {
  profile_id: uuid("profile_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  avatar: text(),
  email: text().notNull(),
  name: text().notNull(),
  username: text().notNull(),
  headline: text(),
  bio: text(),
  role: roles().default("developer").notNull(),
  stats: jsonb()
    .$type<{ followers: number; following: number }>()
    .default({ followers: 0, following: 0 }),
  views: jsonb(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow()
});

export const follows = pgTable("follows", {
  follower_id: uuid()
    .references(() => profiles.profile_id, { onDelete: "cascade" })
    .notNull(),
  following_id: uuid()
    .references(() => profiles.profile_id, { onDelete: "cascade" })
    .notNull(),
  created_at: timestamp().notNull().defaultNow()
});

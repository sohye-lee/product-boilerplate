import {
  jsonb,
  pgEnum,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
  bigint,
  primaryKey,
  boolean
} from "drizzle-orm/pg-core";
import { products } from "../products/schema";
import { posts } from "../community/schema";

////////////////////////////////////////////////////////////
// USERS
////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////
// NOTIFICATIONS
////////////////////////////////////////////////////////////
export const notification_type = pgEnum("notification_type", [
  "follow",
  "review",
  "reply",
  "mention",
  "like",
  "message"
]);

export const notifications = pgTable("notifications", {
  notification_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  source_id: uuid().references(() => profiles.profile_id, {
    onDelete: "cascade"
  }),
  product_id: bigint({ mode: "number" }).references(() => products.product_id, {
    onDelete: "cascade"
  }),
  post_id: bigint({ mode: "number" }).references(() => posts.post_id, {
    onDelete: "cascade"
  }),
  target_id: uuid()
    .references(() => profiles.profile_id, { onDelete: "cascade" })
    .notNull(),
  type: notification_type().notNull(),
  created_at: timestamp().notNull().defaultNow()
});

////////////////////////////////////////////////////////////
// MESSAGES
////////////////////////////////////////////////////////////
export const message_rooms = pgTable("message_rooms", {
  message_room_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  created_at: timestamp().notNull().defaultNow()
});

export const message_room_members = pgTable(
  "message_room_members",
  {
    message_room_id: bigint({ mode: "number" })
      .references(() => message_rooms.message_room_id, { onDelete: "cascade" })
      .notNull(),
    profile_id: uuid()
      .references(() => profiles.profile_id, { onDelete: "cascade" })
      .notNull(),
    created_at: timestamp().notNull().defaultNow()
  },
  (table) => [
    primaryKey({ columns: [table.message_room_id, table.profile_id] })
  ]
);

export const messages = pgTable("messages", {
  message_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  message_room_id: bigint({ mode: "number" })
    .references(() => message_rooms.message_room_id, { onDelete: "cascade" })
    .notNull(),
  sender_id: uuid()
    .references(() => profiles.profile_id, { onDelete: "cascade" })
    .notNull(),
  content: text().notNull(),
  seen: boolean().default(false),
  created_at: timestamp().notNull().defaultNow()
});
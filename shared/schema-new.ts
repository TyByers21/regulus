import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Clean video table schema
export const videos = pgTable("videos_new", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull().default(""),
  vimeoId: varchar("vimeo_id", { length: 100 }),
  youtubeId: varchar("youtube_id", { length: 100 }),
  thumbnailUrl: varchar("thumbnail_url", { length: 500 }),
  category: varchar("category", { length: 20 }).notNull(),
  isFeatured: boolean("is_featured").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  displayOrder: integer("display_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Admin table for authentication
export const admins = pgTable("admins", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Type exports
export type Video = typeof videos.$inferSelect;
export type InsertVideo = typeof videos.$inferInsert;
export type Admin = typeof admins.$inferSelect;
export type InsertAdmin = typeof admins.$inferInsert;

// Validation schemas
export const videoFormSchema = createInsertSchema(videos, {
  title: z.string().min(1, "Title is required").max(255, "Title too long"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(["music", "corporate"], { required_error: "Category is required" }),
  vimeoId: z.string().optional(),
  youtubeId: z.string().optional(),
  thumbnailUrl: z.string().url().optional().or(z.literal("")),
  isFeatured: z.boolean().default(false),
  isActive: z.boolean().default(true),
  displayOrder: z.number().int().min(0).default(0),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type VideoFormData = z.infer<typeof videoFormSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
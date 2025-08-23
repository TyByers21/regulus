import { z } from "zod";
import { sql } from 'drizzle-orm';
import {
  index,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  text,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

// Session storage table.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Admin users table
export const adminUsers = pgTable("admin_users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type AdminUser = typeof adminUsers.$inferSelect;
export type InsertAdminUser = typeof adminUsers.$inferInsert;

// Videos table for managing all video content
export const videos = pgTable("videos", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  youtubeId: varchar("youtube_id", { length: 100 }),
  vimeoId: varchar("vimeo_id", { length: 100 }), // Increased to handle hash parameters
  thumbnailUrl: text("thumbnail_url"),
  category: varchar("category", { length: 50 }).notNull(), // 'music', 'corporate'
  isFeatured: boolean("is_featured").default(false),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Video = typeof videos.$inferSelect;
export type InsertVideo = typeof videos.$inferInsert;

export const insertVideoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  youtubeId: z.string().optional(),
  vimeoId: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  isFeatured: z.boolean().default(false),
  displayOrder: z.number().default(0),
  isActive: z.boolean().default(true),
});

export const updateVideoSchema = insertVideoSchema.partial();

export type VideoFormData = z.infer<typeof insertVideoSchema>;

// Admin login schema
export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type AdminLoginData = z.infer<typeof adminLoginSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  projectType: z.string().min(1, "Project type is required"),
  budgetRange: z.string().min(1, "Budget range is required"),
  projectDetails: z.string().min(10, "Please provide project details"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Legacy VideoData interface for compatibility
export interface VideoData {
  id: string;
  title: string;
  vimeoId: string;
  description: string;
  category: 'music' | 'corporate';
}

#!/usr/bin/env tsx

// Migration script to import existing video data into the database
import { db } from "../server/db";
import { videos } from "../shared/schema";
import { musicVideos } from "../client/src/data/videos";

async function migrateVideos() {
  console.log("Starting video data migration...");
  
  try {
    // Convert existing video data to database format
    const videosToInsert = musicVideos.map((video, index) => ({
      title: video.title,
      vimeoId: video.vimeoId,
      description: video.description || "",
      category: video.category as "music" | "corporate",
      isFeatured: index < 6, // First 6 videos are featured
      isActive: true,
    }));

    // Insert videos into database
    console.log(`Inserting ${videosToInsert.length} videos...`);
    
    const insertedVideos = await db.insert(videos)
      .values(videosToInsert)
      .returning();

    console.log(`Successfully migrated ${insertedVideos.length} videos to database`);
    
    // Show summary
    const featuredCount = insertedVideos.filter(v => v.isFeatured).length;
    const musicCount = insertedVideos.filter(v => v.category === 'music').length;
    
    console.log(`\nMigration Summary:`);
    console.log(`- Featured videos: ${featuredCount}`);
    console.log(`- Music videos: ${musicCount}`);
    console.log(`- Total videos: ${insertedVideos.length}`);
    
    console.log("\n✅ Migration completed successfully!");
    
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

// Run migration if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateVideos()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { migrateVideos };
import { storage } from "../server/storage";

async function createAdminUser() {
  const username = process.argv[2];
  const email = process.argv[3];
  const password = process.argv[4];

  if (!username || !email || !password) {
    console.log("Usage: npm run create-admin <username> <email> <password>");
    process.exit(1);
  }

  try {
    const admin = await storage.createAdminUser({
      username,
      email,
      passwordHash: password, // Will be hashed in the storage method
      isActive: true
    });
    
    console.log(`Admin user created successfully:`);
    console.log(`ID: ${admin.id}`);
    console.log(`Username: ${admin.username}`);
    console.log(`Email: ${admin.email}`);
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
}

createAdminUser();
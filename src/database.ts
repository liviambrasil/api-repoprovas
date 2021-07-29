import { getConnectionManager } from "typeorm";

if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL.indexOf("sslmode=require") === -1) {
  process.env.DATABASE_URL += "?sslmode=require";
}

export async function connectDatabase() {
  const connectionManager = await getConnectionManager();

  const connection = connectionManager.create({
    url: process.env.DATABASE_URL,
    type: "postgres",
    entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
    name: "default",
    ssl: process.env.NODE_ENV === 'production'
  });

  await connection.connect();
  return connection;
}
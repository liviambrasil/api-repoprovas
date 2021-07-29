import { getConnectionManager } from "typeorm";

export async function connectDatabase() {
    const connectionManager = await getConnectionManager();
  
    const connection = connectionManager.create({
      url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${parseInt(process.env.DB_PORT)}/${process.env.DB_DATABASE}`,
      type: "postgres",
      entities: ["./src/entities/*.ts"],
      name: "default",
    });
  
    await connection.connect();
    return connection;
}
import mongoose from "mongoose";
import { MONGO_DB_CONNECTION_STRING } from "src/constants";

export const databaseProviders = [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(MONGO_DB_CONNECTION_STRING),
    },
  ];
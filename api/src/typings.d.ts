import { DatabaseSchema } from "./domain/DatabaseSchema";
import { LowdbSync } from "lowdb";

declare global {
  namespace Express {
    interface Request {
      context: {
        db: LowdbSync<DatabaseSchema>;
      };
    }
  }
}
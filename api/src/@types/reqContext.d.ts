import { DbSchema } from "domain/DbSchema";
import { lowdb, LowdbSync } from "lowdb";

declare global {
  namespace Express {
    interface Request {
      context: {
        db: LowdbSync<DbSchema>;
      };
    }
  }
}

import LowdbSync from "lowdb";
import DatabaseSchema from "DatabaseSchema";
declare global {
  namespace Express {
    interface Request {
      context: {
        db: LowdbSync<DatabaseSchema>;
      };
    }
  }
}

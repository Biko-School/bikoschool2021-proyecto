import { LowdbSync } from "lowdb";
import { DataBaseSchema } from "./DataBaseSchema";

declare global {
  namespace Express {
    interface Request {
      context: {
        db: LowdbSync<DataBaseSchema>;
      };
    }
  }
}

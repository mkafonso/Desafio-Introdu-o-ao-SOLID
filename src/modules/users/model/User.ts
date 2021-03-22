import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin?: boolean;
  email: string;
  updated_at?: Date;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
      this.created_at = new Date();
      this.updated_at = this.created_at;
    }
  }
}

export { User };

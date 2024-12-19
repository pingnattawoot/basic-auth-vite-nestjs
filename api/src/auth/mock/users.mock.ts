export interface User {
  id: string;
  email: string;
  password: string;
}

// This simulates our database
export const users: User[] = [];

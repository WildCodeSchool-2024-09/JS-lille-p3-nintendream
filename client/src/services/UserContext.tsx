import { createContext, useState } from "react";
import type { ReactNode } from "react";

type User = {
  first_name: string;
  name: string;
  age: number;
  mail: string;
  username: string;
  password: string;
  role: string;
};

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

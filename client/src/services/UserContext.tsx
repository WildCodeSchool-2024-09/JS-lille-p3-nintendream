import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type UserAndToken = {
  token: string;
  user: {
    id: number;
    first_name: string;
    name: string;
    age: number;
    mail: string;
    username: string;
    role: string;
  };
};

interface UserContextType {
  userAndToken: UserAndToken | null;
  setUserAndToken: (userAndToken: UserAndToken | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  // 🌟 Charger les données du localStorage au premier rendu
  const [userAndToken, setUserAndToken] = useState<UserAndToken | null>(() => {
    const storedData = localStorage.getItem("userAndToken");
    return storedData ? JSON.parse(storedData) : null;
  });

  // 📝 Sauvegarder dans le localStorage à chaque changement
  useEffect(() => {
    if (userAndToken) {
      localStorage.setItem("userAndToken", JSON.stringify(userAndToken));
    } else {
      localStorage.removeItem("userAndToken");
    }
  }, [userAndToken]);

  return (
    <UserContext.Provider value={{ userAndToken, setUserAndToken }}>
      {children}
    </UserContext.Provider>
  );
}

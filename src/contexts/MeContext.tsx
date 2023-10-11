"use client";

import { createContext, useContext, useState } from "react";
import { Me } from "../schema";

interface UserContextProps {
  me: Me | undefined;
  setMe: (me: Me | undefined) => void;
}

const MeContext = createContext<UserContextProps>({
  me: undefined,
  setMe: () => {},
});

export function useMeContext() {
  const { me, setMe } = useContext(MeContext);

  return { me, setMe };
}

export default function MeProvider({ children, appMe }: any) {
  const [me, setMe] = useState<Me | undefined>(appMe);

  return (
    <MeContext.Provider value={{ me, setMe }}>{children}</MeContext.Provider>
  );
}

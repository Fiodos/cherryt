import { NextPage } from "next";
import React, { useState } from "react";
import { createContext, useContext } from "react";

type ContextType = {
  accounts: any[];
  setAccounts: React.Dispatch<React.SetStateAction<any[]>>;
};

const AccountContext = createContext<ContextType>({} as ContextType);

interface Props {
  children: React.ReactNode;
}

const ContextProvider: NextPage<Props> = ({ children }) => {
  const [accounts, setAccounts] = useState<any[]>([]);

  return (
    <AccountContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export default ContextProvider;

export const useAccounts = () => useContext(AccountContext);

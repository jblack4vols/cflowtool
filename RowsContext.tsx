
import React, { createContext, useState } from "react";



interface RowsContextType {

  rows: any[];

  setRows: (rows: any[]) => void;

}



export const RowsContext = createContext<RowsContextType | undefined>(undefined);



export const RowsProvider: React.FC = ({ children }) => {

  const [rows, setRows] = useState<any[]>([]);

  return (

    <RowsContext.Provider value={{ rows, setRows }}>

      {children}

    </RowsContext.Provider>

  );

};

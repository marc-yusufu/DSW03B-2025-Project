
import { createContext, useState, type Dispatch, type SetStateAction, type ReactNode } from "react";
import React from "react";

type AppContextType = {
    //just examples on how to declare context variables
    fileNameContext: string;
    setFileNameContext: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<AppContextType>({
    //just examples on how to declare context variables
    fileNameContext: "",
    setFileNameContext: () => {},
});

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [fileNameContext, setFileNameContext] = useState("");

    return(
        <AppContext.Provider value = {{fileNameContext, setFileNameContext}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
import { useState } from "react";
import { createContext } from "react";

export const TapContext = createContext();
export const TapProvider = ({children}) => {
    const [count, setCount] = useState(1);
    const increment = () => setCount(prevCount => ++prevCount);
    
    return (
        <TapContext.Provider value={{count, increment}}>
            {children}
        </TapContext.Provider>
    );
};

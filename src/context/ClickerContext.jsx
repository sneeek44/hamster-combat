import { useState } from "react";
import { createContext } from "react";

export const ClickerContext = createContext();
export const ClickerProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const increment = (amount) => setCount(prevCount => prevCount + amount);
    const removeMoney = (money) => setCount(prevCount => prevCount - money);
    
    return (
        <ClickerContext.Provider value={{count, increment, removeMoney}}>
            {children}
        </ClickerContext.Provider>
    );
};

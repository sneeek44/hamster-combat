import { useContext } from "react";
import { ClickerContext } from "../context/ClickerContext";

function CountDisplay() {
    const {count} = useContext(ClickerContext);

    return(
        <p className="font-bold text-2xl text-center">
            {count}
        </p>
    )
}

export default CountDisplay;
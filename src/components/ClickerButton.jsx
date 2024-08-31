import { useContext } from "react";
import { ClickerContext } from "../context/ClickerContext";
import { TapContext } from "../context/TapContext";

function ClickerButton() {
    const {increment} = useContext(ClickerContext);
    const {count} = useContext(TapContext);

    function makeDirt() {
        increment(count);
    }

    return (
        <div className="w-64 h-64 rounded-full bg-amber-500 hover:bg-amber-600 grid justify-center content-center text-center select-none" role="button"
        onClick={makeDirt}
        >
            <p className="font-bold">
                👆<br />тапаем тапаем ребятки<br />CKOPO ЛИСТИНГ
            </p>
        </div>
    )
}

export default ClickerButton;

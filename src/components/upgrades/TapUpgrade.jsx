import { useContext } from "react";
import { TapContext } from "../../context/TapContext";
import { ClickerContext } from "../../context/ClickerContext";

import ArrowImage from '../../assets/arrow-up.svg'

function TapUpgrade() {
    const {increment} = useContext(TapContext);
    const {count, removeMoney} = useContext(ClickerContext);

    function upgradeTap() {
        if (count >= 100) {
            increment();
            removeMoney(100);
        } else {
            alert('Недостаточно денег. Потапай еще хомячка братишка.');
        }
    }

    return (
        <div className="w-52 h-24 bg-zinc-700 hover:bg-zinc-800 flex content-center rounded" role="button" onClick={upgradeTap}>
            <img src={ArrowImage} className="m-4"/>
            <div className="grid content-center">
                <div className="mr-1">
                    <p className="text-white font-bold text-xs">Ударить по хомяку (+1/tap)</p>
                    <p className="text-white text-xs">Стоимость: 100 денег</p>
                </div>
            </div>
        </div>
    )
}

export default TapUpgrade;
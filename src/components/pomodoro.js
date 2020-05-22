import React, {useState} from "react";

import {SESSION_DURATION} from "../core/const";
import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [timer, setTimer] = useState(SESSION_DURATION);
    const [running] = useState(false);

    const handleMinus = () => console.warn("handleMinus");
    const handlePlus = () => console.warn("handlePlus");
    const handleStartPause = () => console.warn("handleStartPause");
    const handlereset = () => setTimer(SESSION_DURATION);

    return (
        <div>
            <div>
                <Display seconds={timer} running={running} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onPlus={handlePlus}
                    onStartPause={handleStartPause}
                    onReset={handlereset}
                />
            </div>
        </div>
    );
};
export default Pomodoro;

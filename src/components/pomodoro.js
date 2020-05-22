import React, {useState, useCallback} from "react";

import {SESSION_DURATION} from "../core/const";
import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [timer, setTimer] = useState(SESSION_DURATION);
    const [running] = useState(false);

    const handleMinus = useCallback(
        () => setTimer(timer < 60 ? 0 : timer - 60),
        [timer, setTimer],
    );
    const handlePlus = useCallback(() => setTimer(timer + 60), [
        timer,
        setTimer,
    ]);
    const handleStartPause = useCallback(() =>
        console.warn("handleStartPause"),
    );
    const handleReset = useCallback(() => setTimer(SESSION_DURATION), [
        setTimer,
    ]);

    return (
        <div>
            <Display seconds={timer} />

            <Tools
                running={running}
                onMinus={handleMinus}
                onPlus={handlePlus}
                onStartPause={handleStartPause}
                onReset={handleReset}
            />
        </div>
    );
};
export default Pomodoro;

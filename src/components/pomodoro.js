import React, {/*useState, */ useCallback} from "react";

import {SESSION_DURATION} from "../core/const";
import Display from "./display/display";
import Tools from "./tools/tools";
import useTimer from "../core/hooks/use-timer";

const Pomodoro = () => {
    const [{timer, running}, {setTimer, setRunning}] = useTimer(
        SESSION_DURATION,
        false,
        () => {
            console.warn("timer is finished !");
        },
    );

    /* const [timer, setTimer] = useState(SESSION_DURATION);
     const [running] = useState(false);*/

    const handleMinus = useCallback(
        () => setTimer(timer < 60 ? 0 : timer - 60),
        [timer, setTimer],
    );
    const handlePlus = useCallback(() => setTimer(timer + 60), [
        timer,
        setTimer,
    ]);
    const handleStartPause = useCallback(() => setRunning(!running), [
        running,
        setRunning,
    ]);
    const handleReset = useCallback(() => setTimer(SESSION_DURATION), [
        setTimer,
    ]);

    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
                <Display timer={timer} />

                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onPlus={handlePlus}
                    onStartPause={handleStartPause}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};
export default Pomodoro;

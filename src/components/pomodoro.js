import React, {useState, useCallback} from "react";

import {SESSION_DURATION} from "../core/const";
import Display from "./display/display";
import Tools from "./tools/tools";
import useTimer from "../core/hooks/use-timer";
import Modal from "./modal/modal";

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);
    const [
        {timer, running},
        {setTimer, setRunning},
    ] = useTimer(SESSION_DURATION, false, () => setShowModal(true));

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

    const handleModalClose = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);
    const handleRestart = useCallback(() => {
        handleModalClose();
        handleStartPause();
    }, [handleModalClose, handleStartPause]);
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
            <Modal
                show={showModal}
                onClose={handleModalClose}
                onRestart={handleRestart}
            />
        </div>
    );
};
export default Pomodoro;

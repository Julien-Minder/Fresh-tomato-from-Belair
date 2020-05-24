import {useState, useEffect} from "react";
// eslint-disable-next-line no-empty-function
const noop = () => {};

export default (initialTimer, initialRunning = false, onFinished = noop) => {
    const [running, setRunning] = useState(initialRunning);
    const [timer, setTimer] = useState(initialTimer);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (running) {
            setIntervalId(
                setInterval(() => setTimer(Math.max(0, timer - 1)), 1000),
            );
            if (timer === 0) {
                setRunning(false);
                onFinished();
            }
        } else if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [running, timer]);

    return [
        {timer, running},
        {setTimer, setRunning},
    ];
};

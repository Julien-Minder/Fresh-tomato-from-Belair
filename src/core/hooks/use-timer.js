import {useState} from "react";

export default (initialTimer, initialRunning = false) => {
    const [running, setRunning] = useState(initialRunning);
    const [timer, setTimer] = useState(initialTimer);

    return [
        {timer, running},
        {setTimer, setRunning},
    ];
};

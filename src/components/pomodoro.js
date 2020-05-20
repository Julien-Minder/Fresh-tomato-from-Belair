import React, {useState} from "react";

import {SESSION_DURATION} from "../core/const";

const Pomodoro = () => {
    const [timer] = useState(SESSION_DURATION);
    return (
        <div>
            <p>{`hello Guys !!! (${timer}) `}</p>
        </div>
    );
};
export default Pomodoro;

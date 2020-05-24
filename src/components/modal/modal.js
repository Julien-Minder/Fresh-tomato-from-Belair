import React from "react";
import PropTypes from "prop-types";
import useTimer from "../../core/hooks/use-timer";
import {createPortal} from "react-dom";
import Button from "../tools/button";
import Display from "../display/display";
import {NBSP, PAUSE_DURATION} from "../../core/const";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    } // In React to make a component not display anything set the return to null

    const [{running, timer}, {setRunning}] = useTimer(
        PAUSE_DURATION,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return createPortal(
        <div style={containerStyles}>
            <div className={"box"}>
                <h4>{"Break Time !"}</h4>
                <p>{"Have a rest buddy !"}</p>
                <Display timer={timer} running={running} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.PropTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;

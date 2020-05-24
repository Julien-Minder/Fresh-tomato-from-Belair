import React from "react";
import PropTypes from "prop-types";

import Cyphers from "./cyphers";

const styles = {fontSize: "10rem", textAlign: "center"};

const Display = ({timer}) => (
    /*let separator = ":";
    if (running) {
        separator = timer % 2 ? ":" : " ";
    }*/

    <div style={styles}>
        <Cyphers value={Math.floor(timer / 60)} />
        <span style={{opacity: timer % 2 ? 0 : 1}}>{":"}</span>
        <Cyphers value={timer % 60} />
    </div>
);

Display.propTypes = {
    timer: PropTypes.number.isRequired,
    running: PropTypes.bool,
};

export default Display;

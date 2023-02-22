import React from "react";
import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";
import { AddCircle, CheckCircle, Delete, Info, Settings } from "@mui/icons-material";

import { Icons } from "../../constants/Icons";
import { ButtonType } from "./ButtonType";
import { Colors } from "../../constants/Colors";

export const Button = props => {
    const icon = getIcon(props.icon);
    const variant = props.type ?? ButtonType.Contained;
    const color = props.color ?? Colors.Primary;

    return (
        <MUIButton
            color={color}
            disabled={props.disabled}
            onClick={props.onClick}
            startIcon={icon}
            type={props.isSubmit ? "submit" : "button"}
            variant={variant}
        >
            {props.text}
        </MUIButton>
    );
};

function getIcon(icon) {
    switch (icon) {
        case Icons.Check:
            return <CheckCircle />;

        case Icons.Delete:
            return <Delete />;

        case Icons.Gear:
            return <Settings />;

        case Icons.Info:
            return <Info />;

        case Icons.Plus:
            return <AddCircle />;

        default:
            return undefined;
    }
}

Button.propTypes = {
    color: PropTypes.oneOf(Object.values(Colors)),
    disabled: PropTypes.bool,
    icon: PropTypes.oneOf(Object.values(Icons)),
    onClick: PropTypes.func,
    isSubmit: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(ButtonType)),
};

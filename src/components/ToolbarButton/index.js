import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    const { icon } = props;
    const {onClickFunction} = props;
    return (
      <i className={`toolbar-button ${icon}`} onClick={() => console.log("triggered")}/>
    );
}
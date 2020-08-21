import React from "react";
import "./style.css";


const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <p className="date timeline-text">{data.date}</p>
            <h3 className="header timeline-text">{data.header}</h3>
            <p className="bodyText timeline-text">{data.text}</p>
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;
import React from 'react';

import IntroductionIcon from '../../assets/images/introduction.svg';
import ExampleIcon from '../../assets/images/example.svg';
import ActivityIcon from '../../assets/images/activity.svg';
import AssessmentIcon from '../../assets/images/assessment.svg';
import { tabItems } from '../utils/strings'

const {INTRODUCTION, EXAMPLES, ACTIVITIES, ASSESSMENT } = tabItems;

function TabComponent(props) {
    const { selectedTab } = props;
    return (
        <div className="tab">
            <button
                className={selectedTab === INTRODUCTION ? "tablinks active" : "tablinks"}
                onClick={() => props.setTabName(INTRODUCTION)}
                >
                <img src={IntroductionIcon} alt={''} className="tab-icons" /> &nbsp;{INTRODUCTION}
            </button>
            <button className={selectedTab === EXAMPLES ? "tablinks active" : "tablinks"} onClick={() => props.setTabName(EXAMPLES)}>
                <img src={ExampleIcon} alt={''} className="tab-icons" /> &nbsp;{EXAMPLES}
            </button>
            <button className={selectedTab === ACTIVITIES ? "tablinks active" : "tablinks"} onClick={() => props.setTabName(ACTIVITIES)}>
                <img src={ActivityIcon} alt={''} className="tab-icons" /> &nbsp;{ACTIVITIES}
            </button>
            <button className={selectedTab === ASSESSMENT ? "tablinks active" : "tablinks"} onClick={() => props.setTabName(ASSESSMENT)}>
                <img src={AssessmentIcon} alt={''} className="tab-icons" /> &nbsp;{ASSESSMENT}
            </button>
        </div>
    );
}

export default TabComponent;

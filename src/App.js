import React, { useState } from 'react';
import Introduction from './components/introduction'
import ExamplesComponent from './components/examples'
import Activities from './components/activities'
import Assessment from './components/assessment'
import TabComponent from './components/tabs'
import Notes from './components/notes'
import { tabItems } from './components/utils/strings'

import Logo from './assets/images/logo.PNG'
import Note from './assets/images/note.svg';
import BookMark from './assets/images/bookmark.svg';

import './App.css';

function App() {
  const [tabName, setTabName] = useState(tabItems.INTRODUCTION);
  const [showNotes, setShowNotes] = useState(false);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row fill-height">
          <div className="col-md-2 left-panel fill-height">
            <div className="logo"><img src={Logo} alt={'App logo'} /></div>
            <div className="tabs-section">
              <TabComponent selectedTab={tabName} setTabName={setTabName}/>
            </div>
          </div>

          <div className="col-md-10 right-panel fill-height">
            <div className="header">
              <div className="float-right">
                <span ><img onClick={() => setShowNotes(!showNotes)} src={Note} alt="Note" title="Note" /></span>
                <span ><img src={BookMark} alt="BookMark" title="BookMark" /></span>
              </div>
            </div>
            {tabName === tabItems.INTRODUCTION && <Introduction />}
            {tabName === tabItems.EXAMPLES && <ExamplesComponent />}
            {tabName === tabItems.ACTIVITIES && <Activities />}
            {tabName === tabItems.ASSESSMENT && <Assessment/>}
            <Notes showNotes= {showNotes}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

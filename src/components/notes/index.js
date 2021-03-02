import React from 'react';

const Notes = (props) => (
    <div className={props.showNotes ? 'notes' : 'notes hide-note'}>
          <div className="notes-header">
            <h3>Notes</h3>
          </div>
          <div className="note row">
            <p>Page Introduction<br />Today at 5:30 PM </p>
            <div className="col-md-12 note-content">The Doppler effect is of
            intense interest to astronomers who use the information
            about the shift in frequency of electromagnetic waves
            produced by moving stars in our galaxy and beyond in order
            to derive information about those stars and galaxies.</div>
            <p className="add-note">Add Note..</p>
          </div>
        </div>
);

export default Notes;
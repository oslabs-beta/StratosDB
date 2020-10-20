import React from 'react';

// initial Announcement State with Type string
interface AnnouncementState {
  announcement: string;
}

// Functional Component, Announcement
const Announcement: React.FC<AnnouncementState> = (
  props: AnnouncementState
) => {
  return (
    <div id='announcement-bar'>
      <h1>{`${props.announcement}`}</h1>
    </div>
  );
};

export default Announcement;

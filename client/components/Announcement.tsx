import React from 'react';

interface AnnouncementState {
  announcement: string;
}

const Announcement: React.FC<AnnouncementState> = (
  props: AnnouncementState
) => {
  return (
    <div id="announcement-bar">
      <h1>{`${props.announcement}`}</h1>
    </div>
  );
};

export default Announcement;

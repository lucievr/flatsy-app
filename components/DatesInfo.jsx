import React from 'react';

import DefaultText from './DefaultText';

const DAY_IN_MS = 86400000;

const DatesInfo = ({ dateAdded, dateAvailable, detailed }) => {
  let creationDate;
  let availabilityDate;

  if (+dateAdded === 0) {
    creationDate = 'today';
  } else if (+dateAdded === 1) {
    creationDate = 'yesterday';
  } else {
    const d = new Date(Date.now() - +dateAdded * DAY_IN_MS);
    creationDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  if (+dateAvailable === 0) {
    availabilityDate = 'immediately';
  } else {
    const d = new Date(Date.now() + +dateAvailable * DAY_IN_MS);
    availabilityDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  if (detailed) {
    return (
      <>
        <DefaultText>Added {creationDate}</DefaultText>
        <DefaultText>Available {availabilityDate}</DefaultText>
      </>
    );
  }
  return <DefaultText>Added {creationDate}</DefaultText>;
};

export default DatesInfo;

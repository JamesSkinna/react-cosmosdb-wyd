import React from 'react';

const DealLocation = props => {
  return (
    <li
      onClick={() => props.onSelect(props.dealLocation)}
      className={props.dealLocation === props.selectedDealLocation ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.dealLocation)}
      >
        Delete
      </button>
      <div className="deal-location-element">
        <div className="badge">
          {props.dealLocation.ID}
        </div>
        <div className="deal-id">
          {props.dealLocation.DealID}
        </div>
        <div className="location">
          {`(${props.dealLocation.Location.latitude}, ${props.dealLocation.Location.longitude})`}
        </div>
      </div>
    </li>
  );
};

export default DealLocation;

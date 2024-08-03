import React from 'react';

const EditDealLocation = props => {
  if (props.selectedDealLocation) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>ID: </label>
            {props.addingDealLocation
              ? <input
                  type="text"
                  name="ID"
                  placeholder="ID"
                  value={props.selectedDealLocation.ID}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedDealLocation.ID}
                </label>}
          </div>
          <div>
            <label>DealID: </label>
            <input
              name="DealID"
              value={props.selectedDealLocation.DealID}
              placeholder="DealID"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>Latitude: </label>
            <input
              name="latitude"
              value={props.selectedDealLocation.Location.latitude}
              placeholder="Latitude"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>Longitude: </label>
            <input
              name="longitude"
              value={props.selectedDealLocation.Location.longitude}
              placeholder="Longitude"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditDealLocation;

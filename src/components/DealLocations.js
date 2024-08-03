import React, { Component } from 'react';

import EditDealLocation from './EditDealLocation';
import DealLocation from './DealLocation';

import api from '../api';

class DealLocations extends Component {
  constructor() {
    super();

    this.state = {
      dealLocations: [],
      creatingDealLocation: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ dealLocations: json }));
  }

  handleSelect(dealLocation) {
    this.setState({ selectedDealLocation: dealLocation });
  }

  handleDelete(event, dealLocation) {
    event.stopPropagation();

    api.destroy(dealLocation).then(() => {
      let dealLocations = this.state.dealLocations;
      dealLocations = dealLocations.filter(h => h !== dealLocation);
      this.setState({ dealLocations: dealLocations });

      if (this.selectedDealLocation === dealLocation) {
        this.setState({ selectedDealLocation: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingDealLocation: true,
      selectedDealLocation: { ID: '', DealID: '', Location: { latitude: '', longitude: '' } }
    });
  }

  handleCancel() {
    this.setState({ addingDealLocation: false, selectedDealLocation: null });
  }

  handleSave() {
    let dealLocations = this.state.dealLocations;

    if (this.state.addingDealLocation) {
      api
        .create(this.state.selectedDealLocation)
        .then(result => {
          console.log('Successfully created!');

          dealLocations.push(this.state.selectedDealLocation);
          this.setState({
            dealLocations: dealLocations,
            selectedDealLocation: null,
            addingDealLocation: false
          });
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        api
          .update(this.state.selectedDealLocation)
          .then(() => {
            this.setState({ selectedDealLocation: null });
          })
          .catch(err => {});
      }
    }
  
    handleOnChange(event) {
      let selectedDealLocation = this.state.selectedDealLocation;
      if (event.target.name === 'latitude' || event.target.name === 'longitude') {
        selectedDealLocation.Location[event.target.name] = event.target.value;
      } else {
        selectedDealLocation[event.target.name] = event.target.value;
      }
      this.setState({ selectedDealLocation: selectedDealLocation });
    }
  
    render() {
      return (
        <div>
          <ul className="deal-locations">
            {this.state.dealLocations.map(dealLocation => {
              return (
                <DealLocation
                  key={dealLocation.ID}
                  dealLocation={dealLocation}
                  onSelect={this.handleSelect}
                  onDelete={this.handleDelete}
                  selectedDealLocation={this.state.selectedDealLocation}
                />
              );
            })}
          </ul>
          <div className="editarea">
            <button onClick={this.handleEnableAddMode}>Add New Deal Location</button>
            <EditDealLocation
              addingDealLocation={this.state.addingDealLocation}
              onChange={this.handleOnChange}
              selectedDealLocation={this.state.selectedDealLocation}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
            />
          </div>
        </div>
      );
    }
  }
  
  export default DealLocations;
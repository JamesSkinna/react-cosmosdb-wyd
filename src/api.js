javascript
const baseAPI = '/api';

const dealLocationService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/dealLocations`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(dealLocation) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/dealLocation`, {
        method: 'PUT',
        body: JSON.stringify(dealLocation),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(dealLocation) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/dealLocation`, {
        method: 'POST',
        body: JSON.stringify(dealLocation),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(dealLocation) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/dealLocation/${dealLocation.ID}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default dealLocationService;

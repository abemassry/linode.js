exports.apiTestDatacenter = {
  id: 'newark',
  country: 'US',
  label: 'Newark, NJ',
};

exports.testDatacenter = {
  ...apiTestDatacenter,
  _polling: false,
};

exports.datacenters = {
  newark: testDatacenter,
  // TODO: The alpha env only has Newark, but maybe we want to add more DCs
  // here later anyway
};

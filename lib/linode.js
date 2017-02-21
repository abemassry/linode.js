'use strict';
const token = require('../token').token;
const api = require('./api')(token);

const getLinode = function getLinode(linodeId) {
  return api.get(`/linode/instances/${linodeId}`,
    null,
    token,
    (linodeResponse) => {
      console.log(linodeResponse);
    });
};

const getLinodes = function getLinodes() {
  return api.get('/linode/instances',
    null,
    token,
    (linodeResponse) => {
      console.log(linodeResponse);
    });
};

const createLinode = function createLinode(
  datacenter = "newark",
  type = "linode2048.5"
  ) {
  const body = {
    datacenter,
    type
  };
  return api.post('/linode/instances',
    body,
    token,
    (linodeResponse) => {
      console.log(linodeResponse);
    });
};


//getLinode('2019945');
//getLinodes();
//console.log(getLinodes());
createLinode();

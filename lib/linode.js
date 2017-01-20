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


getLinode('2019647');


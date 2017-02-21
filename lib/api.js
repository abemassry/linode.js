'use strict';
const https = require('https');
const request = https.request;
const hostname = 'api.alpha.linode.com';
const port = 443;

function api() {

  const get = function get(path, filters, token, callback) {
    let headers = { 'Authorization': `token ${token}` };
    if (filters !== null) {
      headers = {
        'Authorization': `token ${token}`,
        'X-Filter': filters
      };
    }
    const options = {
      hostname,
      port,
      path: `/v4/${path}`,
      method: 'GET',
      headers,
    };
    let responseBody = '';
    const req = request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        callback(JSON.parse(responseBody));
      });
    });

    req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    req.end();
  }

  const post = function post(path, postBody, token, callback) {
    const options = {
      hostname,
      port,
      path: `/v4/${path}`,
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`
      }
    };
    let responseBody = '';
    const req = request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        callback(JSON.parse(responseBody));
      });
    });

    req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    req.write(postBody);
    req.end();
  }

  const put = function put(path, putBody, token, callback) {
    const options = {
      hostname,
      port,
      path: `/v4/${path}`,
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`
      }
    };
    let responseBody = '';
    const req = request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        callback(JSON.parse(responseBody));
      });
    });

    req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    req.write(putBody);
    req.end();
  }

  const del = function del(path, token, callback) {
    const options = {
      hostname,
      port,
      path: `/v4/${path}`,
      method: 'DELETE',
      headers: {
        'Authorization': `token ${token}`
      }
    };
    let responseBody = '';
    const req = request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        responseBody += chunk;
      });
      res.on('end', () => {
        callback(JSON.parse(responseBody));
      });
    });

    req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    req.end();

  }

  return {
    get,
    post,
    put,
    del
  }
}
module.exports = api;

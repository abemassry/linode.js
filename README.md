linode-nodejs
=============

Official JavaScript Linode API wrapper

# Documentation

## Usage
```javascript
const linodeapi = require('linode').token('TOKEN');

linodeapi.linodes.linode.get('linodeid', function(linode) {
  console.log(linode);
});
```

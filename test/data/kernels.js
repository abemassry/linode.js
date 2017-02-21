exports.apiTestKernel = {
  created: '2015-05-04T09:43:23',
  deprecated: false,
  description: null,
  id: 'linode/latest_64',
  kvm: true,
  label: '4.0.1-x86_64-linode55',
  version: '4.0.1',
  x64: true,
  xen: false,
};

exports.testKernel = {
  ...apiTestKernel,
  _polling: false,
};

exports.kernels = {
  'linode/latest_64': testKernel,
  'linode/latest': {
    ...testKernel,
    id: 'linode/latest',
    label: '4.0.1-x86-linode55',
    x64: false,
  },
};

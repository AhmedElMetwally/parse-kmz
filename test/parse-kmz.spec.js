const assert = require('assert');
const parseKMZ = require('../index');

describe('#0 To KML', function() {
  it('Parse KMZ File From URL', function() {
    parseKMZ
      .toKML('http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz')
      .then(res => assert.equal(typeof res, 'string'));
  });
  it('Parse KMZ File From Dir', function() {
    parseKMZ
      .toKML('./kmz-files/polygon.kmz')
      .then(res => assert.equal(typeof res, 'string'));
  });
});

describe('#1 To JSON', function() {
  it('Parse KMZ File From URL', function() {
    parseKMZ
      .toJson('http://iblogbox.github.io/js/gpx/sample/Tour_de_France.kmz')
      .then(res => assert.equal(typeof res, 'object'));
  });
  it('Parse KMZ File From Dir', function() {
    parseKMZ
      .toJson('./kmz-files/polygon.kmz')
      .then(res => assert.equal(typeof res, 'object'));
  });
});

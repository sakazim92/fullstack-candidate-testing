const assert = require('assert');
const { createMocks } = require('node-mocks-http');
const handleJobs = require('../pages/api/jobs');
const jobsData = require('../data/jobs.json');
const expect = require('chai').expect

describe('Basic Mocha String Test', function () {
  it('should return number of characters is 5', function () {
    assert.equal("Hello".length, 5);
  });

  it('should return number of characters is 5', function () {
    assert.equal("Hello".length, 5);
  });

});


describe('/api/jobs', () => {
  it('returns a json object containing jobs data', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    await handleJobs(req, res);
    expect(JSON.parse(res._getData())).to.deep.equal(
      {jobs: jobsData}
    );
  });
});
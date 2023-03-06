const chai = require('chai');
const sinon = require('sinon');
const HealthController = require('../src/features/health/health.controller');
const ResponseUtil = require('../src/shared/utils/response-util').ResponseUtil;
// const jest  = require ('jest')
// const { expect } = require('');




var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('HealthController',()=>{
    afterEach(() => {
      sinon.restore();
    });
  
    describe('#helloWorld()',()=>{
      it('respond with Hello World',(done)=>{
        sinon.stub(ResponseUtil,'respondOk').callsFake((res,data,message)=>{
          chai.assert.equal(message,'Hello World');
          done();
        });
        
        void HealthController.helloWorld();
      });
    });
  });
  
 // Test Status => Timeout must exceed 5000ms 

describe('HealthController',()=>{
    afterEach(() => {
      sinon.restore();
    });
  
    describe('#status()',()=>{
      it('respond with status',(done)=>{
        sinon.stub(ResponseUtil,'respondOk').callsFake((res,data,message)=>{
          chai.assert.equal(message,'Status');
          done();
        });
        
        void HealthController.status();
      });
    });
  });
  
  
  // Test Error => Timeout must exceed 5000ms 
  
  describe('HealthController',()=>{
    afterEach(() => {
      sinon.restore();
    });
  
    describe('#error()',()=>{
      it('respond with error',(done)=>{
        sinon.stub(ResponseUtil,'respondOk').callsFake((res,data,message)=>{
          chai.assert.equal(message,'Error');
          done();
        });
        
        void HealthController.error();
      });
    });
  });




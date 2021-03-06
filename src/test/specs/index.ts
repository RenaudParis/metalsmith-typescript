/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../typings/metalsmith/metalsmith.d.ts" />
/// <reference path="../typings/assert-dir-equal/assert-dir-equal.d.ts" />
/// <reference path="../../lib/index.ts" />

import typescript = require('../../lib/index');

import chai = require('chai');

var expect = chai.expect;

import Metalsmith = require('metalsmith');

import assertDirEqual = require('assert-dir-equal');

/** Unit tests */
describe('plugin module unit test:', () => {
  describe('without option', () => {
    it('compile tsc files out to build directory', done => {
      var routeDir = "./test/fixtures/withoutoptions";

      new Metalsmith(routeDir).use(typescript()).build( err => {
        assertDirEqual(routeDir + "/build", routeDir + "/expected");
        done();
      });
    });

    it('compile nested tsc files out to build directory', done => {
      var routeDir = "./test/fixtures/nestedscripts";

      new Metalsmith(routeDir).use(typescript()).build( err => {
        assertDirEqual(routeDir + "/build", routeDir + "/expected");
        done();
      });
    });
  });

  describe('compile error handling', () => {
    var routeDir = "./test/fixtures/withcompileerror";

    it('callback with compile error', done => {
      new Metalsmith(routeDir).use(typescript()).build( err => {
        expect(err).not.to.null;
        done();
      })
    });
  });

  describe('with options', () => {
    it('output file to target dir by option', done => {
      var routeDir = "./test/fixtures/withoutdiroption";

      new Metalsmith(routeDir).use(typescript({outDir: "target"})).build( err => {
        assertDirEqual(routeDir + "/target", routeDir + "/expected");
        assertDirEqual(routeDir + "/build", routeDir + "/expectedbuild");
        done();
      });
    });

    it('filtering files include word by option', done => {
      var routeDir = "./test/fixtures/withfilteroption";

      new Metalsmith(routeDir).use(typescript({filter: "target"})).build( err => {
        assertDirEqual(routeDir + "/build", routeDir + "/expected");
        done();
      });
    });

    it('filtering files starts with word by option', done => {
      var routeDir = "./test/fixtures/withfilteroption";

      new Metalsmith(routeDir).use(typescript({outDir: "buildstartswith", filter: "^target"})).build( err => {
        assertDirEqual(routeDir + "/buildstartswith", routeDir + "/expectedstartswith");
        done();
      });
    });

    it('module compile by option', done => {
      var routeDir = "./test/fixtures/withmodulecodeoption";

      new Metalsmith(routeDir).use(typescript({moduleType: "commonjs"})).build( err => {
        assertDirEqual(routeDir + "/build", routeDir + "/expected");
        done();
      });
    });
  });

});

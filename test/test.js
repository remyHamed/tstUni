import {User} from "../User"

let assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


let assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('firname is not set shaudl returne false', function () {
      let u = new User("", "toto", "remy@hotmail.fr", new date(0));

      assert.equal(false, u.issetFullName(u.firstName));
    });
  });
});



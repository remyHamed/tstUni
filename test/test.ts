import {User } from '../src/Class/User'; // this will be your custom import
import { expect } from 'chai';

describe('user tests', () => { // the tests container
    it('check emptY firstname', () => { // the single test
        const u = new User("", "toto","remu@hotmail.fr",new Date(0)); // this will be your class
        expect(u.issetFullName(u.firstName)).to.be.false; // Do I need to explain anything? It's like writing in English!
    });

    it('check ok last name', () => { // the single test
        const u = new User("", "toto","remu@hotmail.fr",new Date(0)); // this will be your class
        expect(u.issetFullName(u.lastName)).to.be.true; // Do I need to explain anything? It's like writing in English!
    });
});
/*`
describe('Options tests', () => { // the tests container
  it('checking default options', () => { // the single test
      const u2 = new User("titi", "toto","remuotmail.fr",new Date(0)); // this will be your class
      expect(u2.firstName).to.be.empty; // emitters property is an array and for this test must be empty, this syntax works with strings too
  });
});
*/

import {User } from '../src/Class/User'; // this will be your custom import
import { expect } from 'chai';

describe('Options tests', () => { // the tests container
    it('checking default options', () => { // the single test
        const u = new User("", "toto","remu@hotmail.fr",new Date(0)); // this will be your class

                /* detect retina */
        expect(u.issetFullName(u.firstName)).to.be.false; // Do I need to explain anything? It's like writing in English!

        /* fps limit */
       // expect(options.fpsLimit).to.equal(30); // As I said 3 lines above

        expect(u.firstName).to.be.empty; // emitters property is an array and for this test must be empty, this syntax works with strings too
       // expect(options.particles.color).to.be.an("object").to.have.property("value").to.equal("#fff"); // this is a little more complex, but still really clear
    });
});

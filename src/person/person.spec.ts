import { expect } from 'chai';

import { Person } from './person';

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(
      'Jon',
      'Snow',
      175,
      2,
      2,
    );
  });

  describe('name', () => {
    it('should be "Jon Snow"', () => {
      expect(person.name).to.equal('Jon Snow');
    });
  });

  describe('height', () => {
    it('should be 175', () => {
      expect(person.height).to.equal(175);
    });
  });

  describe('arms', () => {
    it('should be 2', () => {
      expect(person.arms).to.equal(2);
    });
  });

  describe('legs', () => {
    it('should be 2', () => {
      expect(person.legs).to.equal(2);
    });
  });
});

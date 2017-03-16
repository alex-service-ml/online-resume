var reducers = require('reducers');
var df = require('deep-freeze-strict');
var expect = require('expect');

describe('Reducers', () => {
  var skill = [{
    id: 1,
    name: 'knitting',
    level: 'C'
  }];
  describe('skillsReducer', () => {
    it('should add a skill', () => {
      var action = {
        type: 'ADD_SKILL',
        name: 'kicking',
        level: '4'
      }

      var result = reducers.skillsReducer(df(skill), action);
      expect(result.length).toBe(2);
      expect(result[1].name).toBe(action.name);
    });

    it('should edit a skill', () => {
      var action = {
        type: 'EDIT_SKILL',
        id: 1,
        name: 'kicking',
        level: '4'
      }

      var result = reducers.skillsReducer(df(skill), action);
      expect(result.length).toBe(1);
      expect(result[0].name).toBe(action.name);
      expect(result[0].level).toBe(action.level);
    });

    it('should not edit a skill', () => {
      var action = {
        type: 'EDIT_SKILL',
        id: 2,
        name: 'kicking',
        level: '4'
      }

      var result = reducers.skillsReducer(df(skill), action);
      expect(result.length).toBe(1);
      expect(result[0].name).toBe(skill[0].name);
      expect(result[0].level).toBe(skill[0].level);
    });

    it('should remove a skill', () => {
      var action = {
        type: 'REMOVE_SKILL',
        id: 1
      };

      var result = reducers.skillsReducer(df(skill), action);
      expect(result.length).toBe(0);
    });
  });
});

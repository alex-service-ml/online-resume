var actions = require('actions');
var expect = require('expect');

describe('Actions', () => {
  it('should generate add skill action', () => {
    var action = {
      type: 'ADD_SKILL',
      name: 'knitting',
      level: 'C'
    };
    var result = actions.addSkill(action.name, action.level);
    expect(result).toEqual(action);
  });

});

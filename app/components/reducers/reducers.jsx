var uuid = require('node-uuid');
export var skillsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          level: action.level,
        }
      ];
    case 'EDIT_SKILL':
      return state.map((skill) => {
        if (skill.id === action.id) {
          return {
            id: skill.id,
            name: action.name,
            level: action.level
          }
        } else {
          return skill;
        }
      });
    case 'REMOVE_SKILL':
      return state.filter((skill) => skill.id !== action.id);
    default:
      return state;
  }
};

export var experienceReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE':
    return [
      ...state,
      {
        id: uuid(),
        name: action.name,
        desc: action.desc,
        started: action.started,
        ended: action.ended
      }
    ];
    case 'EDIT_EXPERIENCE':
    return state.map((experience) => {
      if (experience.id === action.id) {
        return {
          id: experience.id,
          name: action.name,
          desc: action.desc,
          started: action.started,
          ended: action.ended
        }
      } else {
        return experience;
      }
    });
    case 'REMOVE_EXPERIENCE':
    default:
    return state;
  }
};

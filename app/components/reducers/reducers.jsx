var uuid = require('node-uuid');

var defaultPersonalDetails = {
  name: '',
  email: '',
  site: '',
};
export var personalDetailsReducer = (state = defaultPersonalDetails, action) => {
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
      return state.filter((experience) => experience.id !== action.id);
    default:
      return state;
  }
};

export var educationReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EDUCATION':
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
    case 'EDIT_EDUCATION':
    return state.map((education) => {
      if (education.id === action.id) {
        return {
          id: education.id,
          name: action.name,
          desc: action.desc,
          started: action.started,
          ended: action.ended
        }
      } else {
        return education;
      }
    });
    case 'REMOVE_EDUCATION':
      return state.filter((education) => education.id !== action.id);
    default:
      return state;
  }
};

// export var setSearchText = (searchText) => {
//   return {
//     type: 'SET_SEARCH_TEXT',
//     searchText
//   };
// };

export var addSkill = (name, level) => {
  return {
    type: 'ADD_SKILL',
    name,
    level
  };
};

export var removeSkill = (id) => {
  //TODO: Decide if I want to use ID to remove instead
  return {
    type: 'REMOVE_SKILL',
    id
  }
};

export var addExperience = () => {

};

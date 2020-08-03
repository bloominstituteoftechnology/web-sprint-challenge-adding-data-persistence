module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function projectToBody(recipe) {
    const result = {
      ...recipe,
    };
    return result;
  }
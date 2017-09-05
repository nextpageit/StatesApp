export const ruleRunner = (field, name, ...validations) => {
  return (state) => {
    for (let x  of validations) {
      if(Array.isArray(x) )
      {
        for(let v of x)
        {
          let errorMessageFunc = v(state[field], state);
          if (errorMessageFunc) {
            return {[field]: errorMessageFunc(name)};
          }
        }
      }
      else {
      let  v=x;
        let errorMessageFunc = v(state[field], state);
        if (errorMessageFunc) {
          return {[field]: errorMessageFunc(name)};
        }
      }


    }
    return null;
  };
};

export const run = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state));
  }, {});
};

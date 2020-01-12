const myObj = {
  a : 'foo',
  b : 'bar',
  c : null,
  d : undefined,
  e : 0,
  f : {
    a : 'fuz',
    b : null,
    c : {
      a : 'biz',
      b : 'buz',
      c : [
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0,
          f : false
        },
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0
        },
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0
        }
      ]
    }
  }
};
const cleanse = (o) => {
  let newState = {};
  for (let key of Object.keys(o)) {
    if (o[key] !== undefined && o[key] !== null) {
      if (Array.isArray(o[key])) {
        newState[key] = o[key]
          .filter(i => i !== null)
          .filter(i => i !== undefined);
      }
      else if (typeof o[key] === 'object') {
        newState[key] = cleanse(o[key]);
      }
      else {
        newState[key] = o[key];
      }
    }
  }
  return newState;
};

console.log(cleanse(myObj));
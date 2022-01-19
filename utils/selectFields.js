module.exports = (obj, selectedData) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (selectedData.includes(key)) newObj[key] = obj[key];
  });

  return newObj;
};

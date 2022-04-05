module.exports = sort = (array) =>
  array.sort((a, b) =>
    typeof a === typeof b
      ? a.length - b.length || a - b
      : typeof a === 'number'
      ? -1
      : 1
  );

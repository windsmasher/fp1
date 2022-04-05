const sort = require('./index');
const assert = require('assert');

describe('Sorting function', () => {
  it('should sort numbers sorted ascending before strings sorted ascending by length', () => {
    // given
    const tabExample1 = [6, 'a', 1, 'asd', 32];
    const tabExample2 = [6, 'aa', 1, 'a', 1000, 'aaaa'];
    const tabExample3 = [3, 2, 1];
    const tabExample4 = ['333', '33', '3'];

    // when
    const sortedTabExample1 = sort(tabExample1);
    const sortedTabExample2 = sort(tabExample2);
    const sortedTabExample3 = sort(tabExample3);
    const sortedTabExample4 = sort(tabExample4);

    // then
    assert.deepEqual(sortedTabExample1, [1, 6, 32, 'a', 'asd']);
    assert.deepEqual(sortedTabExample2, [1, 6, 1000, 'a', 'aa', 'aaaa']);
    assert.deepEqual(sortedTabExample3, [1, 2, 3]);
    assert.deepEqual(sortedTabExample4, ['3', '33', '333']);
  });
});

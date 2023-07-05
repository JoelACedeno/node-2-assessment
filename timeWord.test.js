const timeWord = require('./timeWord');
const timetoWords = require('./timeWord')

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('timetoWords', () => {
  test('should convert 00:00 to midnight', () => {
    const result = timetoWords('00:00');
    expect(result).toBe('midnight');
  });

  test('should convert 00:12 to twelve twelve am', () => {
    const result = timetoWords('00:12');
    expect(result).toBe('twelve twelve am');
  });

  test('should convert 20:00 to eight o\'clock pm', () => {
    const result = timetoWords('20:00');
    expect(result).toBe('eight o\'clock pm');
  });
});
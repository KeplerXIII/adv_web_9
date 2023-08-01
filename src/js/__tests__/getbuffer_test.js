import ArrayBufferConverter from '../getbuffer.js';

test('Array converter test', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const test1 = new ArrayBufferConverter();
  test1.load(test1.getBuffer());
  expect(test1.toString()).toEqual(data);
});

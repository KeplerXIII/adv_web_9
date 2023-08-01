import Daemon from '../daemon.js';

test('Daemon class reated', () => {
  const daemon1 = new Daemon('Kostya');
  expect(daemon1).toBeInstanceOf(Daemon);
});

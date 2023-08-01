import Magician from '../magician.js';

describe('Magician class tests', () => {
  const mage1 = new Magician('Fedya');
  const mage2 = new Magician('Boris');
  const testCase = {
    name: 'Fedya', health: 100, attackBase: 100, stoned: false,
  };
  test('Class building', () => {
    expect(mage1).toEqual(expect.objectContaining(testCase));
  });
  test('Attack', () => {
    mage1.attack(mage2, 2);
    expect(mage2.health).toBe(10);
  });
  test('Intoxicate', () => {
    mage1.setIntoxicate(mage2);
    expect(mage2.stoned).toBe(true);
  });
  test('Intoxicate attack', () => {
    mage1.setIntoxicate(mage2);
    mage2.attack(mage1, 2);
    expect(mage1.health).toBe(15);
  });
});

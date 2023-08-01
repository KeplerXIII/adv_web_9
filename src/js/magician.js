class Magician {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.attackBase = 100;
    this.stoned = false;
  }

  getDamage(attackPower) {
    this.health -= attackPower;
  }

  getIntoxicate() {
    this.stoned = true;
  }

  // eslint-disable-next-line class-methods-use-this
  setIntoxicate(target) {
    target.getIntoxicate();
  }

  attack(target, range) {
    let attackPower = this.attackBase - (this.attackBase * ((range - 1) * 0.1));
    if (this.stoned) {
      attackPower -= Math.log2(range) * 5;
    }

    target.getDamage(Math.round(attackPower));
  }
}

export default Magician;

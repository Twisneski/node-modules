function Building () {}

Building.prototype.burn = function () {
  console.log('👌');
  this.isBurned = true;
};

module.exports = new Building();

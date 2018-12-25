class Square {
  constructor(length) {
    this.length = length || 0;
  }

  area() {
    return (this.length * this.length);
  }
}

module.exports = Square;

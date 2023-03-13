class Snake {
  constructor(board) {
    this.board = board;
    this.initialize();
  }

  initialize() {
    this.body = [];

    // set initial position of the snake's head.
    this.x = this.board.blockSize * 5;
    this.y = this.board.blockSize * 5;
  }

  /**
   * Moves the head of the snake.
   *
   * @param {Direction} direction
   */

  moveHead(direction) {
    this.x += direction.x * this.board.blockSize;
    this.y += direction.y * this.board.blockSize;
  }

  /**
   * Draws the snakes body and head on the board.
   */

  draw() {
    this.board.drawingContext.fillStyle = "lime";
    this.drawSquare(this.x, this.y);

    for (let i = 0; i < this.body.length; i++) {
      this.drawSquare(this.body[i][0], this.body[i][1]);
    }
  }

  /**
   * Draws a square on the board.
   *
   * @param {int} x
   * @param {int} y
   *
   * */

  drawSquare(x, y) {
    this.board.drawingContext.fillRect(
      x,
      y,
      this.board.blockSize,
      this.board.blockSize
    );
  }

  /**
   * Checks if the snake has eaten the food.
   *
   * @param {*} food
   *
   * @returns {boolean}
   *
   * */

  hit(food) {
    return this.x == food.x && this.y == food.y;
  }

  /**
   * Checks if the snake has hit itself.
   *
   * @returns {boolean}
   *
   * */

  hitSelf() {
    if (!this.body.lenght) return false;

    for (let i = 0; i < this.body.length; i++) {
      if (this.x == this.body[i][0] && this.y == this.body[i][1]) {
        return true;
      }
    }

    return false;
  }

  /**
   *  checks if the snake eats the food
   *
   * @param {Food} food
   *
   */

  eat(food) {
    this.body.push([food.x, food.y]);
  }

  update(direction) {
    // shift the body of the snake.
    this.shift();

    // move the head of the snake.
    this.moveHead(direction);

    // draw the snake on the board.
    this.draw();
  }

  /**
   * Shifts the body of the snake.
   *
   * This method is called when the snake moves.
   *
   * */

  shift() {
    if (!this.body.length) return; // if the body array is empty, return.

    // loop backwards through the body array.
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = this.body[i - 1];
    }

    this.body[0] = [this.x, this.y];
  }

  /**
   * moves the head of the snake.
   *
   * @param {Direction} direction
   */

  moveHead(direction) {
    this.x += direction.x * this.board.blockSize;
    this.y += direction.y * this.board.blockSize;
  }
  /**
   * Checks if the snake has hit the wall.
   *
   * @returns {boolean}
   *
   * */

  leaveBoard() {
    if (
      this.x < 0 ||
      this.x >= this.board.cols * this.board.blockSize ||
      this.y < 0 ||
      this.y >= this.board.rows * this.board.blockSize
    ) {
      return true;
    } else return false;
  }
}

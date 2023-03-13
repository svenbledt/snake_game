class Food {
  constructor(board) {
    this.board = board;
    this.x = 0;
    this.y = 0;

    // initialize by placing the food bit by placing the food somewhere on the board.
    this.place();
  }

  // place the food somewhere on the board.
  place() {
    this.x = Math.floor(Math.random() * this.board.cols) * this.board.blockSize;
    this.y = Math.floor(Math.random() * this.board.rows) * this.board.blockSize;
  }

  // draw the food on the board.
  draw() {
    this.board.drawingContext.fillStyle = "red";
    this.board.drawingContext.fillRect(
      this.x,
      this.y,
      this.board.blockSize,
      this.board.blockSize
    );
  }
}

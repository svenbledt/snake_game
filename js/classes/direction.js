class Direction {
  constructor() {
    this.x;
    this.y;

    this.initialize();
  }

  initialize() {
    this.x = 0;
    this.y = 0;
  }

  /**
   *    Change the direction of the snake.
   *
   *    This method is called when the user presses a key.
   *    also checks if the user is trying to go in the opposite direction.
   *
   * @param {Object} event
   *
   */

  change(event) {
    switch (event.code) {
      case "ArrowUp":
        if (this.y === 1) return;
        this.x = 0;
        this.y = -1;
        break;

      case "ArrowDown":
        if (this.y === -1) return;
        this.x = 0;
        this.y = 1;
        break;

      case "ArrowLeft":
        if (this.x === 1) return;
        this.x = -1;
        this.y = 0;
        break;

      case "ArrowRight":
        if (this.x === -1) return;
        this.x = 1;
        this.y = 0;
        break;
    }
  }
}

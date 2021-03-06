(function (root) {
  var Cosmos = root.Cosmos = (root.Cosmos || {});

  var Player = Cosmos.Player = function (board) {
    var radius = 10;
    this.bubble = new Cosmos.Bubble(
      radius,
      [Math.random() * (800 - 2 * radius) + radius, 
       Math.random() * (500 - 2 * radius) + radius],
      [0,0],
      board,
      "blue"
    );
    
    board.add(this.bubble);
  };
  
})(this);
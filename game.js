$(function() {
  console.log('Loaded, bro');
  game();
});

function game() {
  var gamePieces = $('.square');
  var row1 = $('#row1 div.square');
  var row2 = $('#row2 div.square');
  var row3 = $('#row3 div.square');
  var row4 = $('#row4 div.square');

  var column1 = [$('#0'),$('#7'),$('#14'),$('#21'),$('#28'),$('#35'),$('#42')];
  var column2 = [$('#1'),$('#8'),$('#15'),$('#22'),$('#29'),$('#36'),$('#43')];
  var column3 = [$('#2'),$('#9'),$('#16'),$('#23'),$('#30'),$('#37'),$('#44')];
  var column4 = [$('#3'),$('#10'),$('#17'),$('#24'),$('#31'),$('#38'),$('#45')];
  var column5 = [$('#4'),$('#11'),$('#18'),$('#25'),$('#32'),$('#39'),$('#46')];
  var column6 = [$('#5'),$('#12'),$('#19'),$('#26'),$('#33'),$('#40'),$('#47')];
  var column7 = [$('#6'),$('#13'),$('#20'),$('#27'),$('#34'),$('#41'),$('#48')];
  var allColumns = [column1,column2,column3,column4,column5,column6,column7];
  
  getNum();
  activateColumn(column1);
  activateColumn(column2);
  activateColumn(column3);
  activateColumn(column4);
  activateColumn(column5);
  activateColumn(column6);
  activateColumn(column7);

}

// Helper Functions
function getNum() {
  var number = Math.floor(Math.random() * 7) + 1;
  $('#numero').html(number);
  return number;
}

function activateColumn(gamePieceArray) {
  $.each(gamePieceArray, function(index) {
    this.click(function() {
      if (gamePieceArray[0].html() == '') {
        for(var i = gamePieceArray.length - 1; i >= 0; i--) {
          if (gamePieceArray[i].html() == '') {
            gamePieceArray[i].html($('#numero').html());
            getNum();
            setInterval(function(){
              checkColumns(gamePieceArray);
            }, 500)
            setInterval(function(){
              dropColumns(gamePieceArray);      
            }, 500)
            return;
          }
        }
      }
    });
  });
}

function checkColumns(column) {
  var valueArray = [];
  var count = 0;
  for (var i = 0; i < column.length; i++) {
    valueArray.push(column[i].html());
    if (column[i].html()) {
      count += 1;
    }
  }
  for (var i = 0; i < valueArray.length; i++) {
    if (valueArray[i] == count) {
      column[i].html('');
    }
  }
}

function dropColumns(column) {
  var lastIndex = column.length - 1;
  while (lastIndex > 0 ) {
    if (column[lastIndex - 1].html() && !(column[lastIndex].html())) {
      console.log('hi')
      column[lastIndex].html(column[lastIndex - 1].html());
      column[lastIndex - 1].html('');
    }
    lastIndex -= 1;
  }
}

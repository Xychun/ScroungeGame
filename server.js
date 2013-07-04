// NODE
// socket.emit - SINGLE BACK
// socket.broadcast.emit - MULTI ohne BACK
// io.sockets.emit - MULTI mit BACK


//Start auf port 9000
var io = require('socket.io').listen(9000);
var $ = require('jquery').create();
//wenn eine neue verbindung mit einem neuen client entsteht
io.sockets.on('connection', function (socket) {

  socket.on('0',function(anonym){
  	initshowMovementPhaseAnimation();
  });

  socket.on('1',function(anonym){
  	io.sockets.emit('1');
  });

  socket.on('3',function(anonym){
  	io.sockets.emit('3');
  });

  socket.on('4',function(anonym){
    io.sockets.emit('4');
  });

  socket.on('5',function(anonym){
    io.sockets.emit('5');
  });

  socket.on('6',function(anonym){
    io.sockets.emit('6');
  });

  socket.on('7',function(anonym){
    io.sockets.emit('7');
  });

  socket.on('8',function(anonym){
    io.sockets.emit('8');
  });

  socket.on('9',function(anonym){
    io.sockets.emit('9');
  });

  socket.on('10',function(anonym){
    io.sockets.emit('10');
  });

  // 11-22 Kampf
  socket.on('11',function(anonym){
    console.log('PARAMETER ele_name:' + anonym.ele_name);
    check(anonym.ele_name);
  });

  socket.on('12',function(anonym){
    io.sockets.emit('12', anonym);
  });

  socket.on('13',function(anonym){
    io.sockets.emit('13', anonym);
  });

  //DELETED SOCKET 14

  socket.on('15',function(anonym){
    io.sockets.emit('15', anonym);
  });

  socket.on('16',function(anonym){
    io.sockets.emit('16', anonym);
  });

  //DELETED SOCKET 17

  socket.on('18',function(anonym){
    io.sockets.emit('18', anonym);
  });

  socket.on('19',function(anonym){
    io.sockets.emit('19', anonym);
  });

  socket.on('20',function(anonym){
    io.sockets.emit('20', anonym);
  });

  socket.on('21',function(anonym){
    io.sockets.emit('21', anonym);
  });

  //DELETED SOCKET 22

  //reihenanzahl
  socket.on('23',function(anonym){
    io.sockets.emit('23', anonym);
  });

  socket.on('24',function(anonym){
    io.sockets.emit('24', anonym);
  });

  socket.on('25',function(anonym){
    console.log('SOCKET.ON: 25');
    io.sockets.emit('25', anonym);
  });

  //START GAME
  socket.on('26',function(anonym){
    if(gameOn == 0){
      gameOn = 1;
      //Spiellogik aufbauen
      initField();
      //Befehl zum Rendern an alle Clients senden
      var number = amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 3500;
      setTimeout(function() {initshowMovementPhaseAnimation();}, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 3500);
    }    
  });

  socket.on('27',function(anonym){
    io.sockets.emit('27');
  });

    // DELETED SOCKET 28

    socket.on('29',function(anonym){
      io.sockets.emit('29');
    });

    socket.on('30',function(anonym){
      io.sockets.emit('30');
    });

    socket.on('31',function(anonym){
      io.sockets.emit('31');
    });

    socket.on('32',function(anonym){
      io.sockets.emit('32');
    });

    socket.on('33',function(anonym){
      io.sockets.emit('33', anonym);
    });

    socket.on('34',function(anonym){
      io.sockets.emit('34');
    });

    socket.on('35',function(anonym){
      setAmountFieldColumns(anonym.amountFieldColumns);
    });

    socket.on('36',function(anonym){
      setColumnLength(anonym.columnLength);
    });

    socket.on('37',function(anonym){
      setAmountMonsters(anonym.amountMonsters);
    });

  // DELETED SOCKET 38

  socket.on('39',function(anonym){
    showMovementRange();
  });

  // SOCKET 40 - ActionEvent/MethodeEmit

  // SOCKET 41 - ActionEvent/MethodeEmit

  // SOCKET 42 - ActionEvent/MethodeEmit

  // SOCKET 43 - ActionEvent/MethodeEmit

  // SOCKET 44 - ActionEvent/MethodeEmit

  // SOCKET 45 - ActionEvent/MethodeEmit

  // SOCKET 46 - ActionEvent/MethodeEmit

  // SOCKET 47 - ActionEvent/MethodeEmit

  // SOCKET 48 - ActionEvent/MethodeEmit

  // SOCKET 49 - ActionEvent/MethodeEmit

  // SOCKET 50 - ActionEvent/MethodeEmit

  // SOCKET 51 - ActionEvent/MethodeEmit

  // SOCKET 52 - ActionEvent/MethodeEmit

  socket.on('53',function(anonym){
    checkClickedTile(anonym);
  });

  socket.on('54',function(anonym){
    //TO-DO funktioniert aber deaktiviert wegen consolen spamm: initBewegeRahmen(anonym);
  });

  // SOCKET 55 - ActionEvent/MethodeEmit

  // SOCKET 56 - ActionEvent/MethodeEmit

  // SOCKET 57 - ActionEvent/MethodeEmit

  // SOCKET 58 - ActionEvent/MethodeEmit

  // SOCKET 58 - ActionEvent/MethodeEmit

  socket.on('60',function(anonym){
    //
  });

  socket.on('61',function(anonym){
    //
  });

  socket.on('62',function(anonym){
    //
  });

  socket.on('63',function(anonym){
    //
  });

  socket.on('64',function(anonym){
    //
  });

  socket.on('65',function(anonym){
    //
  });

  socket.on('66',function(anonym){
    //
  });

  socket.on('67',function(anonym){
    //
  });

  socket.on('68',function(anonym){
    //
  });

  socket.on('69',function(anonym){
    //
  });

  socket.on('70',function(anonym){
    //
  });


  socket.on('1000',function(anonym){
    io.sockets.emit('1000');
  });

  socket.on('2000',function(anonym){
    startFightDifficulty = anonym.pDifficulty;
    loadStats();
    io.sockets.emit('2000', {pMeAttackC: me_attack_c, pMeDmgC: me_dmg_c, pRAttackC: r_attack_c, 
    pRDmgC: r_dmg_c, pMaAttackC: ma_attack_c, pMaDmgC: ma_dmg_c, pLMinC: l_min_c, pLMaxC: l_max_c,
    pMeAttackM: me_attack_m, pMeDmgM: me_dmg_m, pRAttackM: r_attack_m, pRDmgM: r_dmg_m, pMaAttackM: ma_attack_m,
    pMaDmgM: ma_dmg_m, pLMinM: l_min_m, pLMaxM: l_max_m, pDim: dmin, pDmax: dmax, pAmin: amin, pAmax: amax,
    pAbmin: abmin, pAbmax: abmax, pEsmin: esmin, pEsmax: esmax, pDifficulty: startFightDifficulty});

    x = 480; 
  });
});



///////////////////////////////////////////////
//////////////UMGESETZTE FEATURES//////////////
///////////////////////////////////////////////

//Autor: Julian Pfeil

//Monster erscheinen
//Spieler erscheint
//Movement-Phase-Animation
//Bewegungs-Zahlen
//Bewegungs-Beschränkung auf Umkreis um Spieler
//Bewegungs-Zahlen erscheinen nur, wenn das Feld kein Monster hat
//"movePlayer()" Variable index angepasst, schlanker definiert
//Bewegungspunkte werden reduziert und Bewegung verboten bei zu geringer Anzahl
//Bewegungskosten bewegen sich mit
//Beim Bewegen werden keine Monster mehr überschrieben
//Um die Bewegung am Rand ebenfalls richtig darstellen zu können, Array mit Randkacheln entwickelt
//if/else zur Evaluation der MovementRange war zu unübersichtlich -> geändert in switch case Anweisung kombiniert mit EINER if/else
//Algorithmus für Bewegung funktioniert nun auch auf allen Rand-Kacheln
//4 Spieler steuerbar mit Wechsel
//Char-Sheet integriert
//Bewegungs-Logik verbessert, schlanker, getestet, funktioniert mit allen Randbereichen
//MonsterChooser hinzugefügt, wenn auf ein Monster in Spielerreichweite geklickt wird
//Stats/Runen/GETTER+SETTER zur Spielerklasse hinzugefügt
//Kommunikation zwischen Spielerklasse und CharSheet implementiert
//Refresh-Fkt geschrieben
//Kampfanimationen/-sounds ergänzt
//Falls auf ein Monster geklickt wird, werden keine Bewegungskosten abgezogen


/* Klassen und Funktionen für das Spielfeld */


/* GLOBALE DATENFELDER */

//////////////////////////////
// Benötigt für Spiel-Logik //
//////////////////////////////

//Array with all players
var AllPlayers = new Array();

//Array with all tiles
var AllTiles = new Array();

//Array with all templates
var AllTemplates = new Array();

//Arrays with ID of all border Tiles
//!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
var NorthBorderTilesIDs = new Array();
var SouthBorderTilesIDs = new Array();
var EastBorderEvenTilesIDs = new Array();
var EastBorderUnevenTilesIDs = new Array();
var WestBorderEvenTilesIDs = new Array();
var WestBorderUnevenTilesIDs = new Array();
var NorthWestCornerID = new Array();
var BorderTilesIDs = new Array();

//Array, in dem immer alle Kacheln in Reichweite des aktuellen Spielers enthalten sind.
var tilesAroundPlayer = new Array();

//Manuell bestimmbare Paramter des Spiels
var amountFieldColumns = 17; // standardmäßig im Fall, dass nichts eingenstellt wird: 12
var columnLength = 23; // standardmäßig im Fall, dass nichts eingestellt wird: 24
var amountTiles = -1; //errechnet sich aus amountFieldColumns
var amountMonsters = 5; // standardmäßig im Fall, dass nichts eingestellt wird: 5

zwischenSpeicherRahmen = 0;

var currentPlayerNumber = 0;
var currentMovementPoints = 0;
var currentPlayerPosition = 0;

//////////////////////////////
// Node benötigte Variablen //
//////////////////////////////

//Monsterschwierigkeit
var startFightDifficulty = "easyButton";

//Abfrage, ob Spiel gestartet wurde
var gameOn = 0;



////////////////////
// CLASS - Player //
////////////////////

function Player(number) {

  //GENERALS

  this.playerPosition;
  this.playerNumber = number;
  this.playerName;
  this.playerImg;
  this.playerCharImg;
  
  this.isPlaying = false;
  var array = new Array(19);
  //Die Array-Positionen stellen die Punkte dar, die beim LvlUp verteilt werden dürfen
  array[18] = 2;
  array[19] = 4;
  this.playerStatsArray = array;


  //RUNES

  this.playerMovementPointsMax;
  this.playerMovementPoints;

  this.playerTrackingPointsMax;
  this.playerTrackingPoints;
  this.playerActiveTracking = 0;

  this.playerXStrikePointsMax;
  this.playerXStrikePoints;

  this.playerHealPointsMax;
  this.playerHealPoints;

  this.playerBoostMax;
  this.playerBoost;


  //STATS

  this.playerSwordDmg;
  this.playerSword;

  this.playerBowDmg;
  this.playerBow;

  this.playerMagicDmg;
  this.playerMagic;

  this.playerLifeMax;
  this.playerLife;

  this.playerLvl = 1;

  this.playerEXP = 0;

}

Player.prototype.setPlayerStatsArray = function(newPlayerStatsArray) {

  this.playerStatsArray = newPlayerStatsArray;

}

Player.prototype.getPlayerStatsArray = function() {

  return this.playerStatsArray;

}


Player.prototype.setPlayerName = function(newPlayerName) {

  this.playerName = newPlayerName;

}

Player.prototype.getPlayerName = function() {

  return this.playerName;

}

Player.prototype.setPlayerCharImg = function(newPlayerCharImg) {

  this.playerCharImg = new Image();
  this.playerCharImg.src = newplayerCharImg;

}

Player.prototype.getPlayerCharImg = function() {

  return this.playerCharImg.src;

}

Player.prototype.setPlayerEXP = function(newPlayerEXP) {

  this.playerEXP = newPlayerEXP;

}

Player.prototype.getPlayerEXP = function() {

  return this.playerEXP;

}

Player.prototype.setPlayerLvl = function(newPlayerLvl) {

  this.playerLvl = newPlayerLvl;

}

Player.prototype.getPlayerLvl = function() {

  return this.playerLvl;

}

////////STATS////////////

Player.prototype.setPlayerLifeMax = function(newPlayerLifeMax) {

  this.playerLifeMax = newPlayerLifeMax;

}

Player.prototype.getPlayerLifeMax = function() {

  return this.playerLifeMax;

}

Player.prototype.setPlayerLife = function(newPlayerLife) {

  this.playerLife = newPlayerLife;

}

Player.prototype.getPlayerLife = function() {

  return this.playerLife;

}

Player.prototype.setPlayerMagicDmg = function(newPlayerMagicDmg) {

  this.playerMagicDmg = newPlayerMagicDmg;

}

Player.prototype.getPlayerMagicDmg = function() {

  return this.playerMagicDmg;

}

Player.prototype.setPlayerMagic = function(newPlayerMagic) {

  this.playerMagic = newPlayerMagic;

}

Player.prototype.getPlayerMagic = function() {

  return this.playerMagic;

}

Player.prototype.setPlayerBowDmg = function(newPlayerBowDmg) {

  this.playerBowDmg = newPlayerBowDmg;

}

Player.prototype.getPlayerBowDmg = function() {

  return this.playerBowDmg;

}

Player.prototype.setPlayerBow = function(newPlayerBow) {

  this.playerBow = newPlayerBow;

}

Player.prototype.getPlayerBow = function() {

  return this.playerBow;

}

Player.prototype.setPlayerSwordDmg = function(newPlayerSwordDmg) {

  this.playerSwordDmg = newPlayerSwordDmg;

}

Player.prototype.getPlayerSwordDmg = function() {

  return this.playerSwordDmg;

}

Player.prototype.setPlayerSword = function(newPlayerSword) {

  this.playerSword = newPlayerSword;

}

Player.prototype.getPlayerSword = function() {

  return this.playerSword;

}



////////RUNES////////////


Player.prototype.setPlayerBoost = function(newPlayerBoost) {

  this.playerBoost = newPlayerBoost;

}

Player.prototype.getPlayerBoost = function() {

  return this.playerBoost;

}

Player.prototype.setPlayerBoostMax = function(newPlayerBoostMax) {

  this.playerBoostMax = newPlayerBoostMax;

}

Player.prototype.getPlayerBoostMax = function() {

  return this.playerBoostMax;

}

Player.prototype.setPlayerMovementPoints = function(newPlayerMovementPoints) {

  this.playerMovementPoints = newPlayerMovementPoints;

}

Player.prototype.getPlayerMovementPoints = function() {

  return this.playerMovementPoints;

}

Player.prototype.setPlayerMovementPointsMax = function(newPlayerMovementPointsMax) {

  this.playerMovementPointsMax = newPlayerMovementPointsMax;

}

Player.prototype.getPlayerMovementPointsMax = function() {

  return this.playerMovementPointsMax;

}

Player.prototype.setPlayerTrackingPoints = function(newPlayerTrackingPoints) {

  this.playerTrackingPoints = newPlayerTrackingPoints;

}

Player.prototype.getPlayerTrackingPoints = function() {

  return this.playerTrackingPoints;

}

Player.prototype.setPlayerTrackingPointsMax = function(newPlayerTrackingPointsMax) {

  this.playerTrackingPointsMax = newPlayerTrackingPointsMax;

}

Player.prototype.getPlayerTrackingPointsMax = function() {

  return this.playerTrackingPointsMax;

}

Player.prototype.setPlayerActiveTracking = function(newPlayerActiveTracking) {

  this.playerActiveTracking = newPlayerActiveTracking;

}

Player.prototype.getPlayerActiveTracking = function() {

  return this.playerActiveTracking;

}

Player.prototype.setPlayerXStrikePoints = function(newPlayerXStrikePoints) {

  this.playerXStrikePoints = newPlayerXStrikePoints;

}

Player.prototype.getPlayerXStrikePoints = function() {

  return this.playerXStrikePoints;

}

Player.prototype.setPlayerXStrikePointsMax = function(newPlayerXStrikePointsMax) {

  this.playerXStrikePointsMax = newPlayerXStrikePointsMax;

}

Player.prototype.getPlayerXStrikePointsMax = function() {

  return this.playerXStrikePointsMax;

}

Player.prototype.setPlayerHealPoints = function(newPlayerHealPoints) {

  this.playerHealPoints = newPlayerHealPoints;

}

Player.prototype.getPlayerHealPoints = function() {

  return this.playerHealPoints;

}

Player.prototype.setPlayerHealPointsMax = function(newPlayerHealPointsMax) {

  this.playerHealPointsMax = newPlayerHealPointsMax;

}

Player.prototype.getPlayerHealPointsMax = function() {

  return this.playerHealPointsMax;

}




////////NECCESSARY FOR FIELD////////////

Player.prototype.setIsPlaying = function(isPlaying) {

  this.isPlaying = isPlaying;

}

Player.prototype.getIsPlaying = function() {

  return this.isPlaying;

}

Player.prototype.setPlayerImg = function(newPlayerImg) {

  this.playerImg = new Image();
  this.playerImg.src = newPlayerImg;

}

Player.prototype.getPlayerImg = function() {

  return this.playerImg.src;

}

Player.prototype.setPlayerPosition = function(newPlayerPosition) {

  this.playerPosition = newPlayerPosition;

}

Player.prototype.getPlayerPosition = function() {

  return this.playerPosition;

}

Player.prototype.setPlayerNumber = function(newPlayerNumber) {

  this.playerNumber = newPlayerNumber;

}

Player.prototype.getPlayerNumber = function() {

  return this.playerNumber;

}













///////////////////
// CLASS - Tiles //
///////////////////

function Tile(id) {

  this.XPosition = 0;
  this.YPosition = 0;
  this.ID = id;
  this.terrainDifficulty = Math.floor(Math.random() * 6);
  // TERRAIN MUSS CLIENT BEIM RENDERN SUCHEN
  // this.terrain = terrains[this.terrainDifficulty]; CLIENT(40)
  // !WICHTIG! Client muss sich terrain über die difficulty holen
  this.terrain = null;

  this.hasMonsters = false;
  this.hasPlayer = false;
  this.isSelected = false;

}

////////////////////////////
// Methods of class Tiles //
////////////////////////////

Tile.prototype.setXPosition = function(newXPosition) {

  this.XPosition = newXPosition;

}

Tile.prototype.getXPosition = function() {

  return this.XPosition;

}

Tile.prototype.setYPosition = function(newYPosition) {

  this.YPosition = newYPosition;

}

Tile.prototype.getYPosition = function() {

  return this.YPosition;

}

Tile.prototype.setID = function(newID) {

  this.ID = newID;

}

Tile.prototype.getID = function() {

  return this.ID;

}

Tile.prototype.setTerrainDifficulty = function(newTerrainDifficulty) {

  this.terrainDifficulty = newTerrainDifficulty;

}

Tile.prototype.getTerrainDifficulty = function() {

  return this.terrainDifficulty;

}

Tile.prototype.setTerrain = function() {

  var n = Math.floor(Math.random() * 6);
  this.terrain = terrains[n];

}

Tile.prototype.getTerrain = function() {

  return this.terrain;

}

Tile.prototype.setHasPlayer = function (hasPlayer) {

  this.hasPlayer = hasPlayer;

} 

Tile.prototype.getHasPlayer = function () {

  return this.hasPlayer;

} 

Tile.prototype.setHasMonsters = function (hasMonsters) {

  this.hasMonsters = hasMonsters;

} 

Tile.prototype.getHasMonsters = function () {

  return this.hasMonsters;

}

///////////////////
// CLASS - Templates //
///////////////////

function Template(id) {

  this.ID = id;
  this.IMG = null;
}

////////////////////////////
// Methods of class Templates //
///////////////////////////

Tile.prototype.setID = function(newID) {

  this.ID = newID;

}

Tile.prototype.getID = function() {

  return this.ID;

}

Tile.prototype.setIMG = function(newIMG) {

  this.IMG = newIMG;

}

Tile.prototype.getIMG = function() {

  return this.IMG;

}

///////////////////// setFieldParas1 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 35
function setAmountFieldColumns(param){
  amountFieldColumns = param;
}

///////////////////// END setFieldParas1 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// setFieldParas2 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 37
function setAmountMonsters(param){
  amountMonsters = param;
}

///////////////////// END setFieldParas2 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// setFieldParas3 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 36
function setColumnLength(param){
  columnLength = param;
}

///////////////////// END setFieldParas3 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function calculateFieldParas () {

  for(i=1; i <= amountFieldColumns; i++) {
    //falls i gerade
    if (i%2 == 0) {

      amountTiles = amountTiles+(columnLength-1);

    }

    else {

      amountTiles = amountTiles+columnLength;

    }
  }
}

//Erzeugt das Array BorderTilesID, das für die Bewegungsberechnung benötigt wird
function calculateBorderTileIDs() {

  //NORTH
  //abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
  for(i=1; i < columnLength-1; i++) {

    NorthBorderTilesIDs.push(i);

  }

  for(i=0; i < columnLength-1; i++) {

    NorthWestCornerID.push(i);

  }

  //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
  // Denn nur dann kann man davon ausgehen, dass die South-Reihe so viele Elemente hat wie die North-Reihe
  //SOUTH
  //abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
  var southID = amountTiles-(columnLength-2);
  for(i=1; i < columnLength-1; i++) {

    SouthBorderTilesIDs.push(southID);
    southID = southID+1;

  }

  //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
  //"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
  //EAST
  var eastID = 2*(columnLength-1);
  for(i=1; i <= amountFieldColumns-2; i++) {

    //Falls i ungerade
    if(i % 2 != 0) {

      EastBorderUnevenTilesIDs.push(eastID);
      eastID = eastID+columnLength;
    }

    else {

      EastBorderEvenTilesIDs.push(eastID);
      eastID = eastID+columnLength-1;
    }

  }

  //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
  //"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
  //WEST
  var westID = columnLength;
  for(i=1; i <= amountFieldColumns-2; i++) {

    //Falls i ungerade
    if(i % 2 != 0) {

      WestBorderUnevenTilesIDs.push(westID);
      westID = westID+(columnLength-1);
    }

    else {

      WestBorderEvenTilesIDs.push(westID);
      westID = westID+columnLength;
    }

  }

  BorderTilesIDs = NorthBorderTilesIDs.concat(SouthBorderTilesIDs, EastBorderEvenTilesIDs, EastBorderUnevenTilesIDs, WestBorderEvenTilesIDs, WestBorderUnevenTilesIDs);
  //Die vier Ecken, die nicht in den Arrays enthalten sind einzeln hinzufügen
  BorderTilesIDs.push(0, amountTiles, columnLength-1, amountTiles-(columnLength-1));

}


var numberArrayTiles = new Array()

//erzeugt ein Array mit Zahlen
function initNumberArrayTiles() {

  for(var i = 0; i<=amountTiles; i++) {

    numberArrayTiles.push(i);
  }
}

//mischt das Array per Zufall
function shuffleTilesArray() {

  var tmp = 0;
  var rand = 0;

  for(var i = 0; i <=amountTiles; i++) {

    rand = Math.floor(Math.random() * (amountTiles+1));
    tmp = numberArrayTiles[i]; 
    numberArrayTiles[i] = numberArrayTiles[rand]; 
    numberArrayTiles[rand] = tmp;

  }
}







///////////////////////////////////
// CREATE TILES AND TEMPLATES //
///////////////////////////////////

// Erzeugt alle Spielfeld-Kacheln

var tilesArray = new Array();

function createTiles() {

  for(i=0; i <=amountTiles; i++) {

    var tile = new Tile(i);
    
    random = Math.floor(Math.random() * 6);
    tile.setTerrainDifficulty(random);

    tilesArray[i] = random;

    AllTiles[i] = tile;
  }
  io.sockets.emit('40', {a: tilesArray, b: numberArrayTiles, c: columnLength, d: amountTiles});
}


// function createTemplates() {

//   for(i=0; i <=amountTiles; i++) {

//     var template = new Template(i);
//     AllTemplates[amountTiles+1+i] = template;

//   }
// }


///////////////////////////////////
// CREATE MONSTER AND PLAYER //
///////////////////////////////////


var numberArrayMonsters = new Array()

//erzeugt ein Array mit Zahlen
function initNumberArrayMonsters() {

  for(var i = 0; i <= amountMonsters+1; i++)  {

    //erzeugt Zufallszahl zwischen 0 und Anzahl an Kacheln im Spiel
    var randomNumber = Math.floor(Math.random() * (amountTiles+1))

    //Falls die erzeute Zahl noch nicht im MonsterArray vorkommt, kann sie einfach hinzugefügt werden
    if($.inArray(randomNumber, numberArrayMonsters) == -1) {

      numberArrayMonsters.push(randomNumber);

    }

    // erzeugt solange eine neue Zahl bis es eine ist, die noch nicht im Array vorkommt.
    // Damit nicht Monster an derselben Stelle gesetzt werden.
    else {

      while ($.inArray(randomNumber, numberArrayMonsters) != -1) {

        var randomNumber = Math.floor(Math.random() * (amountTiles+1))

      }

      numberArrayMonsters.push(randomNumber);
    }

  }
}

var timeSummonMonsters = 100;
function summonMonsters () {    

  for(i=1; i <= amountMonsters; i++) {

    timeSummonMonsters += 100;
    setTimeout(function(j) {

      return function() {

        // Der Kachel sagen, dass sie ein Monster hat
        AllTiles[numberArrayMonsters[j]].setHasMonsters(true);

        var eNumb = numberArrayMonsters[j]+amountTiles+1;
        //StabSound(); CLIENT(46)
        //document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = "Bilddaten/Spielfeld/MonsterImg.png"; CLIENT(46)
        io.sockets.emit('46', {elementNumber: eNumb});

        // "1+" ist notwendig, weil die Random-Fkt. Werte zwischen 0 und Obergrenze erzeugen würde
        // wir benötigen aber für den switch-case Werte zwischen 1 und 4. So kann man die 0 aussparen.
                /*var randomNumber = 1+ Math.floor(Math.random() * (4));

                  switch (randomNumber) {


                    case 1:

                      document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[0].src;
                      break;

                    case 2:

                      document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[1].src;
                      break;

                    case 3:

                      document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[2].src;
                      break;

                    case 4:

                      document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[3].src;
                      break;

                    default:
                  }*/
      }
    } (i), timeSummonMonsters);
  } 
  timeSummonMonsters = 0;
}


function createPlayers() {

  for(i = 1; i <= 4; i++) {

    player = new Player(i);
    // player.setPlayerImg(players[i].src);
    stats = player.getPlayerStatsArray();

    //Stats initialisieren
    //Jeweils in Spielerklasse speichern und im Array eintragen, das charSheet zum Zeichnen benutzt
    switch(i) {

      case 1:

      player.setPlayerName("SENJU");

          //STATS
          player.setPlayerSword(5); 
          stats[0] = player.getPlayerSword();

          player.setPlayerSwordDmg(4);
          stats[1] = player.getPlayerSwordDmg();

          player.setPlayerBow(3); 
          stats[2] = player.getPlayerBow();

          player.setPlayerBowDmg(1);
          stats[3] = player.getPlayerBowDmg();

          player.setPlayerMagic(3); 
          stats[4] = player.getPlayerMagic();

          player.setPlayerMagicDmg(1);
          stats[5] = player.getPlayerMagicDmg();

          player.setPlayerLife(25); 
          stats[6] = player.getPlayerLife();

          player.setPlayerLifeMax(25);
          stats[7] = player.getPlayerLifeMax();


          //RUNES

          player.setPlayerHealPoints(5); 
          stats[8] = player.getPlayerHealPoints();

          player.setPlayerHealPointsMax(5);
          stats[9] = player.getPlayerHealPointsMax();

          player.setPlayerBoost(1); 
          stats[10] = player.getPlayerBoost();

          player.setPlayerBoostMax(1);
          stats[11] = player.getPlayerBoostMax();

          player.setPlayerTrackingPoints(5); 
          stats[12] = player.getPlayerTrackingPoints();

          player.setPlayerTrackingPointsMax(5);
          stats[13] = player.getPlayerTrackingPointsMax();

          player.setPlayerXStrikePoints(1); 
          stats[14] = player.getPlayerXStrikePoints();

          player.setPlayerXStrikePointsMax(1);
          stats[15] = player.getPlayerXStrikePointsMax();

          player.setPlayerMovementPoints(10); 
          stats[16] = player.getPlayerMovementPoints();

          player.setPlayerMovementPointsMax(10);
          stats[17] = player.getPlayerMovementPointsMax();

          AllPlayers[i] = player;

          break;

          case 2:

          player.setPlayerName("MISCHA");

          //STATS       
          player.setPlayerSword(3); 
          stats[0] = player.getPlayerSword();

          player.setPlayerSwordDmg(3);
          stats[1] = player.getPlayerSwordDmg();

          player.setPlayerBow(3); 
          stats[2] = player.getPlayerBow();

          player.setPlayerBowDmg(3);
          stats[3] = player.getPlayerBowDmg();

          player.setPlayerMagic(3); 
          stats[4] = player.getPlayerMagic();

          player.setPlayerMagicDmg(3);
          stats[5] = player.getPlayerMagicDmg();

          player.setPlayerLife(15); 
          stats[6] = player.getPlayerLife();

          player.setPlayerLifeMax(15);
          stats[7] = player.getPlayerLifeMax();


          //RUNES

          player.setPlayerHealPoints(5); 
          stats[8] = player.getPlayerHealPoints();

          player.setPlayerHealPointsMax(5);
          stats[9] = player.getPlayerHealPointsMax();

          player.setPlayerBoost(1); 
          stats[10] = player.getPlayerBoost();

          player.setPlayerBoostMax(1);
          stats[11] = player.getPlayerBoostMax();

          player.setPlayerTrackingPoints(5); 
          stats[12] = player.getPlayerTrackingPoints();

          player.setPlayerTrackingPointsMax(5);
          stats[13] = player.getPlayerTrackingPointsMax();

          player.setPlayerXStrikePoints(1); 
          stats[14] = player.getPlayerXStrikePoints();

          player.setPlayerXStrikePointsMax(1);
          stats[15] = player.getPlayerXStrikePointsMax();

          player.setPlayerMovementPoints(10); 
          stats[16] = player.getPlayerMovementPoints();

          player.setPlayerMovementPointsMax(10);
          stats[17] = player.getPlayerMovementPointsMax();

          AllPlayers[i] = player;

          break;

          case 3:

          player.setPlayerName("JULIAN");

          //STATS       
          player.setPlayerSword(2); 
          stats[0] = player.getPlayerSword();

          player.setPlayerSwordDmg(1);
          stats[1] = player.getPlayerSwordDmg();

          player.setPlayerBow(1); 
          stats[2] = player.getPlayerBow();

          player.setPlayerBowDmg(3);
          stats[3] = player.getPlayerBowDmg();

          player.setPlayerMagic(6); 
          stats[4] = player.getPlayerMagic();

          player.setPlayerMagicDmg(5);
          stats[5] = player.getPlayerMagicDmg();

          player.setPlayerLife(10); 
          stats[6] = player.getPlayerLife();

          player.setPlayerLifeMax(10);
          stats[7] = player.getPlayerLifeMax();


          //RUNES

          player.setPlayerHealPoints(5); 
          stats[8] = player.getPlayerHealPoints();

          player.setPlayerHealPointsMax(5);
          stats[9] = player.getPlayerHealPointsMax();

          player.setPlayerBoost(1); 
          stats[10] = player.getPlayerBoost();

          player.setPlayerBoostMax(1);
          stats[11] = player.getPlayerBoostMax();

          player.setPlayerTrackingPoints(5); 
          stats[12] = player.getPlayerTrackingPoints();

          player.setPlayerTrackingPointsMax(5);
          stats[13] = player.getPlayerTrackingPointsMax();

          player.setPlayerXStrikePoints(1); 
          stats[14] = player.getPlayerXStrikePoints();

          player.setPlayerXStrikePointsMax(1);
          stats[15] = player.getPlayerXStrikePointsMax();

          player.setPlayerMovementPoints(10); 
          stats[16] = player.getPlayerMovementPoints();

          player.setPlayerMovementPointsMax(10);
          stats[17] = player.getPlayerMovementPointsMax();

          AllPlayers[i] = player;

          break;

          case 4:

          player.setPlayerName("JACKY");

          //STATS       
          player.setPlayerSword(4); 
          stats[0] = player.getPlayerSword();

          player.setPlayerSwordDmg(1);
          stats[1] = player.getPlayerSwordDmg();

          player.setPlayerBow(6); 
          stats[2] = player.getPlayerBow();

          player.setPlayerBowDmg(5);
          stats[3] = player.getPlayerBowDmg();

          player.setPlayerMagic(2); 
          stats[4] = player.getPlayerMagic();

          player.setPlayerMagicDmg(1);
          stats[5] = player.getPlayerMagicDmg();

          player.setPlayerLife(20); 
          stats[6] = player.getPlayerLife();

          player.setPlayerLifeMax(20);
          stats[7] = player.getPlayerLifeMax();


          //RUNES

          player.setPlayerHealPoints(5); 
          stats[8] = player.getPlayerHealPoints();

          player.setPlayerHealPointsMax(5);
          stats[9] = player.getPlayerHealPointsMax();

          player.setPlayerBoost(1); 
          stats[10] = player.getPlayerBoost();

          player.setPlayerBoostMax(1);
          stats[11] = player.getPlayerBoostMax();

          player.setPlayerTrackingPoints(5); 
          stats[12] = player.getPlayerTrackingPoints();

          player.setPlayerTrackingPointsMax(5);
          stats[13] = player.getPlayerTrackingPointsMax();

          player.setPlayerXStrikePoints(1); 
          stats[14] = player.getPlayerXStrikePoints();

          player.setPlayerXStrikePointsMax(1);
          stats[15] = player.getPlayerXStrikePointsMax();

          player.setPlayerMovementPoints(10); 
          stats[16] = player.getPlayerMovementPoints();

          player.setPlayerMovementPointsMax(10);
          stats[17] = player.getPlayerMovementPointsMax();

          AllPlayers[i] = player;

          break;

        }

      }

  //Start Movement Points von Spieler 1 übernehmen
  currentMovementPoints = AllPlayers[1].getPlayerMovementPoints();
  
}




var timeSummonPlayers = 250
function summonPlayers() {

  for(i = 1; i <= 4; i++){

    timeSummonPlayers += 250;

    setTimeout(function(j) {

      return function() {

        randomPosition = Math.floor(Math.random() * (amountTiles));

        //Falls auf der zufällig bestimmten Position bereits ein Monster haust
        if(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

          //Wiederhole den Vorgang bis das nicht mehr der Fall ist
          while(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

            randomPosition = Math.floor(Math.random() * (amountTiles));
          }

        }

        //Speichere SpielerPosition in Player-Objekten
        AllPlayers[j].setPlayerPosition(randomPosition);

        //Start-Position von Spieler 1 übernehmen
        currentPlayerPosition = AllPlayers[1].getPlayerPosition();

        //Tausche Template an Stelle des Spielers mit Spielerbild aus
        //AllTemplates[randomPosition].src = players[j].src;
        io.sockets.emit('50', {position: randomPosition, srz: null, difficultyValue: null, playersValue: j});
        //swordSound(); CLIENT(49)
        io.sockets.emit('49');

        //Sage der Kachel, dass sie einen Spieler hat
        AllTiles[randomPosition].setHasPlayer(true);
      }

    } (i), timeSummonPlayers);

}
}


////////////////////////////////////////
// Methods for the course of the game //
////////////////////////////////////////

var actionsBlocked = false;
function blockAction() {

  if(actionsBlocked) {

    $("#blocker").css("visibility", "hidden");
    actionsBlocked = false;

  }

  else {

    $("#blocker").css("visibility", "visible");
    actionsBlocked = true;

  }

}

///////////////////// showMovementPhaseAnimation ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 38
function initshowMovementPhaseAnimation(){
  initChangePlayer();
  resetMovementRange();
  //showMovementPhaseAnimation(); - CLIENT(0)
  io.sockets.emit('0', {pCurrentPlayerNumber: currentPlayerNumber});
}

///////////////////// END showMovementPhaseAnimation ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// changePlayer ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von XX - stats für neuen Player laden
function initChangePlayer(){
  if(currentPlayerNumber != 0) { AllPlayers[currentPlayerNumber].setIsPlaying(false);}

  if(currentPlayerNumber < 4) {

    currentPlayerNumber = currentPlayerNumber +1;

  }

  else {

    currentPlayerNumber = 1;

  }

  //In jeder neuen Runde werden Runen wieder aufgeladen
  refreshRunes();
  //Die Status-Werte des aktuellen Spielers reinladen
  loadStats();
  
  //Daten des jeweiligen Spielers reinladen
  //updateCharSheet(); CLIENT(52)
  var cP = AllPlayers[currentPlayerNumber];
  io.sockets.emit('52', {cPPlayerSword: cP.getPlayerSword(), cPPlayerSwordDmg: cP.getPlayerSwordDmg(), 
    cPPlayerBow: cP.getPlayerBow(), cPPlayerBowDmg: cP.getPlayerBowDmg(), 
    cPPlayerMagic: cP.getPlayerMagic(), cPPlayerMagicDmg: cP.getPlayerMagicDmg(), 
    cPPlayerLife: cP.getPlayerLife(), cPPlayerLifeMax: cP.getPlayerLifeMax(), 
    cPPlayerHealPoints: cP.getPlayerHealPoints(), cPPlayerHealPointsMax: cP.getPlayerHealPointsMax(), 
    cPPlayerBoost: cP.getPlayerBoost(), cPPlayerBoostMax: cP.getPlayerBoostMax(), 
    cPPlayerTrackingPoints: cP.getPlayerTrackingPoints(), cPPlayerTrackingPointsMax: cP.getPlayerTrackingPointsMax(), 
    cPPlayerXStrikePoints: cP.getPlayerXStrikePoints(), cPPlayerXStrikePointsMax: cP.getPlayerXStrikePointsMax(), 
    cPPlayerMovementPoints: cP.getPlayerMovementPoints(), cPPlayerMovementPointsMax: cP.getPlayerMovementPointsMax(), 
    cPPlayerLvl: cP.getPlayerLvl(), cPPlayerEXP: cP.getPlayerEXP()});

  currentMovementPoints = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
  currentPlayerPosition = AllPlayers[currentPlayerNumber].getPlayerPosition();

  AllPlayers[currentPlayerNumber].setIsPlaying(true);

  //changePlayer() - CLIENT(51)
  io.sockets.emit('51', {pCurrentPlayerNumber: currentPlayerNumber, currentPlayerName: AllPlayers[currentPlayerNumber].getPlayerName()});
}

///////////////////// END changePlayer ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//TO-DO NODE





function reincarnatePlayer(){

  AllPlayers[currentPlayerNumber].setPlayerLife(AllPlayers[currentPlayerNumber].getPlayerLifeMax());

  AllPlayers[currentPlayerNumber].setPlayerHealPoints(0);
  AllPlayers[currentPlayerNumber].setPlayerBoost(0);
  AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(0);
  AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(0);
  AllPlayers[currentPlayerNumber].setPlayerMovementPoints(0);

  //updateCharSheet(); CLIENT(52)
  var cP = AllPlayers[currentPlayerNumber];
  io.sockets.emit('52', {cPPlayerSword: cP.getPlayerSword(), cPPlayerSwordDmg: cP.getPlayerSwordDmg(), 
    cPPlayerBow: cP.getPlayerBow(), cPPlayerBowDmg: cP.getPlayerBowDmg(), 
    cPPlayerMagic: cP.getPlayerMagic(), cPPlayerMagicDmg: cP.getPlayerMagicDmg(), 
    cPPlayerLife: cP.getPlayerLife(), cPPlayerLifeMax: cP.getPlayerLifeMax(), 
    cPPlayerHealPoints: cP.getPlayerHealPoints(), cPPlayerHealPointsMax: cP.getPlayerHealPointsMax(), 
    cPPlayerBoost: cP.getPlayerBoost(), cPPlayerBoostMax: cP.getPlayerBoostMax(), 
    cPPlayerTrackingPoints: cP.getPlayerTrackingPoints(), cPPlayerTrackingPointsMax: cP.getPlayerTrackingPointsMax(), 
    cPPlayerXStrikePoints: cP.getPlayerXStrikePoints(), cPPlayerXStrikePointsMax: cP.getPlayerXStrikePointsMax(), 
    cPPlayerMovementPoints: cP.getPlayerMovementPoints(), cPPlayerMovementPointsMax: cP.getPlayerMovementPointsMax(), 
    cPPlayerLvl: cP.getPlayerLvl(), cPPlayerEXP: cP.getPlayerEXP()});

  // showReincarnationAnimation(); CLIENT(61)
  io.sockets.emit('61');
}





function EXPGain (gainedEXP) {

  var currentEXP = AllPlayers[currentPlayerNumber].getPlayerEXP();
  var newEXP = currentEXP+gainedEXP;

      //Falls Erfahrungspunkte über oder gleich 100 --> Lvl Up
  if (newEXP >= 100) {

        //überschüssige EXP zwischenspeichern
    var overrunEXP = newEXP - 100;
        //Animation mit 100 ausführen
    // showEXPGain(currentEXP, 100); CLIENT(64)
    io.sockets.emit('64', {pCurrentEXP: currentEXP});
        //Level des Spielers erhöhen
    AllPlayers[currentPlayerNumber].setPlayerLvl(AllPlayers[currentPlayerNumber].getPlayerLvl()+1);
        //EXP des Spielers wieder auf Wert der überschüssigen EXP setzen
    AllPlayers[currentPlayerNumber].setPlayerEXP(overrunEXP);

    // setTimeout function CLIENT(65)
    io.sockets.emit('65', {pPlayerLvl: AllPlayers[currentPlayerNumber].getPlayerLvl(), pOverrunEXP: overrunEXP, pCurrentEXP: currentEXP});
  }

      //Spieler ist kein Level aufgestiegen
  else {

    // showEXPGain(currentEXP, newEXP); CLIENT(66)
    io.sockets.emit('66', {pCurrentEXP: currentEXP, pNewEXP: newEXP});
        //EXP des Spielers auf neuen Wert setzen
    AllPlayers[currentPlayerNumber].setPlayerEXP(newEXP);

  }

}

//TO-DO NODE
function LevelUp() {

  $("#LvlUpMarker").css("visibility", "hidden");
  $("#lvl").css("visibility", "visible");
  update(18);
  update(19);
  blockAction();

}



//HIER KÖNNTE MAN JEDE ZWEITE ZEILE NOCH RAUSNEHMEN JE NACHDEM, OB MAN DEN SCHADEN AUCH ERHÖHEN DARF
function updateStats(currentPlayerArray) {

  player = AllPlayers[currentPlayerNumber];

  //STATS

  player.setPlayerSword(currentPlayerArray[0]); 
  /*  player.setPlayerSwordDmg(currentPlayerArray[1]);*/
  player.setPlayerBow(currentPlayerArray[2]); 
  /*  player.setPlayerBowDmg(currentPlayerArray[3]);*/
  player.setPlayerMagic(currentPlayerArray[4]); 
  /*  player.setPlayerMagicDmg(currentPlayerArray[5]);*/
  /*  player.setPlayerLife(currentPlayerArray[6]); */
  player.setPlayerLifeMax(currentPlayerArray[7]);

  //RUNES

  /*  player.setPlayerHealPoints(currentPlayerArray[8]); */
  player.setPlayerHealPointsMax(currentPlayerArray[9]);
  /*  player.setPlayerBoost(currentPlayerArray[10]); */
  player.setPlayerBoostMax(currentPlayerArray[11]);
  /*  player.setPlayerTrackingPoints(currentPlayerArray[12]);*/ 
  player.setPlayerTrackingPointsMax(currentPlayerArray[13]);
  /*  player.setPlayerXStrikePoints(currentPlayerArray[14]); */
  player.setPlayerXStrikePointsMax(currentPlayerArray[15]);
  /*  player.setPlayerMovementPoints(currentPlayerArray[16]); */
  player.setPlayerMovementPointsMax(currentPlayerArray[17]);

}







function refreshRunes() {

  //Aktuelle Werte des Spielers holen und die erlaubten Max-Werte
  move = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
  moveMax = AllPlayers[currentPlayerNumber].getPlayerMovementPointsMax();

  track = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();
  trackMax = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();

  boost = AllPlayers[currentPlayerNumber].getPlayerBoost();
  boostMax = AllPlayers[currentPlayerNumber].getPlayerBoost();

  xstrike = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
  xstrikeMax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();

  heal = AllPlayers[currentPlayerNumber].getPlayerHealPoints();
  healMax = AllPlayers[currentPlayerNumber].getPlayerHealPoints();

  //If-Abfragen, um nicht über Maximum zu gelangen, falls nach Addition des Refreshs der Wert über Max liegt, Wert nur auf Max setzen, nicht darüber
  if(move+5 <= moveMax) { AllPlayers[currentPlayerNumber].setPlayerMovementPoints(move+5); } else {AllPlayers[currentPlayerNumber].setPlayerMovementPoints(moveMax)}
  if(track+5 <= trackMax) { AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(track+5); } else {AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(trackMax)}
  if(boost+1 <= boostMax) { AllPlayers[currentPlayerNumber].setPlayerBoost(boost+1); } else {AllPlayers[currentPlayerNumber].setPlayerBoost(boostMax)}
  if(xstrike+1 <= xstrikeMax) { AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrike+1); } else {AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrikeMax)}
  if(heal+1 <= healMax) { AllPlayers[currentPlayerNumber].setPlayerHealPoints(heal+1); } else {AllPlayers[currentPlayerNumber].setPlayerHealPoints(healMax)}

}

function loadStats() {

  //DEFENSE, ATTACK, BOOST, STRIKE
  dmin = 2;
  dmax = 2;
  amin = 1;
  amax = 1;

  abmin = AllPlayers[currentPlayerNumber].getPlayerBoost();
  abmax = AllPlayers[currentPlayerNumber].getPlayerBoostMax();
  esmin = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
  esmax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();


  //CHAR STATS
  me_attack_c = AllPlayers[currentPlayerNumber].getPlayerSword();
  me_dmg_c = AllPlayers[currentPlayerNumber].getPlayerSwordDmg();

  r_attack_c = AllPlayers[currentPlayerNumber].getPlayerBow();
  r_dmg_c = AllPlayers[currentPlayerNumber].getPlayerBowDmg();

  ma_attack_c = AllPlayers[currentPlayerNumber].getPlayerMagic();
  ma_dmg_c = AllPlayers[currentPlayerNumber].getPlayerMagicDmg()

  l_min_c = AllPlayers[currentPlayerNumber].getPlayerLife();
  l_max_c = AllPlayers[currentPlayerNumber].getPlayerLifeMax();

}



/////////////////////
// START THE FIELD //
/////////////////////

// Methode startet das Spiel und initialisiert alles Notwendige

function initField() {

  calculateFieldParas(); //NODE
  calculateBorderTileIDs(); //NODE
  initNumberArrayTiles(); //NODE
  shuffleTilesArray(); //NODE
  initNumberArrayMonsters(); //NODE
  createTiles(); //NODE + MethodeEmit(40)
  //addTemplates(); //CLIENT(41)
  io.sockets.emit('41', {a: columnLength, b: amountTiles});

  createPlayers();
  //Nur durch diese Einschränkung fangen die Monster erst NACH der For-Schleife für die Kachelerzeugung an zu erscheinen
  //Ohne die Wait-Function fangen die Monster immer schon zeitgleich an aufzupoppen
  //Die Wartezeit errechnet sich aus der Zeit, die die Kacheln brauchen, um zu erscheinen. (5 pro Kachel)
  //Definiert in der "showTiles" - Methode
  setTimeout(function() {summonMonsters(); }, amountTiles*7 + 500);
  setTimeout(function() {summonPlayers(); }, amountTiles*7 + amountMonsters*100 + 500);
  //setTimeout(function() {showGameStartAnimation();}, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500); CLIENT(47)
  setTimeout(function() {io.sockets.emit('47'); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500);
  //setTimeout(function() {$("#characterSheet").css("visibility", "visible") }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000); CLIENT(48)
  setTimeout(function() {io.sockets.emit('48'); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000);
    // $("#characterSheet").css("visibility", "visible")

}






/////////////////////////////
// Methods for Interaction //
/////////////////////////////


//Funktion dient zur Überprüfung, ob mindestens eine Zahl in einem Array der SpielerPosition entspricht
function CheckIfEqualsPlayerPosition (zahl) {

  return zahl == currentPlayerPosition;

}


//Gibt in Form eines Integers die Information aus, in welchem Bereich sich der Spieler befindet
function getPlayerPosArea() {


  //Integer, der dafür steht, in welcher "Area" sich der Spieler befindet. (Nord, Süd, West, Mitte, etc....)
  //Diese Funktion ermittelt dies und gibt die Information weiter
  var playerPosArea = "center";

  //Falls currentplayerPosition im Array BorderTilesID enthalten muss die Anzeige der Bewegungskosten gesondert betrachtet werden
  if($.inArray(currentPlayerPosition, BorderTilesIDs) != -1) {

    //Schalter bestimmt, dass nur der case ausgeführt wird, in dem die SpielerPosition im jeweiligen Array enthalten ist
    switch(true) {

      //falls SpielerPosition auf NORTH Border
      //die "some()" Funktion prüft, für jede Zahl im Array, ob sie der PlayerPos entspricht. Wenn dies bei einer einzigen der Fall
      //ist, wird der Ausdruck zu true ausgewertet und dieser case wird ausgeführt.
      case NorthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "north";
      break;

      //falls SpielerPosition auf NORTH WEST Ecke
      case CheckIfEqualsPlayerPosition(0) :

      playerPosArea = "northWest";
      break;

      //falls SpielerPosition auf NORTH EAST Ecke
      case (CheckIfEqualsPlayerPosition(columnLength-1)) :

      playerPosArea = "northEast";
      break;

      //falls SpielerPosition auf SOUTH Border
      case SouthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "south";
      break;

      //falls SpielerPosition auf SOUTH WEST Ecke
      case CheckIfEqualsPlayerPosition(amountTiles) :

      playerPosArea = "southEast";
      break;

      //falls SpielerPosition auf SOUTH EAST Ecke
      case CheckIfEqualsPlayerPosition(amountTiles-(columnLength-1)) :

      playerPosArea = "southWest";
      break;

      //falls SpielerPosition auf EAST Border (uneven)
      case EastBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "eastIndented";
      break;

      //falls SpielerPosition auf EAST Border (even)
      case EastBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "east";
      break;

      //falls SpielerPosition auf WEST Border (uneven)
      case WestBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "westIndented";
      break;

      //falls SpielerPosition auf WEST Border (even)
      case WestBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

      playerPosArea = "west";
      break;


      default: alert("Fehler getPlayerPos - currentPlayerPosition in keinem der Arrays enthalten");

    }
  }

  else {

    // do nothing
    // center --> Standardfall, Player in mitten des Felds umringt von 6 Kacheln
  }

  return playerPosArea;
}


var left = 0; var right = 0; var topright = 0; var topleft = 0; var downright = 0; var downleft = 0;

// gibt ein Array mit den Kacheln rund um den Spieler zurück. (Links beginnend im Uhrzeigersinn)
function updateTilesAroundPlayer() {

  //leere momentanes Array, damit es frisch updaten kann
  tilesAroundPlayer.length = 0;

  //Alle Positionen, die theoretisch vorkommen könnten
  left = currentPlayerPosition-1; 
  topleft = currentPlayerPosition-columnLength; 
  topright = currentPlayerPosition-(columnLength-1);
  right = currentPlayerPosition+1;
  downleft = currentPlayerPosition+(columnLength-1);
  downright = currentPlayerPosition+columnLength;

  //playerPosArea fungiert als Marker, ob der Spieler sich in Randbereichen befindet oder nicht
  //Je nachdem hat er um sich herum weniger bzw. mehr Kacheln
  //Wird in getPlayerPosArea ermittelt, die den Marker ausgibt.

  switch(getPlayerPosArea()) {

    case "center":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;

    case "north":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;

    case "northWest":

    tilesAroundPlayer.push(AllTiles[right], AllTiles[downright]);

    break;

    case "northEast":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[downleft]);

    break;

    case "south":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right]);

    break;

    case "southWest":

    tilesAroundPlayer.push(AllTiles[topright], AllTiles[right]);

    break;

    case "southEast":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft]);

    break;

    case "eastIndented":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[downright], AllTiles[downleft]);

    break;

    case "east":

    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[downleft]);

    break;

    case "westIndented":

    tilesAroundPlayer.push(AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;

    case "west":

    tilesAroundPlayer.push(AllTiles[topright], AllTiles[right], AllTiles[downright]);

    break;


    default: alert("Fehler updateTilesAroundPlayer");
  }
}

function resetMovementRange() {

  var tile;
  var templateOverTile;

  //Vorherige Darstellung bereinigen
  for(i=0; i < tilesAroundPlayer.length; i++) {

    //Kachel aus Array holen
    tile = tilesAroundPlayer[i];
    //Das auszutauschende Template über der Kachel holen
    //templateOverTile = AllTemplates[tile.getID()]; - CLIENT(50)
    
    //Falls die Kachel weder einen Spieler noch ein Monster hat...
    if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

    //... Die Zahl wieder durch ein Template ersetzen
    //templateOverTile.src = "Bilddaten/Spielfeld/temp.png"; - CLIENT(50)
    io.sockets.emit('50', {position: tile.getID(), srz: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});
  }

}

delete(tile);

}


//Funktion, die anhand des tilesAroundPlayer-Arrays die Kacheln mit Bewegungskosten überzeichnet
// !!!!! NOCH ABFRAGEN ERGÄNZEN, DAMIT KEINE SPIELER ODER MONSTER ÜBERZEICHNET WERDEN
function showMovementRange() {
  var tile;
  var terrainDifficulty;
  var templateOverTile;

  resetMovementRange();

  //Array updaten --> ESSENTIELL, Weiche dafür, dass in der oberen Schleife die alte Ansicht gelöscht wird und in der
  //unteren Schleife die neue Ansicht gezeichnet wird.
  updateTilesAroundPlayer();

  //Neue Darstellung zeichnen
  for(i=0; i < tilesAroundPlayer.length; i++) {
    //Kachel aus Array holen
    tile = tilesAroundPlayer[i];
    //Schwierigkeit der Kachel holen
    terrainDifficulty = tile.getTerrainDifficulty();
    //Das auszutauschende Template über der Kachel holen
    //templateOverTile = AllTemplates[tile.getID()];
    
    //Falls die Kachel weder einen Spieler noch ein Monster hat...
    if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

    //... Das Template durch eine Zahl ersetzen
    // templateOverTile.src = terrainsDifficulties[terrainDifficulty].src;
    io.sockets.emit('50', {position: tile.getID(), srz: null, difficultyValue: terrainDifficulty, playersValue: null});
  }

}

delete(tile, templateOverTile, terrainDifficulty);

}



var idClickedTile;
var clickedTile;

function checkClickedTile(param) {

  //Die ID der Kachel, auf die geklickt wurde
  idClickedTile = param - amountTiles-1;
  //Die Kachel, auf die geklickt wurde
  clickedTile = AllTiles[idClickedTile];
  //aktualisiere das tilesAroundPlayer-Array
  updateTilesAroundPlayer();

  //Falls die Kachel, auf die geklickt wurde eine Kachel in Reichweite des Spielers ist und dort kein anderer Spieler steht...
  //Bewegung potentiell möglich
  if(($.inArray(clickedTile, tilesAroundPlayer) != -1) && (clickedTile.getHasPlayer() == false)) {

        //Wenn das Feld, auf das man gehen möchte teurer ist, als die verbliebenen Bewegungspunkte und ohne Monster...
        //...Bewegung untersagen
        if(currentMovementPoints < (clickedTile.getTerrainDifficulty()+1) && clickedTile.getHasMonsters() == false) {

          //alert("Not enough movementPoints left"); - CLIENT(42)
          io.sockets.emit('42', "Not enough movementPoints left");
        }

        //... andernfalls Bewegung potentiell möglich
        else {

              //Falls die Kachel, auf die geklickt wurde ein Monster hat -> Kampf
              if(clickedTile.getHasMonsters() == true) {

                //Kämpfen
                checkTrackingAbility();
                //startFightRoutine(idClickedTile, clickedTile); CLIENT(1000)
                io.sockets.emit('1000');
              }

              //andernfalls kann es nur eine leere Kachel sein -> Spieler bewegen
              else {

                  //MovePlayer nimmt als Argument die geklickte Kachel, sowie den idClickedTile (womit auf das Template geschlossen werden kann)
                  // movePlayer(idClickedTile, clickedTile); - CLIENT(43)
                  initMovePlayer(idClickedTile, clickedTile);
                }



              }
            }

  //... andernfalls Bewegung nicht erlauben
  else {

    //clickSound(); - CLIENT(44)
    io.sockets.emit('44');

  }

}

///////////////////// movePlayer ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von XX
function initMovePlayer(paramIdClickedTile, paramClickedTile){
  var lastPlayerPosition = paramIdClickedTile;
  //Das Template, auf das geklickt wurde
  //var clickedTemplate = AllTemplates[lastPlayerPosition]; - CLIENT(50)
  //Der Kachel sagen, dass sie jetzt einen Spieler hat
  paramClickedTile.setHasPlayer(true);
  //Spielerbild zuweisen
  //clickedTemplate.src = players[currentPlayerNumber].src; - CLIENT(50)
  io.sockets.emit('50', {position: lastPlayerPosition, srz: null, difficultyValue: null, playersValue: currentPlayerNumber});
  
  //Der alten Kachel sagen, dass sie keinen Spieler mehr hat
  AllTiles[currentPlayerPosition].setHasPlayer(false);
  //Das Spieler-Symbol der alten Kachel durch Template ersetzen
  // AllTemplates[currentPlayerPosition].src = "Bilddaten/Spielfeld/temp.png"; - CLIENT(50)
  io.sockets.emit('50', {position: currentPlayerPosition, srz: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});

  // Position merken, auf die der Spieler gesprungen ist, damit diese bei der nächsten Bewegung wieder auf Template
  // gesetzt werden kann.
  currentPlayerPosition = lastPlayerPosition;

  //Bewegungspunkte abziehen, falls es sich nicht um ein Monster handelt
  if(clickedTile.getHasMonsters() == false) { currentMovementPoints = currentMovementPoints - (AllTiles[currentPlayerPosition].getTerrainDifficulty()+1); } //"+1" weil die Zählung bei 0 beginnt
  //Dem aktuellen Spieler die Bewegungspunkte abziehen
  if(currentPlayerNumber == 0){
    currentPlayerNumber = 1;
  }

  AllPlayers[currentPlayerNumber].setPlayerMovementPoints(currentMovementPoints);
  //Dem aktuellen Spieler die neue Position zuweisen, auf die geklickt wurde
  AllPlayers[currentPlayerNumber].setPlayerPosition(currentPlayerPosition);
  
  io.sockets.emit('43', {pCurrentMovementPoints: currentMovementPoints});
  showMovementRange();
}

///////////////////// END movePlayer ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// bewegeRahmen ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von XX
function initBewegeRahmen(param) {
  var index2 = param-amountTiles-1;

  io.sockets.emit('54', {lastBorder: zwischenSpeicherRahmen, pIndex2: index2, lastDifficulty: AllTiles[zwischenSpeicherRahmen].getTerrainDifficulty(), lastIndexDifficulty: AllTiles[index2].getTerrainDifficulty()});
  //Id ist die index2 Nummer der gesamten Bilder im Dokument
  zwischenSpeicherRahmen= index2; 
  //speichern des aktuellen Rahmens für Änderung bei Neuaufruf
}

///////////////////// END bewegeRahmen ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


//Betrag, um den geheilt wird
var healPower;
function healPlayer() {

  //aktueller Spieler
  currentPlayer = AllPlayers[currentPlayerNumber];
  //Leben des aktuellen Spielers
  currentLife = currentPlayer.getPlayerLife();
  //Maximales Leben des aktueller Spielers
  currentLifeMax = currentPlayer.getPlayerLifeMax();
  //HealingPoints des Spielers
  currentHealPoints = currentPlayer.getPlayerHealPoints();

  //Heilbetrag
  healPower = 2 + Math.floor(Math.random()*3);
  
  //Falls Spieler noch über Healpoints verfügt
  if(currentHealPoints > 0 && currentLife != currentLifeMax) {

    //Falls maximales Leben größer als Lebenspunkte nach Heilung
    if(currentLifeMax > (currentLife+healPower)) {

      //Leben des Spielers erhöhen
      currentPlayer.setPlayerLife(currentLife+healPower);

    }

    //Heilung heilt den Spieler voll, aber nicht über maximales Leben
    else {

      //Leben auf Maximum setzen
      currentPlayer.setPlayerLife(currentLifeMax);
      

    }

    //HealingPoints abziehen
    currentPlayer.setPlayerHealPoints(currentHealPoints-1);
  }

  else { alert("no heal points left or already healed!")}

  //Änderung sichtbar machen
updateCharSheet();

}






























/////////////////////
// CHARSHEET FUNCTIONS //
/////////////////////


function lvl(){
  document.getElementById('lvl').style.display = 'block';
}

//html-Text
function update(attribute) {

  stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

  //Falls attribute einen geraden Wert hat (= linke Zahl)
  //Somit levelt nur der Angriff hoch, nicht der Schaden
  /*  if(attribute % 2 == 0 || attribute == 0) {*/

    h = attribute;
    hh = "." + attribute;
    $(hh).html(stats[attribute]);

    if (h != 19 && h != 18 && h > 7) {

      hhh = "." + h + "0";
      $(hhh).html(stats[attribute]);
    }
  }

  function statsGet(hate){

    stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
    return stats[hate];
  }

  function statsSet(hate, hater){

    stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
    return stats[hate] = hater;
  }

/*function statsIncrement(hate){

 stats[hate] = stats[hate]+1;

}*/


function statsIncrement(hate) {

//Array des aktuellen Players holen
stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

if(stats[18] > 0 || stats[19] > 0) {

    //Falls bei primary skills geklickt wurde
    if (hate < 8) {

      if (stats[18] > 0) {

            //Falls es sich um eine gerade Zahl handelt (= linker Wert)
            if (hate % 2 == 0 || hate == 7) {

              //Einen Punkt abziehen
              stats[18] = stats[18] - 1;
              //neuen Wert darstellen
              update(18);

            }

          //Wert auch im Array erhöhen
          i = stats[hate]+1;
          stats[hate] = i;

          if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

        }
      }

    //Es wurde bei secondary skills geklickt und hierfür noch Punkte übrig sind
    else if (stats[19] > 0) {

      //Falls es sich um eine gerade Zahl handelt (=linker Wert)
      if (hate % 2 != 0) {

          //Einen Punkt abziehen
          stats[19] = stats[19] - 1;
          //neuen Wert darstellen
          update(19);

        }

      //Wert auch im Array erhöhen
      i = stats[hate]+1;
      stats[hate] = i;

      if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

    }
  } 
} 



























/////////////////////
// FIGHT FUNCTIONS //
/////////////////////

//Für den PhaseFrame
var x;

//Variablen für den Kampf

var check_ab = 0;
var count3 = 0;

//DEFENSE, ATTACK, BOOST, STRIKE
var dmin; 
var dmax; 
var amin; 
var amax; 

var abmin;
var abmax;
var esmin;
var esmax;


//CHAR STATS
var me_attack_c;
var me_dmg_c;

var r_attack_c;
var r_dmg_c; 

var ma_attack_c; 
var ma_dmg_c;

var l_min_c; 
var l_max_c;

//MONSTER STATS
var me_attack_m=8;
var me_dmg_m=1;

var r_attack_m=11;
var r_dmg_m=3;

var ma_attack_m=10;
var ma_dmg_m=2;

var l_min_m=10;
var l_max_m=10;

var exp = 50;





function check(status)
{
  if(count3==0)
  {
    attackboost="me_attack_c";
    
    attack_c=me_attack_c;
    dmg_c=me_dmg_c;
    
    attack_m=me_attack_m;
    dmg_m=me_dmg_m;
  }
  else if(count3==1)
  { 
    attackboost="r_attack_c";
    
    attack_c=r_attack_c;
    dmg_c=r_dmg_c;
    
    attack_m=r_attack_m;
    dmg_m=r_dmg_m;
  }
  else if(count3==2)
  { 
    attackboost="ma_attack_c";
    
    attack_c=ma_attack_c;
    dmg_c=ma_dmg_c;
    
    attack_m=ma_attack_m;
    dmg_m=ma_dmg_m;
  }
  
  if(status=="defence")
  {
    //TO-DO NODE
    //blockSound();
    if(dmin>0)
    {
      dmin=dmin-1;
      // document.getElementById("dmin").innerHTML = dmin; - CLIENT(11)
      io.sockets.emit('11', {pDmin: dmin});
      fight(status);
    } 
  }
  if(status=="attack")
  {
    //TO-DO NODE
    //swordDrawSound();
    if(amin>0)
    {
      amin=amin-1;
      // document.getElementById("amin").innerHTML = amin; CLIENT(14)
      io.sockets.emit('14', {pAmin: amin});
      fight(status);
    }
  }
  if(status=="attackBoost")
  {
    if(abmin>0)
    {
      abmin=abmin-1;
      AllPlayers[currentPlayerNumber].setPlayerBoost(abmin);
      // document.getElementById("abmin").innerHTML = abmin; CLIENT(17)
      io.sockets.emit('17', {pAbmin: abmin});
      if(count3==0)
      {
        if(check_ab==0)
        {
          zw = me_attack_c;
        }
        attackboost="me_attack_c";
        me_attack_c=me_attack_c+1;
        attack_c=me_attack_c;
      }
      else if(count3==1)
      {
        if(check_ab==0)
        {
          zw = r_attack_c;
        }
        attackboost="r_attack_c";
        r_attack_c=r_attack_c+1;
        attack_c=r_attack_c;
      }
      else if(count3==2)
      {
        if(check_ab==0)
        {
          zw = ma_attack_c;
        }
        attackboost="ma_attack_c";
        ma_attack_c=ma_attack_c+1;
        attack_c=ma_attack_c;
      }
      check_ab=1;
      // document.getElementById(attackboost).innerHTML = attack_c; CLIENT(55)
      io.sockets.emit('55', {pInput: attackboost, pAttackC: attack_c});
      
    }
  }
  if(status=="extraStrike")
  {
    if(esmin!=0)
    {
      esmin=esmin-1;
      amin=amin+1;
      AllPlayers[currentPlayerNumber].setPlayerBoost(esmin);
      // document.getElementById("esmin").innerHTML = esmin; CLIENT(20)
      // document.getElementById("amin").innerHTML = amin; CLIENT(20)
      io.sockets.emit('20', {pEsmin: esmin, pAmin: amin});
    }
  }
  
  
  if(count3==3)
  {
    // showFightAnimation("NEXT ROUND"); CLIENT(62)
    io.sockets.emit('62', {pInput: "NEXT ROUND", pTime: 0});
    count3=0;
    dmin=dmax;
    amin=amax;
    // document.getElementById("dmin").innerHTML = dmin; CLIENT(56)
    // document.getElementById("amin").innerHTML = amin; CLIENT(56)
    io.sockets.emit('56', {pDmin: dmin, pAmin: amin});
  }

}

function fight(status){
  wuerfel= Math.floor(Math.random() * 12 + 1);

  //Falls der AttackWurf nicht ausreicht, um das Monster zu treffen
  if(wuerfel+attack_c<attack_m)
  {
    l_min_c=l_min_c - dmg_m;
    AllPlayers[currentPlayerNumber].setPlayerLife(l_min_c);
    // document.getElementById("l_min_c").innerHTML = l_min_c; CLIENT(57)
    // setTimeout(function(){$(".c").toggleClass("ca");},1000); CLIENT(57)
    // $(".c").toggleClass("ca"); CLIENT(57)
        //auditives Feedback
    //gotHitSound(); CLIENT(57)
    io.sockets.emit('57', {pLminC: l_min_c});
    
  }

  //Falls doch und man gerade angreift und nicht verteidigt...
  else if(status=="attack"){
    l_min_m=l_min_m - dmg_c;
    /*$("#l_min_m").text = l_min_m;*/

    // document.getElementById("l_min_m").innerHTML = l_min_m; CLIENT(58)
    // setTimeout(function(){$(".m").toggleClass("ma");},1000); CLIENT(58)
    // $(".m").toggleClass("ma"); CLIENT(58)

      //auditives+visuelles Feedback
    // batGotHitSound(); CLIENT(58)
    // showFightAnimation("HIT"); CLIENT(58)
    io.sockets.emit('58', {pLminM: l_min_m});
  }
  
  if(check_ab==1)
  {
    // document.getElementById(attackboost).innerHTML = zw; CLIENT(55)
    io.sockets.emit('55', {pInput: zw});
    check_ab=0;
  }

  count3=count3+1;
  
  //Bewege PhaseFrame

  x = x + 60;
  if(x == 660) { x = 480 };
  //$("#phaseFrame").css("left", x+"px"); CLIENT(59)
  io.sockets.emit('59', {pX: x});
  /*  document.getElementById("rahmen").style.left = x + "%";*/

  if(l_min_c<=0)
  {

    // dieSound(); CLIENT(60)
    // showFightAnimation("!! LOST !!"); CLIENT(60)
    //updateCharSheet(); CLIENT(52)
    var cP = AllPlayers[currentPlayerNumber];
    io.sockets.emit('52', {cPPlayerSword: cP.getPlayerSword(), cPPlayerSwordDmg: cP.getPlayerSwordDmg(), 
    cPPlayerBow: cP.getPlayerBow(), cPPlayerBowDmg: cP.getPlayerBowDmg(), 
    cPPlayerMagic: cP.getPlayerMagic(), cPPlayerMagicDmg: cP.getPlayerMagicDmg(), 
    cPPlayerLife: cP.getPlayerLife(), cPPlayerLifeMax: cP.getPlayerLifeMax(), 
    cPPlayerHealPoints: cP.getPlayerHealPoints(), cPPlayerHealPointsMax: cP.getPlayerHealPointsMax(), 
    cPPlayerBoost: cP.getPlayerBoost(), cPPlayerBoostMax: cP.getPlayerBoostMax(), 
    cPPlayerTrackingPoints: cP.getPlayerTrackingPoints(), cPPlayerTrackingPointsMax: cP.getPlayerTrackingPointsMax(), 
    cPPlayerXStrikePoints: cP.getPlayerXStrikePoints(), cPPlayerXStrikePointsMax: cP.getPlayerXStrikePointsMax(), 
    cPPlayerMovementPoints: cP.getPlayerMovementPoints(), cPPlayerMovementPointsMax: cP.getPlayerMovementPointsMax(), 
    cPPlayerLvl: cP.getPlayerLvl(), cPPlayerEXP: cP.getPlayerEXP()});

    l_min_m=l_max_m;
    count3 = 0;

    // $(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo"); CLIENT(60)
    // $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo"); CLIENT(60)
    // setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500); CLIENT(60)
    io.sockets.emit('60');

      //Falls der Spieler verliert, Status zurücksetzen
    reincarnatePlayer();

  }

  else if(l_min_m<=0)
  {

    // showFightAnimation("!! WIN !!"); CLIENT(62)
    io.sockets.emit('62', {pInput: "!! WIN !!", pTime: 0});
    //updateCharSheet(); CLIENT(52)
    var cP = AllPlayers[currentPlayerNumber];
    io.sockets.emit('52', {cPPlayerSword: cP.getPlayerSword(), cPPlayerSwordDmg: cP.getPlayerSwordDmg(), 
    cPPlayerBow: cP.getPlayerBow(), cPPlayerBowDmg: cP.getPlayerBowDmg(), 
    cPPlayerMagic: cP.getPlayerMagic(), cPPlayerMagicDmg: cP.getPlayerMagicDmg(), 
    cPPlayerLife: cP.getPlayerLife(), cPPlayerLifeMax: cP.getPlayerLifeMax(), 
    cPPlayerHealPoints: cP.getPlayerHealPoints(), cPPlayerHealPointsMax: cP.getPlayerHealPointsMax(), 
    cPPlayerBoost: cP.getPlayerBoost(), cPPlayerBoostMax: cP.getPlayerBoostMax(), 
    cPPlayerTrackingPoints: cP.getPlayerTrackingPoints(), cPPlayerTrackingPointsMax: cP.getPlayerTrackingPointsMax(), 
    cPPlayerXStrikePoints: cP.getPlayerXStrikePoints(), cPPlayerXStrikePointsMax: cP.getPlayerXStrikePointsMax(), 
    cPPlayerMovementPoints: cP.getPlayerMovementPoints(), cPPlayerMovementPointsMax: cP.getPlayerMovementPointsMax(), 
    cPPlayerLvl: cP.getPlayerLvl(), cPPlayerEXP: cP.getPlayerEXP()});
    // setTimeout(function(){showFightAnimation("GAINED "+exp+" EXP")}, 1000); CLIENT(62)
    io.sockets.emit('62', {pInput: "GAINED "+exp+" EXP", pTime: 1000});

    l_min_m=l_max_m;
    count3 = 0;

    // $(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo"); CLIENT(63)
    // $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo"); CLIENT(63)
    // setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500); CLIENT(63)
    io.sockets.emit('63');

        //Falls der Spieler gewonnen hat, wird Spielfigur bewegt
        //Die Variablen sind global definiert und ändern sich mit Aufruf der Funktion checkClickedTile
        //(Also bei jedem Klick für eine Bewegung)
    initMovePlayer(idClickedTile, clickedTile);
        //Animation zeigen bei Sieg
    // showFieldWinAnimation(clickedTile); CLIENT(67)
    io.sockets.emit('67', {pXPosition: clickedTile.getXPosition(), pYPosition: clickedTile.getYPosition()});
        //Dem Spieler die erhaltenen EXP gutschreiben
    setTimeout(function(){EXPGain(exp);}, 2500);
        //Der Kachel sagen, dass sie nun kein Monster mehr hat
    clickedTile.setHasMonsters(false);

  }
}



function checkTrackingAbility () {
  console.log('checkTrackingAbility');
  currentPlayer = AllPlayers[currentPlayerNumber];
  curTrack = currentPlayer.getPlayerActiveTracking();
  temp = 0;
  trackResult = 0;

  //Zufallszahl je nach activem Tracking bestimmen
  //Je höher die Fähigkeit, desto wahrscheinlicher schafft man einen hohen Wert
  //Muss noch verfeinert werden, aktuell sehr grob
  //Ideen: Bei höheren Werten den Range zwischen beispielsweise 50 und 100 setzen 
  //(somit hätte der Spieler immer garantiert ein moderates Monster)
  if(curTrack == 0) {

    temp = Math.floor(Math.random() * 21);

  }

  else if(curTrack > 0 &&  curTrack <= 2) {

    temp = Math.floor(Math.random() * 41);

  }

  else if(curTrack > 2 &&  curTrack <= 4) {

    temp = Math.floor(Math.random() * 61);

  }

  else if(curTrack > 4 &&  curTrack <= 6) {

    temp = Math.floor(Math.random() * 81);

  }

  else if(curTrack > 6) {

    temp = Math.floor(Math.random() * 101);

  }


  //Setze den Schalter für den switchCase entsprechend der trackingAbility
  if(temp <= 25) {

    trackResult = 0;

  }

  else if (temp > 25 && temp <= 50) {

    trackResult = 1;

  }

  else if (temp > 50 && temp <= 75) {

    trackResult = 2;

  }

  else if (temp > 75) {

    trackResult = 3;

  }

  changeButtonsMonsterChooser(trackResult);


}



function changeButtonsMonsterChooser(trackResult) {
  console.log('changeButtonsMonsterChooser');
  //Zeige Buttons entsprechend an
  switch(trackResult) {

    case 0:

    // showEasyKonfig(); CLIENT(68)
    io.sockets.emit('68');
    break;

    case 1:

    // showModerateKonfig(); CLIENT(69)
    io.sockets.emit('69');
    break;

    case 2:

    // showStrongKonfig(); CLIENT(70)
    io.sockets.emit('70');
    break;

    case 3:

    // showInsaneKonfig(); CLIENT(71)
    io.sockets.emit('71');
    break;

    default: console.log("Schimpfen Sie den Entwickler");

  }

}
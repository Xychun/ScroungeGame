//verbindung zum server localhost port 9000
var socket = io.connect('http://localhost:9000');

function clixxx(id, param){
	socket.emit(id, param);
}

//Server sendet EVENT 0
socket.on('0',function(anonym){
	showMovementPhaseAnimation(anonym);
});

//Server sendet EVENT 1
socket.on('1',function(anonym){
	LevelUp();
});

//Server sendet EVENT 2
socket.on('2',function(anonym){
	statsIncrement(0); update(0);
});

//Server sendet EVENT 3
socket.on('3',function(anonym){
	statsIncrement(2); update(2);
});

//Server sendet EVENT 4
socket.on('4',function(anonym){
	statsIncrement(4); update(4);
});

//Server sendet EVENT 5
socket.on('5',function(anonym){
	statsIncrement(7); update(7);
});

//Server sendet EVENT 6
socket.on('6',function(anonym){
	statsIncrement(9); update(9);
});

//Server sendet EVENT 7
socket.on('7',function(anonym){
	statsIncrement(11); update(11);
});

//Server sendet EVENT 8
socket.on('8',function(anonym){
	statsIncrement(13); update(13);
});

//Server sendet EVENT 9
socket.on('9',function(anonym){
	statsIncrement(15); update(15);
});

//Server sendet EVENT 10
socket.on('10',function(anonym){
	statsIncrement(17); update(17);
});

//Server sendet EVENT 11
socket.on('11',function(anonym){
	$("#dmin").html(anonym.pDmin);
});

//Server sendet EVENT 12
socket.on('12',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 13
socket.on('13',function(anonym){
	released(anonym);
});

//Server sendet EVENT 14
socket.on('14',function(anonym){
	$("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 15
socket.on('15',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 16
socket.on('16',function(anonym){
	released(anonym);
});

//Server sendet EVENT 17
socket.on('17',function(anonym){
	$("#abmin").html(anonym.pAbmin);
});

//Server sendet EVENT 18
socket.on('18',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 19
socket.on('19',function(anonym){
	released(anonym);
});

//Server sendet EVENT 20
socket.on('20',function(anonym){
	$("#esmin").html(anonym.pEsmin);
	$("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 21
socket.on('21',function(anonym){
	pressed(anonym);
});

//Server sendet EVENT 22
socket.on('22',function(anonym){
	released(anonym);
});

//Server sendet EVENT 23 - angepasst
socket.on('23',function(anonym){
	setFieldParas1(anonym.reihenAnzahl);
});

//Server sendet EVENT 24 - angepasst
socket.on('24',function(anonym){
	setFieldParas3(anonym.reihenLaenge);
});

//Server sendet EVENT 25 - angepasst
socket.on('25',function(anonym){
	setFieldParas2(anonym.monsterAnzahl);
});

//EVENT 26 - ActionEvent/NoEmit

//Server sendet EVENT 27
socket.on('27',function(anonym){
	window.location.reload();
	document.getElementById('reihenAnzahl').value='';
	document.getElementById('monsterAnzahl').value='';
	document.getElementById('reihenLänge').value=''; 
});

  // DELETED EVENT 28

//Server sendet EVENT 29
socket.on('29',function(anonym){
	showMonsterChooser();
});

//Server sendet EVENT 30
socket.on('30',function(anonym){
	hideMonsterChooser();
});

//Server sendet EVENT 31
socket.on('31',function(anonym){
	load_stats();
});

//Server sendet EVENT 32
socket.on('32',function(anonym){
	lvl();
});

//Server sendet EVENT 33
socket.on('33',function(anonym){
	EXPGain(anonym.exp);
});

//Server sendet EVENT 34
socket.on('34',function(anonym){
	blockAction();
});

//EVENT 35 - ActionEvent/NoEmit

//EVENT 36 - ActionEvent/NoEmit

//EVENT 37 - ActionEvent/NoEmit

//EVENT 38 - DELETED

//EVENT 39 - ActionEvent/NoEmit

//Server sendet EVENT 40
socket.on('40',function(anonym){
	addTiles(anonym);
	showTiles(anonym);
});

//Server sendet EVENT 41
socket.on('41',function(anonym){
	addTemplates(anonym);
});

//Server sendet EVENT 42 - ALERTS
socket.on('42',function(anonym){
	alert(anonym);
});

//Server sendet EVENT 43
socket.on('43',function(anonym){
	movePlayer(anonym);
});

//Server sendet EVENT 44
socket.on('44',function(anonym){
	//TO-DO clickSound();
});

//Server sendet EVENT 45
socket.on('45',function(anonym){
	showTiles(anonym.pAmountTiles, anonym.pNumberArrayTiles);
});

//Server sendet EVENT 46
socket.on('46',function(anonym){
	//TO-DO StabSound();
    document.getElementById(anonym.elementNumber).src = "Bilddaten/Spielfeld/MonsterImg.png";
});

//Server sendet EVENT 47
socket.on('47',function(anonym){
	showGameStartAnimation();

});

//Server sendet EVENT 48
socket.on('48',function(anonym){
	$("#characterSheet").css("visibility", "visible");
});

//Server sendet EVENT 49
socket.on('49',function(anonym){
	//TO-DO swordSound(); 
});

//Server sendet EVENT 50
socket.on('50',function(anonym){
	changeTemplate(anonym);
});

//Server sendet EVENT 51
socket.on('51',function(anonym){
	changePlayer(anonym);
});

//Server sendet EVENT 52
socket.on('52',function(anonym){
	updateCharSheet(anonym);
});

//EVENT 53 - ActionEvent/NoEmit

//Server sendet EVENT 54
socket.on('54',function(anonym){
	bewegeRahmen(anonym);
});

//Server sendet EVENT 55
socket.on('55',function(anonym){
	$(anonym.pInput).html = anonym.pAttackC;
});

//Server sendet EVENT 56
socket.on('56',function(anonym){
	$("#dmin").html(anonym.pDmin); 
    $("#amin").html(anonym.pAmin);
});

//Server sendet EVENT 57
socket.on('57',function(anonym){
	$("#l_min_c").html(anonym.pLminC);
    setTimeout(function(){$(".c").toggleClass("ca");},1000);
    $(".c").toggleClass("ca");
        //auditives Feedback
    //TO-DO gotHitSound();
});

//Server sendet EVENT 58
socket.on('58',function(anonym){
	$("#l_min_m").html(anonym.pLminM);
    setTimeout(function(){$(".m").toggleClass("ma");},1000);
    $(".m").toggleClass("ma");

      //auditives+visuelles Feedback
    //TO-DO batGotHitSound();
    showFightAnimation("HIT");
});

//Server sendet EVENT 59
socket.on('59',function(anonym){
	$("#phaseFrame").css("left", anonym.pX+"px");
});

//Server sendet EVENT 60
socket.on('60',function(anonym){
	alert('SOCKET ON 60');
	//TO-DO dieSound();
	$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);
    showFightAnimation("!! LOST !!");
});

//Server sendet EVENT 61
socket.on('61',function(anonym){
	showReincarnationAnimation();
});

//Server sendet EVENT 62
socket.on('62',function(anonym){
	setTimeout(function(){showFightAnimation(anonym.pInput)}, anonym.pTime);
});

//Server sendet EVENT 63
socket.on('63',function(anonym){
	$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
    setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);
});

//Server sendet EVENT 64
socket.on('64',function(anonym){
	showEXPGain(anonym.pCurrentEXP, 100);
});

//Server sendet EVENT 65
socket.on('65',function(anonym){
	setTimeout(function() {   

        //Neues Level im CharSheet sichtbarmachen
    $("#levelCounter").html(""+anonym.pPlayerLvl);
        //Animation erneut mit überschüssigen EXP ausführen
    showEXPGain(0, anonym.pOverrunEXP);

  }, (100-anonym.pCurrentEXP)*15);
});

//Server sendet EVENT 66
socket.on('66',function(anonym){
	showEXPGain(anonym.pCurrentEXP, anonym.pNewEXP);
});

//Server sendet EVENT 67
socket.on('67',function(anonym){
	showFieldWinAnimation(anonym);
});

//Server sendet EVENT 68
socket.on('68',function(anonym){
	showEasyKonfig();
});

//Server sendet EVENT 69
socket.on('69',function(anonym){
	showModerateKonfig();
});

//Server sendet EVENT 70
socket.on('70',function(anonym){
	showStrongKonfig();
});

//Server sendet EVENT 71
socket.on('71',function(anonym){
	showInsaneKonfig();
});


//Server sendet EVENT 1000
socket.on('1000',function(anonym){
	startFightRoutine(0, 0);
});

//Server sendet EVENT 2000
socket.on('2000',function(anonym){
	startFight(anonym);
});











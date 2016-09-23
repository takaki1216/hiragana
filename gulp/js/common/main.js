console.debug('main.js');

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var _pathName = '.';
    if(device.platform.toLowerCase() == 'android') {
      _pathName = '/android_asset/www';
    }
	var audioInstanceObj = {
		c: new Media(_pathName + '/htdocs/sounds/c.mp3'),
		cs: new Media(_pathName + '/htdocs/sounds/cs.mp3'),
		d: new Media(_pathName + '/htdocs/sounds/d.mp3'),
		ds: new Media(_pathName + '/htdocs/sounds/ds.mp3'),
		e: new Media(_pathName + '/htdocs/sounds/e.mp3'),
	};

	$('.play').on('click', function() {
		var note = $(this).data('note');
		audioInstanceObj[note].play();
	});
}
var hiraganaArr = [
	// あ
	{
		id: 1,
		hiragana: 'あ',
		vowel: null,
		consonant: 'a',
		symbolArr: [{name: 'あり', img: 'ant', sound: 'ant', }, {name: 'あんぱんまん', img: 'anpanman', sound: 'anpanman', } ],
		sound: 'a',
	},
	{
		id: 2,
		hiragana: 'い',
		vowel: null,
		consonant: 'i',
		symbolArr: [{name: 'いし', img: 'stone', sound: 'stone', }, {name: 'いぬ', img: 'dog', sound: 'dog', } ],
		sound: 'i',
	},
	{
		id: 3,
		hiragana: 'う',
		vowel: null,
		consonant: 'u',
		symbolArr: [{name: 'うま', img: 'horse', sound: 'horse', }, {name: 'うめぼし', img: 'ume', sound: 'ume', } ],
		sound: 'u',
	},
	{
		id: 4,
		hiragana: 'え',
		vowel: null,
		consonant: 'e',
		symbolArr: [{name: 'えび', img: 'shrimp', sound: 'shrimp', }, {name: 'えんぴつ', img: 'pencil', sound: 'pencil', } ],
		sound: 'e',
	},
	{
		id: 5,
		hiragana: 'お',
		vowel: null,
		consonant: 'o',
		symbolArr: [{name: 'おんぷ', img: 'note', sound: 'note', }, {name: 'おっとせい', img: 'furseal', sound: 'furseal', } ],
		sound: 'o',
	},

	// か
	{
		id: 6,
		hiragana: 'か',
		vowel: 'k',
		consonant: 'a',
		symbolArr: [{name: 'かに', img: 'crab', sound: 'crab', }, {name: 'かぼちゃ', img: 'pumpkin', sound: 'pumpkin', } ],
		sound: 'ka',
	},
	{
		id: 7,
		hiragana: 'き',
		vowel: 'k',
		consonant: 'i',
		symbolArr: [{name: 'きりん', img: 'goraffe', sound: 'goraffe', },  ],
		sound: 'ki',
	},
	{
		id: 8,
		hiragana: 'く',
		vowel: 'k',
		consonant: 'u',
		symbolArr: [{name: 'くるま', img: 'car', sound: 'car', } ],
		sound: 'ku',
	},
	{
		id: 9,
		hiragana: 'け',
		vowel: 'k',
		consonant: 'e',
		symbolArr: [{name: 'けいと', img: 'wool', sound: 'wool', },  ],
		sound: 'ke',
	},
	{
		id: 10,
		hiragana: 'こ',
		vowel: 'k',
		consonant: 'o',
		symbolArr: [{name: 'こま', img: 'top', sound: 'top', }, ],
		sound: 'ko',
	},

];

$('#menu li').click(function() {
	var mode = $(this).data('mode');
	var dispArr = [];
	switch(true) {
		case 'sequential' === mode:
			dispArr = hiraganaArr;
			break;

		case 'random' === mode:
			dispArr = _.shuffle(hiraganaArr);
			break;
	}
	$('#slider-holder').html('');
	_.each(dispArr, function(hiragana, key){
		var square = '<div> <div class="hiragana-text">' + hiragana.hiragana + '</div> <div class="symbol">' + _.shuffle(hiragana.symbolArr)[0].name + '</div> </div> ';
		$('#slider-holder').append('<li>' + square);
	});
});

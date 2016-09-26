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
var id = 1;
var hiraganaArr = [
	// あ
	{
		id: id++,
		hiragana: 'あ',
		vowel: null,
		consonant: 'a',
		symbolArr: [{name: 'あり', img: 'ant', sound: 'ant', }, {name: 'あんぱんまん', img: 'anpanman', sound: 'anpanman', } ],
		sound: 'a',
	},
	{
		id: id++,
		hiragana: 'い',
		vowel: null,
		consonant: 'i',
		symbolArr: [{name: 'いし', img: 'stone', sound: 'stone', }, {name: 'いぬ', img: 'dog', sound: 'dog', } ],
		sound: 'i',
	},
	{
		id: id++,
		hiragana: 'う',
		vowel: null,
		consonant: 'u',
		symbolArr: [{name: 'うま', img: 'horse', sound: 'horse', }, {name: 'うめぼし', img: 'ume', sound: 'ume', } ],
		sound: 'u',
	},
	{
		id: id++,
		hiragana: 'え',
		vowel: null,
		consonant: 'e',
		symbolArr: [{name: 'えび', img: 'shrimp', sound: 'shrimp', }, {name: 'えんぴつ', img: 'pencil', sound: 'pencil', } ],
		sound: 'e',
	},
	{
		id: id++,
		hiragana: 'お',
		vowel: null,
		consonant: 'o',
		symbolArr: [{name: 'おんぷ', img: 'note', sound: 'note', }, {name: 'おっとせい', img: 'furseal', sound: 'furseal', } ],
		sound: 'o',
	},

	// か
	{
		id: id++,
		hiragana: 'か',
		vowel: 'k',
		consonant: 'a',
		symbolArr: [{name: 'かに', img: 'crab', sound: 'crab', }, {name: 'かぼちゃ', img: 'pumpkin', sound: 'pumpkin', } ],
		sound: 'ka',
	},
	{
		id: id++,
		hiragana: 'き',
		vowel: 'k',
		consonant: 'i',
		symbolArr: [{name: 'きりん', img: 'goraffe', sound: 'goraffe', },  ],
		sound: 'ki',
	},
	{
		id: id++,
		hiragana: 'く',
		vowel: 'k',
		consonant: 'u',
		symbolArr: [{name: 'くるま', img: 'car', sound: 'car', } ],
		sound: 'ku',
	},
	{
		id: id++,
		hiragana: 'け',
		vowel: 'k',
		consonant: 'e',
		symbolArr: [{name: 'けいと', img: 'wool', sound: 'wool', },  ],
		sound: 'ke',
	},
	{
		id: id++,
		hiragana: 'こ',
		vowel: 'k',
		consonant: 'o',
		symbolArr: [{name: 'こま', img: 'top', sound: 'top', }, ],
		sound: 'ko',
	},

	// さ
	{
		id: id++,
		hiragana: 'さ',
		vowel: 's',
		consonant: 'a',
		symbolArr: [{name: 'さかな', img: 'fish', sound: 'fish', }, {name: 'さる', img: 'monkey', sound: 'monkey', } ],
		sound: 'sa',
	},
	{
		id: id++,
		hiragana: 'し',
		vowel: 's',
		consonant: 'i',
		symbolArr: [{name: 'しま', img: 'island', sound: 'island', }, {name: 'しまうま', img: 'zebra', sound: 'zebra', }, ],
		sound: 'si',
	},
	{
		id: id++,
		hiragana: 'す',
		vowel: 's',
		consonant: 'u',
		symbolArr: [{name: 'すいか', img: 'watermelon', sound: 'watermelon', }, {name: 'すず', img: 'bell', sound: 'bell', }, ],
		sound: 'su',
	},
	{
		id: id++,
		hiragana: 'せ',
		vowel: 's',
		consonant: 'e',
		symbolArr: [{name: 'せりか', img: 'celica', sound: 'celica', }, {name: '洗濯機', img: 'washingMachine', sound: 'washingMachine', }, ],
		sound: 'se',
	},
	{
		id: id++,
		hiragana: 'そ',
		vowel: 's',
		consonant: 'o',
		symbolArr: [{name: 'そうじき', img: 'hoover', sound: 'hoover', }, ],
		sound: 'so',
	},

	// た
	{
		id: id++,
		hiragana: 'た',
		vowel: 't',
		consonant: 'a',
		symbolArr: [{name: 'たぬき', img: 'racoon', sound: 'racoon', }, {name: 'たわし', img: 'brash', sound: 'brash', } ],
		sound: 'ta',
	},
	{
		id: id++,
		hiragana: 'ち',
		vowel: 't',
		consonant: 'i',
		symbolArr: [{name: 'ちきゅう', img: 'earth', sound: 'earth', }, {name: 'ちゅーりっぷ', img: 'tulip', sound: 'tulip', }, ],
		sound: 'ti',
	},
	{
		id: id++,
		hiragana: 'つ',
		vowel: 't',
		consonant: 'u',
		symbolArr: [{name: 'つめ', img: 'nail', sound: 'nail', }, {name: 'つらら', img: 'icicle', sound: 'icicle', }, ],
		sound: 'tu',
	},
	{
		id: id++,
		hiragana: 'て',
		vowel: 't',
		consonant: 'e',
		symbolArr: [{name: 'て', img: 'hand', sound: 'hand', }, {name: 'てっぽう', img: 'gun', sound: 'gun', }, ],
		sound: 'te',
	},
	{
		id: id++,
		hiragana: 'と',
		vowel: 't',
		consonant: 'o',
		symbolArr: [{name: 'とまと', img: 'tomato', sound: 'tomato', }, ],
		sound: 'to',
	},

	// な
	{
		id: id++,
		hiragana: 'な',
		vowel: 'n',
		consonant: 'a',
		symbolArr: [{name: 'なす', img: 'eggplant', sound: 'eggplant', }, {name: 'ながぐつ', img: 'boot', sound: 'boot', } ],
		sound: 'na',
	},
	{
		id: id++,
		hiragana: 'に',
		vowel: 'n',
		consonant: 'i',
		symbolArr: [{name: 'にっぽん', img: 'japan', sound: 'japan', }, {name: 'にんじん', img: 'carrot', sound: 'carrot', }, ],
		sound: 'ni',
	},
	{
		id: id++,
		hiragana: 'ぬ',
		vowel: 'n',
		consonant: 'u',
		symbolArr: [{name: 'ぬの', img: 'cloth', sound: 'cloth', }, {name: 'ぬりえ', img: 'coloring', sound: 'coloring', }, ],
		sound: 'nu',
	},
	{
		id: id++,
		hiragana: 'ね',
		vowel: 'n',
		consonant: 'e',
		symbolArr: [{name: 'ねこ', img: 'cat', sound: 'cat', }, {name: 'ねんど', img: 'clay', sound: 'clay', }, ],
		sound: 'ne',
	},
	{
		id: id++,
		hiragana: 'の',
		vowel: 'n',
		consonant: 'o',
		symbolArr: [{name: 'のり', img: 'glue', sound: 'glue', }, ],
		sound: 'no',
	},

	// は
	{
		id: id++,
		hiragana: 'は',
		vowel: 'h',
		consonant: 'a',
		symbolArr: [{name: 'はがき', img: 'hagaki', sound: 'hagaki', }, {name: 'はぶらし', img: 'toothbrush', sound: 'toothbrush', } ],
		sound: 'ha',
	},
	{
		id: id++,
		hiragana: 'ひ',
		vowel: 'h',
		consonant: 'i',
		symbolArr: [{name: 'ひまわり', img: 'sunflower', sound: 'sunflower', }, {name: 'ひこうき', img: 'airplane', sound: 'airplane', }, ],
		sound: 'hi',
	},
	{
		id: id++,
		hiragana: 'ふ',
		vowel: 'h',
		consonant: 'u',
		symbolArr: [{name: 'ふで', img: 'brush', sound: 'brush', }, {name: 'ふうせん', img: 'balloon', sound: 'balloon', }, ],
		sound: 'hu',
	},
	{
		id: id++,
		hiragana: 'へ',
		vowel: 'h',
		consonant: 'e',
		symbolArr: [{name: 'へりこぷたー', img: 'helicopter', sound: 'helicopter', }, {name: 'へび', img: 'snake', sound: 'snake', }, ],
		sound: 'he',
	},
	{
		id: id++,
		hiragana: 'ほ',
		vowel: 'h',
		consonant: 'o',
		symbolArr: [{name: 'ほん', img: 'book', sound: 'book', }, ],
		sound: 'ho',
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
	var $sliderHolder = $('#slider-holder');
	$sliderHolder.html('');
	_.each(dispArr.reverse(), function(hiragana, key){
		var square = '<div> <div class="hiragana-text">' + hiragana.hiragana + '</div> <div class="symbol">' + _.shuffle(hiragana.symbolArr)[0].name + '</div> </div> ';
		$('#slider-holder').append('<li>' + square);
	});
	$('#content-wrapper').flexslider({
		animation: 'slide',
		slideshow: false,
		controlNav: false,
		directionNav: false,
		startAt: dispArr.length - 1,
	});

});

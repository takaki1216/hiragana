console.debug('main.js');

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
		symbolArr: [{name: 'せりか', img: 'celica', sound: 'celica', }, {name: 'せんたくき', img: 'washingMachine', sound: 'washingMachine', }, ],
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

	// ま
	{
		id: id++,
		hiragana: 'ま',
		vowel: 'm',
		consonant: 'a',
		symbolArr: [{name: 'ますく', img: 'mask', sound: 'mask', }, {name: 'まいく', img: 'mic', sound: 'mic', } ],
		sound: 'ma',
	},
	{
		id: id++,
		hiragana: 'み',
		vowel: 'm',
		consonant: 'i',
		symbolArr: [{name: 'みかん', img: 'mikan', sound: 'mikan', }, {name: 'みみ', img: 'ear', sound: 'ear', }, ],
		sound: 'mi',
	},
	{
		id: id++,
		hiragana: 'む',
		vowel: 'm',
		consonant: 'u',
		symbolArr: [{name: 'むし', img: 'bug', sound: 'bug', }, ],
		sound: 'mu',
	},
	{
		id: id++,
		hiragana: 'め',
		vowel: 'm',
		consonant: 'e',
		symbolArr: [{name: 'めがね', img: 'glasses', sound: 'glasses', }, {name: 'めだか', img: 'medaka', sound: 'medaka', }, ],
		sound: 'me',
	},
	{
		id: id++,
		hiragana: 'も',
		vowel: 'm',
		consonant: 'o',
		symbolArr: [{name: 'もり', img: 'forest', sound: 'forest', }, ],
		sound: 'mo',
	},

	// や
	{
		id: id++,
		hiragana: 'や',
		vowel: 'y',
		consonant: 'a',
		symbolArr: [{name: 'やぎ', img: 'goat', sound: 'goat', }, {name: 'やかん', img: 'kettle', sound: 'kettle', } ],
		sound: 'ya',
	},
	{
		id: id++,
		hiragana: 'ゆ',
		vowel: 'y',
		consonant: 'u',
		symbolArr: [{name: 'ゆきだるま', img: 'snowman', sound: 'snowman', }, ],
		sound: 'yu',
	},
	{
		id: id++,
		hiragana: 'よ',
		vowel: 'y',
		consonant: 'o',
		symbolArr: [{name: 'よる', img: 'night', sound: 'night', }, ],
		sound: 'yo',
	},

	// ら
	{
		id: id++,
		hiragana: 'ら',
		vowel: 'r',
		consonant: 'a',
		symbolArr: [{name: 'らいおん', img: 'lion', sound: 'lion', }, {name: 'らいち', img: 'litchi', sound: 'litchi', } ],
		sound: 'ra',
	},
	{
		id: id++,
		hiragana: 'り',
		vowel: 'r',
		consonant: 'i',
		symbolArr: [{name: 'りんご', img: 'apple', sound: 'apple', }, {name: 'りす', img: 'squirrel', sound: 'squirrel', }, ],
		sound: 'ri',
	},
	{
		id: id++,
		hiragana: 'る',
		vowel: 'r',
		consonant: 'u',
		symbolArr: [{name: 'るうびっくきゅうぶ', img: 'rubikscube', sound: 'rubikscube', }, ],
		sound: 'ru',
	},
	{
		id: id++,
		hiragana: 'れ',
		vowel: 'r',
		consonant: 'e',
		symbolArr: [{name: 'れんこん', img: 'lotus', sound: 'lotus', }, {name: 'れいぞうこ', img: 'fridge', sound: 'fridge', }, ],
		sound: 're',
	},
	{
		id: id++,
		hiragana: 'ろ',
		vowel: 'r',
		consonant: 'o',
		symbolArr: [{name: 'ろうそく', img: 'candle', sound: 'candle', }, ],
		sound: 'ro',
	},

	// わ
	{
		id: id++,
		hiragana: 'わ',
		vowel: 'w',
		consonant: 'a',
		symbolArr: [{name: 'わに', img: 'alligator', sound: 'alligator', }, {name: 'わいん', img: 'wine', sound: 'wine', } ],
		sound: 'wa',
	},
	{
		id: id++,
		hiragana: 'を',
		vowel: 'w',
		consonant: 'o',
		symbolArr: [{name: 'を', img: 'wo', sound: 'wo', }  ],
		sound: 'wo',
	},

	// ん
	{
		id: id++,
		hiragana: 'ん',
		vowel: '',
		consonant: 'n',
		symbolArr: [{name: 'ん', img: 'n', sound: 'n', } ],
		sound: 'n',
	},
];

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log('device ready');
	var $menu = $('#menu')
	$menu.find('li:not(.refresh)').click(function() {
		// クリックしたらメニューの中身をリロードのみに(連続で遊ぼうとするとflexsliderがなんかバグるから)
		$menu.html('<li class="reload menu-content">やりなおし</li>');

		var mode = $(this).data('mode');
		var audioInstanceObj = {};
	    var _pathName = '.';
	    if(device.platform.toLowerCase() == 'android') {
	      _pathName = '/android_asset/www';
	    }
		var dispArr = [];
		switch(true) {
			// じゅんばん
			case 'sequential' === mode:
				dispArr = hiraganaArr;
				break;

			// ばらばら
			case 'random' === mode:
				dispArr = _.shuffle(hiraganaArr);
				break;

			// なまえ
			case 'name' === mode:
				var name = 'なまえなまえ';
				// 大元のarrayから、hiragana が 該当のものをひらってきて順番に表示用配列に突っ込む
				_.each(name, function(hiragana) {
					dispArr.push(_.findWhere(hiraganaArr, {hiragana: hiragana}));
				});
				console.log(dispArr);
				break;
		}
		var $sliderHolder = $('#slider-holder');
		$sliderHolder.html('');
		_.each(dispArr.reverse(), function(hiragana, key){
			// 表示
			var dispSymbol = _.shuffle(hiragana.symbolArr)[0];
			var rect = '<div> <div class="hiragana-text" data-sound="' + hiragana.sound + '">' + hiragana.hiragana + '</div> <figure class="symbol"><img src="./htdocs/images/' + dispSymbol.img + '.png"><figcaption>' + dispSymbol.name + '<figcaption></figure> </div> ';
			$('#slider-holder').append('<li>' + rect);

			// andio instance用意
			audioInstanceObj[hiragana.sound] = new Media(_pathName + '/htdocs/sounds/' + hiragana.sound + '.wav');
		});

		// ひらがなをタップしたときの挙動
		$('.hiragana-text').click(function() {
			console.log($(this).data('sound'));
			var sound = $(this).data('sound');
			audioInstanceObj[sound].play();
		});

		// flexslider 初期化
		$('#content-wrapper').flexslider({
			animation: 'slide',
			slideshow: false,
			controlNav: false,
			directionNav: false,
			startAt: dispArr.length - 1,
		});
	});

	// やりなおしボタン
	$menu.on('click', '.reload', function() {
		window.location.reload();
	})
}
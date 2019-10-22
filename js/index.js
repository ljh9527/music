var lunbo = {
	nowindex: 0,
	lastindex: 0,
	image: $('.l-img'),
	imageLength: $('.l-img').length,
	dot: $('.dot'),
	time: 2000,
	flag: true,
	bgarr: ['./img/bg1.jpg', './img/bg2.jpg', './img/bg3.jpg', './img/bg4.jpg', './img/bg5.jpg'],
	init: function () {
		this.bindEvent();
		this.auto();
	},
	bindEvent: function () {
		var _this = this;
		$('.leftbtn').add($('.rightbtn')).add($('.dot li')).on('click', function () {
			_this.flag = false;
			_this.lastindex = _this.nowindex;
			if ($(this).attr('class') == 'leftbtn btn') {
				_this.totalfun('prev');
			}
			else if ($(this).attr('class') == 'rightbtn btn') {
				_this.totalfun('next');
			}
			else {
				var index = $(this).index();
				_this.totalfun(index);
			}
			console.log(_this.flag);
			_this.auto();
		});
		$('.ban').mouseover(function () {
			clearTimeout(_this.timer);
		});
		$('.ban').mouseout(function () {
			_this.auto();
		});
	},
	changeindex: function (moveindex) {
		if (moveindex == 'prev') {
			this.nowindex = this.nowindex == 0 ? this.imageLength - 1 : this.nowindex - 1;
		} else if (moveindex == 'next') {
			this.nowindex = this.nowindex == this.imageLength - 1 ? 0 : this.nowindex + 1;
		} else {
			this.nowindex = moveindex;
		}
	},
	changedot: function () {
		$('.sel').removeClass('sel');
		$('.dot li').eq(this.nowindex).addClass('sel');
	},
	move: function (time) {
		if (this.flag) {
			$('.l-img').fadeOut(time);
		} else {
			$('.l-img').fadeOut();
		}
		$('.l-img').eq(this.nowindex).fadeIn();
		let self = this;
		$('.circle').css("background", `url(${self.bgarr[self.nowindex]})`);
	},
	totalfun: function (index) {
		this.changeindex(index);
		this.changedot();
		this.move(this.time);
	},
	auto: function () {
		this.flag = true;
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.totalfun('next');
			this.auto();
		}, 3000);
	}
}

lunbo.init();

var loadIndex = {
	songList: ``,
	getData: function (url) {
		axios.get(url)
			.then(function (response) {
				loadIndex.loadSong(response.data);
				loadIndex.loadSinger(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	},

	loadSong: function (data) {
		let { hot } = data;
		let gedancont = $('.gedancont')[0];
		hot.map((item) => {
			this.songList += `<li>
				<div class="cover">
					<img src=${item.imgUrl}>
					<a class="content" href="#"></a>
					<div class="bottom">
						<a href="#"></a>
						<span class="listenicon"></span>
						<span class="b-count">${item.count}</span>
					</div>
				</div>
				<p>
					<a href="#">${item.description}</a>
				</p>
			</li>`
		})
		gedancont.innerHTML = this.songList;
	},

	loadSinger: function (data) {
		let { singer } = data;
		let singerList = ``;
		console.log(11);
		let singerwraper = $('.singerwraper')[0];
		singer.map((item) => {
			singerList +=`<li>
				<a href="#">
					<div class="singerpic"><img src=${item.imgUrl} ></div>
					<div class="singercont">
						<h4>${item.name}</h4>
						<p>${item.description}</p>
					</div>
				</a>
			</li>`;
		})
		singerwraper.innerHTML = singerList;
	}
}

loadIndex.getData('../data/index.json');
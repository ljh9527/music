var flag = false;
var listen=$(".listen");
var music =$(".music");
var index = 0;
var timer;
var len = 10;

function imgSrc(name){
	return `../data/music/${name}.mp3`;
	
}

for(let index=0; index < 5; index++){
	music[index].src=imgSrc(index);
	listen[index].onclick=function(){
		if(!flag){
			music[index].play();
			flag = true;
		}
		else{
			music[index].pause();
		}
	}
}
console.log(music);

$(".gedan .gedancont li").hover(function(){
	$(this).css("transform","scale(1.2)");
},function(){
	$(this).css("transform","scale(1)");
})

move();

function move(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		index = index == len-1?0:++index;
		$(".move").removeClass("move").parent().find('li').eq(index).addClass("move");
		move();
	},2100);
}

$(".gedancont li").hover(
function(){
	clearTimeout(timer);
},move
)


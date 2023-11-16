let butt1  = document.querySelector('.img1');
let butt2  = document.querySelector('.img2');
let people = document.querySelector('.people');

let li     = people.querySelectorAll('li');
let ul     = people.querySelector('ul');
let img    = people.querySelectorAll('img');
let span   = people.querySelectorAll('span');

let i = 0;
let j = 0;


for(let k of span){
	div4.append(k);
}

butt2.addEventListener('click',function(event){
	i += 1;
	j += 1;
	if(i > li.length - 1) {
		i = 0;
		span[li.length - 1].style.display = 'none'
		span[i].style.display = 'block'
		img[li.length - 1].style.border = 'none'
		img[i].style.border = '3px solid #ED4F4F';
	}
	console.log(i,j);
	img[i].style.border = "2px solid red";
	for(j = 0; j <= li.length; j++){ 
		img[i-1].style.border = "none";
		img[i].style.border = "3px solid #ED4F4F";	
	}

	span[i].style.display = 'block';
	span[i-1].style.display = 'none';

});
butt1.addEventListener('click',function(){
//Последнее передвижение не на 3 , а на 2 или 1
i -= 1;
j -= 1;
if(i < 0) { 
	i = li.length - 1;
	span[li.length - 1].style.display  = 'block';
	span[0].style.display = 'none';
	img[li.length - 1].style.border   = '3px solid #ED4F4F';
	img[0].style.border = 'none';
}
console.log(i,j);
for(j = 14;j >= li.length; j--){
	elem = img[i];
	img[i+1].style.border = 'none';
	img[i].style.border = '3px solid #ED4F4F';
}
span[i].style.display = 'block';
span[i+1].style.display = 'none';
});


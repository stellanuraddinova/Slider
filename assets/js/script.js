const items = [
  {
    photo: 'mustang.jpg',
    title: '2016 Mustang GT, San Francisco, United States',
    date: 'Published on May 17, 2017'
  },
  {
    photo: 'bmw.jpg',
    title: 'BMW, Los Angeles, United States',
    date: 'Published on June 10, 2018'
  },
  {
    photo: 'ferrari.jpg',
    title: 'Ferrari, New York, United States',
    date: 'Published on July 5, 2019'
  }
]

const photo = document.querySelector('#photo')
const title = document.querySelector('#title')
const date = document.querySelector('#date')
const btnPrev = document.querySelector('#btnPrev')
const btnNext = document.querySelector('#btnNext')

let index = 0;

function start(){
  const item = items[index]
  photo.src = `/assets/img/${item.photo}`;
  title.textContent = item.title;
  date.textContent = item.date;
}

function prev (){
  if (index > 0){
    index --;
  }else{
    index = items.length - 1;
  }
  start();
}
function next (){
  if (index < items.length - 1){
    index ++;
  }else{
    index = 0;
  }
  start();
}
btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);

start();
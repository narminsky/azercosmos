// header ul section
const news = document.querySelector('.news-ul');

$('.main-ul').mouseenter(function (e) {
  if (e.currentTarget == $(this)[0]) {
    $(this).children().eq(0).removeClass('d-none');
    $(this).children().eq(0).animate({
      right: `100%`,
      opacity: 1,
    });
  }
});

$('.main-ul').mouseleave(function (e) {
  if (e.currentTarget == $(this)[0]) {
    $(this).children().eq(0).animate({
      right: `0%`,
      opacity: 0,
    })
    $(this).children().eq(0).addClass('d-none');
  }
});

// products sections
const productsArr = [{
  h1: 'Video',
  p: `We deliver your content`,
  img: `video.jpg`
}, {
  h1: 'Data',
  p: `We provide instant data and
  broadband satellite services with
  low latency`,
  img: `data.jpg`
}, {
  h1: 'Teleport',
  p: `Our teleport operates to the
  highest standards and deploys
  the best infrastructure`,
  img: `teleport.jpg`
}, {
  h1: 'Azeconnexus',
  p: `AzConnex es to deliver fast
  internet connectivityy`,
  img: `azconnexus.jpg`
}];

const products = document.querySelector('.products');

// fetch products
fetch(`
https://newsapi.org/v2/everything?q=apple&from=2022-10-27&to=2022-10-27&sortBy=popularity&apiKey=2b8e326d6ced4217a494b674d251bb37`)
  .then(reponse => reponse.json())
  .then(data => {
    for (let i = 0; i < 4; i++) {
      const text = `
      <div class="col-lg-3">
        <div class="card">
          <img class="w-100" src="${data.articles[i].urlToImage}" alt="">
          <div class="card-body">
                <h1 class="card-title">${data.articles[i].title}</h1>
                <p class="card-text">${data.articles[i].content}</p>
                <div class="btn-row">
                    <button class="btn btn-outline-white btn-lg" url='${data.articles[i].url}'>Read more</button>
                </div>
          </div>
        </div>
        </div>
      `;
      products.innerHTML += text;
    }
    $('.card-body button').click(function () {
      window.open(`${$(this).attr('url')}`);
    });
  });

// for (let i = 0; i < 4; i++) {
//   const text = `
//   <div class="col-lg-3">
//                 <div class="card">
//                 <img class="w-100" src="img/${productsArr[i].img}" alt="">
//                     <div class="card-body">
//                         <h1 class="card-title">${productsArr[i].h1}</h1>
//                         <p class="card-text">${productsArr[i].p}</p>
//                         <div class="btn-row">
//                             <button class="btn btn-outline-white btn-lg">Read more</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//   `;
//   products.innerHTML += text;
// }


// news carousel

// creating
const carouselItemsContainer = document.querySelector('.news-carousel .carousel-items');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
let carouselItems;
let width;

// fetch API for news
fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-29&sortBy=publishedAt&apiKey=2b8e326d6ced4217a494b674d251bb37`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 10; i++) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const d = new Date(data.articles[i].publishedAt);
      const text = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="box">
          <img class="w-100" src="${data.articles[i].urlToImage}" alt="">
          <div class='news-content'>
            <p class="published-date">${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}</p>
            <p class="news-title">${data.articles[i].title}</p>
          </div>
        </div>
      </div>
      `;
      carouselItemsContainer.innerHTML += text;
    }
    carouselItems = document.querySelectorAll('.news-carousel .carousel-items>div');
    width = carouselItems[0].clientWidth;
    carouselItems.forEach((value, index) => {
      value.addEventListener('click', function () {
        window.open(data.articles[index].url);
      });
    })
  });

// setting
let transformMeasure = 0;
let maxTransform;
if (screen.availWidth >= 992) {
  maxTransform = 3;
} else if (screen.availWidth >= 768) {
  maxTransform = 2;
} else if (screen.availWidth >= 576) {
  maxTransform = 1;
}

prevSlide.addEventListener('click', function () {
  if (transformMeasure != 0)
    transformMeasure++;
  carouselItems.forEach((value) => {
    value.style.transform = `translateX(${transformMeasure * width}px)`
  });
});

nextSlide.addEventListener('click', function () {
  if (carouselItems.length + transformMeasure != maxTransform)
    transformMeasure--;
  carouselItems.forEach((value) => {
    value.style.transform = `translateX(${transformMeasure * width}px)`
  });
});
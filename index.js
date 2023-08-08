// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}


// map
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}


// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}


//reduce
 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }

 

var futuredBooks = [
    {title: 'Simple Way Of Piece Life',author: 'Armor Ramsey', price:'40.00$',img:"./img/product-item1.jpg"},
    {title: 'Great Travel At Desert',author: 'Sanchit Howdy', price:'38.00$', img:'./img/product-item2.jpg'},
    {title: 'The Lady Beauty Scarlett',author: 'Arthur Doyle', price:'45.00$', img:'./img/product-item3.jpg'},
    {title: 'Once Upon A Time',author: 'Klien Marry', price:'35.00$', img:'./img/product-item4.jpg'}
];

$(document).ready(function () {
    each(futuredBooks, function(element) {
        $('.books').append(`<div class="card">
            <div>
                <img class="featuredImg" src=${element.img} alt=""/>
            </div>
            <div class='featuredItems'>
                <p class="inf" style="color:#74642F;">${element.title}</p>
                <p class="inf" style="color:#8A8A89;">${element.author}</p>
                <div class="btn">
                <p class="inf" style="color:#74642F;">${element.price}</p>
                <button class="buy">Buy</button>
                </div>
            </div>
        </div>`)
    })
})

var popularBooks = [
    {title: 'Portrait Photography',genre: 'business',author: 'Adam Silber', price:'40.00$',img:"./img/tab-item1.jpg", },
    {title: 'Once Upon A Time',genre: 'adventure',author: 'Klien Marry', price:'35.00$',img:"./img/tab-item2.jpg"},
    {title: 'Tips Of Simple Lifestyle',genre: 'technologie',author: 'Bratt Smith', price:'40.00$',img:"./img/tab-item3.jpg"},
    {title: 'Just Felt From Outside',genre: 'technologie',author: 'Nicole Wilson', price:'40.00$',img:"./img/tab-item4.jpg"},
    {title: 'Peaceful Enlightment',genre: 'technologie',author: 'Marmik Lama', price:'40.00$',img:"./img/tab-item5.jpg"},
    {title: 'Great Travel At Desert',genre: 'business',author: 'Sanchit Howdy', price:'40.00$',img:"./img/tab-item6.jpg"},
    {title: 'Life Among The Pirates',genre: 'adventure',author: 'Armor Ramsey', price:'40.00$',img:"./img/tab-item7.jpg"},
    {title: 'Simple Way Of Piece Life',genre: 'business',author: 'Armor Ramsey', price:'40.00$',img:"./img/tab-item8.jpg"},
];

    $(document).ready(function () {
        each(popularBooks, function(element) {
            $('.displayBooks').append(`<div class="cards">
                <div>
                    <img class="featuredImgs" src=${element.img} alt=""/>
                </div>
                <div class='featuredItems'>
                    <p class="infs" style="color:#74642F;">${element.title}</p>
                    <p class="infs" style="color:#8A8A89;">${element.author}</p>
                    <div class="btn">
                    <p class="inf" style="color:#74642F;">${element.price}</p>
                    <button class="buy">Buy</button>
                    </div>
                </div>
            </div>`)
        })
    })

$('#all').click(function(){
    $(document).ready(function () {
        $('.displayBooks').empty()
        each(popularBooks, function(element) {
            $('.displayBooks').append(`<div class="cards">
                <div>
                    <img class="featuredImgs" src=${element.img} alt=""/>
                </div>
                <div class='featuredItems'>
                    <p class="infs" style="color:#74642F;">${element.title}</p>
                    <p class="infs" style="color:#8A8A89;">${element.author}</p>
                    <div class="btn">
                    <p class="inf" style="color:#74642F;">${element.price}</p>
                    <button class="buy">Buy</button>
                    </div>
                </div>
            </div>`)
        })
    })
})

$('#Business').click(function(){
    $(document).ready(function () {
        $('.displayBooks').empty()
        each(popularBooks, function(element) {
            if (element.genre === 'business') {
                $('.displayBooks').append(`<div class="cards">
                <div>
                    <img class="featuredImgs" src=${element.img} alt=""/>
                </div>
                <div class='featuredItems'>
                    <p class="infs" style="color:#74642F;">${element.title}</p>
                    <p class="infs" style="color:#8A8A89;">${element.author}</p>
                    <div class="btn">
                    <p class="inf" style="color:#74642F;">${element.price}</p>
                    <button class="buy">Buy</button>
                    </div>
                </div>
                </div>`)
            }
        })
    })
})

$('#Technology').click(function(){
    $(document).ready(function () {
        $('.displayBooks').empty()
        each(popularBooks, function(element) {
            if (element.genre === 'technologie') {
                $('.displayBooks').append(`<div class="cards">
                <div>
                    <img class="featuredImgs" src=${element.img} alt=""/>
                </div>
                <div class='featuredItems'>
                    <p class="infs" style="color:#74642F;">${element.title}</p>
                    <p class="infs" style="color:#8A8A89;">${element.author}</p>
                    <div class="btn">
                    <p class="inf" style="color:#74642F;">${element.price}</p>
                    <button class="buy">Buy</button>
                    </div>
                </div>
                </div>`)
            }
        })
    })
})

$('#Adventure').click(function(){
    $(document).ready(function () {
        $('.displayBooks').empty()
        each(popularBooks, function(element) {
            if (element.genre === 'adventure') {
                $('.displayBooks').append(`<div class="cards">
                <div>
                    <img class="featuredImgs" src=${element.img} alt=""/>
                </div>
                <div class='featuredItems'>
                    <p class="infs" style="color:#74642F;">${element.title}</p>
                    <p class="infs" style="color:#8A8A89;">${element.author}</p>
                    <div class="btn">
                    <p class="inf" style="color:#74642F;">${element.price}</p>
                    <button class="buy">Buy</button>
                    </div>
                </div>
                </div>`)
            }
        })
    })
})

$(function () {
    $('.buy').on('click', function () {
  
      var currentCount = parseInt($('.inc').text());
  
      $('.inc').text(currentCount + 1);
    });
  
    $('.downvote').on('click', function () {
  
      var currentCount = parseInt($('#count').text());
  
      $('#count').text(currentCount - 1);
    });
  });



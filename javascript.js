let imgs = document.querySelectorAll('.img'),
    prevBtn = document.querySelector('.prev__btn'),
    nextBtn = document.querySelector('.next__btn');


let prevCount = imgs.length;
let nextCount = 1;

imgs.forEach(function (img, index) {
    img.style.left = index * 100 + '%';
})

nextBtn.addEventListener('click', function (e) {
    if (nextCount >= imgs.length) {
        return;
    } else {
        imgs.forEach(function (img, index) {
            img.style.left = (parseInt(img.style.left) - 100) + "%";
        })

        prevCount--;
        nextCount++;
        currentImg();
    }

})



prevBtn.addEventListener('click', function (e) {
    if (prevCount == imgs.length) {
        return;
    } else {
        imgs.forEach(function (img, index) {
            img.style.left = (parseInt(img.style.left) + 100) + "%";
        })
        nextCount--;
        prevCount++;
        currentImg();
    }
    
})


if (document.querySelector('.slider__pagination')) {
        let paginatinoBox = document.querySelector('.slider__pagination');
        for (let i = 0; i < imgs.length; i++) {
        paginatinoBox.innerHTML += `<button class="pagination__btn"></button>`;
    }
    let paginationBtns = document.querySelectorAll('.pagination__btn');
    paginationBtns.forEach(function (btn, index) {

        btn.addEventListener('click', function () {
            let newindex = ((index) * (-100));
            imgs.forEach(function (img, imgsIndex) {
                img.style.left = (newindex + "%");
                newindex += 100;
            })
            nextCount = index + 1;
            prevCount = imgs.length - index;
            currentImg();
        })
    })
}

currentImg();
function currentImg(){
    let paginationBtns = document.querySelectorAll('.pagination__btn'); 
    for (let i = 0; i < paginationBtns.length; i++) {
        paginationBtns[i].style.background = 'rgb(201, 240, 252)';
    }
    paginationBtns[nextCount - 1].style.background = '#222';
}
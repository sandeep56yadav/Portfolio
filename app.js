//turn pages
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index)=>{
    el.onclick = () => {
        const pageTurnid = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnid);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})
//contact me button when circle
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page,index)=> {
        setTimeout(()=> {
            page.classList.add('turn');
            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            }, 500)
        },(index + 1) * 200 + 100)
    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex (){
    pageNumber--;
    if(pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}
//back profile
const backProfilebtn = document.querySelector('.back-profile');

backProfilebtn.onclick = () => {
    pages.forEach((_,index) => {
        setTimeout(()=> {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(()=> {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1)* 200 +100)
    })
}
//opening aniamtion
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animations right cover 
setTimeout(()=> {
    coverRight.classList.add('turn');
},2100)

setTimeout(()=> {
    coverRight.style.zIndex= -1;
},2000)

//left pages profile animation
setTimeout(()=> {
    pageLeft.style.zIndex= 20;
}, 3200)

//all pages animation
pages.forEach((_,index) => {
    setTimeout(()=> {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(()=> {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1)* 200 + 2100)
})
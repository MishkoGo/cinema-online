window.onscroll = () => {
   

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
        document.querySelector('.fixed-top').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
        document.querySelector('.fixed-top').classList.remove('active');
    }
}

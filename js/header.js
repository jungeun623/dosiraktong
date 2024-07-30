window.addEventListener("load",function(){
    // 헤더를 스크롤할때 헤더변경기능
    const header = this.document.querySelector(".header");
    let scy = 0;
    
    // console.log(scy);
    this.window.addEventListener("scroll" , function(){
        scy = this.window.document.documentElement.scrollTop;
        if(scy > 0){
            header.classList.add("active");
        }else{
            header.classList.remove("active");
        }
    })
});
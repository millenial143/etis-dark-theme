console.log('working')





let mainNav = document.querySelectorAll('.nav-tabs');
if (mainNav){
    for (let i of mainNav){
        i.style.border = "none";
        let navHref = i.querySelectorAll('a');       
        for (let j of navHref){
        	j.addEventListener('click', function (event) {
               j.style.backgroundColor = '#333336';
            });
            j.addEventListener('mouseover', function (event) {
               j.style.backgroundColor = '#333336';
            });
            j.addEventListener('mouseout', function (event) {
                  j.style.backgroundColor = '#222226';
            });
        };       
    }; 
};

let navbarStaticTop = document.querySelector('.navbar-static-top');
if (navbarStaticTop){
//console.log(navbarStaticTop)
    navbarStaticTop.style.backgroundColor = 'red';

     navbarStaticTop.classList.remove('navbar');
    // navbarStaticTop.classList.remove('navbar-static-top');
    navbarStaticTop.style.height = '55px'

    let navbarInner = navbarStaticTop.querySelector('.navbar-inner');
  //  console.log(navbarInner);
    navbarInner.classList.remove('navbar-inner');
    navbarInner.style.height = '55px'
    navbarInner.style.backgroundColor = '#333336';

    let conta = navbarStaticTop.querySelector('.container');
    conta.style.height = '55px'
    conta.style.display = 'flex';
    conta.style.flexWrap = 'wrap';
    conta.style.justifyContent = 'flex-start';
    conta.style.padding = '5px'; 
 //   console.log(conta);

    let brand = conta.querySelector('.brand');
    brand.style.fontSize = '17px';
    brand.style.fontWeight = '400';
    brand.style.color = '#E6E6E6';

}


// let navbarStaticTop = document.querySelector('.navbar-static-top');
// if (navbarStaticTop){
// //console.log(navbarStaticTop)
//     navbarStaticTop.style.backgroundColor = 'red';

//     navbarStaticTop.classList.remove('navbar');
//     navbarStaticTop.classList.remove('navbar-static-top');
//     navbarStaticTop.style.height = '55px'

//     let navbarInner = navbarStaticTop.querySelector('.navbar-inner');
//   //  console.log(navbarInner);
//     navbarInner.classList.remove('navbar-inner');
//     navbarInner.style.height = '55px'
//     navbarInner.style.backgroundColor = '#333336';

//     let conta = navbarStaticTop.querySelector('.container');
//     conta.style.height = '55px'
//     conta.style.display = 'flex';
//     conta.style.flexWrap = 'wrap';
//     conta.style.justifyContent = 'flex-start';
//     conta.style.padding = '5px'; 
//  //   console.log(conta);

//     let brand = conta.querySelector('.brand');
//     brand.style.fontSize = '17px';
//     brand.style.fontWeight = '400';
//     brand.style.color = '#E6E6E6';

// }



let style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.runtime.getURL('myStyles.css');
console.log(chrome.runtime.getURL('myStyles.css'));
(document.head||document.documentElement).appendChild(style);
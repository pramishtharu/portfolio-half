// toogle icon active starts................
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};


// toogle icon active ends................ 


// scrolll section actice link start 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

        });
      
    };

        
    });
    
    
    // scrolll section actice link end 
    
    // stickey nav bar scripting start
    let header = document.querySelector('header');
    header.classList.toogle('sticky' , window.scrollY > 100);
    
};
// stickey nav bar ends

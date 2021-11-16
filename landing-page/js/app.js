// getting all sections with their tag and the unOrdered list with it's Id
const All_sections = document.querySelectorAll('section');
const ul_nav = document.getElementById("navbar__list");
var fragment = document.createDocumentFragment(); //make a fraagment to store all the output from the loop 

// create a loop to make the navgation bar 
//create an x varriable for the list items with the data-nav values for sections
All_sections.forEach(function(section){
    let x = document.createElement('li');
    x.textContent = section.getAttribute('data-nav');
    //scroll function for nav bar
    x.addEventListener('click',function(event){
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth"})
    })
    x.className = "menu__link";
    fragment.appendChild(x);
})


ul_nav.appendChild(fragment);//put all the items with properties in fragment in the ul to make th dynamic nav-bar


const lists = document.querySelectorAll('li'); //getting all lists in the page the is created

//using window to make the page dynamic
window.addEventListener("scroll", function (){
    All_sections.forEach(function(section){ //looping over the sections to get there borders place
        const rec_Sec = section.getBoundingClientRect()
        if (rec_Sec.top >= -200 && rec_Sec.top <= 350){ //if condition to change the class with the styles if the section is in view
            section.classList.add("your-active-class");
                lists.forEach(list =>{ //looping over the lists the have the same name as the data-nav for the section to change their styles
                if(list.textContent === section.getAttribute("data-nav")){
                    list.classList.add("my-active-navlist");
                }
                else{
                    list.classList.remove("my-active-navlist"); //remove the style of list for the section that no longer in view
                }
                })
    }
    else{
    section.classList.remove("your-active-class"); //remove the styled class from the section 
    }
    })
})
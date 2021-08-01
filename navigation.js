/*MENU SHOW*/ 

    const toggle = document.getElementById("toggleId");
    const nav = document.getElementById("nav-menu");
    // nav = document.getElementById(navId)

    let clicked = false;
    toggle.addEventListener("click", function(){
        if(!clicked)
        {
            nav.classList.add("show");
            clicked = true;
        }
        else
        {
            nav.classList.remove("show");
            clicked = false; 
        }
      });
  



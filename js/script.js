const body=document.querySelector("body"),
      nav=document.querySelector("nav"),
      modeToggle=document.querySelector(".darklight"),
      searchToggle= document.querySelector(".search-toggle"),
      sidebarOpen=document.querySelector(".sidebaropen"),
      siebarClose = document.querySelector(".sidebarClose");

      let getMode= localStorage.getItem("mode");
      if(getMode && getMode==="dark-mode")
      body.classList.add("dark")

      modeToggle.addEventListener("click",()=>{
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark")
     
      if(!body.classList.contains("dark")){
        localStorage.setItem("mode","light-mode");
    } else {
        localStorage.setItem("mode","dark-mode");
    }
    });

      searchToggle.addEventListener("click",()=>{
          searchToggle.classList.toggle("active")
      });

      sidebarOpen.addEventListener("click",()=>{
          nav.classList.add("active");
      });
      body.addEventListener("click", e=>{
        let clickedElm = e.target;
        if(!clickedElm.classList.contains("sidebaropen")&&!clickedElm.classList.contains("main")){
            nav.classList.remove("active");
        }
      });
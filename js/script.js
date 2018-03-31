  var link = document.querySelector(".search-hotel-btn");
  var popup = document.querySelector(".search-wrapper");

  popup.classList.add("search-wrapper-on");
  link.addEventListener('click',function(event){event.preventDefault();

    if (popup.classList.contains("search-wrapper-on")) {
            popup.classList.add("search-wrapper-off");
            popup.classList.remove("search-wrapper-on");
            setTimeout("popup.classList.add('search-wrapper-off-dis')", 570)
  }

    else if
      (popup.classList.contains("search-wrapper-off"))
      {popup.classList.add("search-wrapper-on");
      popup.classList.remove("search-wrapper-off");
      popup.classList.remove("search-wrapper-off-dis");
    }})

    ;window.addEventListener("keydown",function(event){
      if(event.keyCode===27){
        if(popup.classList.contains("search-wrapper-off")){
          popup.classList.remove("search-wrapper-off")}
    }});

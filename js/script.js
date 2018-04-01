  var link = document.querySelector(".search-hotel-btn");
  var popup = document.querySelector(".search-wrapper");
  var form = popup.querySelector("form");
  var arrival = popup.querySelector("[name=arrival]");
  var departure = popup.querySelector("[name=departure]");
  var adults = popup.querySelector("[name=adults]");
  var adults = popup.querySelector("[name=children]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("arrival");
    storage = localStorage.getItem("departure");
    storage = localStorage.getItem("adults");
    storage = localStorage.getItem("children");
}   catch (err) {
    isStorageSupport = false;
}

  link.addEventListener('click',function(event){event.preventDefault();

    if (popup.classList.contains("search-wrapper-off-dis")) {
      popup.classList.add("search-wrapper-on");
      popup.classList.remove("search-wrapper-off-dis");
      popup.classList.remove("search-wrapper-off");
      arrival.focus();
}       else if (popup.classList.contains("search-wrapper-on")) {
          popup.classList.add("search-wrapper-off");
          popup.classList.remove("search-wrapper-on");
          popup.classList.remove("search-wrapper-error");
          setTimeout("popup.classList.add('search-wrapper-off-dis')", 570)
}})
  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adults.value  || !children.value ) {
      evt.preventDefault();
      popup.classList.remove("search-wrapper-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("search-wrapper-error");
      console.log("Нужно ввести дату заезда и выезда, и количество взрослых и детей");
}       else {
        if (isStorageSupport) {
          localStorage.setItem("arrival", arrival.value);
          localStorage.setItem("departure", departure.value);
          localStorage.setItem("adults", adults.value);
          localStorage.setItem("children", children.value); }
}
});

    ;window.addEventListener("keydown",function(event){
      if(event.keyCode===27){
        if(popup.classList.contains("search-wrapper-on")){
            popup.classList.add("search-wrapper-off");
            popup.classList.remove("search-wrapper-on");
            popup.classList.remove("search-wrapper-error");
            setTimeout("popup.classList.add('search-wrapper-off-dis')", 570)}
}});

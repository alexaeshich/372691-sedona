var link=document.querySelector(".search-hotel-btn"),popup=document.querySelector(".search-wrapper"),form=popup.querySelector("form"),arrival=popup.querySelector("[name=arrival]"),departure=popup.querySelector("[name=departure]"),adults=popup.querySelector("[name=adults]"),isStorageSupport=(adults=popup.querySelector("[name=children]"),!0),storage="";try{storage=localStorage.getItem("arrival"),storage=localStorage.getItem("departure"),storage=localStorage.getItem("adults"),storage=localStorage.getItem("children")}catch(e){isStorageSupport=!1}popup.classList.add("search-wrapper-off-dis"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("search-wrapper-off-dis")?(popup.classList.add("search-wrapper-on"),popup.classList.remove("search-wrapper-off-dis"),popup.classList.remove("search-wrapper-off"),arrival.focus()):popup.classList.contains("search-wrapper-on")&&(popup.classList.add("search-wrapper-off"),popup.classList.remove("search-wrapper-on"),popup.classList.remove("search-wrapper-error"),setTimeout("popup.classList.add('search-wrapper-off-dis')",570))}),form.addEventListener("submit",function(e){arrival.value&&departure.value&&adults.value&&children.value?isStorageSupport&&(localStorage.setItem("arrival",arrival.value),localStorage.setItem("departure",departure.value),localStorage.setItem("adults",adults.value),localStorage.setItem("children",children.value)):(e.preventDefault(),popup.classList.remove("search-wrapper-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-wrapper-error"),console.log("Нужно ввести дату заезда и выезда, и количество взрослых и детей"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("search-wrapper-on")&&(popup.classList.add("search-wrapper-off"),popup.classList.remove("search-wrapper-on"),popup.classList.remove("search-wrapper-error"),setTimeout("popup.classList.add('search-wrapper-off-dis')",570))});
const dateSpan = document.querySelector("#conf_date")
const hourSpan = document.querySelector("#conf_hour")
dateSpan.innerHTML = new Date().toLocaleDateString("fr")
hourSpan.innerHTML = `${new Date().getHours()}h${new Date().getMinutes()}`
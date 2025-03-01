// Date and time 

function updateDateTime() {
    const dateTime = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();
    let day = days[dateTime.getDay()];
    document.getElementById("date-time").innerHTML = `${day}, ${date} - ${time}`;
}
updateDateTime(); //
setInterval(updateDateTime, 1000);


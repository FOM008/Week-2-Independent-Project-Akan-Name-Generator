const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const akan = function(y, m, d, g) {
    var femaleNames = [ {sunday:"Akosua"}, {monday:"Adwoa"}, {tuesday:"Abenaa"}, {wednesday:"Akua"}, {thursday:"Yaa"}, {friday:"Afua"}, {saturday:"Ama"}];
    var maleNames = [{sunday:"Kwasi"}, {monday:"Kudwo"}, {tuesday:"Kwabena"}, {wednesday:"Kwaku"}, {thurday:"Yaw"}, {friday:"Kofi"}, {saturday:"Kwame"}];
    var d = new Date(y, m, d).toISOString();
    const theDay = days[new Date(d).getDay()];
    if (g === "Female") {
        let foundName
        for (const a of femaleNames) {
            for (const b in a) {
                if(b === theDay) foundName = a;
            }
        }
        return d && `Your name is: ${Object.values(foundName)[0]} and you were born on a ${Object.keys(foundName)[0]}`;
    } else { 
        let foundName
        for (const a of maleNames) {
            for (const b in a) {
                if(b === theDay) foundName = a;
            }
        }
        return d && `Your name is: ${Object.values(foundName)[0]} and you were born on a ${Object.keys(foundName)[0]}`;

    }
}



$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akan(y, m, d, g);
        alert(result);
        
        //refresh page
        document.getElementById("form").reset();
    });
});
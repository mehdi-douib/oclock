// Date/heure actuelle
function now() {
    setInterval(() => {
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        conq = h + ":" + m + ":" + s;
        return [today, h, m, s, conq]
    }, 500);
}

// horloge
function clock() {
    setInterval(() => {
        $("#hours").text(h + ":" + m + ":" + s);
    }, 500);
}
// $("#b_hours").click(clock);

// alarme
arr = [];
function alarm() {
    $("#add_alarm").click(() => {
        //   Données de l’utilisateur
        let time = $('#set_alarm').val();
        let msg = $('#msg').val();
        console.log(time, msg);
        let target = new Date(today.getFullYear(), today.getMonth(), today.getDate(), time[0] + time[1], time[3] + time[4], 00);
        let x = target - today;
        let y = x / 1000;
        let status = Math.round(y);
        if (time.length != 0 && msg.length != 0) {
            arr.push([time, msg, status]);
        } else {
            alert("Remplissez une heure et un message pour pouvoir utiliser l'alarme.")
        }
    })

    setInterval(() => {
        //Tableau d’affichage 
        $('#alarm_table').empty();
        $.each(arr, function (index, value) {
            if (value[2] > 0) {
                value[2] = value[2] - 1;
                show = value[2] + "s restantes";
            } else {
                value[2] = "passé";
                show = value[2];
            }
            $('#alarm_table').append('<tr><td>' + value[0] + '</td><td>' + value[1] + '</td><td>' + show + '</td></tr>');
        });
    }, 1000);
    //   Afficher l’alerte
    setInterval(() => {
        for (i = 0; i < arr.length; i++) {
            temp = arr[i][0] + ':00';
            if (temp == conq) {
                alert(arr[i][1]);
            }
        }
    }, 500);
}
// $("#b_alarms").click(alarm);

$(document).ready(function () {
    now();
    clock();
    alarm();

    

    $('#alarmeToggle').click(function () {
        $('#alarmWrapper').toggle();
    })

    $('#chronoToggle').click(function () {
        $('#chronoWrapper').toggle();
    })

    $('#minuteurToggle').click(function () {
        $('#minuteurWrapper').toggle();
    })

})
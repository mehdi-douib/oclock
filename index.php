<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O'Clock</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body class="">
    <nav>
        <div id="choix" class="d-flex">
            <button id="alarmeToggle" class="btn input-group-text">alarme</button>
            <button id="chronoToggle" class="btn input-group-text">chrono</button>
            <button id="minuteurToggle" class="btn input-group-text">minuteur</button>
        </div>
    </nav>

    <main class="container">
        <div id="hoursWrapper" class="d-flex justify-content-center">
            <p class="" id="hours"></p>
        </div>

        <div id="alarmWrapper" style="display: none;">
            <div id="input" class="d-flex justify-content-center my-5">
                <input class="input-group-text" type="text" id="msg" placeholder="Votre message d'alarme">
                <input class="input-group-text" type="time" id="set_alarm">
                <button class="btn input-group-text" id="add_alarm">+</button>
            </div>
            <div id="" class="d-flex justify-content-center">
                <table id="table" style="border: 1px solid black; width: 100%;">
                    <thead>
                        <tr>
                            <td>Alarme</td>
                            <td>Message</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody id="alarm_table">
                    </tbody>
                </table>
            </div>
        </div>

        <div id="chronoWrapper" style="display: none;">
            <span id="chronotimer">0:00:00:00</span>
            <form name="chronoForm" class="d-flex">
                <input class="btn input-group-text" type="button" name="startstop" value="start!" onclick="chronoStart()" />
                <input class="btn input-group-text" type="button" name="reset" value="reset!" onclick="chronoReset()" />
                <input class="btn input-group-text" type="button" name="lap" value="lap!" onclick="laptimer()" />
            </form>
            <div id="tours"></div>
        </div>

        <div id="minuteurWrapper" style="display: none;">
            <span id="chronotime">00:00</span>
            <form name="alarmForm" class="d-flex">
                <input class="btn input-group-text" type="time" name="manual">
                <input class="btn input-group-text" type="button" name="plus" value="+sec" onclick="ajoutsec()" />
                <input class="btn input-group-text" type="button" name="moin" value="-sec" onclick="retraitsec()" />
                <input class="btn input-group-text" type="button" name="plus" value="+min" onclick="ajoutmin()" />
                <input class="btn input-group-text" type="button" name="moin" value="-min" onclick="retraitmin()" />
                <input class="btn input-group-text" type="button" name="lauch" value="lauch" onclick="demarageminuteur()" />
            </form>
            <div id="choixminutes"></div>
        </div>

    </main>

    <!-- Bootstrap -->
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
    <!--  -->
    <script src="minuteur.js"></script>
    <script src="chrono.js"></script>
    <script src="script.js"></script>
</body>

</html>
<!DOCTYPE html>

<?php 
    if(isset($_POST['firstName']))
        $name = $_POST['firstName'];
    else
        $name = 'Foobar';
    if(isset($_POST['lastName']))
            $lastName = $_POST['lastName'];
        else
            $lastName = 'Foobar';

    /*Prüft, ob in Hotelzimmer etwas eingetragen wurde*/
    
    $room = $_POST['room'];
    if($room == 'landliebe'){
        $room = "Landliebe";
    }
    else if($room == 'bergluft'){
        $room = "Bergluft";
    }
    else if($room == 'schlossgefuehle'){
        $room = "Schlossgefühle";
    }    
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Vielen Dank!</title>
        <style type="text/css">
            body{
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        <h1>Vielen Dank für Ihre Bestellung</h1>
        <div>
            <p>Sehr geehrte/r Frau/Herr <?php echo $name?> <?php echo $lastName?>,</p>
            <p>Vielen Dank für Ihre Bestellung. Sie haben sich für das Zimmer  <?php echo $room ?> entschieden.</p>
            <p>Wir wünschen Ihnen und Ihrem Partner viel Spaß und eine erholsame Zeit. <br><br>
            Ihr Hotelteam</p>
        </div>
    </body>
</html>

<?php /* send order to room manager */
   mail("philipfrber@yahoo.de", "new room order",
        "You have a new reservation for mr./mrs $lastName on room $room");
?>

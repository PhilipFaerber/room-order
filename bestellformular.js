

function checkOrder(){
                var valid = false;
                var x = document.orderRoom.gender;
                
                for(var i = 0; i < x.length; i++){
                    if(x[i].checked || x[i+1].checked){
                        break;      //Beendet Prüfung nach einer Auswahl
                    }
                    else{
                        document.getElementById("checkGender").innerHTML ="Bitte wählen Sie ein Geschlecht.";
                        document.getElementById("checkGender").style.color = "red";
                        
                        return false;
                    }
                }
                
                //check name
                if(document.getElementById("lastName").value == ""){
                    document.getElementById("lastName").value ="Bitte geben Sie einen Namen ein";
                    document.getElementById("lastName").style.color = "red";
                    document.getElementById("lastName").style.borderColor = "red";
                    return false;
                }
                if(document.getElementById("firstName").value == ""){
                    document.getElementById("firstName").value ="Bitte geben Sie einen Vornamen ein";
                    document.getElementById("firstName").style.color = "red";
                    document.getElementById("firstName").style.borderColor = "red";
                        //valid = true;
                    return false;
                }
                if(valid){
                    alert("Buchung erfolgreich");
                    return true;
                }
                
            }
            
            //checks if something is in name or lastname. If not than change the color to red
          // document.getElementById("lastName").addEventListener("blur", checkLastName);
            
            function checkLastName(){
                if(document.getElementById("lastName").value == ""){                    
                    document.getElementById("lastName").placeholder ="Bitte Nachname eintragen";
                    document.getElementById("lastName").style.color = "red";
                    document.getElementById("lastName").style.borderColor = "red";
                    //document.getElementById("lastName").placeholder ="Bitte Nachname eintragen";
                }
            }
            
            //document.getElementById("firstName").addEventListener("blur", checkFirstName);
            
            function checkFirstName(){
                if(document.getElementById("firstName").value == ""){
                    
                document.getElementById("firstName").placeholder ="Bitte Vorname eintragen";
                document.getElementById("firstName").style.color = "red";
                document.getElementById("firstName").style.borderColor = "red";
                }
            }

            
            


            

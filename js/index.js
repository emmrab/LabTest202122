
$(function(){
        
        var link3 = crossroads.addRoute('', function() {
        $.ajax({
           type: "post",
           url:"https://kerbau.odaje.biz/getstaff.php",
           data: "",
           cache: false,
           success:function(mydata){
               var myData = JSON.parse(mydata);
               datam=JSON.parse(myData[0]);
               //alert(myData.length);
               if (myData.length > 1){
                    len = myData.length
                    htmlText="";
                        for (i=1;i<len;i++){
                            datam=JSON.parse(myData[i]);
                            //alert(JSON.stringify(datam));
                            secondpage="<a href='secondpage.html?id="+datam.employeeNumber+"'>"+datam.email+"</a>"
                            htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";
                        }
                    //alert(htmlText);
                   
               }else{
                   alert("No Data Found");
               }
                 $('#maintable tbody').html(htmlText);
                 $("#masterC").show();
           },
           error: function(){
               console.log("error in ajax function!");
               alert("AJAX Failed, get help from your admin!");
           }
       });

   // });

        //}
   });
     
     function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

})
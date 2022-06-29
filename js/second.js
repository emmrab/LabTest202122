
$(function(){
        
        var link3 = crossroads.addRoute('', function() {
            query = window.location.search;
            urlParam = new URLSearchParams(query);

            var id = urlParam.get('id');
            datalist="id="+id;
            //alert(datalist);
        $.ajax({
           type: "post",
           url:"https://kerbau.odaje.biz/getstaffbyid.php",
           data: datalist,
           cache: false,
           success:function(mydata){
            //alert("success");
               var myData = JSON.parse(mydata);
               //datam=JSON.parse(myData[0]);
               //alert(myData.length);
               if (myData.length > 1){
                    len = myData.length
                    htmlText="";
                      //  for (i=1;i<len;i++){
                            datam=JSON.parse(myData[1]);
                            //alert(JSON.stringify(datam));
                            htmlText = htmlText + "<tr><td>Employee Number</td><td>"+datam.employeeNumber+"</tr>";
                            htmlText = htmlText + "<tr><td>Firstname</td><td>"+datam.firstName+"</tr>";
                            htmlText = htmlText + "<tr><td>Lastname</td><td>"+datam.lastName+"</tr>";
                            htmlText = htmlText + "<tr><td>Office Code</td><td>"+datam.officeCode+"</tr>";
                            htmlText = htmlText + "<tr><td>Phone Extension </td><td>"+datam.extension+"</tr>";
                            htmlText = htmlText + "<tr><td>Email Address</td><td>"+datam.email+"</tr>";
                            htmlText = htmlText + "<tr><td>Job Title</td><td>"+datam.jobTitle+"</tr>";
                            htmlText = htmlText + "<tr><td>Reports To</td><td>"+datam.reportsTo+"</tr>";
                     //   }
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
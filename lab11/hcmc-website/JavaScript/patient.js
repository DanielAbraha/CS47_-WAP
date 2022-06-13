/**
 * patient.js
 */
 "use strict";
window.onload = (function(){
    $(document).ready(
        $("#form").on("submit",function(event){
            event.preventDefault();
            const pID = $("#patientIdNumber");
            const fName = $("#firstName");
            const mName = $("#middleInitials");
            const lName = $("#lastName");
            const DOB= $("#dateOfBirth");
            const department=$("#ddlDepartment");
            const pIn = $("#radioIsOutPatientYes");
            const pOut=$("#radioIsOutPatientNo");

            // adding to a table
            const tab =`<tr>
                    <td> ${pID.val()}</td>
                    <td> ${fName.val()}</td>
                    <td> ${mName.val()}</td>
                    <td> ${lName.val()}</td>
                    <td> ${DOB.val()}</td>
                    <td class ="date">${DOB.val()}</td>
                    <td class="out">${pIn.is(':checked')?pIn.val():pOut.val()}</td>
               
            </tr>`
            $('#tbodyPatientsList').append(tab);

        }),
        $('#chkElderlyPatients').on('change',function(){
            const tbody = document.getElementById("tbodyPatientsList");
            const tr =tbody.getElementsByTagName("tr");
            //if($('#chkElderlyPatients').is(':checked')){
                if(document.getElementById("chkElderlyPatients").checked){

                
            const limit= 1957;
            for(let i=0;i<tr.length;i++){
                const td=tr[i].getElementsByClassName("date")[0];
                if(parseInt(td.textContent.split("-")[0])>limit)
                    tr[i].style.display ='none';
            }
      } else{
      for(let i=0;i<tr.length;i++)
       tr[i].style.display='';
      }
    
        }),
        $('#chkShowOutPatients').on('change',function(){
            const tbody = document.getElementById("tbodyPatientsList");
            const tr =tbody.getElementsByTagName("tr");
            //if($('#chkShowOutPatients').is(':checked')){
                if(document.getElementById("chkShowOutPatients").checked){
                for(let i=0;i<tr.length;i++){
                    const td=tr[i].getElementsByClassName("out")[0];
                    if(td.textContent=='No'){
                        tr[i].style.display ='none';
                    }
                }
            } else{
                for(let i=0;i<tr.length;i++){
                    tr[i].style.display='';
                }
                
            }
    
        })


  ) 

})();
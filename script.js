
function calculate(){
    var shadeA= document.getElementById("alitre_amount").value;
    var shadeB=document.getElementById("blitre_amount").value;
    var shadeC=document.getElementById("clitre_amount").value;
    var shadeD=document.getElementById("dlitre_amount").value;
    var price=45;

    var results=((shadeA*price)+(shadeB*price)+(shadeC*price)+(shadeD*price));
    document.getElementById("total").innerHTML ="KSH" + results;
}
     

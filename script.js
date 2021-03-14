
function calculate(){
    var shadeA= document.getElementById("alitre_amount").value;
    var shadeB=document.getElementById("blitre_amount").value;
    var shadeC=document.getElementById("clitre_amount").value;
    var shadeD=document.getElementById("dlitre_amount").value;
    var price=45;
    var rate=7;
    var monthy=30;
    var yearly=12;

    var results=((shadeA*price)+(shadeB*price)+(shadeC*price)+(shadeD*price));
    document.getElementById("total").innerHTML ="KSH  " + results;
    var results2=(((shadeA*price)+(shadeB*price)+(shadeC*price)+(shadeD*price))*rate);
    document.getElementById("total1").innerHTML ="KSH  " + results2;
    var results3=(((shadeA*price)+(shadeB*price)+(shadeC*price)+(shadeD*price))*rate*monthy);
    document.getElementById("total2").innerHTML ="KSH  " +results3;
    var results4=(((shadeA*price)+(shadeB*price)+(shadeC*price)+(shadeD*price))*rate*monthy*yearly);
    document.getElementById("total3").innerHTML ="KSH  " +results4;


}
     

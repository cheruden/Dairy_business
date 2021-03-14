
function calculate(){
    function calculate2(){
        var year= [
            {name:"JANUARY",days:31},
            {name:"FEBRUARY",days:29},
            {name:"MARCH",days:31},
            {name:"APRIL",days:30},
            {name:"MAY",days:31},
            {name:"JUNE",days:30},
            {name:"JULY",days:31},
            {name:"AUGUST",days:31},
            {name:"SEPTEMBER",days:30},
            {name:"OCTOBER",days:31},
            {name:"NOVEMBER",days:30},
            {name:"DECEMBER",days:31}
         ] 
          
      }
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


    var sum=(results*31);
    document.getElementById("sum").innerHTML="Your income is KSH  "+ sum;

    var sum1=(results*29);
    document.getElementById("sum1").innerHTML="Your income is KSH  "+ sum1;

    var sum2=(results*31);
    document.getElementById("sum2").innerHTML="Your income is KSH  "+ sum2;

    var sum3=(results*30);
    document.getElementById("sum3").innerHTML="Your income is KSH  "+ sum3;

    var sum4=(results*31);
    document.getElementById("sum4").innerHTML="Your income is KSH  "+ sum4;

    var sum5=(results*30);
    document.getElementById("sum5").innerHTML="Your income is KSH  "+ sum5;

    var sum6=(results*31);
    document.getElementById("sum6").innerHTML="Your income is KSH  "+ sum6;

    var sum7=(results*31);
    document.getElementById("sum7").innerHTML="Your income is KSH  "+ sum7;

    var sum8=(results*30);
    document.getElementById("sum8").innerHTML="Your income is KSH  "+ sum8;

    var sum9=(results*31);
    document.getElementById("sum9").innerHTML="Your income is KSH  "+ sum9;

    var sum10=(results*30);
    document.getElementById("sum10").innerHTML="Your income is KSH  "+ sum10;

    var sum11=(results*31);
    document.getElementById("sum11").innerHTML="Your income is KSH  "+ sum11;

}   
    

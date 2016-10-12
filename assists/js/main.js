/**
 * Created by Mozalic on 2016/10/3.
 */

$(document).ready(function(){
    var firre= "none";
    var secre= "none";
    $("#loop").click(function(){
        $("#lis").fadeToggle();
        $("#dloop").fadeToggle();
    });
    $("#niconicoG").click(function(){
        $("#lis").fadeToggle();
        $("#dloop").fadeToggle();
    });
    $("#firstrea").change(function () {
        firre= this.value;
        var flag1=0,flag2=0;
        if (firre == "ans1"){
            $("#firstque").fadeIn();
            flag1=1;
        }
        if (firre == "ans2"){
            $("#secondque").fadeIn();
            flag2=1;
        }
        if (secre == "ans1"){
            $("#firstque").fadeIn();
            flag1=1;
        }
        if (secre == "ans2"){
            $("#secondque").fadeIn();
            flag2=1;
        }
        if (flag1==0) {
            $("#firstque").fadeOut();
        }
        if (flag2==0) {
            $("#secondque").fadeOut();
        }
    })
    $("#secondrea").change(function () {
        secre= this.value;
        var flag1=0,flag2=0;
        if (firre == "ans1"){
            $("#firstque").fadeIn();
            flag1=1;
        }
        if (firre == "ans2"){
            $("#secondque").fadeIn();
            flag2=1;
        }
        if (secre == "ans1"){
            $("#firstque").fadeIn();
            flag1=1;
        }
        if (secre == "ans2"){
            $("#secondque").fadeIn();
            flag2=1;
        }
        if (flag1==0) {
            $("#firstque").fadeOut();
        }
        if (flag2==0) {
            $("#secondque").fadeOut();
        }
    })
    $("#reset").click(function () {
        firre= "none";
        secre= "none";
        $("#firstque").fadeOut();
        $("#secondque").fadeOut();
    })
});



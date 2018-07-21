// $( window ).on( "load", changeComponent );
//   function changeComponent(_src){
// 		alert(_src);
// 		console.log(JSON.stringify(_src));
// 		$("#myImg").attr('src', _src);
// 	}

    // $("#bio").on("click", function() {

    //     $("#toBRemove").load("Profile.htm");

    // });
// $(window).on('load', loadHome);

function loadProfile() {
    if(document.getElementById("toBRemove")){
        document.getElementById("toBRemove").style.height = "500px;";
        document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="100%;" type="text/html" data="./Profile.htm" ></object>';
        document.getElementById("toBRemove").style.padding = "0px";
    }
    else{
        document.getElementById("toRemove").style.height = "500px;";
        document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="100%;" type="text/html" data="./Profile.htm" ></object>';
        document.getElementById("toRemove").style.padding = "0px";
    }
 
}
// function loadHome() {
//  document.getElementById("toBRemove").innerHTML='<object style="margin: 0px; overflow: hidden;" width="130%" height="100%" type="text/html" data="./Home.htm" ></object>';
//  //document.getElementById("toBRemove").style.padding = "0px";
// }
function loadExhibition() {
     if(document.getElementById("toBRemove")){
         document.getElementById("toBRemove").style.height = "500px;";
        document.getElementById("toBRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Exhibition.htm" ></object>';
        document.getElementById("toBRemove").style.padding = "0px";
   } else{
       document.getElementById("toRemove").style.height = "500px;";
        document.getElementById("toRemove").innerHTML='<object style="margin: 0px 0px" width="100%" height="130%" type="text/html" data="./Exhibition.htm" ></object>';
        document.getElementById("toRemove").style.padding = "0px";
    }
}
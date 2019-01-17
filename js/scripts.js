// Back End Logic

function beerSelector(hops,malt,hot,strength){
  var ipaScore=(hops*2)+hot+(strength*2)
  var redScore=(hops*1.5)+(malt*2)+(hot*0.5)+strength
  var stoutScore=(malt*3)+(strength*1.5)
  var pilsScore=(hot*3)
  console.log(ipaScore);
  console.log(redScore);
  console.log(stoutScore);
  console.log(pilsScore);
  if ((ipaScore>redScore)&&(ipaScore>stoutScore)&&(ipaScore>pilsScore)){
  return "ipa";
  }
  if (redScore>ipaScore && redScore>stoutScore && redScore>pilsScore){
  return "red";
  }
  if (stoutScore>redScore && stoutScore>ipaScore && stoutScore>pilsScore){
    return "stout";
  }
  if (pilsScore>redScore && pilsScore>stoutScore && pilsScore>ipaScore){
    return "pils";
  }
  else {
    alert("You broke it");
  }
}




//Front end logic




$(document).ready(function() {
  $("#beerForm").submit(function(event) {
    event.preventDefault();
    var hoppyInput = parseInt($("#hops").val());
    var maltInput = parseInt($("#malt").val());
    var hotInput = parseInt($("#hot").val());
    var strengthInput = parseInt($("#strength").val());
  var selection= beerSelector(hoppyInput,maltInput,hotInput,strengthInput);
  console.log(selection);
  if (selection==="ipa"){
    $("#ipaCard").show()};
  if (selection==="red"){
    $("#redCard").show()};
  if (selection==="stout"){
    $("#stoutCard").show();}
  if (selection==="pils"){
    $("#pilsCard").show();}
})
})

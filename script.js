window.onload=function(){
	var carTable=document.getElementById("carTable");
    var tr=carTable.children[1].rows;
    var checkInputs=document.getElementsByClassName('check');//都有相同的check classname
    var checkAllInputs =document.getElementByClassName('check-all');//check 和check-all都是它的classname
     var selectedTotal=document.getElementById("selectedTotal");
     var priceTotal=document.getElementById("priceTotal");

function getTotal(){
	var selected=0;
	var price=0;
	for(var i=0,len=tr.length;i<len;i++){
		if(tr[i].getElementsByTagName('input')[0].checked){
			selected+=parseInt(tr[i].getElementsByTagName('input')[1].value);
			price+=parseFloat(tr[i].cells[4].innerHTML);

        }
	}
	selectedTotal.innerHTML=selected;
	priceTotal.innerHTML=price.toFixed(2);
}
   for(var i=0,len=checkInputs.length;i<len;i++){
   	checkInputs[i].onclick=function(){
   	getTotal();
   }
   }
}   
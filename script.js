counter = 0
document.getElementById("no_seat").innerHTML=0
function changecolor(clicked_id){
	var color = window.getComputedStyle(document.getElementById(clicked_id)).getPropertyValue("background-color")

	//get current color of the selected button
	if(color == "rgb(149, 165, 166)")
	{
		//set green color
			document.getElementById(clicked_id).style.backgroundColor ="green";
			counter=counter+1;
			document.getElementById("no_seat").innerHTML=counter
	}
	else if(color == "rgb(0, 128, 0)")
	{
		// set normal color
		document.getElementById(clicked_id).style.backgroundColor ="rgb(149, 165, 166)";
		counter=counter-1;
		document.getElementById("no_seat").innerHTML=counter;
	}
	alert(document.getElementById("no_seat").value)
	var get_seat = parseInt(document.getElementById("no_seat").value);
	var ticket_price = parseInt(document.getElementById("ticket_price").value);
	var total_price = get_seat * ticket_price
	document.getElementById(total_price).innerHTML=total_price

}
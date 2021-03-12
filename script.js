function changecolor(clicked_id){
	var color = window.getComputedStyle(document.getElementById(clicked_id)).getPropertyValue("background-color")
	
	//get current color of the selected button
	if(color == "rgb(149, 165, 166)")
	{
		//set green color
			document.getElementById(clicked_id).style.backgroundColor ="green";
	}
	else if(color == "rgb(0, 128, 0)")
	{
		// set normal color
		document.getElementById(clicked_id).style.backgroundColor ="rgb(149, 165, 166)";
	}

}
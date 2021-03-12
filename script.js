counter = 0
document.getElementById("no_seat").innerHTML=0
var total_pay = 0
function changecolor(clicked_id){
	debugger;
	var color = window.getComputedStyle(document.getElementById(clicked_id)).getPropertyValue("background-color")

	//get current color of the selected button
	if(color == "rgb(149, 165, 166)")
	{
		//set green color
			document.getElementById(clicked_id).style.backgroundColor ="green";
			counter=counter+1;
			document.getElementById("no_seat").innerText=counter
	}
	else if(color == "rgb(0, 128, 0)")
	{
		// set normal color
		document.getElementById(clicked_id).style.backgroundColor ="rgb(149, 165, 166)";
		counter=counter-1;
		document.getElementById("no_seat").innerText=counter;
	}
	var movie = document.getElementById("movie").value;
	if(movie=="Titanic")
	{
		total_pay = 13 * counter
		document.getElementById("total_price").innerHTML = total_pay
	}	
	else if(movie=="Evengers: End Game")
	{
		total_pay = 15 * counter
		document.getElementById("total_price").innerHTML = total_pay
	}	
	if(movie=="infinitive War")
	{
		total_pay = 20 * counter
		document.getElementById("total_price").innerHTML = total_pay
	}	
	


}
//click on book ticket button 
function book_ticket(){
	var url = "purchase.html?total_price=" + encodeURIComponent(total_pay);
        window.location.href = url;
}

//click on confirm button for pay
function Confirm(){
	document.getElementsByTagName("h1").innerText="You have succsefully bookd the ticket"
	
}
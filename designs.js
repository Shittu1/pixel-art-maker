// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!

//The make grid function created nested inside the submit event handler
$("#sizePicker").submit(function makeGrid(event){

	$("#pixelCanvas tr").remove();//Removes previous canvas/grids

	event.preventDefault();		//prevents the default action of a form being submitted

	let height = $("#inputHeight").val();	//Height of the grid is set to the value of the first input element
	let width = $("#inputWeight").val();	//Height of the grid is set to the value of the first input element

//for loop that iterate through the input values for grid height
	for(let i = 1; i <= height; i++) {
		$("#pixelCanvas").append("<tr></tr>");			//Table-row is created as a child of table

	//for loop that iterate through the input values for grid width
		for(let i = 1; i <= width; i++) {
			$("tr:last").append("<td></td>");	//td cells are created as children of tr
	
		}
	}

//This code toggles the event of clicking on the grid cell with a selected color on and off
//source inspiration: https://stackoverflow.com/questions/21151577/toggle-click-alternative	
	$("td").click(function(event){
		let colorPicker = $("#colorPicker").val();
		let c = event.target.c = !event.target.c;    // Will remember the clicked state
  		$(event.target).css({ "background-color": c ? colorPicker: "#ffffff" });  //the condition for the bacground-color

	});

//This hides the borders of the table/grid cells
	$("#gridRemover").click(function(){
		$("td").toggleClass("gridToggle");
		});

});


//This code hides the button/grid-remover from the webpage and
//It shows up on clicking input(type = submit) button 
$("#gridRemover").hide();
$("#createGrig").click(function(){
    $("#gridRemover").show();
});
	 
	



	
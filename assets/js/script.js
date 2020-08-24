console.log("connected");

$(document).ready(function()
	{
		/*To slide down "add new task" div*/
		$("#add").click(function()
		{
			$("#newTask").slideToggle();
		});

		/*to mark on done tasks*/
		$("ul").on('click','li',function()
		{
			$(this).toggleClass("done");
		});

		/*to delete done tasks*/

		$("ul").on('click','span',function(event)
		{
			$(this).parent().fadeOut(500,function()
				{$(this).remove();});
			event.stopPropagation();
		});

		/*to create new task*/	
		$("#newTask input[type='text']").keypress(function(key)
		{
			if(key.which===13)
			{
				/*get new task from input*/
				 var task = $(this).val();
				 /*put new task in list*/
				 $("ul").append("<li><span>X</span>"+task+"</li>");
				 $(this).val("");
			}
		});

	});
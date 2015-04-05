$(document).ready(function() {
	var t = $("#t1");
	// Example
	t.xtab("init", {
		mainlabel: "test",
		split: true,
		rows: 5,
		cols: 5,
		rowlabels: true,
		collabels: true,
		widths: [ 75, 50, 100, 200 ],
		values: [
					[1, , 20,1 ],
					[64, ,1, 4, ],
					[ , 1, , ],
					[]
				],
		change: function(r, c, val, ref) {
			console.log("CHANGE [" + r + ", " + c + "] = \"" + ref + "\": " + val);
		},
		focus: function(r, c, val, ref) {
			console.log("FOCUS [" + r + ", " + c + "] = \"" + ref + "\": " + val);
		}
	});
	$("#b2").click(function() {
			console.log(t.xtab("val")); 
				$("#place").html(t.xtab("val"));
			});
});


function generate()
{
	$("[realvalue]").removeAttr("realvalue");
	$("[fullvalue]").removeAttr("fullvalue");
	$("#t1").find(".xtab:eq(1) tbody").addClass("grid");
	var row=$(".grid tr:not(tr:eq(0))").length;
	var col=$(".grid ").find("tr:eq(0) th").length;
	$(".grid tr:gt(0)").each(function(ii){
		var $main=$(this);
		for(var i=0;i<col;i++)
		{	
			if(ii !=0)
			{
			var val=$main.find("td:eq("+i+") input").val();
			var MainValue=getValue(val,i);
				if(!isNaN(MainValue))
				{
					$main.find("td:eq("+i+")").attr("realValue",MainValue);
				}
			}
			
		}

			if(	($(".grid tr:gt(0)").length-1)==ii)
			{
				
				$(".grid").find("tr").each(function(index){
					var rowValue=0;
					$(this).find("[realvalue]").each(function(){
						 rowValue=parseInt($(this).attr("realvalue"))+rowValue;
					})
					if(rowValue !=0)
					{						
						$("#t1 .xtab:eq(0) tbody tr:eq("+index+") th").text(rowValue).attr("fullvalue",rowValue);
					}

					var overAllValue=0;
					$("#t1 .xtab:eq(0)").find("[fullvalue]").each(function(){
						overAllValue=parseInt(overAllValue)+parseInt($(this).attr("fullvalue"));
						$("#t1 .xtab:eq(0) tbody tr:eq(1) th").text(overAllValue);
					});
				})
			}

	});
	
	
	
}


function getValue(thisValue,index)
{
	var $main=$(".grid tr:eq(1) td")
	for(var i=0;i<$(".grid tr:eq(1) td").length;i++)
	{
		var Value=$main.eq(i).find("input").val();
		if((i==index || i>index) && Value!='')
		{
		  var multiple=parseInt(thisValue)*parseInt(Value);
		  return multiple;
		  break;
		}
	}
}
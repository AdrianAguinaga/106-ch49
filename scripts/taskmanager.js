
function saveTask()
{
    console.log("saving task");
    //get the values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color  = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);
    //build an object
    let taskSave = new Task (title, description, color, date, status, budget);
    console.log(taskSave);

    //save to server
    $.ajax({
        type:"post",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskSave),
        contentType:"application/json",
        success: function(res){
            console.log(res);
        }, 
        error: function(error){
            console.log(error);
        }
    });

    //display the info in to the page
}

function testRequest()
{
    $.ajax({
        type:"get",  //reading the server
        url:"https://www.amazon.com",  //the page that we are trying to read
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init()
{
    $("#btnSave").click(saveTask);

}

window.onload = init;
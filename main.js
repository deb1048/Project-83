var Mouse_event = "empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "red";
width= 3;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
Mouse_event = "mousedown";
color = document.getElementById("Color_input").value;
width = document.getElementById("width_input").value;
console.log("mousedown");
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
Mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
Mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    console.log(e);
    current_position_x= e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY- canvas.offsetTop;
    if (Mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_x,last_position_y);
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        console.log("x="+current_position_x+"y="+current_position_y);
        ctx.stroke();
    }

    last_position_x=current_position_x;
    last_position_y=current_position_y;
    }


    var mouseEvent = "empty";
    var last_position_of_x, last_position_of_y;
    
        canvas = document.getElementById('myCanvas');
        ctx = canvas.getContext("2d");
        
        color = "black";
        width_of_line = 2;
    
        var width=screen.width;
        //Creating variables to change height and width of canvas from 700 to fit the new screen size  un a mobile
        new_canvas_width=screen.width-70;
        new_canvas_height=screen.height-400;
        
        if(width<992){
            document.getElementById("myCanvas").width=new_canvas_width;
            document.getElementById("myCanvas").height=new_canvas_height;
            document.body.style.overflow="hidden";
        }
    
        canvas.addEventListener("touchstart", my_touchstart);
        
        function my_touchstart(e)
        {
            //Addictonal Activity start
            color = document.getElementById("color_input").value;
            width_of_line = document.getElementById("width_input").value;
            //Addictonal Activity ends
            last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
            last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        }
    
    
        canvas.addEventListener("touchmove", my_touchmove);
        function my_touchmove(e)
        {
    
             current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
             current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            console.log(e);
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);
    
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
            ctx.lineTo(current_position_of_x, current_position_of_y);
            ctx.stroke();
            
    
            last_position_of_x = current_position_of_x; 
            last_position_of_y = current_position_of_y;
        }
          function clearArea(){
              ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
          }       
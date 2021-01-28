canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg"; 

car1_width = 150; car1_height = 90; 
car1_image = "https://w7.pngwing.com/pngs/676/74/png-transparent-car-laferrari-auto-racing-truck-top-view-purple-violet-cartoon.png"; 
car1_x = 10; 
car1_y = 10;

car2_width = 150; car2_height = 90; 
car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Yu4XFUPUWmHhN46NDCP9yQYDkjO6c1Kqiw&usqp=CAU"
car2_x = 10; 
car2_y = 110;

function add()
{
    bg_imgTag=new Image();
    bg_imgTag.onload= uploadBg;
    bg_imgTag.src=background_image

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1
    car1_imgTag.src=car1_image

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2
    car2_imgTag.src=car2_image
}

function uploadBg()
{
    ctx.drawImage(bg_imgTag,0,0,canvas.width, canvas.height)
}
function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x, car1_y, car1_width, car1_height)
}
function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x, car2_y, car2_width, car2_height)
}

//--Second class project editing--//

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    keypressed=e.keyCode
    if(keypressed=='38')
    {
        car1up();
        console.log("Car1up")
    }
    if(keypressed=='40')
    {
        car1down();
        console.log("Car1down")
    }
    if(keypressed=='37')
    {
        car1left();
        console.log("Car1left")
    }
    if(keypressed=='39')
    {
        car1right();
        console.log("Car1right")
    }
    if(keypressed=='83')
    {
        car2up();
        console.log("Car2up")
    }
    if(keypressed=='65')
    {
        car2down();
        console.log("Car2down")
    }
    if(keypressed=='78')
    {
        car2left();
        console.log("Car2left")
    }
    if(keypressed=='73')
    {
        car2right();
        console.log("Car2right")
    }
}

function car1up()
{
    if(car1_y>=0)
    {
    car1_y=car1_y-10;
    console.log(car1_y);
    uploadBg();
    uploadCar2();
    uploadCar1();
    }
}

function car1down()
{
    if(car1_y<=500)
    {
    car1_y=car1_y+10;
    console.log(car1_y);
    uploadBg();
    uploadCar2();
    uploadCar1();
    }
}

function car1left()
{
    if(car1_x>=0)
    {
    car1_x=car1_x-10;
    console.log(car1_x);
    uploadBg();
    uploadCar2();
    uploadCar1();
    }
}

function car1right()
{
    if(car1_x<=700)
    {
    car1_x=car1_x+10;
    console.log(car1_x);
    uploadBg();
    uploadCar2();
    uploadCar1();
    }
}
//--Part for Car2 seperation--//

function car2up()
{
    if(car2_y>=0)
    {
    car2_y=car2_y-10;
    console.log(car2_y);
    uploadBg()
    uploadCar2();
    uploadCar1();
    }
}

function car2down()
{
    if(car2_y<=500)
    {
    car2_y=car2_y+10;
    console.log(car2_y);
    uploadBg()
    uploadCar2();
    uploadCar1();
    }
}

function car2left()
{
    if(car2_x>=0)
    {
    car2_x=car2_x-10;
    console.log(car2_x);
    uploadBg()
    uploadCar2();
    uploadCar1();
    }
}

function car2right()
{
    if(car2_x<=700)
    {
    car2_x=car2_x+10;
    console.log(car2_x);
    uploadBg()
    uploadCar2();
    uploadCar1();
    }
}
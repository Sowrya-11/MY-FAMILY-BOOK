var images=[
    "IMG 1.jpg","IMG 2.jpg",
    "IMG 3.jpg","IMG 4.jpg","IMG 5.jpg",
    "IMG 6.jpg","IMG 7.jpg","IMG 8.jpg","IMG 9.jpg",
     "IMG 10.jpg"];
    var names=[
        "Akash raj",
        "Satish gowda","Sai Devi Rani",
        "Sai Khaythi","Anusha","Mnagathayaru","suryanaryana","Rajendhra Kumar",
        "Rado","Rio"
    ];
    
    var i=0;
function next(){
    document.getElementById("Name").innerHTML=names[i];
    document.getElementById("imagee").src=images[i];
  i++;
}
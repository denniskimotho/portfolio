// Year 2000 is assign to the
// constructor of Date() class
let date = new Date('2000')
   
// Use "getYear()" method and stores
// the returned value to "n"
let n = date.getYear();
   
// Display the returned value
// The value is the subtraction of
// 2000 and 1900  
console.log("The value returned by getYear() method: " + n)

document.getElementById("about").addEventListener("click", function(){
    document.getElementById("homeMeHeader").innerText = "About Me";
    document.getElementById("homeMeDes").innerText = "Write a brief introduction about yourself here.";
});

document.getElementById("home").addEventListener("click", function(){
    document.getElementById("homeMeHeader").innerText = "Home";
    document.getElementById("homeMeDes").innerText = "Write a brief introduction about yourself here.";
});

document.getElementById("contact").addEventListener("click", function(){
    document.getElementById("homeMeHeader").innerText = "Contact";
    document.getElementById("homeMeDes").innerText = "Write a brief introduction about yourself here.";
});
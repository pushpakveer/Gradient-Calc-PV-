let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenvalue='';
for(item of buttons){
   item.addEventListener('click',(e)=>{
   buttonText = e.target.innerText;
   console.log(buttonText);
   if (buttonText=='x'){
      buttonText='*';
      screenvalue+=buttonText
      screen.value=screenvalue;
   }
   else if(buttonText=='C'){
      screenvalue=""
      screen.value=screenvalue;

        
   }
   else if(buttonText=='='){
      screen.value=eval(screenvalue); //eval is the function to evaluate

        
   }
   else{
      screenvalue+=buttonText;
        screen.value=screenvalue;



   }


   })
 }

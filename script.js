//Bakgrundsfärgen går från hue=0 på första elementet och ökar sedan med 20 för varje element
for(let i=0; i<5; i++){
    const h3 = document.createElement('h3');
    
    const hue = 120 + (i*20);
    const f = 100 + (i*80);
    h3.style.display = "flex";
    h3.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
    h3.style.justifyContent = "center";
    h3.style.fontSize = `${f}%`;
    h3.style.color = "#6e6ef7";

    h3.innerText = `Rad ${i+1} `;

    document.body.append(h3);
}

/*
  Hue för första elementet ska alltid vara 180
  Hue för sista elementet ska alltid vara 300
  Elementen där emellan ska gradvis skifta från det första till det sista
  med hue-värdet $${hue}
*/

const div = document.createElement('div');
div.style.display = "flex";
div.style.flexDirection = "row";


div.style.height = "40rem";
div.style.border = " 1px solid";
div.style.backgroundColor = "#white";
//div.style.gap = "28%";
//div.style.padding = "11%";
div.style.justifyContent = "space-around";
div.style.alignItems = "center";

document.body.append(div);
//div.appendChild(innerDiv);
//div.appendChild(innerDiv2);
//div.appendChild(innerDiv3);
for(let i=0; i<3; i++){
  const innerDiv  = document.createElement('div');
  innerDiv.style.display = "flex";
  innerDiv.style.flexDirection = "column";
  //innerDiv.style.justifyContent = "space-around";
  //innerDiv.style.alignItems = "center";
  //innerDiv.style.fontSize = "66%";
  innerDiv.style.flexBasis =  "8%";
  innerDiv.style.height = "70%";
  innerDiv.style.border = " 1px solid";
  innerDiv.style.backgroundColor = "#a8a8f0";
  document.body.append(div);
  div.appendChild(innerDiv);
  for(let i=0; i<10; i++){
    
    const h3 = document.createElement('h3');
    

    
    h3.style.display = "flex";
    h3.style.height= "100%";
    h3.style.fontSize = "80%";
    
    //innerDiv2.style.border = " 1px solid yellow";
    h3.innerText = `${i} `;
    if (i ==4) {
      backcolor = h3.style.backgroundColor = "#a8a8f0";
      h3.style.color = "white";
      h3.style.margin = "0% 15% 0px 15%";
      
    }

    else if (i == 0 || i == 2 || i == 6 ||i == 8) {
      backcolor = h3.style.backgroundColor = "black";
      textcolor = h3.style.color = "white";
      h3.style.margin = "0% 15% 0px 15%";
      if (i == 0) {
        h3.style.marginTop = "15%";
        
      }  
      
    }else {
      backcolor = h3.style.backgroundColor = "white";
      textcolor = h3.style.color = "black";
      h3.style.margin = "0% 15% 0px 15%";
       if (i == 9) {
        h3.style.marginBottom = "15%";
         
       }
    }
    h3.style.padding = "0%";

    //innerDiv2.style.backgroundColor = "white";
    
    innerDiv.appendChild(h3);
    
    //innerDiv.appendChild(innerDiv2);

  }

}




var x = document.querySelectorAll("div > h3");
var i;
for (i = 10; i < 20; i++) {
  
  x[i].style.justifyContent = "center";
} 

const numberOfLoops = 20;


for(let i=0; i<numberOfLoops; i++){ 
  
  const h3 = document.createElement('h4');
  h3.style.margin = 0;

  //180 är startvärdet, 120 den totala ändringen i hue, 120/numberOfLoops är ändringen i hue per element
  /**
   * 180 är start värdet och 300 slutvärdet
   * Den totala förändringen i hue är 300-180=120
   * Förändringen av hue i varje steg beror på antal steg: 120/numberOfLoops
   * 
   */
  const hue = 180 + (i*(120/numberOfLoops));
  h3.style.backgroundColor = `hsl(${hue}, 74%, 77%)`;

  h3.innerText = `${i+1}) hue = ${hue}`;
 
  document.body.append(h3);
  
}




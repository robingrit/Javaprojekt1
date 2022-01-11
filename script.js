//Bakgrundsfärgen går från hue=0 på första elementet och ökar sedan med 20 för varje element
for (let i = 0; i < 5; i++) {
  const h3 = document.createElement("h3");

  const hue = 120 + i * 20;
  const f = 100 + i * 80;
  h3.style.display = "flex";
  h3.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
  h3.style.justifyContent = "center";
  h3.style.fontSize = `${f}%`;
  h3.style.color = "#6e6ef7";

  h3.innerText = `Rad ${i + 1} `;

  document.body.append(h3);
}

/*
  Hue för första elementet ska alltid vara 180
  Hue för sista elementet ska alltid vara 300
  Elementen där emellan ska gradvis skifta från det första till det sista
  med hue-värdet $${hue}
*/

const div = document.createElement("div");
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
for (let j = 0; j < 3; j++) {
  const innerDiv = document.createElement("div");
  innerDiv.style.display = "flex";
  innerDiv.style.flexDirection = "column";
  //innerDiv.style.justifyContent = "space-around";
  //innerDiv.style.alignItems = "center";
  //innerDiv.style.fontSize = "66%";
  innerDiv.style.flexBasis = "8%";
  innerDiv.style.height = "70%";
  innerDiv.style.border = " 1px solid";
  innerDiv.style.backgroundColor = "#a8a8f0";
  document.body.append(div);
  div.appendChild(innerDiv);
  for (let i = 0; i < 10; i++) {
    const h3 = document.createElement("h3");
    h3.style.display = "flex";
    h3.style.height = "100%";
    h3.style.fontSize = "35px";

    h3.innerText = `${i} `;

    //innerDiv2.style.border = " 1px solid yellow";
    if (j == 1) {
      h3.innerText = `${9 - i} `;
      h3.style.justifyContent = "center";
      

      if (i == 1) {
        backcolor = h3.style.backgroundColor = "#a8a8f0";
        h3.style.color = "white";
      } else if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) {
        backcolor = h3.style.backgroundColor = "white";
        textcolor = h3.style.color = "black";
      }
    }
    else if(j == 2){
      const siffror = ["ett", "två", "tre", "fyra","fem", "sex", "sju", "åtta", "nio", "tio"];
      h3.innerText = `${siffror[i]} `;
      h3.style.fontSize = "25px";
      h3.style.justifyContent = "end";
      
      

    }

    if (i == 4) {
      backcolor = h3.style.backgroundColor = "#a8a8f0";
      h3.style.color = "white";
      h3.style.margin = "0% 15% 0px 15%";
    } else if (i == 0 || i == 2 || i == 6 || i == 8) {
      backcolor = h3.style.backgroundColor = "black";
      textcolor = h3.style.color = "white";
      h3.style.margin = "0% 15% 0px 15%";
      if (i == 0) {
        h3.style.marginTop = "15%";
      }
    } else {
      backcolor = h3.style.backgroundColor = "white";
      textcolor = h3.style.color = "black";
      h3.style.margin = "0% 15% 0px 15%";
      if (i == 9) {
        h3.style.marginBottom = "15%";
      }
    }
    h3.style.padding = "0%";
    innerDiv.appendChild(h3);
  }


  

  //innerDiv2.style.backgroundColor = "white";

  

  //innerDiv.appendChild(innerDiv2);
}

var x = document.querySelectorAll("div > h3");
var i;
for (i = 24; i <  25; i++) {
  if(i == 25 )
  x[i].style. backgroundColor = "#a8a8f0";
  else{
    x[i].style. backgroundColor = "black";
  }
}





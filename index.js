const first = document.getElementById("select");
const second = document.getElementById("insert");
const third = document.getElementById("area");

first.style.display = "block";
second.style.display = "none";
third.style.display = "none";

const shape = () => {
  this.rectangle = rectangle;
  this.circle = circle;
  this.square = square;
  this.ellipse = ellipse;
}

shape.rectangle = () => {
  this.len = len;
  this.breadth = breadth;
}

shape.circle = () => {
  this.diameter = diameter;
}

shape.square = () => {
  this.side = side;
}

shape.ellipse = () => {
  this.len = len;
  this.breadth = breadth;
}

const selectShape = () => {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  const result = document.querySelector('input[name="shape"]:checked').value;
  if(result == 'rectangle' || result == 'ellipse'){
    document.getElementById("rectellip").style.display = "block";
    document.getElementById("circsqua").style.display = "none";
  }
  else if(result == 'square' || result == 'circle') {
    document.getElementById("rectellip").style.display = "none";
    document.getElementById("circsqua").style.display = "block";
  }
  document.getElementById("numbers").innerHTML = result;
  console.log('shape', shape);
};

const values = () => {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
  const dia = document.getElementById("diameter").value;
  shape.rectangle.len = document.getElementById("length").value;
  shape.rectangle.breadth = document.getElementById("breadth").value;
  shape.ellipse.len = document.getElementById("length").value;
  shape.ellipse.breadth = document.getElementById("breadth").value;
  const result = document.querySelector('input[name="shape"]:checked').value;
  document.getElementById("dia").innerHTML = dia;
  document.getElementById("len").innerHTML = shape.rectangle.len;
  document.getElementById("bread").innerHTML = shape.rectangle.breadth;
  console.log('dia', shape.rectangle.length, shape.rectangle.breadth);
  area();
};

const startOver = () => {
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
};

const area = () => {
  const result = document.querySelector('input[name="shape"]:checked').value;
  const dia = document.getElementById("diameter").value;
  shape.rectangle.len = document.getElementById("length").value;
  shape.rectangle.breadth = document.getElementById("breadth").value;
  shape.ellipse.len = document.getElementById("length").value;
  shape.ellipse.breadth = document.getElementById("breadth").value;
  let calc;
  console.log('area', result);
  if(result == 'rectangle'){
    calc = shape.rectangle.len*shape.rectangle.breadth
  }
  else if(result == 'circle'){
    calc = 3.14*dia*dia
  }
  else if(result == 'square'){
    calc = dia*dia
  }
  else if(result == 'ellipse'){
    calc = 3.14*shape.ellipse.len*shape.ellipse.breadth
  }
  document.getElementById("totalArea").innerHTML = calc;
  console.log('calcul', calc);
}

const handleRadio = () => {
  var value = document.querySelector('input[name = shape]:checked').value;
  result.innerHTML = 'You Gender: '+value;
  console.log("res", value)
}



// const first = document.getElementById("select");
// const second = document.getElementById("insert");
// const third = document.getElementById("area");

// first.style.display = "block";
// second.style.display = "none";
// third.style.display = "none";

// const shape = () => {
//   this.rectangle = rectangle;
//   this.circle = circle;
//   this.square = square;
//   this.ellipse = ellipse;
// }

// shape.rectangle = () => {
//   this.len = len;
//   this.breadth = breadth;
// }

// shape.circle = () => {
//   this.diameter = diameter;
// }

// shape.square = () => {
//   this.side = side;
// }

// shape.ellipse = () => {
//   this.len = len;
//   this.breadth = breadth;
// }

// const selectShape = () => {
//   first.style.display = "none";
//   second.style.display = "block";
//   third.style.display = "none";
//   const result = document.querySelector('input[name="shape"]:checked').value;
//   if(result == 'rectangle' || result == 'ellipse'){
//     document.getElementById("rectellip").style.display = "block";
//     document.getElementById("circsqua").style.display = "none";
//   }
//   else if(result == 'square' || result == 'circle') {
//     document.getElementById("rectellip").style.display = "none";
//     document.getElementById("circsqua").style.display = "block";
//   }
//   document.getElementById("numbers").innerHTML = result;
//   console.log('shape', shape);
// };

// const values = () => {
//   first.style.display = "none";
//   second.style.display = "none";
//   third.style.display = "block";
//   const dia = document.getElementById("diameter").value;
//   shape.rectangle.len = document.getElementById("length").value;
//   shape.rectangle.breadth = document.getElementById("breadth").value;
//   const result = document.querySelector('input[name="shape"]:checked').value;
//   document.getElementById("dia").innerHTML = dia;
//   document.getElementById("len").innerHTML = shape.rectangle.len;
//   document.getElementById("bread").innerHTML = shape.rectangle.breadth;
//   console.log('dia', shape.rectangle.length, shape.rectangle.breadth);
//   area();
// };

// const startOver = () => {
//   first.style.display = "block";
//   second.style.display = "none";
//   third.style.display = "none";
// };

// const area = () => {
//   const result = document.querySelector('input[name="shape"]:checked').value;
//   const dia = document.getElementById("diameter").value;
//   shape.rectangle.len = document.getElementById("length").value;
//   shape.rectangle.breadth = document.getElementById("breadth").value;
//   let calc;
//   console.log('area', result);
//   if(result == 'rectangle'){
//     calc = shape.rectangle.len*shape.rectangle.breadth
//   }
//   else if(result == 'circle'){
//     calc = 3.14*dia*dia
//   }
//   else if(result == 'square'){
//     calc = dia*dia
//   }
//   else if(result == 'ellipse'){
//     calc = 3.14*length*breadth
//   }
//   document.getElementById("totalArea").innerHTML = calc;
//   console.log('calcul', calc);
// }

// const handleRadio = () => {
//   var value = document.querySelector('input[name = shape]:checked').value;
//   result.innerHTML = 'You Gender: '+value;
//   console.log("res", value)
// }

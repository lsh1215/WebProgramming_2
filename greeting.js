function greet(greeting) {
  return function (name) {
    console.log(greeting + "," + name);
  };
}

//const greet=greeting=>name=>console.log(greeting+","+name);

let hello = greet("hello");
hello("lsh");
hello("worlds");

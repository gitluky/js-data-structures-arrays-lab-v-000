// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (name) {
  const new_drivers = [...drivers, name];
  return new_drivers;
}

function prependDriver (name) {
  const new_drivers = [name,...drivers];
  return new_drivers;
}

function removeLastDriver () {
  const new_drivers_array = drivers.slice(0, drivers.length-1);
  return new_drivers_array;
}

function removeFirstDriver () {
<<<<<<< HEAD
  const new_drivers_array = drivers.slice(1);
=======
  const new_drivers_array = drivers.splice(0,1);
>>>>>>> 3023f31267b299cc41c769c3820511a0c5fb8d51
  return new_drivers_array;
}

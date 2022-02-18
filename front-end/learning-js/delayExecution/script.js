setTimeout(() => {
  //wait for three seconds before executing once
  console.log("Are you still there?");
}, 3000);

const id = setInterval(() => {
  // execute function at two second intervals / every two seconds
  console.log(Math.random());
}, 2000);
clearInterval(id); // clear specific interval by id

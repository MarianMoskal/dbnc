
export default function Task4() {

  var server_echo;
  var json = {
    json: [{
    a: 1,
    b: 2
    }],
    delay: 3
  };

  console.log(encodeURIComponent(JSON.stringify(json.json)));
  
  fetch('/echo/', {
  method: 'post',
  headers: {
  'Accept': 'application/json, text/plain, */\_',
  'Content-Type': 'application/json'
  },
  body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
  }).then(r => console.log(r))
    
  .then(async function (response) {
    server_echo = await response.json().echo
    console.log(response);
    console.log(server_echo);
  // return response.json();
  })
  .then(function (result) {
  alert(result);
  })
  .catch (function (error) {
  console.log('Request failed', error);
  });

  console.log(server_echo);
  // server_echo.forEach(
  // element => console.log(element)
  // )

  return (
    <div>Task4</div>
  )
}

// (4/5)
// What is wrong with the following code?

// var server*echo;
// var json = {
// json: JSON.stringify({
// a: 1,
// b: 2
// }),
// delay: 3
// };
// fetch('/echo/', {
// method: 'post',
// headers: {
// 'Accept': 'application/json, text/plain, */\_',
// 'Content-Type': 'application/json'
// },
// body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
// })
// .then(function (response) {
// server_echo = response.json().echo
// return response.json();
// })
// .then(function (result) {
// alert(result);
// })
// .catch (function (error) {
// console.log('Request failed', error);
// });
// server_echo.forEach(
// element => console.log(element)
// )
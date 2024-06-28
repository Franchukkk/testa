// function sendAjax(method, requestURL, params = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, requestURL)
//         xhr.responseType = "text"
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//         xhr.onload = () => {
//             resolve(xhr.response)
//         }
//         xhr.send(params)
//     })
// }

// let response = sendAjax("get", "info.php")

// console.log(response.then(data => {
//     console.log(data);
//     document.body.innerHTML = "<h1>" + data + "</h1>";
// }));

$( function () {
	let body = $( "body" );
    console.log(body);
    $("a").click( function () {
        console.log( "The body was clicked!" );
    });
})

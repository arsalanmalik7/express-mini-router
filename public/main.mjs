let v1Buttons = document.querySelector("#v1");
let v2Buttons = document.querySelector("#v2");

let v1Nodes = v1Buttons.childNodes;
let v2Nodes = v2Buttons.childNodes;
let parent = v1Buttons.parentNode.parentNode;

console.log(v1Nodes);

console.log(v2Nodes);

axios.post('/api/v1/login')
    .then(function (response) {
        console.log(response.data);
        v1Nodes[1].addEventListener("click", () => {
            let result = document.querySelector("#result");
            result.innerHTML = response.data;
        })
    })

axios.post('/api/v1/signup')
    .then(function (response) {
        console.log(response.data);
        v1Nodes[3].addEventListener("click", () => {
            let result = document.querySelector("#result");
            result.innerHTML = response.data;
        })
    })

axios.get('/api/v1/comment/:postId/')
    .then(function (response) {
        console.log(response.data);
        v1Nodes[5].addEventListener("click", () => {
            let result = document.querySelector("#result");
            result.innerHTML = response.data;
        })
    })

axios.get('/api/v1/feed/:userId')
    .then(function (response) {
        console.log(response.data);
        v1Nodes[7].addEventListener("click", () => {
            let result = document.querySelector("#result");
            result.innerHTML = response.data;
        })
    })


axios.get('/api/v1/posts/:userId')
    .then(function (response) {
        console.log(response.data);
        v1Nodes[9].addEventListener("click", () => {
            let result = document.querySelector("#result");
            result.innerHTML = response.data;
        })
    })


axios.post('/api/v2/login')
    .then(function (response) {
        console.log(response.data);
        v2Nodes[1].addEventListener("click", () => {
            let result = document.querySelector("#result");
            let head = document.querySelector("#heading");
            result.style.color = 'white';
            result.innerHTML = response.data;
            parent.style.backgroundColor = 'black'
        })
    })

axios.post('/api/v2/signup')
    .then(function (response) {
        console.log(response.data);
        v2Nodes[3].addEventListener("click", () => {
            let result = document.querySelector("#result");
            let head = document.querySelector("#heading");
            result.style.color = 'white';
            result.innerHTML = response.data;
            parent.style.backgroundColor = 'black'
        })
    })

axios.get('/api/v2/comment/:postId/')
    .then(function (response) {
        console.log(response.data);
        v2Nodes[5].addEventListener("click", () => {
            let result = document.querySelector("#result");
            let head = document.querySelector("#heading");
            result.style.color = 'white';
            result.innerHTML = response.data;
            parent.style.backgroundColor = 'black'
        })
    })

axios.get('/api/v2/feed/:userId')
    .then(function (response) {
        console.log(response.data);
        v2Nodes[7].addEventListener("click", () => {
            let result = document.querySelector("#result");
            let head = document.querySelector("#heading");
            result.style.color = 'white';
            result.innerHTML = response.data;
            parent.style.backgroundColor = 'black'
        })
    })


axios.get('/api/v2/posts/:userId')
    .then(function (response) {
        console.log(response.data);
        v2Nodes[9].addEventListener("click", () => {
            let result = document.querySelector("#result");
            let head = document.querySelector("#heading");
            result.style.color = 'white';
            result.innerHTML = response.data;
            parent.style.backgroundColor = 'black'
        })
    })
let Users = document.getElementById('user');

const button1 = document.getElementById('btn1');
// console.log(button1);
button1.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let tenData = [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]];
        let output = '<h2>Users ID</h2>';
        tenData.forEach(element => {
                output += `
                <h5>ID: ${element.id}</h5>
                <p><b>Title:</b> ${element.title}</p>
                <p><b>Body:</b> ${element.body}</p>
                <hr>
                `
            })   
            document.getElementById('user').innerHTML = output
        })
    })


                    //GET POSTS 
const button2 = document.querySelector('#btn2');
// console.log(button2)
button2.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) =>{
       let elements =  data.filter((item, index) => index % 100 === 0);
    //    console.log(elements)
       let output2 = '<h2>User Photos</h2>'
       elements.forEach(element =>{
        output2 += `
        <p><b>Album-ID:</b> ${element.albumId}</p>
        <p><b>Title:</b> ${element.title}</p>
        <img scr= ${element.url} alt = ${element.title}>
        <p><b>Photo URL:</b> </p>
        <hr>
        `
       });
       document.querySelector('#user').innerHTML = output2
    });
});


                    //GET COMMENTS
const button3 = document.getElementById('btn3');
button3.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then((data) => {
        let filter = data.filter((item, index) => index % 10 === 0)
        // console.log(filter)
        let output3 = '<h2>User Comments</h2>'
        filter.forEach(element =>{
            output3 += `
            <p><b>Post-ID:</b> ${element.postId}</p>
            <p><b>Name:</b> ${element.name}</p>
            <p><b>Email:</b> ${element.email}</p>
            <hr>
            `
        })
        document.getElementById('user').innerHTML = output3
    })
})

                    //GO TOP

let goTop = document.querySelector('#gotop');
goTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0; 
    // document.body.scrollTop = 0;  FOR SAFARI BROWSER
})

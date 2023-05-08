let nameBox=document.querySelector(".input-name");

let methodBox=document.querySelector(".input-method");

let contentBox=document.querySelector(".textarea-field");

let dateBox=document.querySelector(".input-date");

let submitButton=document.querySelector(".submit-log");

let messageJSON=localStorage.getItem('messageItem');
let messageItem=JSON.parse(messageJSON);

messageItem?null:messageItem=[];

submitButton.addEventListener('click',(e)=>{
    console.log('added entry')
    console.log(dateBox.value);
    let convertDate=dateBox.value.replace(/-/g,"");
    console.log(convertDate)
    fetch('https://job-stalker.onrender.com/messages',{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify({ 
            name  :nameBox.value,
            method:methodBox.value,
            date  :convertDate,
            note  :contentBox.value
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    });
})
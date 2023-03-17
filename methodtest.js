let postBtn = document.getElementById("postBtn");
let getBtn = document.getElementById("getBtn");
let putBtn = document.getElementById("putBtn");
let deleteBtn = document.getElementById("deleteBtn");
let form = document.getElementsByTagName("form")[0];
let output= document.getElementsByTagName("output")[0];
let date = document.getElementById("date");
date.value = new Date();
postBtn.addEventListener('click', postBtnClickEvent);
getBtn.addEventListener('click', getBtnClickEvent);
putBtn.addEventListener('click', putBtnClickEvent);
deleteBtn.addEventListener('click', deleteBtnClickEvent);

async function postBtnClickEvent() {
    let articleName = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let formData = {article_name: articleName, article_body: articleBody, date: date};
    let url = `https://httpbin.org/post`;

    if (document.getElementById('XML-method').checked) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    const resp = JSON.parse(this.responseText);
                    output.innerHTML = prettifyOutput(resp);
                } else {
                    console.log('Error:', this.statusText);
                }
            }
        };
        xhr.open('POST', url);
        xhr.send(JSON.stringify(formData));
    } else {
        const response = await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Error fetching response.');
        } else {
            const data = await response.json();
            output.innerHTML = prettifyOutput(data);
        }
    }
}

async function getBtnClickEvent() {
    let id = document.getElementById('id').value; 
    let url = `https://httpbin.org/get?id=${id}`;

    if (document.getElementById('XML-method').checked) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    const resp = JSON.parse(this.responseText);
                    output.innerHTML = prettifyOutput(resp);
                } else {
                    console.log('Error:', this.statusText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    } else {
        const response = await fetch(url, {
            method: 'GET', 
        }) 
        if (!response.ok) {
            throw new Error('Error fetching response.');
        } else {
            const data = await response.json();
            output.innerHTML = prettifyOutput(data);
        }
    }
}

async function deleteBtnClickEvent() {
    let id = document.getElementById('id').value; 
    let url = `https://httpbin.org/delete?id=${id}`;

    if (document.getElementById('XML-method').checked) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    const resp = JSON.parse(this.responseText);
                    output.innerHTML = prettifyOutput(resp);
                } else {
                    console.log('Error:', this.statusText);
                }
            }
        };
        xhr.open('DELETE', url); 
        xhr.send();
    }  else {
        const response = await fetch(url, {
            method: 'DELETE', 
        }) 
        if (!response.ok) {
            throw new Error('Error fetching response.');
        } else {
            const data = await response.json();
            output.innerHTML = prettifyOutput(data);
        }
    }
}

async function putBtnClickEvent() {
    let id = document.getElementById('id').value; 
    let articleName = document.getElementById("article_name").value;
    let articleBody = document.getElementById("article_body").value;
    let date = document.getElementById("date").value;
    let formData = {id: id, article_name: articleName, article_body: articleBody, date: date};
    let url = `https://httpbin.org/put`; 

    if (document.getElementById('XML-method').checked) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    const resp = JSON.parse(this.responseText);
                    output.innerHTML = prettifyOutput(resp);
                } else {
                    console.log('Error:', this.statusText);
                }
            }
        };
        xhr.open('PUT', url);
        xhr.send(JSON.stringify(formData));
    } else {
        const response = await fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(formData)
        }) 
        if (!response.ok) {
            throw new Error('Error fetching response.');
        } else {
            const data = await response.json();
            output.innerHTML = prettifyOutput(data);
        }
    }
}

function prettifyOutput(response) {
    let text = "<ul>";
    for (const key in response) {
        text += "<li><b>" + key + ": </b> " + JSON.stringify(response[key]) + "</li><br>";
    }
    text += "</ul>";
    return text;
}
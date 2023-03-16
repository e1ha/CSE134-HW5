let postBtn = document.getElementById("postBtn");
            let getBtn = document.getElementById("getBtn");
            let putBtn = document.getElementById("putBtn");
            let deleteBtn = document.getElementById("deleteBtn");
            let form = document.getElementsByTagName("form")[0];
            let output= document.getElementsByTagName("output")[0];
            let date = document.getElementById("date");
            date.value = new Date();

            // update/send a new form with all the entries?
            function postBtnClickEvent() {
                let formData = new FormData(form);
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status === 200) {
                            const resp = JSON.parse(this.responseText);
                            output.innerHTML = JSON.stringify(resp);
                        } else {
                            console.log('Error:', this.statusText);
                        }
                    }
                };
                xhr.open('POST', `https://httpbin.org/post`);
                xhr.send(formData);
            }

            // get data given form id?
            function getBtnClickEvent() {
                let formData = new FormData(form);
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status === 200) {
                            const resp = JSON.parse(this.responseText);
                            output.innerHTML = JSON.stringify(resp);
                        } else {
                            console.log('Error:', this.statusText);
                        }
                    }
                };
                xhr.open('GET', `https://httpbin.org/get`); // all 3
                xhr.send();
            }

            // delete data given id
            function deleteBtnClickEvent() {
                let formData = new FormData(form);
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status === 200) {
                            const resp = JSON.parse(this.responseText);
                            output.innerHTML = JSON.stringify(resp);
                        } else {
                            console.log('Error:', this.statusText);
                        }
                    }
                };
                xhr.open('DELETE', `https://httpbin.org/delete`); // query
                xhr.send(formData);
            }

            // update data needs all elements
            function putBtnClickEvent() {
                let formData = new FormData(form);
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        if (this.status === 200) {
                            const resp = JSON.parse(this.responseText);
                            output.innerHTML = JSON.stringify(resp);
                        } else {
                            console.log('Error:', this.statusText);
                        }
                    }
                };
                xhr.open('PUT', `https://httpbin.org/put`);
                xhr.send(formData);
            }
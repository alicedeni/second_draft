function eventName(value) {
    let name = document.querySelector('#name2');
    let words = value.split(' ');
    if (words.length == 2) {
        let prov = /^[А-ЯЁ ]+$/i.test(words[0]) && /^[А-ЯЁ ]+$/i.test(words[1]);
        if (prov == true) {
            document.querySelector('#name_format').style.visibility = 'hidden';
            document.querySelector('#name').style.border = '0px';
            name.textContent = value;
        } else {
            document.querySelector('#name_format').style.visibility = 'visible';
            document.querySelector('#name').style.border = '1px solid red';
        }
    } else {
        document.querySelector('#name_format').style.visibility = 'visible';
        document.querySelector('#name').style.border = '1px solid red';
    }
}

function eventGender1(value) {
    if (document.querySelector('#male').checked) {
        let gender2 = document.querySelector('#gender2');
        gender2.textContent = "Парень";
    }
}

function eventGender2(value) {
    if (document.querySelector('#female').checked) {
        let gender2 = document.querySelector('#gender2');
        gender2.textContent = "Девушка";
    }
}

function eventDate(value) {
    let y = new Date(value);
    let x = new Date();
    let age = document.querySelector('#age2');
    const years = (-1970) + new Date(( new Date(x) - new Date(y) )).getFullYear();
    console.log(years);
    if(years <= 100){
    if (years == 1) {
        age.textContent = years + " год";
    } else if (years == 2 || years == 3 || years == 4 || (years / 10) > 2) {
        age.textContent = years + " года";
    } else if ((years / 10) <= 2) {
        age.textContent = years + " лет";
    }
    }
}

let com = '';
function eventAboutMyself(value) {
    let comment = document.querySelector('#comment_about2');
    comment.textContent = value.slice(0, 46) + '...';
    com = value;
}


function previewFile() {
    let preview = document.querySelector("#preview_profile");
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
}

function eventNickName(value) {
    let nick = document.querySelector('#telegram2');
    let words = value.split(' ');

    let prov = /^[0-9A-Z_]+$/i.test(value.slice(1));
    if (words.length == 1 && value[0]=='@' && value.length > 5 && prov==true) {
        document.querySelector('#nick_format').style.visibility = 'hidden';
        document.querySelector('#telegram').style.border = '0px';
        nick.textContent = value;
    } else {
        document.querySelector('#nick_format').style.visibility = 'visible';
        document.querySelector('#telegram').style.border = '1px solid red';
    }
}

function contacts() {
    if (document.querySelector('#telegram2').style.visibility == "hidden") {
        document.querySelector('#telegram2').style.visibility = "visible";
        document.querySelector('#number2').style.visibility = "visible";
    } else {
        document.querySelector('#telegram2').style.visibility = "hidden";
        document.querySelector('#number2').style.visibility = "hidden";
    }
}

function turnAbout() {
    if (document.querySelector('#comment_about2').textContent.length == 49) {
        document.querySelector('#comment_about2').textContent = com;
    } else {
        document.querySelector('#comment_about2').textContent = com.slice(0, 46) + '...';
    }
}

function eventPhone(value) {
    let col = value.split(' ');
    if (col.length == 1) {
        if (col[0][0] + col[0][1] == '+7' && col[0].slice(2).length == 10) {
            prov = /^[0-9]+$/i.test(col[0].slice(2)) 
            if (prov == true) {
                document.querySelector('#number_format').style.visibility = 'hidden';
                document.querySelector('#number').style.border = '0px solid red';
                document.querySelector('#number2').textContent = value; 
            } else { 
                document.querySelector('#number_format').style.visibility = 'visible';
                document.querySelector('#number').style.border = '1px solid red'; 
            }
        }
        else if (col[0][0]  == '8' && col[0].slice(1).length == 10) {
            prov = /^[0-9]+$/i.test(col[0].slice(2)) 
            if (prov == true) {
                document.querySelector('#number_format').style.visibility = 'hidden';
                document.querySelector('#number').style.border = '0px solid red';
                document.querySelector('#number2').textContent = value; 
            } else {
                document.querySelector('#number_format').style.visibility = 'visible'; 
                document.querySelector('#number').style.border = '1px solid red';
            }
        }
        else {
            document.querySelector('#number_format').style.visibility = 'visible'; 
            document.querySelector('#number').style.border = '1px solid red';
        }
    } 
    else  {
        document.querySelector('#number_format').style.visibility = 'visible';  
        document.querySelector('#number').style.border = '1px solid red';
    }
}

formElem.onsubmit = async (e) => {
    e.preventDefault();

    fetch('', {
      method: 'POST',
      body: new FormData(formElem)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alert('Item saved successfully!');
    })
    .catch(function(error) {
        console.log(error);
    });
};





// //list of comments and users
// var users = [
//   {
//     id: 1,
//     name: "Huy Phong",
//   },
//   {
//     id: 2,
//     name: "Tu Anh",
//   },
// ];
// var main_comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: "To hoc lop 10A3",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: "To hoc lop 10A2",
//   },
//   {
//     id: 3,
//     user_id: 2,
//     content: "To hoc cung Vu Hai Yen",
//   },
// ];
// //create a function to get the comments
// function getComments() {
//   return new Promise(function (resolve) { //create a promise and return it
//     setTimeout(function () {
//       resolve(main_comments);//bring the main_comments array to .then
//     }, 1000);
//   });
// }
// function getUsersbyIds(userIds) { //create a function to get the User's id
//   return new Promise(function (resolve) {//create a promise and return it
//     // set a variable to contain the user'id
//     var result = users.filter(function (user) {
//       return userIds.includes(user.id);
//     });
//     setTimeout(function () {
//       console.log(result)
//       resolve(result);
//     }, 1000);
//   });
// }
// getComments()//call a getcomment function
//   .then(function (comments) {
//     var userIds = comments.map(function (comments) {
//       // body...
//       return comments.user_id;
//     });
//     return getUsersbyIds(userIds).then(function (users) {
//       // body...
//       return {
//         Users: users,
//         Comments: comments,//main_comments
//       };
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//     var html = "";
//     var comment_box = document.querySelector(".comment_box");
//     data.Comments.forEach(function (comment) {
//       var user = data.Users.find(function (user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });
//     comment_box.innerHTML = html;
//   });
//lấy ra tên khóa học và tiền rồi render ra
//lesson_id
//từ combo coins lấy ra lesson id
//render ra màn hình
// var lesson_combo = [
//   {
//     combo: "CSS,HTML",
//     combo_id: 1,
//   },
//   {
//     combo: "Python,JavaScript",
//     combo_id: 2,
//   },
//   {
//     combo: "Ruby,PHP",
//     combo_id: 3,
//   },
// ];
// var combo_coin = [
//   {
//     coinIds: 1,
//     comboCoins: "100vnd",
//   },
//   {
//     coinIds: 2,
//     comboCoins: "200vnd",
//   },
//   {
//     coinIds: 3,
//     comboCoins: "300vnd",
//   },
// ];
// function getCoinIds() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(combo_coin);
//     }, 1000);
//   });
// }
// function getComboByCoinIds(coin_ids) {
//   return new Promise(function (resolve) {
//     var result = lesson_combo.filter(function (combo) {
//       return coin_ids.includes(combo.combo_id);
//     });
//     console.log(result);
//     setTimeout(function () {
//       resolve(result);
//     }, 1000);
//   });
// }
// getCoinIds()
//   .then(function (combo_coin) {
//     var coin_ids = combo_coin.map(function (Ids) {
//       return Ids.coinIds;
//     });
//     return getComboByCoinIds(coin_ids).then(function (result) {
//       return {
//         Combo: result,
//         Coins: combo_coin,
//       };
//     });
//   })
//   .then(function (data) {
//     var html = "";
//     let combo_box = document.querySelector(".combo_box");
//     data.Combo.forEach(function (combos) {
//       var combo = data.Coins.find(function (combo) {
//         return combo.coinIds === combos.combo_id;
//       });
//       html += `<li>${combos.combo}: ${combo.comboCoins}</li>`;
//     });
//     combo_box.innerHTML = html;
//   });
// var holder = document.querySelector(".hold")
// var button = document.querySelector(".buttons")
// function getValue() {
//     return new Promise(function(resolve) {
//         resolve(holder)
//     })
// }
// getValue()
//     .then(function(value) {
//         button.onclick = function(e) {
//             var result = value.value
//             console.log(result)
//         };
//     })
//

//==========start,get/renderCourse==========
var courseAPI = 'http://localhost:3000/courses';
var sub_patchBtn = document.querySelector('#submit');

function start() {
    handleForm();
    getCourses(renderCourses);
}

start();

function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })

        .then(callback);
    }

function renderCourses(courses) {
    var coursesList = document.querySelector('#list_courses');
    var htmls = courses.map(function(courses) {
        // body...
        return `
        <li class="course-item-${courses.id}">
            <h4>${courses.name}</h4>
            <p>${courses.description}</p>
            <button onclick="removeCourse(${courses.id})">Remove</button>
            <button onclick="onChange(${courses.id})">Change</button>

        </li> `;
    });
    coursesList.innerHTML = htmls.join('');
}

//==========Create course/change course==========
//handle Form
function handleForm(id) {
    //createCourse
    if (sub_patchBtn.innerText === "Submit" || sub_patchBtn.innerText === "SUBMIT" ) {
        sub_patchBtn.onclick = function() {
            var name = document.querySelector('input[name = "name"]').value;
            var description = document.querySelector('input[name = "description"]').value;
            var form_ = {
                name: name,
                description: description,
            };
            createCourse(form_);
        };
    } else if (sub_patchBtn.innerText === "Save" || sub_patchBtn.innerText === "SAVE") {
        //PUT course
        sub_patchBtn.onclick = function(id) {
            var edit_id = window.value; 
            var editedName = document.querySelector('input[name = "name"]').value;
            var editedDes = document.querySelector('input[name = "description"]').value;
            var form__ = {
                name: editedName,
                description: editedDes
            };
            var options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form__)

            };

            fetch(courseAPI + "/" + edit_id, options)
                .then(function(response) {
                    response.json();
                })

                .then(function() {
                    //reset value + render 
                    var editedName = document.querySelector('input[name = "name"]').value = "";
                    var editedDes = document.querySelector('input[name = "description"]').value  = "";
                    getCourses(renderCourses);
                    sub_patchBtn.innerText = "Submit";
                    handleForm();
                });
            };
        }
    }

//POST and render course function
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };

    fetch(courseAPI, options)
        .then(function(response) {
            response.json();
        })

        .then(function() {
            getCourses(renderCourses);
        });
}

//save button + input value function
function onChange(id) {
    window.value = id;
    var patch_id = id - 1;
    var patch_name = document.querySelectorAll(`h4`)[patch_id].innerText;
    var patch_des = document.querySelectorAll(`p`)[patch_id].innerText;
    console.log(patch_name);
    var inputPatchName = document.querySelector('input[name = "name"]').value = patch_name;
    var inputPatchDes = document.querySelector('input[name = "description"]').value = patch_des;
    sub_patchBtn.innerText = "Save";
    handleForm();




//==========Remove Course==========
function removeCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }


    };

    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            response.json();
        })

        .then(function() {
            var courseItem = document.querySelector("course-item-" + id);
            if (courseItem) {
                courseItem.remove();
            }
        })

        .then(function() {
            getCourses(renderCourses);
            sub_patchBtn.innerText = "Submit";
            handleForm();
        });
}

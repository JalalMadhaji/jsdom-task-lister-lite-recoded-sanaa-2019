document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById('priority');

  form.addEventListener('submit',handleSubmition);

  function deleteTask(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

  function editTask(e) {
    // console.log('edit task');
    let item = e.target.parentNode.text;
    console.log(item);
  }

  // function sortList(list){
  //       let coll = [...list]
  //       if(coll.length > 2){
  //         coll.sort(function(a, b) {
  //         let textA = a.getAttribute('data-sort').toLowerCase()
  //         let textB = b.getAttribute('data-sort').toLowerCase()
  //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  //       });
  //       }
  //   return coll;
  // }

  function handleSubmition(e){
    e.preventDefault();
    if(input.value != ""){
      let option = priority.options[priority.selectedIndex];
      let sortChar = option.getAttribute('data-sort');
      let li = document.createElement('li');
      let btn = document.createElement('button');
      let editBtn = document.createElement('button');
      li.textContent = input.value + ' ';
      li.setAttribute('data-sort',sortChar);
      li.style.color = priority.value;
      btn.innerHTML = 'X';
      btn.addEventListener('click',deleteTask);
      editBtn.innerHTML = "Edit";
      editBtn.addEventListener('click',editTask);
      li.appendChild(btn);
      li.appendChild(editBtn);
      tasks.appendChild(li);
      // let liList = tasks.getElementsByTagName('li');
      // let sortedList = sortList(liList);
      // console.log(sortedList);
      input.value = "";
    }
  }
});

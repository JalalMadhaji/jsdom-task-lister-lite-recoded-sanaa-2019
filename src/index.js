document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById("tasks");
  const priority = document.getElementById('priority');
  // let ul = document.createElement('ul');
  // let listAll = [];

  form.addEventListener('submit',handleSubmition);

  function deleteTask(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

  function sortList(list){
        let coll = [...list]
        if(coll.length > 2){
          coll.sort(function(a, b) {
          let textA = a.getAttribute('data-sort').toLowerCase()
          let textB = b.getAttribute('data-sort').toLowerCase()
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        }
    return coll;
  }

  function handleSubmition(e){
    e.preventDefault();
    if(input.value != ""){
      let option = priority.options[priority.selectedIndex];
      let sortChar = option.getAttribute('data-sort');
      let li = document.createElement('li');
      let btn = document.createElement('button');
      li.textContent = input.value + ' ';
      li.setAttribute('data-sort',sortChar);
      li.style.color = priority.value;
      btn.innerHTML = 'X';
      btn.addEventListener('click',deleteTask);
      li.appendChild(btn);
      tasks.appendChild(li);
      let liList = tasks.getElementsByTagName('li');
      let sortedList = sortList(liList);
      console.log(sortedList);
      input.value = "";
    }
  }
});

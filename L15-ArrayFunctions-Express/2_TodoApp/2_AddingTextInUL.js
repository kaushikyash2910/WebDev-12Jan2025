let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {

    if (input.value.trim()) {
        /* <li>
             Cricket
             <button>↑</button>
             <button>↓</button>
             <button>❌</button>
        </li> */

        let val = input.value;
        // 1. let's create li first
        let li = document.createElement('li');
        li.innerText = val;
        // 2. We need to add three buttons
        let btn1 = document.createElement('button');
        btn1.innerText = '↑'
        let btn2 = document.createElement('button');
        btn2.innerText = '↓'
        let btn3 = document.createElement('button');
        btn3.innerText = '❌'

        // 3. Lets add these three button to li item
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);

        // console.log(li)
        // 4. Finally li is created as expected append it to ul
        let taskList = document.querySelector('.taskList');
        taskList.appendChild(li);
    }

    input.value = ""
})
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
        btn1.classList.add('up-arrow')
        let btn2 = document.createElement('button');
        btn2.innerText = '↓'
        btn2.classList.add('down-arrow')
        let btn3 = document.createElement('button');
        btn3.innerText = '❌'

        // 3. Lets add these three button to li item
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);

        // ---------------------------- ADDING THE FUNCTIONALITY TO BUTTONS ---------------------------- 
        // DELETE BUTTON FUNCTIONALITY
        btn3.onclick = (ev) => {
            console.log("DELETE PRESSED");
            console.log(ev.target.parentElement)
            let item = ev.target.parentElement;
            item.remove();
        }

        // Up arrow functionality
        btn1.onclick = (ev) => {
            console.log(ev.target);
            console.log(ev.target.parentElement);
            console.log(ev.target.parentElement.previousElementSibling);
            let sibling = ev.target.parentElement.previousElementSibling;
            let currentElement = ev.target.parentElement;
            let taskList = document.querySelector('.taskList');
            taskList.insertBefore(currentElement, sibling);
        }

        // Down arrow functionality
        btn2.onclick = (ev) => {
            console.log(ev.target);
            console.log(ev.target.parentElement);
            console.log(ev.target.parentElement.nextElementSibling);
            let sibling = ev.target.parentElement.nextElementSibling;
            let currentElement = ev.target.parentElement;
            let taskList = document.querySelector('.taskList');
            taskList.insertBefore(sibling, currentElement);
        }

        // Pehle li(first child) se up arrow button hatado
        // Last li(last child) se up down button hatado
        // YEH KAAM KREGA CSS
        // ----------------------------------------------------------------------------------------------



        // console.log(li)
        // 4. Finally li is created as expected append it to ul
        let taskList = document.querySelector('.taskList');
        taskList.appendChild(li);
    }

    input.value = ""
})
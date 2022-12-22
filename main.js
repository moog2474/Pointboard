
    const form= document.querySelector("#task-form");
    const input1= document.querySelector("#task-input1");
    const input2= document.querySelector("#task-input2");
    const input3= document.querySelector("#task-input3");
    const input4= document.querySelector("#task-input4");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task1 = input1.value;
        const task2 = input2.value;
        const task3 = input3.value;
        const task4 = input4.value;
        if (!task1 && !task2 && !task3 && !task4) {
            return;
        } 

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        list.appendChild(taskDiv);


        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        taskDiv.appendChild(contentDiv);
   

        const taskInput1= document.createElement("input");
        taskInput1.classList.add("text");
        taskInput1.type = "text";
        taskInput1.value= task1;
        taskInput1.setAttribute("readonly", "readonly");
        contentDiv.appendChild(taskInput1);

        const taskInput2= document.createElement("input");
        taskInput2.classList.add("text");
        taskInput2.type = "text";
        taskInput2.value= task2;
        taskInput2.setAttribute("readonly", "readonly");
        contentDiv.appendChild(taskInput2);

        const taskInput3= document.createElement("input");
        taskInput3.classList.add("text");
        taskInput3.type = "text";
        taskInput3.value= task3;
        taskInput3.setAttribute("readonly", "readonly");
        contentDiv.appendChild(taskInput3);
        
        const taskInput4= document.createElement("input");
        taskInput4.classList.add("text");
        taskInput4.type = "text";
        taskInput4.value= task4;
        taskInput4.setAttribute("readonly", "readonly");
        contentDiv.appendChild(taskInput4);


        const task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        taskDiv.appendChild(task_actions_div);


        const editBtn= document.createElement("button");
        editBtn.classList.add("Edit");
        editBtn.innerHTML = "&#9997;";

        const task_delete_button= document.createElement("button");
        task_delete_button.classList.add("Delete");
        task_delete_button.innerHTML = "&#10006;";

        const task_completed_button= document.createElement("button");
        task_completed_button.classList.add("Completed");
        task_completed_button.innerHTML = "&#10004;";

        contentDiv.appendChild(editBtn);
        contentDiv.appendChild(task_completed_button);
        contentDiv.appendChild(task_delete_button);
        

        editBtn.addEventListener('click', ()=>{
            
            if (editBtn.innerText.toLowerCase() =="edit") {
                    taskInput1.removeAttribute("readonly");
                    taskInput1.focus();
                    editBtn.innerText = "Save";
                    taskInput1.style.textDecoration="none"

                    taskInput2.removeAttribute("readonly");
                    taskInput2.focus();
                    editBtn.innerText = "Save";
                    taskInput2.style.textDecoration="none"

                    taskInput3.removeAttribute("readonly");
                    taskInput3.focus();
                    editBtn.innerText = "Save";
                    taskInput3.style.textDecoration="none"

                    taskInput4.removeAttribute("readonly");
                    taskInput4.focus();
                    editBtn.innerText = "Save";
                    taskInput4.style.textDecoration="none"
            }else{
                taskInput1.setAttribute("readonly", "readonly");
                taskInput2.setAttribute("readonly", "readonly");
                taskInput3.setAttribute("readonly", "readonly");
                taskInput4.setAttribute("readonly", "readonly");
                editBtn.innerHTML ="Edit";
                
            }
        });

        task_delete_button.addEventListener('click', ()=>{
            if (confirm("Итгэлтэй байна уу?")) {
                list.removeChild(taskDiv);
            
                

            }
        })
        
        task_completed_button.addEventListener('click', ()=>{

                taskInput1.style.textDecoration="line-through";
                taskInput1.style.backgroundColor="green";
                taskInput1.setAttribute("readonly", "readonly");

                taskInput2.style.textDecoration="line-through";
                taskInput2.style.backgroundColor="green";
                taskInput2.setAttribute("readonly", "readonly");

                taskInput3.style.textDecoration="line-through";
                taskInput3.style.backgroundColor="green";
                taskInput3.setAttribute("readonly", "readonly");

                taskInput4.style.textDecoration="line-through";
                taskInput4.style.backgroundColor="green";
                taskInput4.setAttribute("readonly", "readonly");
               
        })

   
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";


    });


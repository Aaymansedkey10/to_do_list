let input = document.querySelector(".addInput");
let btnForm = document.querySelector(".AddBtn");
let list = document.querySelector("#Output");

btnForm.addEventListener("click", function () {
    if (input.value == "") {
        alert("Please, Enter Your Task")
    } else {
        let item = document.createElement("li");
        item.style.listStyle = "none";
        item.classList.add("my-2");
        item.classList.add("d-flex");
        item.classList.add("align-items-center");
        item.classList.add("jusrify-content-between");
        list.appendChild(item);

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type","radio");
        checkBox.classList.add("mx-3");
        checkBox.classList.add("fs-3");
        item.appendChild(checkBox)

        checkBox.addEventListener("click",function (){
            checkBoxValue.classList.toggle("item-span");
        })

        let checkBoxValue = document.createElement("span");
        checkBoxValue.classList.add("w-100");
        checkBoxValue.classList.add("fs-4");

        checkBoxValue.innerText = input.value;
        item.appendChild(checkBoxValue);

        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btn");
        btnDelete.classList.add("m-auto");
        btnDelete.classList.add("btn-danger");
        btnDelete.innerText = "×";
        item.appendChild(btnDelete);

        btnDelete.addEventListener("click",function () {
            item.innerText = "";
        })
        input.value = "";
    }
})

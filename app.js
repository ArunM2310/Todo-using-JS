const addForm =document.querySelector('.add');
const list =document.querySelector('.todos');


const generateTemplate = todo=>{
 const html = `<li class="list-group-item d-flex align-items-center justify-content-between my-2">
<span class="">${todo}</span>
<i class="fa-solid fa-trash-can delete"></i>

</li>
`;
list.innerHTML += html
};



 
addForm.addEventListener('submit', e =>{
    e.preventDefault()
 const todo = addForm.add.value.trim();
 
if(todo.length){
    generateTemplate(todo);
    addForm.reset();
}
 
})

list.addEventListener('click',e =>{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove()
    }
})
const work=document.querySelector('#work');
const time=document.querySelector('#time');
const btn=document.querySelector('.btn');
const toDoList=document.querySelector('#to-do list');

btn.addEventListener('Click',function(event)
{
event.preventDefault()

if(work.value==''&& time.value=='')
{
    alert("Input the values")
}
else
const newRow = document.createElement('tr');

const newWork = document.createElement('th');
newWork.innerHTML = work.value
newRow.appendChild(newWork)


const newTime = document.createElement('th');
newTime.innerHTML = time.value
newRow.appendChild(newTime)

toDoList.appendChild(newRow)
});
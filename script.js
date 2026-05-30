const addbtn = document.getElementById("add-btn")
 let a = document.getElementById("expense-name")
 let b = document.getElementById("expense-no")
const expenselist = document.getElementById("expense-list")
const balance = document.getElementById("total-balance");
let total = 0;
window.addEventListener("load",function(){
          console.log("loading from storage");
        let saveExpense = localStorage.getItem("expenses");
        let saveTotal = localStorage.getItem("total")
        if(saveExpense){

        expenselist.innerHTML = saveExpense
        }
        if(saveTotal){
        total = Number(saveTotal);
        balance.innerText = "₹" + total;
        }
        attachDeleteEvents();
});

 addbtn.addEventListener("click", function(){
     console.log(a.value);
     console.log(b.value);
     if(a.value!=="" && b.value!=="")
     {
     var li = document.createElement("li")
    
    
    let number = Number(b.value);
     total = total + Number(b.value);
      balance.innerText = "₹" + total;
let category = document.getElementById("category")
   li.textContent = "[" + category.value + "] " + a.value + " ₹" + b.value + " ";


      li.setAttribute("data-amount",b.value);
      const btn = document.createElement("button");
      btn.textContent = "delete";

        btn.addEventListener("click", function(){
        let amount = Number(li.getAttribute("data-amount"));
        total = total-amount;
        balance.innerText = "₹"+ total;
        li.remove();
        saveData();
       
});
   li.appendChild(btn);
    expenselist.appendChild(li)
    console.log("SAVE CALL HUA");
        saveData();

     
     

     
       

     






      
     a.value = "";
     b.value = "";
     }
     else{
        alert("please fill the all fields");
     }
    
});
 function saveData(){
         localStorage.setItem("expenses",expenselist.innerHTML);
         localStorage.setItem("total", total);
     }

        function attachDeleteEvents(){
            let buttons = document.querySelectorAll("li button");
            

buttons.forEach(function(btn){
   btn.addEventListener("click",function(){
        let li = btn.parentElement;
        let amount = Number(li.getAttribute("data-amount"));
        total = total - amount;
        balance.innerText = "₹"+ total;
        li.remove();
        saveData();
   });
            });
        }
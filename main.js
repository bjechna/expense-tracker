const tb = document.getElementById("tb");
const expenseName = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");

function addExpense() {

    if (expenseName.value === '' || date.value === '' || amount.value === '') {
        alert("You have to fill all entries!");
    } else {
        const tr = document.createElement("tr");
        tb.appendChild(tr);

        const tname = document.createElement("td");
        tname.innerHTML = expenseName.value;
        expenseName.value = '';
        tr.appendChild(tname);

        const tdate = document.createElement("td");
        tdate.innerHTML = date.value;
        date.value = '';
        tr.appendChild(tdate);

        const tamount = document.createElement("td");
        tamount.innerHTML = amount.value + "$";
        amount.value = '';
        tr.appendChild(tamount);

        const del = document.createElement("td");
        del.innerHTML = "X";
        tr.appendChild(del);
        del.addEventListener("click", function() {
            del.parentElement.remove();
        });
    }
}
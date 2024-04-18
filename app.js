//Chapters 43-48


function deleteRow(r,id) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById(id).deleteRow(i);
  }

function increase(){
    var i = 0
    var currentValue = parseInt(document.getElementById("counternum").innerHTML)
    document.getElementById("counternum").innerHTML = currentValue + 1
}

function decrease(){
    var i = 0
    var currentValue = parseInt(document.getElementById("counternum").innerHTML)
    document.getElementById("counternum").innerHTML = currentValue - 1
}

function getInfo(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    alert(name)
    alert(email)
    alert(password)
}

var div = document.getElementById("hiddendiv")

function addRow(){
    var studentName = document.getElementById("studentfullname").value
    var studentClass = document.getElementById("studentclass").value
    var studentRollno = document.getElementById("studentrollno").value


   

    var table = document.getElementById("table2")

    if(studentName == "" || studentClass == "" || studentRollno ==  ""){
        alert("Please fill the student details form to insert row")
    }else{
        var row = table.insertRow(-1)
        var c1 = row.insertCell(0)
        var c2 = row.insertCell(1)
        var c3 = row.insertCell(2)
        var c4 = row.insertCell(3)
        c1.innerText = studentName
        c2.innerText = studentClass
        c3.innerText = studentRollno
        c4.innerHTML = "<h2><button>Delete</button></h2>"
     
        c4.addEventListener('click', function() {
            var i = this.parentNode.rowIndex;
            document.getElementById('table2').deleteRow(i);
          });

    }

}

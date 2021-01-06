
$(document).ready(function () {

    var po = new Positions();

})

class Positions {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllPositions();
    }

    loadPositionsUI(positions) {
        $('#listPosition').empty();
        $.each(positions, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                       
                        <td>`+ item.name + `</td>
                       
                    </tr>`);
            $('#listPosition').append(html);
        });
    }


    getAllPositions() {
        self = this;
        var URL = "http://localhost:4431/findAllPosition";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadPositionsUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }
           
       
}



$(document).ready(function () {

    var de = new Departments();

})

class Departments {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllDepartment();
    }

    loadPositionsUI(departments) {
        $('#listDepartment').empty();
        $.each(departments, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index + `</td>                      
                        <td>`+ item.name + `</td>
                      
                    </tr>`);
            $('#listDepartment').append(html);
        });
    }


    getAllDepartment() {
        self = this;
        var URL = "http://localhost:4431/findAllDepartment";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadPositionsUI(response);
        }).fail(function () {

            // alert("fail");
        });
    }


}

$(document).ready(function () {

    var em = new Employees();
    
})



class Employees {

    constructor() {
        this.init();
        self = this;
        var validate = true;

    }

    init() {
        this.getAllEmployees();
    }

    loadEmployeesUI(employees) {
        $('#listEmployee').empty();
        $.each(employees, function (index, item) {
            var html = $(`<tr class="data">
                        <td class="index">`+ index +`</td>
                        <td><img src="" /></td>
                        <td>`+ item.name +`</td>
                        <td>`+item.phone+`</td>
                        <td>`+item.birthday+`</td>
                        <td>`+item.sex+`</td>
                        <td>`+item.department+`</td>
                    </tr>`);
            $('#listEmployee').append(html);

            var html1 = $(`<div id="myModal` + index +`" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4>Employee information</h4>
                                    <span class="close">&times;</span>

                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <img class="col-md-5" src="../Images/image1.jpg"/>
                                        <div class="col-md-7 content">
                                            <div class="row">
                                                <div class="col-md-3"><label>Full name: </label></div>
                                                <div class="col-md-9"> <p>`+ item.name + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Address : </label></div>
                                                <div class="col-md-9"> <p>`+ item.address + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Phone : </label></div>
                                                <div class="col-md-9"> <p>`+ item.phone + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Salary : </label></div>
                                                <div class="col-md-9"> <p>`+ item.salary + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Email : </label></div>
                                                <div class="col-md-9"> <p>`+ item.email + `</p></div>
                                            </div>
                                           <div class="row">
                                                <div class="col-md-3"><label>Identity Card : </label></div>
                                                <div class="col-md-9"> <p>`+ item.identityCard + `</p></div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-3"><label>Gender : </label></div>
                                                <div class="col-md-9"> <p>`+ item.sex + `</p></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3"><label>Birthday : </label></div>
                                                <div class="col-md-9"> <p>`+item.birthday + `</p></div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>`);

            $('#container').append(html1);

        });


        var tr = document.getElementsByTagName("tr");
        for (var i = 1; i < tr.length; i++) {

            var modal = document.getElementById("myModal" + (i-1));
            // Get the button that opens the modal

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[i-1];

            // When the user clicks on the button, open the modal
            tr[i].onclick = function (event) {
                var row = event.target.parentElement;
                var modal1 = document.getElementById("myModal" + row.getElementsByClassName("index")[0].innerText);
                modal1.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                var modal2 = document.getElementsByClassName("modal");
                for (var i = 0; i < modal2.length; i++) {
                    
                    if (event.target.parentElement.parentElement.parentElement.id == "myModal" + i) {
                        modal2[i].style.display = "none";
                        break;
                    }

                }

            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                
                var modal2 = document.getElementsByClassName("modal");
                for (var i = 0; i < modal2.length; i++) {

                    if (event.target == modal2[i])
                        modal2[i].style.display = "none";
                }
               
            }
        }

    }

    getAllEmployees() {
        self = this;
        var URL = "http://localhost:4431/findAll";
        $.ajax({
            url: URL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            dataType: "json"
        }).done(function (response) {
            self.loadEmployeesUI(response);
        }).fail(function () {

               // alert("fail");
            });


    }




    
}
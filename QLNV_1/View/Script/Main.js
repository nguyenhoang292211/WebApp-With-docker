$(document).ready(function () {

    var em = new Employees();
    $('#btn-saveEmployee').click(function () {
        em.addEmployee();
        return false;
    });
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
            var html = $(`<tr>
                        <td>`+ index +`</td>
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
                                    <p>`+ item.name + `</p>
                                    <p>`+ item.address +`</p>
                                </div>
           
                            </div>
                        </div>`);

            $('#container').append(html1);

        });


        var tr = document.getElementsByTagName("tr");
        for (var i = 0; i < tr.length-1; i++) {
            var modal = document.getElementById("myModal" + i.toString());
            // Get the button that opens the modal
            var btn = document.getElementsByTagName("tr")[i+1];

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[i];

            // When the user clicks on the button, open the modal
            btn.onclick = function () {
                modal.style.display = "block";

            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
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

                alert("fail");
            });


    }




    ValidateInput() {
        var name = $('#inputname').val();
        var email = $('#inputEmail').val();
        var address = $('#inputAddress').val();
        var phone = $('#inputPhone').val();
        var identitycard = $('#inputidentify').val();
        var birthday = $('#inputBirthdate').val();
        var salary = $('#inputSalary').val();

        if (name != null) {
            if (name == "") {
                $('#error-input-name').html("You have to fill your name!");
                self.validate = false;
            }
            
        }

        if (email != null) {
            if (email == "") {
                $('#error-input-email').html("You have to fill your email!");
                self.validate = false;
            }

        }

        if (phone != null) {
            if (phone == "") {
                $('#error-input-phone').html("You have to fill your phone!");
                this.validate = false;
            }
        }

        if (address != null) {
            if (address == "") {
                $('#error-input-address').html("You have to fill your address!");
                this.validate = false;
            }
        }

        if (identitycard != null) {
            if (identitycard == "") {
                $('#error-input-identitycard').html("You have to fill your identitycard!");
                this.validate = false;
            }
        }

        if (birthday != null) {
            if (birthday == "") {
                $('#error-input-birthday').html("You have to fill your birthday!");
                this.validate = false;
            }
        }

        if (salary != null) {
            if (salary == "") {
                $('#error-input-salary').html("You have to fill your salary!");
                this.validate = false;
            }
        }

    }


    callApiSaveEmployee() {

        var employee = {
            name: $('#inputname').val(),
            phone: $('#inputPhone').val(),
            email: $('#inputEmail').val(),
            address: $('#inputAddress').val(),
            identityCard: $('#inputBirthdate').val(),
            birthday: $('#inputBirthdate').val(),
            sex: $("input[type='radio',name='gender']:checked").val(),
            salary: $('#inputSalary').val(),
            image: $('.img-addproduct')[0].attr(src)
        };

        $.ajax({
            url: "http://localhost:4431/employee",
            method: "POST",
            data: JSON.stringify(employee), // Truyền xuống thông qua body request.
            contentType: "application/json", //Kiểu dữ liệu trả về.
            dataType: "json", //Kiểu dữ liệu truyền lên.
        }).done(function (response) {
            if (response) {
                alert("Thêm thành công");
                window.location.href = "ListEmployee.html";
            }
            else
                alert(" Thất bại");
            }).fail(function () {
                alert("thêm ko thành công");
        });
    }

    addEmployee() {
        this.ValidateInput();
        if (this.validate == true)
            this.callApiSaveEmployee();
        
    }
}
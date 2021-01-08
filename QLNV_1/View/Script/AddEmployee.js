var redirUrl = window.location.href;

var myParam = redirUrl.split('id=')[1] ? redirUrl.split('id=')[1] : '0';


$(document).ready(function () {

    if (myParam != '0') {
        FindEmployeeByID(myParam);
        $('#btn-saveEmployee').html = "Save edit";
        
    }
    else
        $('#btn-saveEmployee').html = "Save";

    $('#btn-saveEmployee').click(function () {
        if (myParam == '0')
            addEmployee();
        else {
            EditPersionalInfo(myParam);
        }
        return;
    });
});
var validate;




function ValidateInput() {
    var name = $('#inputname').val();
    var email = $('#inputEmail').val();
    var address = $('#inputAddress').val();
    var phone = $('#inputPhone').val();
    var identitycard = $('#inputidentify').val();
    var birthday = $('#inputBirthdate').val();
    var salary = $('#inputSalary').val();
    validate = true;

    if (name != null) {
        if (name == "") {
            $('#error-input-name').html("You have to fill your name!");
            validate = false;
        }
        else
            $('#error-input-name').html("");
    }

    if (email != null) {
        if (email == "") {
            $('#error-input-email').html("You have to fill your email!");
            validate = false;
        }
        else
            $('#error-input-email').html("");
    }

    if (phone != null) {
        if (phone == "") {
            $('#error-input-phone').html("You have to fill your phone!");
            validate = false;
        }
        else
            $('#error-input-phone').html("");
    }

    if (address != null) {
        if (address == "") {
            $('#error-input-address').html("You have to fill your address!");
            validate = false;
        }
        else
            $('#error-input-address').html("");
    }

    if (identitycard != null) {
        if (identitycard == "") {
            $('#error-input-identitycard').html("You have to fill your identitycard!");
            validate = false;
        }
    }

    if (birthday != null) {
        if (birthday == "") {
            $('#error-input-birthday').html("You have to fill your birthday!");
            validate = false;
        }
        else
            $('#error-input-birthday').html("");
    }

    if (salary != null) {
        if (salary == "") {
            $('#error-input-salary').html("You have to fill your salary!");
            validate = false;
        }
        else
            $('#error-input-salary').html("");
    }

}


function callApiSaveEmployee() {

    var employee = {
        name: $('#inputname').val(),
        phone: $('#inputPhone').val(),
        email: $('#inputEmail').val(),
        address: $('#inputAddress').val(),
        identityCard: $('#inputidentify').val(),
        birthday: $('#inputBirthdate').val(),
        sex: $("input[type='radio']:checked").val(),
        salary: $('#inputSalary').val(),
        image: $('#img-employee').attr('src')
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

function addEmployee() {
    ValidateInput();
    if (validate == true)
        callApiSaveEmployee();

}

function SaveEdit(id) {
    var employee = {
        id: id,
        name: $('#inputname').val(),
        phone: $('#inputPhone').val(),
        email: $('#inputEmail').val(),
        address: $('#inputAddress').val(),
        identityCard: $('#inputidentify').val(),
        birthday: $('#inputBirthdate').val(),
        sex: $("input[type='radio']:checked").val(),
        salary: $('#inputSalary').val(),
        image: $('#img-employee').attr('src')
    };
    $.ajax({
        url: "http://localhost:4431/employee/edit",
        method: "POST",
        data: JSON.stringify(employee), // Truyền xuống thông qua body request.
        contentType: "application/json", //Kiểu dữ liệu trả về.
        dataType: "json", //Kiểu dữ liệu truyền lên.
    }).done(function (response) {                          
        FindEmployeeByID(myParam);
        alert("Update success!")
    }).fail(function (response) {
         alert("Update fail");
    });


}


function EditPersionalInfo(id) {
    ValidateInput();
    if (validate == true)
        SaveEdit(id);
}

function LoadPersionalData(employee) {
    $('#inputname').val(employee.name);
    $('#inputPhone').val(employee.phone);
    $('#inputEmail').val(employee.email);
    $('#inputAddress').val(employee.address);
    // $('#inputBirthdate').val(employee.birthday);
    $('#inputidentify').val(employee.identityCard);
    $("input[type='radio']:checked").val();
    if (employee.sex == "Male") $("#radioMale").prop("checked", true);
    if (employee.sex == "Female") $("#radioFemale").prop("checked", true);
    $('#inputSalary').val(employee.salary);
    var date = new Date(employee.birthday);
    var dt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    $('#inputBirthdate').val(dt);

    var str = `<div> <img class="img-addproduct js-file-image"  id="img-employee" style=""><div>`;
    $('.js-file-list').append(str);


    $('.js-file-name').last().text(employee.image);
    $('.js-file-image').last().attr('src', employee.image);
}

function FindEmployeeByID(id) {
    var URL = "http://localhost:4431/employee/find/" + id;
    $.ajax({
        url: URL,
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json"
    }).done(function (response) {

        LoadPersionalData(response);
    }).fail(function () {

        alert("fail");
    });
}

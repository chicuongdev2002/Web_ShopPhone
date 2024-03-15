$(document).ready(function() {
    $("#dangki").click(function() {
        $("#myModal").modal()
    })

    function ktTenDangNhap() {
        var pattern = /\w+/;
        if ($("#username").val() == "") {
            $("#errorDN").html("Tên đăng nhập bắt buộc nhập");
            return false;
        }
        if (!pattern.test($("#username").val())) {
            $("#errorDN").html("Tên đăng nhập không được dùng kí tự đặc biệt");
            return false;
        }
        $("#errorDN").html("");
        return true;
    }
    $("#username").blur(ktTenDangNhap);


    function ktMatKhau() {
        var pattern = /^[A-Za-z0-9(!@#$%^&*)_]{6,20}$/;

        if ($("#password").val() == "") {
            $("#errorMK").html("Password bắt buộc nhập");
            return false;
        }
        if (!pattern.test($("#password").val())) {
            $("#errorMK").html("Password gồm 6-20 kí tự");
            return false;
        }
        $("#errorMK").html("*");
        return true;
    }
    $("#password").blur(ktMatKhau);

    function kiemTraTen() {
        var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        ten = $("#hoten").val();
        if (ten == "") {
            $("#errorHoTen").html("Bắt buộc nhập");
            return false;
        }
        if (!kt.test(ten)) {
            $("#errorHoTen").html(" *Chữ cái đầu của mỗi từ phải viết hoa !!");
            return false;
        }
        $("#errorHoTen").html("*");
        return true;
    }
    $("#hoten").blur(kiemTraTen);

    function kiemTraSDT() {
        var ktsdt = /^(09|03|07)[0-9]{8}$/;
        sdt = $("#sdt").val();
        if (sdt == "") {
            $("#errorSdt").html("Bắt buộc nhập");
            return false;
        }
        if (!ktsdt.test(sdt)) {
            $("#errorSdt").html("Số điện thoại phải bắt đầu 09, 07, 03 ");
            return false;
        }
        $("#errorSdt").html("*");
        return true;
    }
    $("#sdt").blur(kiemTraSDT);

    function kiemTraNgay() {
        var ngay = $("#ngaysinh").val();
        if (ngay == "") {
            $("#errorNgaySinh").html("Bắc buộc nhập");
            return false;
        }
        day = new Date(ngay);
        today = new Date();
        if (day > today) {
            $("#errorNgaySinh").html("Ngày sinh phải sau ngày hiện tại");
            return false;
        }
        $("#errorNgaySinh").html("*");
        return true;
    }
    $("#ngaysinh").blur(kiemTraNgay);



    $("#btnDangKi").click(function() {
        if (!ktTenDangNhap() || !ktMatKhau() || !kiemTraTen() || !kiemTraSDT()) {
            alert("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        } else
            alert("Đăng kí thành công")
        return true;
    })
    $("#btnDangNhap").click(function() {
        if (!ktTenDangNhap() || !ktMatKhau()) {
            alert("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        } else
            alert("Đăng nhập thành công")
        return true;
    })
})
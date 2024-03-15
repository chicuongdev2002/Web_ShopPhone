$(document).ready(function() {
    $("#dangnhap").click(function() {
        $("#myModal2").modal()
    })

    function ktTenDangNhap2() {
        var pattern = /\w+/;
        if ($("#taikhoan").val() == "") {
            $("#tbDN").html("Tên đăng nhập bắt buộc nhập");
            return false;
        }
        if (!pattern.test($("#taikhoan").val())) {
            $("#tbDN").html("Tên đăng nhập không được dùng kí tự đặc biệt");
            return false;
        }
        $("#tbDN").html("*");
        return true;
    }
    $("#taikhoan").blur(ktTenDangNhap2);


    function ktMatKhau2() {
        var pattern = /^[A-Za-z0-9(!@#$%^&*)_]{6,20}$/;

        if ($("#matkhau").val() == "") {
            $("#tbMK").html("Password bắt buộc nhập");
            return false;
        }
        if (!pattern.test($("#matkhau").val())) {
            $("#tbMK").html("Password gồm 6-20 kí tự");
            return false;
        }
        $("#tbMK").html("*");
        return true;
    }
    $("#matkhau").blur(ktMatKhau2);



    $("#btnDangNhap").click(function() {
        if (!ktTenDangNhap2() || !ktMatKhau2()) {
            alert("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        alert("Đăng nhập thành công")
        return true;
        $("#myModal2").modal("hide")
    })
})
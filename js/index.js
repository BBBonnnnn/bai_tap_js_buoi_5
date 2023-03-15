document.getElementById('btnTinhKetQua').onclick = function () {
    // input
    var monThi1 = +document.getElementById('diem-mon-1').value;
    var monThi2 = +document.getElementById('diem-mon-2').value;
    var monThi3 = +document.getElementById('diem-mon-3').value;
    var diemChuan = +document.getElementById('diem-chuan').value;
    var doiTuong = +document.getElementById('doi-tuong-uu-tien').value;
    var khuVuc = document.getElementById('khu-vuc-uu-tien').value;
    // output
    var diemUuTienKV = 0;
    var diemUuTienDoiTuong = 0;
    var diemTong3Mon = 0;
    var diemTongKet = 0;
    // process
    diemTong3Mon = (monThi1 + monThi2 + monThi3);
    document.getElementById('tong-diem-3-mon').innerHTML = ` tổng điểm 3 môn là ${diemTong3Mon}`
    // lấy giá trị đối tượng
    if (doiTuong === 1) {
        diemUuTienDoiTuong = +2.5
    } else if (doiTuong === 2) {
        diemUuTienDoiTuong = +1.5
    } else if (doiTuong === 3) {
        diemUuTienDoiTuong = +1
    } else if (doiTuong === 0) {
        diemUuTienDoiTuong = 0
    };
    // lấy giá trị khu vực
    if (khuVuc === 'a') {
        diemUuTienKV = +2
    } else if (khuVuc === 'b') {
        diemUuTienKV = +1
    } else if (khuVuc === 'c') {
        diemUuTienKV = +0.5
    } else if (khuVuc === 'x') {
        diemUuTienKV = +0
    };
    diemTongKet = diemTong3Mon + diemUuTienDoiTuong + diemUuTienKV;
    document.getElementById('diem-tong-ket').innerHTML = `Điểm tổng kết là ${diemTongKet}`
    if (diemTongKet > diemChuan) {
        document.getElementById('ket-qua').innerHTML = 'Điểm tổng kết lớn hơn điểm chuẩn <br> Chúc Mừng Bạn đã đậu!!'
    } else if (diemTongKet = diemChuan) {
        document.getElementById('ket-qua').innerHTML = 'Điểm tổng kết bằng điểm chuẩn <br> Chúc Mừng Bạn đã đậu!!'
    } else {
        document.getElementById('ket-qua').innerHTML = 'Điểm tổng kết nhỏ hơn điểm chuẩn <br> Xin chia buồn Bạn đã rớt!!'
    }
    if (monThi1 === 0 || monThi2 === 0 || monThi3 === 0) {
        document.getElementById('ket-qua').innerHTML = 'Bạn đã bị điểm liệt <br> Xin chia buồn Bạn đã rớt!!'
    }
}

// bài 2: TÍNH TIỀN ĐIỆN

document.getElementById('btnTinhTienDien').onclick = function () {
    var tenKhachHang = document.getElementById('ten-khach-hang').value;
    var soKw = +document.getElementById('so-kw').value;
    var tienDien = 0;
    // if(isNaN(soKw)) {
    //     document.getElementById('ket-qua-bai-2').innerHTML =`Vui lòng nhập số KW là số`
    // }
    if (soKw > 0 && soKw <= 50) {
        tienDien = soKw * 500
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850
    } else if (soKw > 200 && soKw <= 250) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById('ket-qua-bai-2').innerHTML = `Tên Khách Hàng: ${tenKhachHang} <br> Số Tiền Điện: ${tienDien.toFixed(2)} VNĐ`
}

// bài 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

document.getElementById('btnTinhThue').onclick = function () {
    // input
    var hoVaTen = document.getElementById('ho-va-ten').value;
    var tongThuNhap = +document.getElementById('tong-thu-nhap').value;
    var soNguoiPhuThuoc = +document.getElementById('so-nguoi-phu-thuoc').value;
    // output
    var thueThuNhapCN = 0;
    // process
    if (tongThuNhap < 0) {
        document.getElementById('ket-qua-bai-3').innerHTML = `Bạn chưa có thu nhập nên không phải chịu thuế!!`
    } else if (tongThuNhap > 0 && tongThuNhap <= 60) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.05;
    } else if (tongThuNhap > 60 && tongThuNhap <= 120) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.1;
    } else if (tongThuNhap > 120 && tongThuNhap <= 210) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.15;
    } else if (tongThuNhap > 210 && tongThuNhap <= 384) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.2;
    } else if (tongThuNhap > 384 && tongThuNhap <= 624) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.25;
    } else if (tongThuNhap > 624 && tongThuNhap <= 960) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.3;
    } else if (tongThuNhap > 960) {
        thueThuNhapCN = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6) * 0.35;
    }
    document.getElementById('ket-qua-bai-3').innerHTML = `Họ và Tên:${hoVaTen}<br>Tiền Thuế Thu Nhập Cá Nhân:${thueThuNhapCN} VNĐ`
    if (thueThuNhapCN < 0) {
        document.getElementById('ket-qua-bai-3').innerHTML = `Bạn không phải chịu thuế thu nhập cá nhân`
    }
}

// bài 4:   


document.getElementById('loai-khach-hang').onchange = function () {
    var ketNoi = document.getElementById('ket-noi');
    var loaiKhachHang = document.getElementById('loai-khach-hang').value;
    if (loaiKhachHang == 1) {
        ketNoi.style.display = 'none';
    } else if (loaiKhachHang == 2) {
        ketNoi.style.display = 'block';
    }
}
document.getElementById('btnTinhCap').onclick = function () {
    var maKhachHang = document.getElementById('ma-khach-hang').value;
    var loaiKhachHang = document.getElementById('loai-khach-hang').value;
    var soKetNoi = +document.getElementById('so-ket-noi').value;
    var soKenhCaoCap = +document.getElementById('so-kenh-cao-cap').value;
    var hoaDon = 12;    
    if (loaiKhachHang == 1) {
        hoaDon = 4.5 + 20.5 + soKenhCaoCap * 7.5;
    } 
    else if (loaiKhachHang == 2) {
        if (soKetNoi > 0 && soKetNoi <= 10) {
            hoaDon = 15 + 7.5 * soKetNoi + soKenhCaoCap * 50;
        } else if (soKetNoi > 10) {
            hoaDon = 15 + 75 + (soKenhCaoCap - 10) * 5 + soKenhCaoCap * 50;
        }
    }
    document.getElementById('ket-qua-bai-4').innerHTML = `Mã khách Hàng:${maKhachHang}<br>Tổng hóa đơn là ${hoaDon}$`
    if (loaiKhachHang == 0){
        document.getElementById('ket-qua-bai-4').innerHTML = `Bạn chưa chọn loại khách hàng!!`
    }
}
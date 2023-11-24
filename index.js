choiceSV = () => {
  const doiTuong = document.getElementById("doiTuong").value * 1;
  const domID = (id) => document.querySelectorAll(id);
  console.log(doiTuong);

  //Xóa thẻ tr theo đối tượng
  const hideElements = (selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.style.display = "none";
    });
  };

  if (doiTuong === 1) {
    hideElements(".thNV, .thKH");
  }
  if (doiTuong === 2) {
    hideElements(".thSV, .thKH");
  }
  if (doiTuong === 3) {
    hideElements(".thNV, .thSV");
  }

  // Hiển thị thêm ô input nhập theo đối tượng
  domID(".inputSV ").forEach((element) => {
    if (doiTuong === 1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  domID(".inputNV").forEach((element) => {
    if (doiTuong === 2) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  domID(".inputKH").forEach((element) => {
    if (doiTuong === 3) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
};

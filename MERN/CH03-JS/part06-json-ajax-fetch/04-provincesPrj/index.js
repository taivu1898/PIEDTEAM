const baseURL = "https://provinces.open-api.vn/api";

// class + promise + fetch

//  TODO: Tạo một thằng chuyên request với server

class Http {
  // Muốn lấy gì thì đưa đường dẫn cho get
  get(url) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json(); // Promise<data>
      } else {
        throw new Error(response.statusText);
      }
    }); // Promise<data>
  }
}

class Store {
  constructor() {
    this.http = new Http();
  }
  getProvinces() {
    return this.http.get(`${baseURL}/p`); // Promise <provinces>
  }
  getDistricts(provinceCode) {
    return this.http
      .get(`${baseURL}/p/${provinceCode}/?depth=2`)
      .then((provinceInfo) => {
        return provinceInfo.districts;
      }); // Promise<districts>
  }
  getWards(districtCode) {
    return this.http
      .get(`${baseURL}/d/${districtCode}/?depth=2`)
      .then((districtInfo) => {
        return districtInfo.wards;
      }); // Promise<wards>
  }
}

class RenderUI {
  renderProvinces(provinces) {
    let htmlContent = provinces
      .map((provinceItem) => {
        const { name, code } = provinceItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#province").innerHTML = htmlContent;
  }

  renderDistricts(districts) {
    let htmlContent = districts
      .map((districtItem) => {
        const { name, code } = districtItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#district").innerHTML = htmlContent;
  }
  renderWards(wards) {
    let htmlContent = wards
      .map((wardItem) => {
        const { name, code } = wardItem;
        return `<option value="${code}">${name}</option>`;
      })
      .join("");
    document.querySelector("#ward").innerHTML = htmlContent;
  }

  renderInformation(information) {
    const { address, ward, district, province } = information;
    const htmlContent = `${address}, ${ward}, ${district}, ${province}`;

    document.querySelector("#information").innerHTML = htmlContent;
  }
}

// Sự kiện trang web vừa load xong
document.addEventListener("DOMContentLoaded", (event) => {
  //  TODO:  get danh sách các province và render lên giao diện
  const store = new Store();
  const ui = new RenderUI();

  store
    .getProvinces()
    .then((provinces) => {
      ui.renderProvinces(provinces);
      //  TODO: lấy provinceCode ngay hiện tại
      const provinceCode = document.querySelector("#province").value;
      // TODO: dùng provinceCode để tìm danh sách các district của nó
      return store.getDistricts(provinceCode);
    })
    .then((districts) => {
      ui.renderDistricts(districts);
      //  TODO: Lấy districtCode để tìm danh sách ward
      let districtCode = document.querySelector("#district").value;
      return store.getWards(districtCode);
    })
    .then((wards) => {
      ui.renderWards(wards);
    });
});

// Sự kiện thay dổi province
document.querySelector("#province").addEventListener("change", () => {
  let provinceCode = document.querySelector("#province").value;
  const store = new Store();
  const ui = new RenderUI();
  store
    .getDistricts(provinceCode)
    .then((districts) => {
      ui.renderDistricts(districts);
      //  TODO: Lấy districtCode để tìm danh sách ward
      let districtCode = document.querySelector("#district").value;
      return store.getWards(districtCode);
    })
    .then((wards) => {
      ui.renderWards(wards);
    });
});

// Sự kiện thay đổi district
document.querySelector("#district").addEventListener("change", () => {
  let provinceCode = document.querySelector("#district").value;
  const store = new Store();
  const ui = new RenderUI();
  store.getWards(provinceCode).then((wards) => {
    ui.renderWards(wards);
  });
});

// Sự kiện submit form (bấm nút)
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let province = document.querySelector("#province option:checked").innerHTML;
  let district = document.querySelector("#district option:checked").innerHTML;
  let ward = document.querySelector("#ward option:checked").innerHTML;
  let address = document.querySelector("#address ").value;

  const ui = new RenderUI();
  let information = {
    address,
    ward,
    district,
    province,
  };

  ui.renderInformation(information);
});

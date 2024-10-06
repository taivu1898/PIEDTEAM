const baseURL = "https://provinces.open-api.vn/api"
// class + async await + fetch
// tạo một thằng chuyên request với server
class Http{
    // muốn lấy gì thì đưa đường dẫn
    async get(url){
        let response = await fetch(url)
            if(response.ok)
                return response.json() // Promise data
            else {
                throw new Error(response.statusText)
            }
    } // Promise<data>
}

class Store{
    constructor(){
        this.http = new Http()
    }
    getProvinces(){
        return this.http.get(`${baseURL}/p`) // promise provinces
    }

    async getDistricts(provinceCode){
        let provinceInfor = await this.http.get(`${baseURL}/p/${provinceCode}?depth=2`)
            return provinceInfor.districts;
    }
    
    async getWards(districtCode){
        let districInfor = await this.http.get(`${baseURL}/d/${districtCode}?depth=2`)
            return districInfor.wards
    }
}

class RenderUI{
    renderProvinces(provinces){
        let htmlContent = provinces.map((provinceItem)=> {
            const {name, code} = provinceItem
            return `<option value="${code}">${name}</option>`
        })
        .join("")
        document.querySelector("#province").innerHTML = htmlContent
    }

    renderDistricts(dictricts){
        let htmlContent = dictricts.map((dictrictItem)=> {
            const {name, code} = dictrictItem
            return `<option value="${code}">${name}</option>`
        })
        .join("")
        document.querySelector("#district").innerHTML = htmlContent
    }

    renderWards(wards){
        let htmlContent = wards.map((wardItem)=> {
            const {name, code} = wardItem
            return `<option value="${code}">${name}</option>`
        })
        .join("")
        document.querySelector("#ward").innerHTML = htmlContent
    }

    renderInforrmation(information){
        const {address, ward, district, province} = information
        const htmlContent = `${address}, ${ward}, ${district}, ${province}`
        document.querySelector("#information").innerHTML = htmlContent
    }
}

// sự kiện trang web vừa load xong
document.addEventListener("DOMContentLoaded", async (event) => {
    // get dannh sách các province và render lên giao diện
    const store = new Store()
    const ui = new RenderUI()
    let provinces = await store.getProvinces()

    ui.renderProvinces(provinces)
    // lấy provinceCodengay hiện tại
    const provinceCode = document.querySelector("#province").value
    // dùng provinceCode để tìm danh sách các district của nó
    let districts = await store.getDistricts(provinceCode)

    ui.renderDistricts(districts)
    // lấy districtsCode để tìm danh sách ward
    const districtCode = document.querySelector("#district").value
    let wards = await store.getWards(districtCode)

    ui.renderWards(wards)
})

// sự kiện thay đổi province
document.querySelector("#province").addEventListener("change", async (event) => {
    // lấy mã provinceCode hiện tại
    let provinceCode = document.querySelector("#province").value
    let store = new Store()
    let ui = new RenderUI()
    let districts = await store.getDistricts(provinceCode)

    ui.renderDistricts(districts)
    // lấy districtsCode để tìm danh sách ward
    const districtCode = document.querySelector("#district").value
    let wards = await store.getWards(districtCode)
    ui.renderWards(wards)
})

// sự kiện thay đổi district
document.querySelector("#district").addEventListener("change", async (event) => {
    // lấy mã districtCode hiện tại
    let districtCode = document.querySelector("#district").value
    let store = new Store()
    let ui = new RenderUI()
    let wards = await store.getWards(districtCode)
        ui.renderWards(wards)
})

// sự kiện submit form (bấm nút đặt hàng)
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    let province = document.querySelector("#province option:checked").innerHTML
    let district = document.querySelector("#district option:checked").innerHTML
    let ward = document.querySelector("#ward option:checked").innerHTML
    let address = document.querySelector("#address").value

    const ui = new RenderUI()
    let Inforrmation = {address, ward, district, province}
    ui.renderInforrmation(Inforrmation)
})
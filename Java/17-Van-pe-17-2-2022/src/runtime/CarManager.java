//java serviet:ko cần biết code chỉ cần bik nó là gì
//what why how: ko học code học lý thuyết trc
//mô hình MVC:ko cần biết code chỉ cần bik nó là gì,
//              mvc1 khác gì mvc2
//edwarthienhoang
//SOLID là gì
package runtime;

import data.BrandList;
import data.Brand;
import data.CarList;
import ui.Menu;

public class CarManager {

    public static void main(String[] args) {
        BrandList bl = new BrandList();
        String brandUrl = "D:\\fileCode\\java\\17-Van-pe-17-2-2022\\brands.txt";
        String carUrl = "D:\\fileCode\\java\\17-Van-pe-17-2-2022\\cars.txt";
        bl.loadFromFile(brandUrl);
        CarList c1 = new CarList(bl);
        c1.loadFromFile(carUrl);
        
        Menu menu = new Menu("Car management system menu");
        menu.addNewOption("1- List all brands");
        menu.addNewOption("2- Add a new brand");
        menu.addNewOption("3- Search a brand based on its ID");
        menu.addNewOption("4- Update a brand");
        menu.addNewOption("5- Save brands to the file, named brands.txt");
        menu.addNewOption("6- List all cars in ascending order of brand names");
        menu.addNewOption("7- List cars based on a part of an input brand name");
        menu.addNewOption("8- Add a car");
        menu.addNewOption("9- Remove a car based on its ID");
        menu.addNewOption("10- Update a car based on its ID");
        menu.addNewOption("11- Save cars to file, named cars.txt");
        
        while (true) {
            menu.print();
            int choice = menu.getChoice();
            switch(choice){
                case 1 : {
                    bl.listBrands();
                    break;
                }
                case 2 : {
                    bl.addBrand();
                    break;
                }
                case 3 : {
                    bl.searchBrand();
                    break;
                }
                case 4 : {
                    bl.updateBrand();
                    break;
                }
                case 5 : {
                    bl.saveToFile(carUrl);
                    break;
                }
                case 6 : {
                    c1.listCars();
                    break;
                }
                case 7 : {
                    c1.printBaseOnBrandName();
                    break;
                }
                case 8 : {
                    c1.addCar();
                    break;
                }
                case 9 : {
                    c1.removeCar();
                    break;
                }
                case 10 : {
                    c1.updateCar();
                    break;
                }
                case 11 : {
                    c1.saveToFile(carUrl);
                    break;
                }   
            }          
        }
        
        
        
        
        
        
        
//        c1.listCars();//in ra
//        c1.updateCar();//cập nhật
//        c1.addCar();//thêm car
//        c1.printBaseOnBrandName();//in theo brandName
//        c1.removeCar();// xóa
//        c1.listCars();//in lại xem kết quả
        
//        bl.listBrands();
//        bl.updateBrand();
//        bl.addBrand();
//        bl.listBrands();
//        //Test getChoice:
//        Brand brand = bl.getUserChoice();
//        System.out.println("Brand đã chọn nè: \n"+brand);
         
    }
    
}

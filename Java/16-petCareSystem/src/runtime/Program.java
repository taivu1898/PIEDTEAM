/*
Viết 1 chương trình quản lý thú cưng (DOG | CAT)
    1. Thêm mới 1 con cún
    2. Thêm mới 1 con mèo
    3. in ra danh sách thú cưng
    4. tìm kiếm thú cưng theo tên
    5. update thú cưng theo id
    6. remove thú cưng theo id
    7. sắp xếp thú cưng theo trọng lượng
    8. save file and quit

    khi thêm mới id của pet k được trùng với id ở trong danh sách
    id của pet phải thỏa theo format "D001| C001"
    một con Pet có nhửng thuộc tính owner , color, weight
    
    Dog: necklace(vòng cổ)
    Cat: ribbon(ruy băng)

    yêu cầu chung: nhập chuẩn | nhập bậy bạ là chữi
*/
package runtime;

import data.PetManagement;
import data.Pet;
import java.util.Scanner;
import ui.Menu;
import utils.Inputter;

public class Program {

    public static void main(String[] args) {
        //Tạo danh sách lưu pet
        PetManagement pm = new PetManagement();
        //pm.initData();//nạp giá trị vào
        String url = "D:\\fileCode\\java\\16-petCareSystem\\petListDoc.txt";
                //url là đường dẫn đến file muốn đọc
        pm.loadFromFile(url);
        
                
        //Tạo menu:
        Menu menu = new Menu("Pet Care System Menu");
        menu.addNewOption("Add new Dog");
        menu.addNewOption("Add new Cat");
        menu.addNewOption("Print Pet List");
        menu.addNewOption("Search Pet by ID");
        menu.addNewOption("Update Pet by ID");
        menu.addNewOption("Remove Pet by ID");
        menu.addNewOption("Sort pet order by weight");
        menu.addNewOption("save file and quit");
        //bắt đầu kiến trúc menu và cả project:
        int choice;
        while(true){
            menu.print();
            choice = menu.getChoice();//ko cần nhập key default trong switch
            switch(choice){
                case 1: {
                    pm.addNewDog();
                    break;
                }
                case 2: {
                    pm.addNewCat();
                    break;
                }
                case 3: {
                    pm.showPetList();
                    break;
                }
                case 4: {
                    pm.searchPetById();
                    break;
                }
                case 5: {
                    pm.updatePetById();
                    break;
                }
                case 6: {
                    pm.removePetById();
                    break;
                }
                case 7: {
                    pm.sortPetListByWeight();
                    break;
                }
                case 8: {
                    System.out.println("See you again");
                    pm.saveToFile(url);
                    return;//ở đây là thoát luôn
                }
            }           
        }
        
        
        
            
        
        
    }
//        //Test code: mình sẽ tạo ra 1 PetManagement để quản lý 
//                //danh sách thú cưng nên ko cần tạo danh sách nửa
//            PetManagement pm = new PetManagement();
//            pm.initData();//nạp giá trị vào
//            pm.showPetList();//tk quản lý ơi show cho tk
//            pm.sortPetListByWeight();//sắp xếp các thú cưng
//            pm.showPetList();//in ra sau khi sắp xếp
//        
//        //test hàm tìm kiếm vị trí:
//            int pos = pm.searchPetIndexById("D006");//tìm và lưu vị trí tìm đc
//            System.out.println(pos);//in ra vị trí tìm đc        
//            //test hàm tìm kiếm con pet:
//            Pet pet0 = pm.searchPetById("D003");//tìm và lưu vị trí tìm đc
//            System.out.println(pet0);//in ra
//            Pet pet1 = pm.searchPetById("D001");//tìm và lưu vị trí tìm đc
//            System.out.println(pet1);//in ra
//            //test hàm search client:
//            //pm.searchPetById();
//        
//        //nhập 1 số nguyên chuẩn:
//            //Scanner sc = new Scanner(System.in);
//            //System.out.println("Nhập tuổi đi: ");
//            //int age =Integer.parseInt(sc.nextLine());//nếu viết vậy thì khi nhập 12a
//                                        //hoặc 12. 12.4 thì sẽ bị buff
//            //=>dùng try catch để chương trình ko dừng đột ngột:
//    //        while(true){
//    //            System.out.println("Nhập tuổi đi: ");
//    //            try{
//    //                int age =Integer.parseInt(sc.nextLine());//khi bị lỗi nó sẽ vào
//    //                                            //thẳng catch
//    //                break;
//    //            }catch(Exception e){
//    //                System.err.println("Bạn nhập sai định dạng rồi!!!");
//    //            }
//    //        }//những mối lần viết vậy rất dài => nên viết 1 cái hàm để sẵn
//            //=> nên viết 1 cái Collections gồm nhiều hàm hỗ trợ cho việc nhập,
//            //sử dụng cho sau này trong công việc ở cả trường:
//            int age = Inputter.getAnInteger("Nhập tuổi đi: ", 
//                                        "Mày ko biết nhập tuổi hả!!");
//            int yob = Inputter.getAnInteger("Nhập năm sinh :", 
//                                "Mày biết nhập số nguyên không?");
//            //=>thực ra ngoài đợi ít dùng cái class này vì ở mỗi chỗ làm công ty,
//                //đều có 1 source, hệ thống sẵn về những cái này
//        
//        //nhập số nguyên chuẩn nhưng phải ở trong khoản yêu cầu:
//        int age2 = Inputter.getAnInteger("Nhập tuổi đi: ", 
//                                        "Mày ko biết nhập tuổi hả!!", 1, 100);  
//        
//    }
//    
}

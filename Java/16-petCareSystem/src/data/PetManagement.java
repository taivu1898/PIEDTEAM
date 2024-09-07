/*
*PetManagement: là 1 cái khuôn dùng để đúc ra anh quản lý danh sách thú cưng,
    vậy nên PetManagement sẽ sở hữu 1 danh sách thú cưng(petList) để quản lý
    và thêm 1 đống method giúp xử lý danh sách này như: thêm, xóa sữa, sắp xế,
    tìm kiếm, in... mình bỏ hết vào đây, ko bỏ ở main:
        1. Thêm mới 1 con cún
        2. Thêm mới 1 con mèo
        3. in ra danh sách thú cưng
        4. tìm kiếm thú cưng theo id
            +hàm nhận vài id, trả ra vị trí
            +hàm nhận vài id, trả ra pet | null(biết là con vật nhưng ko có)
            +hàm xin id, thông báo kết quả(level - client)
        5. update thú cưng theo id
        6. remove thú cưng theo id
        7. sắp xếp thú cưng theo trọng lượng
        8. save file and quit

thêm là cái viết gần cuối vì trc thêm là phải tìm kiếm, 
    sắp xếp những chức năng viết trc:
    3-7-4-5,6-1,2-8
*search là 1 chức năng quan trọng nhất và khó nhất trong hệ thống, search
    còn đưa ra gợi ý nửa, 1 kỹ năng quan trọng và rất khó để thành thạo
*Mỗi 1 hàm chỉ nên đảm nhận 1 nhiệm vụ duy nhất(single responsibility)
*/
package data;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;
import java.util.StringTokenizer;
import utils.Inputter;

public class PetManagement {
    //PetManagement: anh quản lý danh sách => phải có danh sách
    ArrayList<Pet> petList = new ArrayList<>();
    
    //PetManagement: còn lưu rất nhìu method hỗ trợ xử lý petList
    //vì lúc tạo ra PetManagement là anh quản lý danh sách mà danh sách lúc này
    //mới tạo ko có gì cả
    //=>method initData(): hàm nhét 2 chó, 2 mèo vào petList để test code
    public void initData(){
        petList.add(new Dog("D001", "Tuấn", "Red", 6.5, "I Love you"));
        petList.add(new Dog("D002", "Toàn", "Yellow", 2.5, "Yellow"));
        petList.add(new Cat("C001", "Tùng", "Nâu", 4.2, "Mỹ Diệu"));
        petList.add(new Cat("C002", "Thông", "Tím", 5.2, "Thông Tìm"));
    }
    
    //+method showPetList(): hàm show ra danh sách thú cưng
    public void showPetList(){
        if(petList.isEmpty()){//nếu danh sách rỗng
            System.out.println("Nothing to print");//thông báo
            return;//in
        }
        //còn nếu có thì in ra
        for (Pet item : petList) {
            item.showInfor();
        }
    }
    
    //+method sortPetListByWeight: sắp xếp thú cưng theo trọng lượng      
    public void sortPetListByWeight(){
        //1.tạo ra anh trọng tài tên 'orderByWeight'
        Comparator orderByWeight = new Comparator<Pet>() {
            @Override
            public int compare(Pet t1, Pet t2) {
                return (int)(t1.getWeight() - t2.getWeight());
            }
        };
        //2.sau khi tạo anh trọng tài thì mình phải cài vào danh sách
            //thông qua 
        Collections.sort(petList, orderByWeight);
        //3.không in ra kết quả vì hàm tên là sắp xếp nên chỉ việc làm sắp xếp
            //còn in là 1 nhiệm vụ của hàm khác        
    }
    
    //+viết hàm search:
        //hàm nhận vài id, trả ra vị trí:
    public int searchPetIndexById(String keyId){
        for (int i = 0; i < petList.size(); i++) {
            if(petList.get(i).getId().equals(keyId)){
                return i;
            }
        }
        return -1;
    }
        //hàm nhận vài id, trả ra pet | null(biết là con vật nhưng ko có):
    public Pet searchPetById(String keyId){
        int pos = searchPetIndexById(keyId);//dùng key id tìm vị trí
        return pos == -1 ? null : petList.get(pos);//dùng vị trí lấy ra con pet
    }
        //hàm xin id, thông báo kết quả(level - client):
    public void searchPetById(){//hàm tự động đi xin id
        //hàm đi xin keyId
        //dựa vào keyId tìm con pet
        //thông báo kết quả tìm kiếm
        //=>hàm này tiệm cận vs ng dùng, ng dùng sẽ xài hàm này, mấy hàm 
            //trên là mình dùng
        String keyId = Inputter.getString("Input petId you wanna find: ", 
                                    "That field is required!!!");
        //=>ở đây người khi tìm kiếm thì ng ta tìm kiếm, ko ra thì nói ko có
            //chỉ tránh trường hợp ng ta để trống        
        //=>dựa vào keyId tìm con pet:
        Pet pet = searchPetById(keyId);
        if(pet == null){
            System.out.println("The pet is not exist!!!");
        }else{
            System.out.println("The Pet information:");
            pet.showInfor();
        }   
    }
        //+hàm remove petById:hàm xin id, tìm con pet và xóa:
    public void removePetById(){//hàm tự động đi xin id
        String keyId = Inputter.getString("Input petId you wanna remove: ", 
                                    "That field is required!!!");
        //=>ở đây người khi tìm kiếm thì ng ta tìm kiếm, ko ra thì nói ko có
            //chỉ tránh trường hợp ng ta để trống        
        //=>dựa vào keyId tìm con pet:
        Pet pet = searchPetById(keyId);
        if(pet == null){
            System.out.println("The pet is not exist!!!");
        }else{
            System.out.println("The Pet information:");
            pet.showInfor();//hiển thị ra thông tin trc khi xóa
            petList.remove(pet);
            System.out.println("Removing is successful!");
        }   
    }
    
        //Hàm update: update thuộc tính của 1 con vật đc nhập mã
    public void updatePetById(){//hàm tự động đi xin id
        String keyId = Inputter.getString("Input petId you wanna remove: ", 
                                    "That field is required!!!");
        //=>ở đây người khi tìm kiếm thì ng ta tìm kiếm, ko ra thì nói ko có
            //chỉ tránh trường hợp ng ta để trống        
        //=>dựa vào keyId tìm con pet:
        Pet pet = searchPetById(keyId);
        if(pet == null){
            System.out.println("The pet is not exist!!!");
        }else{
            System.out.println("The Pet information before update:");
            pet.showInfor();//hiển thị ra thông tin trc khi update:
            //update thông tin của con đã tìm đc:
                //cần cập nhật owner, color, weight,
                //và ribbon nhưng Id ko đc update:
            System.out.println("Updating...");
            String newOner = Inputter.getString("Input owner: ", 
                                "That field is required!!!");
            String newColor = Inputter.getString("Input Color: ", 
                                "That field is required!!!");
            Double newWeight = Inputter.getADouble("Input Weight: ", 
                                "weight must between 1 and 100!!!", 1, 100);
            //petList.set(0, pet)//set này là set con vật trong mảng ko phải
                        //set thuộc tính của con vật
            //=>lúc này cần lập setter cho class pet:
            pet.setColor(newColor);
            pet.setOwner(newOner);
            pet.setWeight(newWeight);
                //dog có necklace, cat có:
            //vì trong mảng pet chit lưu chó hoặc mèo:
            if(pet instanceof Dog){//pet có phải 1 dạng của Dog ko(clean code)
                String newNecklace = Inputter.getString("Input Necklace: ", 
                        "That field is required!!!");
                //pet.setNecklace là ko đc phải ép kiểu
                ((Dog)pet).setNecklace(newNecklace);
            }else{
                String newRibbon = Inputter.getString("Input Ribbon: ", 
                        "That field is required!!!");
                //pet.setNecklace là ko đc phải ép kiểu
                ((Cat)pet).setRibbon(newRibbon);
            }  
            System.out.println("Updating is successful!");
        }   
    }
    
        //+method addNewDog(): thêm 1 con chó
    public void addNewDog(){
        //thu thập thông tin để đúc con chó và mã đc nhập ko đc trùng:
        boolean isDup;
        String id;
        do{
            isDup = false; //ban đầu tin là ko trùng
            id = Inputter.getString("Input your Dog'Id: ", 
                  "Your id is not matched DXXX!!!", "[dD]\\d{3}").toUpperCase();
            Pet pet = searchPetById(id);
            if(pet!=null){
                isDup = true;
                System.out.println("Id has been used!!!");
                //in ra thông tin luôn nếu thích
            }
        }while(isDup);
        //=>cấu trúc này k tr trùng hay ko trùng nên sau này có thể dùng lại nếu
            //gặp nhiều nên nhớ
            
        //Nhập thông tin còn lại:
        String oner = Inputter.getString("Input owner: ", 
                                "That field is required!!!");
        String color = Inputter.getString("Input Color: ", 
                                "That field is required!!!");
        Double weight = Inputter.getADouble("Input Weight: ", 
                                "weight must between 1 and 100!!!", 1, 100);
        String necklace = Inputter.getString("Input necklace: ", 
                        "That field is required!!!");
        //tạo khuôn Dog:
        Dog newDog = new Dog(id, oner, color, weight, necklace);
        petList.add(newDog);
        System.out.println("Adding is successful!");
    }
    
    //+method addNewCat(): thêm 1 con mèo
    public void addNewCat(){
        //thu thập thông tin để đúc con mèo và mã đc nhập ko đc trùng:
        boolean isDup;
        String id;
        do{
            isDup = false; //ban đầu tin là ko trùng
            id = Inputter.getString("Input your Cat'Id: ", 
                  "Your id is not matched CXXX!!!", "[cC]\\d{3}").toUpperCase();
            Pet pet = searchPetById(id);
            if(pet!=null){
                isDup = true;
                System.out.println("Id has been used!!!");
                //in ra thông tin luôn nếu thích
            }
        }while(isDup);
        
        //Nhập thông tin còn lại:
        String oner = Inputter.getString("Input owner: ", 
                                "That field is required!!!");
        String color = Inputter.getString("Input Color: ", 
                                "That field is required!!!");
        Double weight = Inputter.getADouble("Input Weight: ", 
                                "weight must between 1 and 100!!!", 1, 100);
        String ribbon = Inputter.getString("Input Ribbon: ", 
                        "That field is required!!!");
        //tạo khuôn Dog:
        Cat newCat = new Cat(id, oner, color, weight, ribbon);
        petList.add(newCat);
        System.out.println("Adding is successful!");
    }
    
    //+Method nhận vào url, đọc file từ url và nạp giá trị vào danh sách:
    public boolean loadFromFile(String url){
        petList.clear();//xóa(dữ liệu cũ, rác) trc khi đọc 
                //và nạp giá trị(option)
        File f = new File(url);//từ url tạo object file để xử lý file
        try {
            //xử lý
            BufferedReader reader = new BufferedReader(new FileReader(f));
                //khả năng là đọc one line
            String line = reader.readLine();//ra lệnh cho nó đọc 1 dòng 
                                //và phải lưu để tránh bug
                //Quy tắc là đọc từng dòng và xử lý từng dòng
            while(line != null){//còn dòng là còn đọc
                //xử lý dòng:
                StringTokenizer st = new StringTokenizer(line, "|");
                String Id = st.nextToken().trim();
                String owner = st.nextToken().trim();
                String color = st.nextToken().trim();
                double weight = Double.parseDouble(st.nextToken().trim());
                String special = st.nextToken().trim();
                //Tạo pet:
                Pet pet;
                if(Id.matches("[dD]\\d{3}")){
                    pet = new Dog(Id, owner, color, weight, special);
                }else{
                    pet = new Cat(Id, owner, color, weight, special);
                }
                //mnhets vô danh sách:
                petList.add(pet);
                line = reader.readLine();//dọc line tiếp theo
            }
            //return true báo đọc thành công
            return true;
        } catch (Exception e) {
            System.err.println("File lỗi rồi: " + e);
            return false;
        }
    }
    
    //+method lưu file: 
    public boolean saveToFile(String url){
        File f = new File(url);
        try {
            OutputStreamWriter writter = new OutputStreamWriter(new FileOutputStream(f));
            for (Pet pet : petList) {
                writter.write(pet.toString());
                writter.write("\n");
            }
            writter.flush();//save xong nhớ dừng
            return true;
        } catch (Exception e) {
            System.err.println("Lỗi đọc file: " + e);
            return false;
        }
            
    }
        
}

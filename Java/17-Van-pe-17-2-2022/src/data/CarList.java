/*
CarList là anh quản lý danh sách các chiếc xe carList
    thì ảnh có: danh sách các chiếc xe carList
                có 1 anh quản lý danh sách các dùng xe
*/
package data;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.StringTokenizer;
import utils.Inputter;

public class CarList {
    //props:
    ArrayList<Car> carList = new ArrayList<>();
    BrandList brandList;// anh quản lý ds brandList tên là brandList
    
    //constructor:
    public CarList(BrandList brandList) {
        this.brandList = brandList;
    }
    
    //+hàm đọc file:
    public boolean loadFromFile(String url){
        File f = new File(url);
        try {
            //xử lý file:
            BufferedReader reader = new BufferedReader(new FileReader(f));
            String line = reader.readLine();
            while(line != null){
                //xử lý dòng:
                StringTokenizer st = new StringTokenizer(line, ",");
                String cid = st.nextToken().trim();
                String bid = st.nextToken().trim();
                String color = st.nextToken().trim();
                String fid = st.nextToken().trim();
                String eid = st.nextToken().trim();
                
                //dùng bid tìm brand tương ứng
                int pos = brandList.searchId(bid);//tìm đc vị trí
                Brand brand = brandList.brandList.get(pos);//vì đọc file dữ liệu
                                    //mà file dữ liều thì luôn đúng 100% nên
                                    //ko cần xét pos = -1
                Car nCar = new Car(cid, brand, color, fid, eid);
                carList.add(nCar);
                
                //đọc dòng tiếp theo để thêm:
                line = reader.readLine();//ko có bug chết mẹ!!!
            }
                               
            //nếu oke thì return:
            return true;
        } catch (Exception e) {
            System.err.println("Car file Error: "+e);
            return false;
        }     
    }
    
    //+hàm in danh sách:
    public void listCars(){
        if(carList.isEmpty()){
            System.out.println("CarList has nothing to print!!!");
            return;//ngừng
        }
        Collections.sort(carList);//sắp xếp trc khi in
        System.out.println("____CarList_____");
        for (Car car : carList) {
            System.out.println(car.screenString());
        }
    }
    
    //+hàm tìm vị trí theo carID:
    public int searchID(String carID){
        for(int i = 0; i <= carList.size()-1; i++){
            if(carList.get(i).getCarId().equals(carID)) return i;
        }
        return -1;
    }
    
    //+hàm tìm vị trí theo frameID:
    public int searchFrame(String frameID){
        for(int i = 0; i <= carList.size()-1; i++){
            if(carList.get(i).getFrameId().equals(frameID)) return i;
        }
        return -1;
    }
    
    //+hàm tìm vị trí theo engineID:
    public int searchEngine(String engineID){
        for(int i = 0; i <= carList.size()-1; i++){
            if(carList.get(i).getEngineId().equals(engineID)) return i;
        }
        return -1;
    }
    
    //+hàm thêm 1 chiếc xe:
    public void addCar(){
        //thu thập thông tin ddeer tạo car mới:
        //+id cấm trùng:
        boolean isDup;
        String carID;
        do {    
            isDup = false;//reset, tin là ko trùng
            carID = Inputter.getString("Input carID: ", 
                    "That field is required!!!");
            //dùng carID để tìm car trùng:
            int pos = searchID(carID);//nếu khác -1 nghĩa là tìm đc
            if(pos != -1){//tìm đc nghĩa là trùng
                System.out.println("CarID has been used!!!");
                isDup = true;//bị trùng
            } 
        } while (isDup);//còn trùng thì nhập lại        
        //+nhập brand bằng menu:
        Brand brand = brandList.getUserChoice();
        //+nhập color:
        String color = Inputter.getString("Input color: ", 
                    "That field is required!!!");
        //+nhập frameID theo format và cắm trùng:
        String frameID;
        do {            
            isDup = false;//reset, tin là ko trùng
            frameID = Inputter.getString("Input frameID: ", 
                    "frameID must be match F00000", "F\\d[5]");
            //dùng frimeID để tìm frame trùng:
            int pos = searchFrame(frameID);//nếu khác -1 nghĩa là tìm đc
            if(pos != -1){//tìm đc nghĩa là trùng
                System.out.println("frameID has been used!!!");
                isDup = true;//bị trùng
            } 
        } while (isDup);
        //+nhập engineID theo format và cắm trùng:
        String engineID;
        do {            
            isDup = false;//reset, tin là ko trùng
            engineID = Inputter.getString("Input engineID: ", 
                    "engineID must be match E00000", "E\\d[5]");
            //dùng engineID để tìm engine trùng:
            int pos = searchEngine(engineID);//nếu khác -1 nghĩa là tìm đc
            if(pos != -1){//tìm đc nghĩa là trùng
                System.out.println("engineID has been used!!!");
                isDup = true;//bị trùng
            } 
        } while (isDup);
        
        //Tạo:
        Car nCar = new Car(carID, brand, color, frameID, engineID);
        carList.add(nCar);
        System.out.println("Car adding is successful!!!");
    }
    
    //+Hàm printBaseOnBrandName:
    public void printBaseOnBrandName() {
        //nhập 1 phần của BrandName cần tìm:
        String key = Inputter.getString("Input a part of BrandName", 
                "That field is required!!! ");
        //duyệt qua các chiếc xe, xe nào mà brandName có chứa key thì in ra:
        int count = 0;
        for (Car car : carList) {
            if(car.getBrand().getBrandName().contains(key)){
                System.out.println(car.screenString());
                count++;
            }
        }
        if(count == 0){
            System.out.println("No car is detected");
        }
    }
      
    //+Hàm remove
    public boolean removeCar() {
        String keyId = Inputter.getString("Input CarId you wanna remove: ", 
                "That field is required!!!");
        //từ keyId tìm Car cần xóa:
        int pos = searchID(keyId);
        Car car = pos == -1 ? null : carList.get(pos);
        if(car == null){
            System.out.println("Not found");
            return false;
        }else{
            System.out.println("Car Information: ");
            System.out.println(car.screenString());
            carList.remove(pos);
            System.out.println("Car removing is successful!!!");
            return true;
        }
    }
    
    //+hàm updateCar:
    public boolean updateCar() {
        String keyId = Inputter.getString("Input CarId you wanna update: ", 
                "That field is required!!!");
        //từ keyId tìm Car cần update:
        int pos = searchID(keyId);
        Car car = pos == -1 ? null : carList.get(pos);
        if(car == null){
            System.out.println("Not found");
            return false;
        }else{
            System.out.println("Car Information before updating: ");
            System.out.println(car.screenString());
            //thu thập thông tin mới để update: copy từ hàm adđ cho dễ:
                //+nhập brand bằng menu:
            Brand brand = brandList.getUserChoice();
                //+nhập color:
            String color = Inputter.getString("Input color: ", 
                        "That field is required!!!");
                //+nhập frameID theo format và cắm trùng:
            boolean isDup;
            String frameID;
            do {            
                isDup = false;//reset, tin là ko trùng
                frameID = Inputter.getString("Input frameID: ", 
                        "frameID must be match F00000", "F\\d[5]");
                    //dùng frimeID để tìm frame trùng:
                pos = searchFrame(frameID);//nếu khác -1 nghĩa là tìm đc
                if(pos != -1){//tìm đc nghĩa là trùng
                    System.out.println("frameID has been used!!!");
                    isDup = true;//bị trùng
                } 
            } while (isDup);
                //+nhập engineID theo format và cắm trùng:
            String engineID;
            do {            
                isDup = false;//reset, tin là ko trùng
                engineID = Inputter.getString("Input engineID: ", 
                        "engineID must be match E00000", "E\\d[5]");
                    //dùng engineID để tìm engine trùng:
                pos = searchEngine(engineID);//nếu khác -1 nghĩa là tìm đc
                if(pos != -1){//tìm đc nghĩa là trùng
                    System.out.println("engineID has been used!!!");
                    isDup = true;//bị trùng
                } 
            } while (isDup);
            
            //set:
            car.setBrand(brand);
            car.setColor(color);
            car.setFrameId(frameID);
            car.setEngineId(engineID);
            System.out.println("Car updating is successful!!!");
            return true;
        }
    }
    
    
    public boolean saveToFile(String url){
        File f = new File(url);
        try {
            //xử lý:
            OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(f));
            for (Car car : carList) {
                writer.write(car.toString());//1 điều khá khó chịu là write
                                    //ko tuwjd ùng toString đc phải thêm
                writer.write("\n");//xuống dòng để tránh viết dòng dài
                        //khó đọc file đc
            }
            writer.flush();//để file đc đóng lại sau khi viết để tránh quá trình 
                            //bất đồng bộ(ch viết xong mà xuống thẳng return)
            //xong thì:
            return true;
        } catch (Exception e) {
            System.err.println("Save Car file error: "+e);
            return false;
        }
    }
}

//remove trc update sau
//hàm remove thường return ra đối tượng đã xóa để có thể hoàn tác

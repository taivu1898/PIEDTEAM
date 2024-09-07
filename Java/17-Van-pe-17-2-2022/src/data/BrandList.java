
package data;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.StringTokenizer;
import ui.Menu;
import utils.Inputter;

/*
Tư duy 1: BrandList: là anh quản lý danh sách các brand(anh điệp)

Tư duy 2: BrandList: là danh sách các brand(cô Vân)

*/

public class BrandList{
//danh sách các brand cần quản lý(prop):
    ArrayList<Brand> brandList = new ArrayList<>();
    
    
//những method cần xử lý các danh sách:
    //+Hàm loadFromFile
    public boolean loadFromFile(String url){
        File f = new File(url);
        try {
            //xử lý file:
            BufferedReader reader = new BufferedReader(new FileReader(f));
            String line = reader.readLine();
            while(line!=null){//nếu còn dòng nào thì xử lý:
                //xử lý dòng:
                StringTokenizer st = new StringTokenizer(line, ",");
                String id = st.nextToken().trim();
                String name = st.nextToken().trim();
                String str = st.nextToken().trim();
                //state 2:
                st = new StringTokenizer(str, ":");
                String sound = st.nextToken().trim();
                Double price = Double.parseDouble(st.nextToken().trim()); 
                //dùng các nguyên liệu thu đc để tạo brand và lưu vào danh sách:
                Brand nBrand = new Brand(id, name, sound, price);
                brandList.add(nBrand);
                line = reader.readLine();//đọc dòng tiếp theo(quan trọng)
            }
            //nếu xong:
            return true;
        } catch (Exception e) {
            System.out.println("File brands error: "+ e);
            return false;
        }
    }
    
    
    
    //+hàm in:
    public void listBrands(){
        if(brandList.isEmpty()){
            System.out.println("Brand List is nothing to print!!!");
            return;//dừng luôn
        }
        System.out.println("________BrandList________");
        for (Brand brand : brandList) {
            System.out.println(brand);//.toString()
        }
    } 
    
    
    //+Ham tìm:
    public int searchId(String keyId){
        for(int i = 0; i < brandList.size(); i++){
            if(brandList.get(i).getBrandID().equals(keyId)){
                return i;
            }
        }
        return -1;
    }
    
    
    
    //+method addnewBrand:
    public void addBrand(){
        //thu thập dữ liệu:
        //+id cấm trùng:
        boolean isDup;
        String id;
        do {            
            isDup = false;//rết niềm tin là chưa trùng
            id = Inputter.getString("Input brand id: ", 
                    "That field is required!!!");
            //dùng id mà họ muốn tạo để tìm xem có brand nào trùng ko
            int pos = searchId(id);//đc vị trí hoặc -1 nếu ko tìm đc
            if(pos != -1){//tìm đc => bị trùng
                isDup = true;
                System.out.println("This brand Id has been used!!!");
            }
        } while (isDup);
        //name, sound, price
        String name = Inputter.getString("Input brand name: ", 
                    "That field is required!!!");
        
        String sound = Inputter.getString("Input sound brand: ", 
                    "That field is required!!!");
        double price = Inputter.getADouble("Input price: ", 
                "Price  must to positive real number", 1,Math.pow(2,53)-1);
        //tạo brand:
        Brand nBrand = new Brand(id, name, sound, price);
        brandList.add(nBrand);
        System.out.println("Brand adding is successful!!!");
    }
    
    
    
    //+method update:
    public void updateBrand(){
        //xin brand id của brand muốn update sau đó tìm brand dựa vào id 
                //đã in, nếu có thì update, ko thì báo ko có
        String keyId = Inputter.getString("Input brand Id you wanna update", 
                "That field is required");
        //tìm brand dựa vào id đã xin:
        int pos = searchId(keyId);
        Brand brand = pos == -1 ? null : brandList.get(pos);
        //nếu có thì update, ko có thì báo ko:
        if(brand == null){
            System.out.println("Not Found");
        }else{
            System.out.println("Brand information before updating: ");
            System.out.println(brand);//tótring
            System.out.println("Updating...");
            //thu thập thông tin mới cho name, sound, price:
            String name = Inputter.getString("Input new brand name: ", 
                    "That field is required!!!");
            String sound = Inputter.getString("Input new sound brand: ", 
                        "That field is required!!!");
            double price = Inputter.getADouble("Input new price: ", 
                    "Price  must to positive real number", 1,Math.pow(2,53)-1);
            //update brand:
            brand.setBrandName(name);
            brand.setSoundBrand(sound);
            brand.setPrice(price);
            System.out.println("Brand updating is successful!!!!");
        }
    }
    
    
    //+Hàm nhập getUserChoice: hiện thị danh sách brandList có đánh số
    //      sau đó gọi hàm ref_getChoice để xin người dùng chọn và trả
    //      ra Brand đã chọn: 
    public Brand getUserChoice(){
        //hiển thị brandList như menu có số:
        int count = 1;
        System.out.println("____BrandList____");
        for (Brand brand : brandList) {
            System.out.println(count + ". "+brand);
            count++;
        }
        //tạo menu để xài ref_getChoice:
        Menu<Brand> brandMenu = new Menu("brandListMenu");
        //thu thập lựa chọn và trả ra brand tương ứng
        return brandMenu.ref_getChoice(brandList);        
    }
    
    
    
    //+method xin id tìm kiếm: search
    public void searchBrand(){
        //xin brand id của brand muốn update sau đó tìm brand dựa vào id 
                //đã in, nếu có thì update, ko thì báo ko có
        String keyId = Inputter.getString("Input brand Id you wanna update", 
                "That field is required");
        //tìm brand dựa vào id đã xin:
        int pos = searchId(keyId);
        Brand brand = pos == -1 ? null : brandList.get(pos);
        //nếu có thì update, ko có thì báo ko:
        if(brand == null){
            System.out.println("Not Found");
        }else{
            System.out.println("Brand information: ");
            System.out.println(brand);//toString
        }
    }
    
    
    //+method save to file:
    public boolean saveToFile(String url){
        File f = new File(url);
        try {
            //xử lý:
            OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(f));
            for (Brand brand : brandList) {
                writer.write(brand.toString());//1 điều khá khó chịu là write
                                    //ko tuwjd ùng toString đc phải thêm
                writer.write("\n");//xuống dòng để tránh viết dòng dài
                        //khó đọc file đc
            }
            writer.flush();//để file đc đóng lại sau khi viết để tránh quá trình 
                            //bất đồng bộ(ch viết xong mà xuống thẳng return)
            //xong thì:
            return true;
        } catch (Exception e) {
            System.err.println("Save Brand file error: "+e);
            return false;
        }
            
    }
    
    
    
}
//ngay từ đầu làm hàm tìm kiếm là làm cả 3 hàm
//bộ 3 hàm giống nhau: tìm kiếm, update, remove

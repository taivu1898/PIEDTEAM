package runtime;
//Bé na muốn quản lý tiếp
//lưu hình vuông và hình chữ nhật

import data.Disk;
import data.Rectangle;
import data.Square;

//hình chữ nhật(color, ... cạnh)
public class Program {

    public static void main(String[] args) {
        Rectangle re1 = new Rectangle("Tím", 2, 5);
        Square sq1 = new Square("đỏ", 3);
        Square re2 = new Square("vàng", 2);
        //Square re3 = new Rectangle(2,7, "hường") là sai
        //vì cha phải có trc rồi mới có con còn khái báo như trên là bị ngược
            //khai cha new con đc 
            //khai con nêu cha ko đc
        //*Tạo cái mảng lưu trữ r in ra 1 lần
        Rectangle ds[] = new Rectangle[3];
        ds[0] = sq1;
        ds[1] = re1;
        ds[2] = re2;
        for (int i = 0; i <= ds.length - 1; i++) {
            ds[i].paint();
        }
        //*for each: gõ fore crt cách enter
        //nhược điểm là chạy từ đầu đến cuối
        for (Rectangle item : ds) {
            item.paint();
        }
        
        //*Tạo hình tròn:
        Disk d1 = new Disk("vàng", 3);//new disk này là gọi cái phễu của disk 
                                   //sau  đó truyền dữ liệu cho cái phễu đó,  
                                   //sau đó cái phễu đó dùng dữ liệu truyền vào
                                   //các ngăn (prop) của cái khuôn(class)
            //=> tk d1 sẽ trỏ vào đối tượng đc tạo ra từ new Disk đó
              //=>tk d1 ko phải là object đó mà là con trỏ chứa địa chỉ cảu dối 
                //tượng đó      
        d1.paint();   
        //*anh muốn lưu hình tròn và hình cn 
        //Tạo danh sách:
        Rectangle list[] = new Rectangle[5];
        list[0] = re1;
        list[1] = sq1;
        //list[2] = d1; d1 là 1 hình tròn nên ko thể về cùng nhà(mảng) vs bọn
            //Rectangle đc
        
        
        
    }
}
//Quy tắc trong lập trình quản lý là lưu tất cả vào trong 1 cái mảng


package data;
//Disk là cái khuôn dùng để đúc ra các object tròn
//hình tròn nào cx đc tạo ra từ cái khuôn này

public class Disk {
    //prop:
    private String color;
    private double radius;//bán kính, th từ cái nhỏ tạo ra cái to nên ta lưu cái
                            //nhỏ hơn
    public final static double PI=3.14; //hằng số là Full viết hoa
        //nên tạo biến số PI vì số PI trong MATH quá lớn và dài dòng gây khó khăn 
            //tính toán
        //thêm final thì là hằng số, thêm static là dù tạo ra vô số h trong
            //thì chỉ có duy nhất 1 số PI
 
    //cái phễu:
    public Disk(String color, double radius) {
        this.color = color;
        this.radius = radius;
    }
    
    //getter(mặc định dùng getter th vì chỉ khi cần đổi giá trị và 
        //cài mk ns cần setter)
    //Không cần số PI vì nó public nên ai cx lấy đc
    public String getColor() {
        return color;
    }
    public double getRadius() {
        return radius;
    }
    //getter cho diện tích và chu vi:
    public double getArea() {
        return PI*Math.pow(radius,2);
    }
    public double getPerameter() {
        return 2*PI*radius;
    }
    
    //show:
    public void paint(){
        String str = String.format("Disk     |%10s|%5.2f|%5.2f|%5.2f",
                                    color, radius, getArea(), getPerameter());
        System.out.println(str);         
    }
    
}

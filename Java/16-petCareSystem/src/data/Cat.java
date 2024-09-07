
package data;

public class Cat extends Pet{
    //props:
    private String ribbon;
    
    //constructor:
    public Cat(String id, String owner, String color, 
                    double weight, String ribbon) {
        super(id, owner, color, weight);
        this.ribbon = ribbon;
    }

    //getter:
    public String getRibbon() {
        return ribbon;
    }
    
    //setter:

    public void setRibbon(String ribbon) {
        this.ribbon = ribbon;
    }
    

    //showInfor:
    @Override
    public void showInfor() {//tạo ra chuỗi đẹp, in ra màn hình, ko xài đc
        String str = String.format("%4s|%-12s|%-12s|%6.2f|%s", 
                        id, owner, color, weight, ribbon);//tạo ra chuỗi đẹp
        System.out.println(str);//In huỗi đẹp ra màn hình
    }
    
    //toString():
        //nghiã là tạo ra chuỗi đẹp và dùng để ném ra bên ngoài, ai thích thì
        //có thể dùng thoải mái
    @Override
    public String toString() {
        String str = String.format("%4s|%-12s|%-12s|%6.2f|%s", 
                        id, owner, color, weight, ribbon);//tạo ra chuỗi đẹp
        return str;//ném chuỗi đẹp ra bên ngoài, ai thích thì xài tùy ý
    }
    
    
    
}

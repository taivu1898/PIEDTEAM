
package data;

public class Dog extends Pet{
    //props:
    private String necklace;
    
    //constructor:
    public Dog(String id, String owner, String color, 
                    double weight, String necklace) {
        super(id, owner, color, weight);
        this.necklace = necklace;
    }
    
    //getter:
    public String getNecklace() {
        return necklace;
    }

    public void setNecklace(String necklace) {
        this.necklace = necklace;
    }
    
    //setter:
    
    //showInfor:
    @Override
    public void showInfor() {//tạo ra chuỗi đẹp, in ra màn hình, ko xài đc
        String str = String.format("%4s|%-12s|%-12s|%6.2f|%s", 
                        id, owner, color, weight, necklace);//tạo ra chuỗi đẹp
        System.out.println(str);//In huỗi đẹp ra màn hình
    }
    
    //toString():
        //nghiã là tạo ra chuỗi đẹp và dùng để ném ra bên ngoài, ai thích thì
        //có thể dùng thoải mái
    @Override
    public String toString() {
        String str = String.format("%4s|%-12s|%-12s|%6.2f|%s", 
                        id, owner, color, weight, necklace);//tạo ra chuỗi đẹp
        return str;//ném chuỗi đẹp ra bên ngoài, ai thích thì xài tùy ý
    }
}

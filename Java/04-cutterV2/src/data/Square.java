
package data;
//Rectangle is a Square(Sai)
//Square is a Rectangle
//con           cha

public class Square extends Rectangle{
    //1.liệt kê prop riêng của con nhưng Square thì width==height là edge
        //tạo Square thì cần cần 1 edge ==width==height
    public Square(String color, double edge) {
        super(color, edge, edge);
        //=>tạo ra Square ko có thuộc tính edge nhưng có width==height==edge
    }
    //độ lại
    @Override
    public void paint(){
        String str = String.format(
                "Square:|%10s|%5.2f|%5.2f|%5.2f|%5.2f",//đấu - căn lề bên trái
                 color, width, height, getPerimeter(), getArea());
        System.out.println(str);
    }
    
}

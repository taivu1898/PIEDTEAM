
package data;

public class Rectangle {
    //prop
    protected double width;//chiều dài
    protected double height;//chiều rộng
    //freight: cân nặng() dành cho vận chuyển hàng hóa)
    protected String color;
    
    
    //constrcutor:
    public Rectangle(String color, double width, double height) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    //getter

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }
    
    public String getColor() {
        return color;
    }

    public double getPerimeter() {
        return (width+height)*2;
    }
    public double getArea(){
        return width*height;
    }
    
    //show:
    public void paint(){
        String str = String.format(
                "Rectangle:|%10s|%5.2f|%5.2f|%5.2f|%5.2f",
                 color, width, height, getPerimeter(), getArea());
        System.out.println(str);
    }
}

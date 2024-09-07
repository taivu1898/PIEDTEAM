
package data;
//Triangle là cái class chuyên dùng để đúc ra các bức tượng (object, tam giác)
//có thể nói rằng tất cả các hình tam gíac đều đc tạo ra từu cái khuông này

public class Triangle {
    //props: thuộc tính
    protected double edgeA;//để private để ko bị user set
    protected double edgeB;
    protected double edgeC;
    //double perimeter = edgeA + edgeB + edgeC;chu vi
        //=>stateless
        //những thuộc tính nào mà có thể suy ra đc từ những thuộc tính đã có
            //thì ko nên lưu vì lưu trữ ng ta có thể truy cập vào(hoặc hack) để
            //thay đổi giá trị làm mất đi tính đồng nhất
    //*ko nên tạo thuộc tính chu vi và diện tích vì:
        //1. Nếu mình tạo ra nó thì cần gắn setter và hetter 
            //=>user có thể set giá trị lên nó
            //và tất nhiên có thể set sai giá trị so vs 3 cạnh
        //2. Cái gì có thể tính đc = những cái trc đó thì ko nên lưu
        //=> nên tạo 1 hàm tính chu vi, ai gọi thì mình lấy 3 cạnh ra tính
    
    
    //cái phễu: constructor:
        //chuột phải -> insert -> constructor
    public Triangle(double edgeA, double edgeB, double edgeC) {
        this.edgeA = edgeA;
        this.edgeB = edgeB;
        this.edgeC = edgeC;
    }
    
    //getter: chuột phải -> insert -> getter
    public double getEdgeA() {
        return edgeA;
    }

    public double getEdgeB() {
        return edgeB;
    }

    public double getEdgeC() {
        return edgeC;
    }
    
    public double getPerimeter() {
        return edgeC + edgeB + edgeA;
    }
    
    public double getArea() {
        double p = getPerimeter()/2;
        //trong java ko có gì là ko có ng sở hữu, chịu trách nhiệm
        //Math là cái class chauws sqrt
        return Math.sqrt(p*(p-edgeA)*(p-edgeB)*(p-edgeC));
    }
    
    //show:
    public void showInfor(){
        String str = String.format("Triangle     |%5.2f|%5.2f|%5.2f|%5.2f|%5.2f",
                                    edgeA, edgeB, edgeC,
                                    getPerimeter(), getArea());
        System.out.println(str);
    }
    
    
}

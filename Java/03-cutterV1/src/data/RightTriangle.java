package data;
//Righttriangle là cái khuôn chuyên dùng để đúc ra hình tam giác vuông
//bây giờ phát hiện ra là bọn này giống nhau lắm, có thể là chúng có quan hệ 



//huyết thống

//ko bik ai là cha ai là con
//cha con là mối quan hệ "is a"
//Triangle là Righttriangle(sai)
//Righttriangle là Triangle(đúng)
//=>con             cha
//=> công thức xác định cha con
//xác định cha con thông qua is a
//Tại sao phải nhận cha: bản chất là Righttriangle ko nhận cha
//có bình thường ko? bình thường nhưng mệt lắm
//tại sao phải nhận cha:
    //1.những gì cha làm tốt r thì mình lấy xài, ko viết lại
    //extends: mở rộng(là đại diện cho kế thừa nhưng ko phải kế thừa)
public class RightTriangle extends Triangle{
    //tam giác vuông là phiên bản mở rộng của hình tam giác
    //nêu ra các prop mà cha ko có
    //ko có gì khác so vs cha cả
    
    //constructor
    public RightTriangle(double edgeA, double edgeB) {
        super(edgeA, edgeB, Math.sqrt(edgeA*edgeA+edgeB*edgeB));
        //super: bề trên: new Triangle
    }
    
    //khỏi getter và showInfor: vì t kế thừa ba tao, tao có rồi
    
    //tui độ lại hàm của bố t để hợp vs t
    @Override
    public void showInfor(){
        String str = String.format(
                "RightTriangle     |%5.2f|%5.2f|%5.2f|%5.2f|%5.2f",
                 edgeA, edgeB, edgeC,getPerimeter(), getArea());
        //ở đây do cha để private nên phải dùng gêtdege
        //nhưng v thì mệt lắm nên ta thay đổi biến của cha thành protected luôn:)
        System.out.println(str);
    }
   
}

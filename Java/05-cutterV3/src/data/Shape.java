package data;
/*
Shape đc xem là cái khuôn, đc xem là cha của tất cả các hình học
    trong đó bao gồm tròn, vuông và chữ nhật
    nhưng nếu như bọn con muốn nhận shape là cha thì chúng nó phải gom các điểm 
    chung và cho cha giữ
=> để sau này khi bọn nó kế thừa ổ thì sẽ đc khôi lại những thuộc tính ban đầu
=> tính chất kế thừa(khôi phục những điểm chung) và bất hiếu(ko đưa cha những 
    thuộc tính  ms như edge, radius,...)
=>Shape là cha thì nó chỉ chứa những điểm chung của các con mà thôi
*/
public abstract class Shape {
    //*prop:
    protected String color;//màu cảu hình đó
    protected String owner;//ng đã cắt cái hình đó
    //nếu để default thì các class muốn sử dụng phải chung pks
    //private double radius;=> hình vuông sẽ có bán kính => vô lý
    
    //*constructor:
    public Shape(String owner, String color) {
        this.color = color;
        this.owner = owner;
    }
    
    //*getter: 
    public String getColor() {
        return color;
    }
    public String getOwner() {
        return owner;
    }
    public abstract double getArea();
    public abstract double getPerameter();
    public abstract void paint(); 
    //tại sao ko viết công thức tính chu vi và điện tích, paint?
        //vì ko có 1 công thức nào áp dụng cho cả hình tròn và hình vuông
        //nếu ta bỏ bất kỳ 1 công thức nào vào method này thì các thằng con sẽ
        //phải kế thừa, thì nó sẽ nhận lấy công thức sai
        //=>cha áp đặt công thức lên các con, và cha ko muốn như vậy
        // nên ổ chọn là ko có công thức => method này là abstract method
    //*=> nếu khuốn này đag chứa abstract method thì nó phải là abstract class
    //nhưng nếu nó là abstract class thì ko nhất thiết phải 
        //có chứa abstract method
    
  
}
//=>*Tại sao Shape là abstract class?
//  vì nó chứa chứa abstract method
//=>vậy tại sao nó phải chứa abstract method, nó ko bỏ 
//  vào 1 công thức đi
//  vì ko có công thwucs chung cho các người con.Nếu bỏ vào
//  thì các người con sẽ bị áp đặt công thức, ko đúng

//=>*Vậy abstract class có tạo object đc ko?
/*
    Abstract class giống như 1 cái khuôn bị thủng
mà nếu bị thủng thì ko đúc đc, vì object đc tạo ra có method ko định nghĩa đc,
ko xài đc

Vậy abstract class cần làm gì? nó cần 1 class khác kế thừa và 
    vá lỗ thủng mà nó để lại
    cần class khác kế thừa nó sau đó thừa hưởng những abstract method từ 
    Shape, rồi định nghĩa lại(vá lỗ)(getperemeter,getArea, paint)

Vậy nếu class kahcs sau khi kế thừa Shape lại ko chịu định nghĩa các abs method
    đc thừa kế thì? Class con đó sẽ trở thành abs class

VD: abs class Shape
        abs method getperemeter
        abs method getArea
        abs method paint
    class Rectangle extends Shape
        //lúc này Rectangle đủ điều kiện(prop) vá lại lỗ thủng của nhữung
            //abs kế thừa từ Shape
        method getperemeter
        method getArea
        method paint
        //nhưng nếu Rectangle ko có điều kiện để vá thì abs kế thừa từ Shape
            //vẫn là abs => class Rectangle sẽ biến thành class abs Rectangle
            //=> cần 1 tk con của Rectangle định nghĩa lại nếu Rectangle vẫn 
            //muốn vá lại và tạo object=>> đợi đời sau cho tới khi vá đc thì th
*/
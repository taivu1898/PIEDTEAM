package data;
//Rectabgle alf con cảu Shape
//nếu nhận Shape làm cha thì nó phải thừa hưởng
//1 đống abs method và có nhiệm vụ vá lỗ nếu ko thì
//nó sẽ trở thành abs class

//0.Tạo class con
//1.khai báo đặc tính riêng của con
//2.cho con nhân cha thông qua từ khóa "extends"
//3.Tạo phễu
//4.Làm phần việc mà cha giao cho nếu có
//      là bổ sung code cho những abs method
//      nếu mà ko chịu làm thì mày sẽ là abs class và đời con phải làm
//      Vậy nếu cha t ko có abs method nào thì sao? thì thôi, sang chế độ
//      kiếm xem có cái nào độ chế đc thì độ chế
public class Rectangle extends Shape{
    //prop
    protected double width;
    protected double height;
    
    //tạo phễu:
    public Rectangle(String owner, String color, 
                     double width, double height) {
        super(owner, color);
        this.width = width;
        this.height = height;
        //phải luôn luôn đặt super lên đầu trong cái phễu vì super là new cha 
            //thì phải tạo tk cha r ms cộng thêm mấy cái đặc tính của tk con
    }
    
    //getter:
    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }
    
    @Override
    public double getArea() {
        return width*height;
    }

    @Override
    public double getPerameter() {
        return (width+height)*2;
    }

    @Override
    public void paint() {
        String str = String.format("%15s|%10s|%10s|%5.2f|%5.2f|%5.2f|%5.2f",
          "Rectangle", owner, color, width, height, getArea(), getPerameter());
        System.out.println(str);
    }
    
}

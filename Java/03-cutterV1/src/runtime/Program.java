package runtime;
//Bé Na học lớp 5 
//Bé Na cần lưu raats nhiều hình tam gaics có đủ loại

import data.RightTriangle;
import data.Triangle;

abstract 
public class Program {

    public static void main(String[] args) {
        Triangle tr1 = new Triangle(4, 7.5, 10);
        tr1.showInfor();
        //crt cách rồi new crt cách enter
        RightTriangle rit = new RightTriangle(3, 4);
        rit.showInfor();//do hàm độ đứng trc nên hàm của cha nên để vậy đc
    }
}
//Ta có 2 class con
//=> class con kế thừa class cha 
//thì có nghĩa là con sẽ kế thừa hết những gì cha có
//Class con > class con vì nó là phiên bản mở rộng của cha
//-> tk con luôn luôn có kích thước > cha vì bản chất của kế thừa là thừa hưởng
//những cái cũ r mở rộng thêm, độ thêm
//Trong constructor của con thì nó gọi constructor của cha bằng từ khóa super
//=>tức là muốn tạo con thì phải cha trc => trong con có cha => con lớn hơn cha

//Override là hiện tượng chỉ xuất hiện trong mối quan hệ cha con (is a)
//  khi mà tk con muốn độ lại method của tk cha
//  nó tạo ra 1 method có tên giống method của cha
//  (giống|khác parameter và body)

//Overload: là hiện tượng diễ ra ko cần mối quan hệ
//  khi mà method này trùng tên method kia và khác parameter
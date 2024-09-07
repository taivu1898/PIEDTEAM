/*
2 object có thể so sánh bằng những cách nào ?
    + == : so sánh địa chỉ
    +ta có .equalTo() : boolean và .compareTo() : int
        -> chỉ vận hành với Wrapper class và String
    +Nếu anh muốn so sánh 2 sinh viên thì equalTo() và compareTo()
        sẽ ko đáp ứng đc
    +Bản chất của so sánh object là vì 1 đối tượng đc mô tả rất nhiều
        props phức tạp nên ko thể nhìn qua loa rồi nói ai hơn ai được
        mình phải quy từ object phức tạp và thành so sánh String hoặc primitive
    +sort: sắp xếp
        comparable: tính đố kị, và comparator: anh trọng tài
*/
package runtime;

import data.StudentV1;
import data.StudentV2;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Program {

    public static void main(String[] args) {
        sortV1();//call
        sortV2();
    }
    
    public static void sortV1(){
        //tạo ra danh sách sinh viên
        ArrayList<StudentV1> stuList = new ArrayList<>();
        stuList.add(new StudentV1("SE004", "Trần", "Dũng", 7));
        stuList.add(new StudentV1("SE003", "Lý", "Cường", 8.5));
        stuList.add(new StudentV1("SE005", "Võ", "Em", 9.9));
        stuList.add(new StudentV1("SE001", "Lê", "An", 6));
        stuList.add(new StudentV1("SE002", "Nguyễn", "Bình", 9.2));
        /*
            stuList lúc này là 1 cái mảng chứa rất nhiều StudentV1 là 
        những đứa sinh viên ko có tính đố kỵ, tức là bọn chúng ko có
        xu hướng muốn so sánh lẫn nhau, vậy nên sẽ ko thể sắp xếp
        
        Lúc này em cần 1 anh trọng tài(Comparator) đứng ra giúp mình so sánh 
        2 sinh viêm bất kỳ, vậy thì comparator là gì?:
            +về mặt hiểu: Comparator là 1 anh trọng tài đứng giữa 2 object
                ảnh sẽ dựa vào yếu tố nào đó(độ dài, màu da) để đưa ra quyết 
                định ai lớn hơn ai.
            +về mặt lý thuyết: Comparator là 1 interface có 1 method duy nhất
                là compare(): mình phải implement 1 tiêu chí mà mình muốn so 
                sánh vào đây, nếu thỏa điều kiện thì return 1(lớn), còn ko thì
                return -1(bé)
        sau khi tạo ra anh trọng tài có thể dùng để bỏ vào danh sách để ảnh so
        sánh và dẫn đến sắp xếp thông qua Collections.sort()
        */
        //tạo ra anh tọng tài có tên là 'ordById'(thứ tự dựa vào Id):
        Comparator ordById = new Comparator<StudentV1>() {
            @Override
            public int compare(StudentV1 t1, StudentV1 t2) {
                if(t1.getId().compareTo(t2.getId())>0){
                    return 1;//t1 > t2
                }
                return -1;//t1 < t2
            }
        };
        //sau khi có anh trọng tài rồi thì mình sẽ nhét ảnh vào danh sách của 
            //mình để ảnh so sánh các sinh viên cho mình từ đó dẫn tới "sắp xếp"
        //Collections là class chứa rất nhiều method phục vụ cho những đối tượng
            //thuộc Collection. Collection là tập hợp các loại mảng đặc biệt
            //trong đó có ArrayList(nói 1 cách khác thì ArrayList 
            //là 1 dạng Collection)
        Collections.sort(stuList, ordById);
        
        //in ra:
        for (StudentV1 studentV1 : stuList) {
            studentV1.showInfor();
        }
                
    }
    
            

    public static void sortV2(){
        ArrayList<StudentV2> stuList = new ArrayList<>();
        stuList.add(new StudentV2("SE004", "Trần", "Dũng", 7));
        stuList.add(new StudentV2("SE003", "Lý", "Cường", 8.5));
        stuList.add(new StudentV2("SE005", "Võ", "Em", 9.9));
        stuList.add(new StudentV2("SE001", "Lê", "An", 6));
        stuList.add(new StudentV2("SE002", "Nguyễn", "Bình", 9.2));
        //stuList bây giờ toàn chứa StudentV2
        //là những tk có sẵn trong mình tính đố kỵ, ganh đua, nên chúng ko cần 
        //anh trọng tài nửa, chúng tự so sánh lẫn nhau
        Collections.sort(stuList);//ko cần trọng tài
        
    }
}
//*Bản chất của hàm là tránh lặp lại code
    //trong java hàm ko có static thì hàm sẽ là method(được phân thân nhiều)
    //java muốn viết hàm thì phải thêm static để tránh phân bản(ko lặp code)
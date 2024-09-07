
package runtime;

import java.util.StringTokenizer;

public class Program {

    public static void main(String[] args) {
        //trong Java và hầu hết các ngôn ngữ trừ c thì String là 1 object
        String lastName = new String("Điệp");
        String tmp  = lastName;//tmp tham chiếu lastName
        String firstName = "Lê";//pool(pool nằm trong heap)
        
        //String là 1 object immutable
            //immutable là object bất biến , ko thể bị tác động, chỉnh sửa
            //các thao tác lên immutable thường sẽ trả về 1 object kết quả
        lastName =  lastName.concat(firstName);
        System.out.println(firstName);
        System.out.println(lastName);
        System.out.println(tmp);
        
        //String buffer và String builder
            //2 tk này cx là String nhưng lại là mutable
            //mutable object có thể đc chỉnh sửa sau khi đã đc tạo
        StringBuilder lastName2 = new StringBuilder("Điệp");
        StringBuilder firstName2 = new StringBuilder("Lê");
        StringBuilder tmp2 = lastName2;
        lastName2.append(firstName2);//nối
        System.out.println(lastName2);
        System.out.println(tmp2);
                
        //StringToKennizer: split
        String information = "SE123|Điệp Đẹp Trai|2004|9.9";
        StringTokenizer st = new StringTokenizer(information, "|");
        System.out.println(st.countTokens());//4
        System.out.println(st.hasMoreElements());
        while(st.hasMoreElements()){
            System.out.println(st.nextToken());
        }
        System.out.println(st.countTokens());//4
        System.out.println(st.hasMoreElements());
        System.out.println(information);
        
        //playWishStringMethod();
        
        playStringComparision();
    }
    //những cái hàm cùng cấp, bậc, cùng 1 class và xài trực tiếp trong main, 
        //đều dùng static để ko bị nhân bản, phân chia ra, ko để tạo ra object
    public static void playWishStringMethod(){
        //khi dùng String, phải luôn nhớ rằng String là object immutable
            //mọi thao tác cảu em đều ko ảnh hưởng String, các method thường
            // có xu hướng trả ra object kết quả, nên lúc xài phải để ý xem nó 
            //tả về cáo gì
        String str1 = "ĐIỆP";
        String str2 = "Đẹp TRai";
        //str1.concat(str2);//vô nghĩa | ngu
        str1 = str1.concat(str2).concat("Quá").toUpperCase();
        //concat trả về String nên chấm đc tiếp
        //tới đây toUpperCase in ra nên ko chấm đc nửa
        System.out.println("Str1 nè: " + str1);
        
        str1 = "Điệp Đẹp Trai";
        str2 = "Đẹp";
        //tìm chuỗi trong chuỗi:
        System.out.println(str1.indexOf(str2));//5
        
        //tìm kí tự từ vị trí cho sẵn:
        System.out.println(str1.charAt(9));//T
        
        //kiểm tra xem có tồn tại:
        System.out.println(str1.contains(str2));//true, hàm này quan trọng và 
                                                    //dùng nhìu
        
                                                    
    }
    
    public static void playStringComparision(){
        String s0 = new String("BÉ HỨA HỌC HÀNH CHĂM NGOAN");
        String s1 = "BÉ HỨA HỌC HÀNH CHĂM NGOAN";
        String s2 = "BÉ HỨA HỌC HÀNH CHĂM NGOAN";
        String s3 = "bé hứa học hành chăm ngoan";
        String s4 = new String("BÉ HỨA HỌC HÀNH CHĂM NGOAN");
        String s5 = new String("BÉ HỨA HỌC HÀNH CHĂM NGOAN");
        
        System.out.println(s0==s1);//ss địa chỉ => false
        System.out.println(s1==s2);//cùng pool mà cùng giá trị => true
        System.out.println(s2==s3);//cùng pool mà cùng giá trị => f
        System.out.println(s3==s4);//f
        System.out.println(s4==s5);//f
        
        //vậy chuỗi mà ss dấu == là so địa chỉ
        //muốn so giá trị thì:
        System.out.println(s0.equals(s1));//true
        System.out.println(s3.equalsIgnoreCase(s4));//false
        System.out.println(s1.compareTo(s2));//0
    }
}
//java ko dùng để học mảng, java mảnh về hàm tìm kiếm, ít hàm xử lý
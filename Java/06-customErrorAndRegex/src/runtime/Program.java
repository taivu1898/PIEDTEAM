
package runtime;

import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        //1 - Regex ?(dùng cho mọi ngôn ngữ trừ c)
          //Regular expression | pattern | biểu thức chính quy
            String str = "SE1234567";
            String regex = "^[Ss][Ee]\\d{7}$";
            System.out.println(str.matches(regex));//hỏi str có đúng dạng regex 
                                                      //ko đúng in true, sai 
                                                      //in false 
            //học viết
            //1. phân biệt hoa thường: (?i)
            checkString("name","name");//true
            checkString("nAme","name");//false
            checkString("nAme","(?i)name");//true vì ?i ko phân biệt hoa hay 
                                //ko hoa ?i này chỉ dùng cho java ko dùng 
                                //cho javastrip

            //2. 1 ký tự bất kỳ trừ đấu enter: .
            checkString("may","m.y");//true
                //may|mey|m0y|m\y|m.y   true
                //my|m|y|   false

            //3. lập lại từ 0 đến nhìu lần: *
               //{3}: lặp lại 3 lần
               //{2,4}: lập lại từ 2 đến 4 lần 
               //{3,}: từ 3 lần trở lên
               //{0,}: * : từ o trở lên
               //{1,}: + : từ 1 lần trở lên
               //{0,1}: ? : từu 0-1 lần, có hoặc ko
            checkString("meey","me*y");//true
                //my|mey|meey|meeeeey|   true
                //me | ey   false
            checkString("merererery","m(er)*y");//true

            //4. Phần tử nằm trong set[....]
            checkString("mwy","m[ewr]y");//true
                //mey|mwy|mry   true
                //còn lại false hết
            checkString("may","m[^ewr]y");//true
                //dấu ^ là phủ định lại cái set
                //mey|mwy|mry   false
                //còn lại true hết
            checkString("mwy","m[ewr]*y");//true
                //mewry|mwwwwwy|mrrreey   true
                //còn lại false hết

            //khớp chữ:
                //[a-z] : 1 ký tự trong khoảng a-z
                //[a-z] : 1 ký tự trong khoảng A-Z
                //[a-zA-Z] : 1 chữ hoa|thường đều đc
                //[0-9] : 1 chữ số trong khoảng 0-9
            checkString("mwy","m[a-z]y");//true:lấy từ a-z còn lại là sai
            checkString("mWy","m[A-Z]y");//true:lấy từ A-Z còn lại là sai
            checkString("mwy","m[a-zA-Z]y");//true: lấy từ a-z hoặc A-Z còn  
                                                        //lại là sai
            checkString("toi bi gay","toi (bi|ko|rat) gay");//true

            //shorthand: viết tắt
                // \w: [A-Za-z0-9]      \W: phủ định lại \w
                // \d: [0-9]            \D: phủ định
                // \s: space            \S: phủ định
        //2 - Custom Error
            //Error compalation: lỗi phát sinh trong quá trình biên dịch
            //Error runtime: lỗi phát sinh trong quá trình vận hành
            
            //Scanner: 1 class chứa các method liên quan đến việc nhập giá trị
            Scanner sc = new Scanner(System.in);
            int age;
            try{//chạy thử để xem có bắt đc cục lỗi ko, ko thì catch ko bắt đc 
                System.out.println("Nhập tuổi đi: ");
                age = sc.nextInt();
                //nhập >=10 và <=30 thì sẽ ko bị bug
                    //=> chạy xuống if r làm if cho xong =>r in ra Ahihi đồ chó
                //nếu nhập láo thì sẽ tạo lỗi và catch sẽ bắt đc               
                if(age < 10 || age > 30){//tự tạo ra lỗi vì mình ghét những 
                                            //đứa lớn hơn 30 hoặc < 10
                    throw new Exception();//ném tk lỗi ra thì tk catch sẽ bắt đc
                                            //vô catch in ra ngu
                }
            }catch(Exception e){//1 ngoại lệ tên e        
                //e.notify("ngu");//sữa lỗi thành 1 đoạn chữ gì đó r in ra 
                                        //hoặc ko in
                System.out.println("ngu");
            }
            //dùng try catch khi có xử lý liên quan đến IO(nhâp, xuất, ghi đè,..
                //dữ liệu)
            System.out.println("Ahihi đồ chó");
    }
    public static void checkString(String str, String regex){
        System.out.println(str.matches(regex));
    }
}
//trong java mảng và chuỗi là 1 object
//stack có 1 MB
//lynux có 8 MB
/*
BTVN:
    Regex về tiền tệ: 100.000.000VND
    Regex cho email
*/

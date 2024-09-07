
package utils;

import java.util.Scanner;

/*
Inputter là 1 cái khuôn những ko dùng để đúc ra object
    mà dùng class này để lưu nhưng hàm hỗ trợ cho việc nhập
Vì là hàm nên static method
*/
public class Inputter {
    //props:tạo 1 cái scanner dùng chung cho các hàm
    public static Scanner sc = new Scanner(System.in);
    
    //những method hỗ trợ cho việc nhập:
    
        //+method ép nhười dùng nhập số nguyên chuẩn:
    public static int getAnInteger(String inpMsg, String errMsg){
        System.out.println(inpMsg);//hiển thị câu mời nhập
        while(true){
            try {
                int number =  Integer.parseInt(sc.nextLine());
                return number;//nếu như ở trên ổn thỏa thì ném con số ra ngoài
            } catch (Exception e) {
                System.err.println(errMsg);
            };
        }
    }
    
        //+method nhập số nguyên chuẩn nhưng phải ở trong khoản yêu cầu:
    public static int getAnInteger(String inpMsg, String errMsg,
                                    int lowerBound, int upperBound){
        //trường hợp nếu users nhập ngược
        if(lowerBound > upperBound){
            int tmp = lowerBound;
            lowerBound = upperBound;
            upperBound = tmp;
        }
        System.out.println(inpMsg);//hiển thị câu mời nhập
        while(true){
            try {
                int number =  Integer.parseInt(sc.nextLine());
                if(number < lowerBound || number > upperBound){
                    throw new Exception();
                }
                return number;//nếu như ở trên ổn thỏa thì ném con số ra ngoài
            } catch (Exception e) {
                System.err.println(errMsg);
            };
        }
    }
    
        //+method ép nhười dùng nhập số thực chuẩn:
    public static double getADouble(String inpMsg, String errMsg){
        System.out.println(inpMsg);//hiển thị câu mời nhập
        while(true){
            try {
                double number =  Double.parseDouble(sc.nextLine());
                return number;//nếu như ở trên ổn thỏa thì ném con số ra ngoài
            } catch (Exception e) {
                System.err.println(errMsg);
            };
        }
    }
    
        //+method nhập số thực chuẩn nhưng phải ở trong khoản yêu cầu:
    public static double getADouble(String inpMsg, String errMsg,
                                    double lowerBound, double upperBound){
            //trường hợp nếu users nhập ngược
        if(lowerBound > upperBound){
            double tmp = lowerBound;
            lowerBound = upperBound;
            upperBound = tmp;
        }
        System.out.println(inpMsg);//hiển thị câu mời nhập
        while(true){
            try {
                double number =  Double.parseDouble(sc.nextLine());
                if(number < lowerBound || number > upperBound){
                    throw new Exception();
                }
                return number;//nếu như ở trên ổn thỏa thì ném con số ra ngoài
            } catch (Exception e) {
                System.err.println(errMsg);
            };
        }
    }
    
        //+nhập chuỗi ko đc để trống:
    public static String getString(String inpMsg, String errMsg){
        System.out.println(inpMsg);
        while(true){
            try {
                String str = sc.nextLine();//này nhập chuỗi và chuỗi là ko có
                                        //giới hạn: bỏ trống .. đều đc
                                        //=> ko bao giwox có lỗi
                if(str.isEmpty()){
                    throw new Exception();
                }
                return str;
            } catch (Exception e) {
                System.out.println(errMsg);
            }
        }
    }
    
        //+nhập chuỗi ko đc để trống và phải đúng regex:
    public static String getString(String inpMsg, String errMsg, String regex){
        System.out.println(inpMsg);
        while(true){
            try {
                String str = sc.nextLine();//này nhập chuỗi và chuỗi là ko có
                                        //giới hạn: bỏ trống .. đều đc
                                        //=> ko bao giwox có lỗi
                if(str.isEmpty() || !str.matches(regex)){
                    throw new Exception();
                }
                return str;
            } catch (Exception e) {
                System.out.println(errMsg);
            }
        }
    }

        //+Hàm nhập ngày tháng năm theo format:
    //public static 

}

/*
Khi mà con ngựa mà nó kế thừa Herbivore là nó muốn?
Kế thừa có 3 ý nghĩa:
    +thừa hưởng những gì cha có
    +Khôi phục lại những gì đã cho cha giữ
    +ko cần làm lại những gì tiền bối đã làm tốt rồi
 */
package data;

import java.util.Random;

public class Horse extends Herbivore implements StudyEnthusiasts{
    //props:
    private String colorSaddle;
    //con ngựa vừa học vừa hú hí nên khả năng tiếp thu cảu nó rất kém:
    //  mà con ngựa nào cx như vậy nên mình sẽ lưu thêm khả năng tiếp thu
    //  cho tất cả con ngựa
    public static final double RECEPTIVE = 30;//max khả năng tiếp thu tối đa 
                                        //của tất cả con  ngựa là 30

    //constructor:
    public Horse(String name, int yob, double weight, String colorSaddle) {
        super(name, yob, weight);
        //super: new cha
        this.colorSaddle = colorSaddle;
    }
    
    //getter:
    public String getColorSaddle() {
        return colorSaddle;
    }

    //mỗi con ngựa tuy học khác nhau nhưng khả năng tiếp thu tối đa là 30
    //nhưng ko phải con ngựa nào cx 30 điểm, random lắm
    @Override
    public double study() {
        return new Random().nextDouble()*RECEPTIVE;
    }

    @Override
    public void showLearningOutComes() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f|%s", 
                        "Horse", name, yob, weight, study(), colorSaddle);
        System.out.println(str);
    }

    @Override
    public double studyHard() {
        return study()*1.5;
    }

    @Override
    public void showProfile() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f|%s", 
                        "Horse", name, yob, weight, studyHard(), colorSaddle);
        System.out.println(str); 
    }
    
}

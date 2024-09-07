/*
Hunter ko ăn cỏ, chỉ là Hunter
    bác ko có dây mơ rễ má gì vs khỉ và ngựa
Tao muốn Hunter tham gia vào hội ham học
    ban đầu bác thợ săn vừa học vừa ngắm phò mã, chỉ cần thma gia hội này
    thì bác sẽ tập trung học, ko màn đến bửa tối của mình
nếu Hunter tham gia vào clb thì nó đc gì?
    Hunter sẽ ko đc thừa kế bất cứ props nào nhưng đc xài chung FAN
    Hunter sẽ đc 2 cái lỗ(2 abs method)
    extends là mở rộng (props riêng, override method(implement), method riêng)
        => dùng cho class vì kế thừa props và method(có thể override)
    implements: chỉ override abs method (dùng cho interface thay thế cho extends
        vì chỉ kế thừa và vá abs method)
 */
package data;

import java.util.Random;

public class Hunter implements StudyEnthusiasts{
    //props: 
    private String name;
    private int yob;
    private double weight;
    private String gear;
    //bác vì mãi mê nhìn "phò mã" nên bác học rất mất tập trung
    public static final double RECEPTIVE  = 50;
    
    //constructor:
    public Hunter(String name, int yob, double weight, String gear) {
        this.name = name;
        this.yob = yob;
        this.weight = weight;
        this.gear = gear;
    }
    
    //getter:
    public String getName() {
        return name;
    }

    public int getYob() {
        return yob;
    }

    public double getWeight() {
        return weight;
    }

    public String getGear() {
        return gear;
    }
    
    //method Hunter:

    public double study() {
        return new Random().nextDouble()*RECEPTIVE;
    }
    
    //in ra kết quả học bình thường
    public void showLearningOutComes() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f|%s", 
                        "Hunter", name, yob, weight, study(), gear);
        System.out.println(str);
    }

    //chỉ số học chăm chỉ có đc khi tham gia vào StudyEnthusiasts
    @Override
    public double studyHard() {
        return study()*1.5;//học chăm chỉ so với bình thường
    }

    //in ra kết quả học chăm chỉ có đc khi tham gia vào StudyEnthusiasts
    @Override
    public void showProfile() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f|%s", 
                        "Hunter", name, yob, weight, studyHard(), gear);
        System.out.println(str);    }
}

/*
Con khỉ thì ko có gì khác với herbivore trừ việc có RECEPTIVE là 70

quá sợ bác thợ săn nên nó sẽ ko tham gia StudyEnthusiasts
(con khí vốn rất thông minh nên khi thấy bác thợ săn sẽ chạy)
=> ko tham gia StudyEnthusiasts 
 */
package data;

import java.util.Random;

public class Monkey extends Herbivore{
    //props:
    public static final double RECEPTIVE = 70;
    
    //constructor:
    public Monkey(String name, int yob, double weight) {
        super(name, yob, weight);
    }
    
    //getter
    
    //method study:
    @Override
    public double study() {
        return new Random().nextDouble()*RECEPTIVE;
    }

    @Override
    public void showLearningOutComes() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f", 
                        "Monkey", name, yob, weight, study());
        System.out.println(str);
    }
    
}

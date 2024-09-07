/*
Hunter ko ăn cỏ, chỉ là Hunter
 */
package data;

import java.util.Random;

public class Hunter {
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

    public void showLearningOutComes() {
        String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f|%s", 
                        "Hunter", name, yob, weight, study(), gear);
        System.out.println(str);
    }
}

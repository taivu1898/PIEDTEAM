//xin video
package runtime;

import data.Herbivore;
import data.Horse;
import data.Hunter;
import data.Monkey;
import data.StudyEnthusiasts;
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        Monkey m1 = new Monkey("Rafiki", 1998, 210);//the lion king
        Monkey m2 = new Monkey("Abu", 1994, 30);
        Horse h1 = new Horse("Rarity", 2015, 9, "none");
        Herbivore h2 = new Horse("Roach", 2019, 170, "Gray");
        Hunter hun1 = new Hunter("Thợ săn vượn", 1999, 64, "Nỏ");
        
        ArrayList<StudyEnthusiasts> stuList = new ArrayList<>();  
        stuList.add(h1);
        stuList.add((Horse)h2);//ép kiểu
        stuList.add(hun1);
        
        //hôm nay mọi người đều học chăm chỉ
            //thì có 1 con lười(Sloth) đến học, tưởng là 1 học sinh mới 
            //hóa ra chính là cái con chùm kín mít
        //anh muốn lưu con lười thì phải làm sao:
        //1.Tạo con lười bằng class Herbivore như lần trc(anonymours)
            //nếu lần này dùng Herbivore thì ko nhét vào stuList đc vì stuList 
            //là hội ham học
        //2.tạo class Sloth và cho Sloth implements StudyEnthusiasts
            //đâu phải con lười nào cx ham học đâu, mình code như 
            //này là mình ép tất cả lười trên thế giới đều ham học
            
            //con lười của mình là 1 con lười rất đặc biệt so vs giống loài của
            //nó nên mình ko xem nó là 1 con lười bth mà nên xem nó là 1 loài 
            //đặc biệt ham học
        //3.tạo con lười bằng anonymours thông qua StudyEnthusiasts
            //(1 trong 3 cách dùng anonymours, sử dựng để tạo các cá thể đặc biệt
                    //khác với những cái(loài) mà đã biết, thấy)   
    StudyEnthusiasts xxx = new StudyEnthusiasts(){
            @Override
            public double studyHard() {
                return 80*1.5;
            }

            @Override
            public void showProfile() {
                String str = String.format("%-20s|%-20s|%4d|%6.2f|%6.2f", 
                                    "Sloth", "Flash", 2019, 120F, studyHard());
                //chỗ 120 phải thêm F vì ta đag truyền trực tiếp 1 giá trị vào
                System.out.println(str);
            }
        
    };
    stuList.add(xxx);
    }
    
}

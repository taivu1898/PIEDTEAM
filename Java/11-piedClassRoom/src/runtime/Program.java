package runtime;

import data.Herbivore;
import data.Horse;
import data.Hunter;
import data.Monkey;
import java.util.ArrayList;

/*
BỐI CẢNH: mình có 1 nhiệm vụ là phổ cập kiến thức cho muôn loài
    mình ko dậy cho con chó con mèo bình thường nửa
    mình dạy cho những con vật hoang dã
    ngày đầu tiên anh đến lớp anh đã gặp đc 2 con vật rất dễ thương
    đó là ngựa và khỉ 

Muốn lưu khỉ và ngựa về cùng 1 nhà là dễ, thông qua cha là Herbivore
Anh muốn lưu thêm Hunter vào cùng 1 nhà thì phải có cha là ai? ko có
    trong câu truyện này sự khác nhau về mặt sinh học là quá lớn
    mình ko thể ghép 2 kẻ thù về cùng 1 nhà như thế
    chúng ta chỉ có 1 điểm chung duy nhất đó là con nào thì cx ham học cả
*/
public class Program {

    public static void main(String[] args) {
        Monkey m1 = new Monkey("Rafiki", 1998, 210);//the lion king
        Monkey m2 = new Monkey("Abu", 1994, 30);
        Horse h1 = new Horse("Rarity", 2015, 9, "none");
        Herbivore h2 = new Horse("Roach", 2019, 170, "Gray");
        
        //tạo mảng kiểu primitive:
        //Herbivore stuList[] = {m1, m2, h1, h2}; 
        
        //ArrayList:
        ArrayList<Herbivore> stuList = new ArrayList<>();
        stuList.add(m1);
        stuList.add(m2);
        stuList.add(h1);
        stuList.add(h2);
        
        for (Herbivore student : stuList) {
            student.showLearningOutComes();
        }
        
        
        /*
        Bối cảnh: lớp học của anh rớt vào 1 mùa đông giá rét
            mọi con vật đều co ro học tập trong cái lạnh
            thì bỗng nhiên có 1 con vật nhỏ bé đi vào, nó chùm kính mít
            và vì quá kín nên mình ko đoán đc nó là con gì, thấy nó có ăn cỏ
            cx hiền nên mình tin nó là động vật ăn cỏ, nó muốn xin học
            mình cần lưu nó vào danh sách thì làm sao?
        */
        Herbivore xxx = new Herbivore("Con chậm chạp", 2024, 4) {
            @Override
            public double study() {
                return 80;//chậm chạp ko ai chs chung, rất tập trung
            }
            
            @Override
            public void showLearningOutComes() {
                String str = String.format("%-20s|%-10s|%4d|%6.2f|%6.2f", 
                        "xxx", name, yob, weight, study());
                System.out.println(str);
            }
        };
        stuList.add(xxx);
        
        //lớp học đang yên lặng thì lại có thêm 1 bạn mới vào 
            //bạn này làm cả lớp học sôi động, đó là bác thợ săn
            //bác đến vì bác ham học
            //muốn tham gia vào lớp học
            //hãy lưu bác thợ săn nhé
        Hunter hun1 = new Hunter("Thợ săn vượn", 1999, 87, "Nỏ");
        Hunter hun2 = new Hunter("Mắt diều hâu", 1999, 90, "Cung");
        hun1.showLearningOutComes();
        hun2.showLearningOutComes();
        
        //Dù in mượt như thế nhưng mình ko tài nào bỏ hun1 và hun2 vào stuList
        //vì stuList là 1 mảng Herbivore
        

    }
}

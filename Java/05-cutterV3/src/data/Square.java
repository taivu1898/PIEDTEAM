
package data;
//hình vuông có 2 hướng là nhận Shape làm cha 2 là nhận hcn làm cha
//chọn hcn thì 
//Square là con của rectangle và cháu của Shape
//Rectangle làm hết r nên Square hưởng thôi
public class Square extends Rectangle{
    //prop:có điểm riêng ko? ko vì edge là width và height rồi
    
    public Square(String owner, String color, double edge) {
        super(owner, color, edge, edge);
    }
    
    @Override
    public void paint() {
        String str = String.format("%15s|%10s|%10s|%5.2f|%5.2f|%5.2f",
                "Square", owner, color, width, getArea(), getPerameter());
        System.out.println(str);
    }
    
    public void drawTitle(){
        System.out.println("Ahihi");
    }
}

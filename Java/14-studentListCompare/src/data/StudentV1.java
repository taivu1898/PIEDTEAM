/*
StudentV1 là  cái khuôn chuyên dùng để đúc ra các sinh viên bình thường
    các sinh viên không hề có tính sân si, đố kỵ
*/
package data;

public class StudentV1 {
    //props:
    private String id;
    private String fname;
    private String lName;
    private double score;
    
    //constructor:
    public StudentV1(String id, String fname, String lName, double score) {
        this.id = id;
        this.fname = fname;
        this.lName = lName;
        this.score = score;
    }
    
    //getter:
    public String getId() {
        return id;
    }

    public double getScore() {
        return score;
    }
    
    //show:
    public void showInfor(){
        String str = String.format("%-15s|%-15s|%-15s|%5.2f", 
                                id, fname, lName, score);
        System.out.println(str);
    }
}

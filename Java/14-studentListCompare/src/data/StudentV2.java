/*
StudentV1 là  cái khuôn chuyên dùng để đúc ra các sinh viên 
            có tính sân si, đố kỵ

Comparable: tính đố kỵ: hội những ng tính đố kỵ, so sánh vs ng khác
Comparable là 1 interface có 1 method tên là CompareTo()
class Comparable phải implements Comparable<StudentV2> ở class

CompareTo() là tk Comparable đi so sánh vs 1 tk khác
còn Compare là tk Comparator(trọng tài) đứng giữa 2 tk bắt đầu so sánh 2 tk đó
*/
package data;

public class StudentV2 implements Comparable<StudentV2>{
    //props:
    private String id;
    private String fname;
    private String lName;
    private double score;
    
    //constructor:
    public StudentV2(String id, String fname, String lName, double score) {
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

    @Override
    public int compareTo(StudentV2 that) {
        //this so sánh với that
        if(this.getId().compareTo(that.getId())>0) return 1;
        return -1;
    }
}


/*
Study Enthusiasts(interface): những ng đam mê học tập

+Nếu bác thợ săn học bth thì lúc nào bác cx lâm le "Phò mã"
    nhưng nếu bác tham gia vào hội StudyEnthusiasts thì bác sẽ thauwf hưởng
    ý chí từ hội nhóm này và học ko quan tâm đến cái gì cả
    -> học quên ăn

+Nếu như ngựa học bth thì lúc nào ngựa cx hú hí, học ko ra gì
    nhưng nếu ngựa tham gia vào hội StudyEnthusiasts thì 
    ngựa sẽ thừa hưởng ý chí từ hội nhóm này và học ko quan tâm đến cái gì cả
    -> học mà ko sợ súng, ko quan tâm mạng sống

+Study Enthusiasts là hội nhóm để lưu trữ ý chí ham học bỏ lại tất cả 
    bất cứ ai đag bth mà tham gia hội này thì sẽ học khô máu, học sống chết
    ai cx có thể tham gia vào đây, chỉ cần muốn là đc, nhưng nhớ rằng nếu đã
    chọn join vào đây thì sẽ phải thừa hưởng ý chí học tập ko màng tất cả
+Dù ngựa và bác thợ săn kahcs nhau về mặt sinh học, ko có gì giống nhau về
    props, nhưng chỉ cần tham gia cái hội này thì chúng ta sẽ có cùng 1 đam 
    mê học tập, và đc nằm cùng 1 danh sách "nhưng ng học tới chết"

*Interface: bản chất là 1 class chỉ quan tâm đến method, ko quan tâm đến props
    (thuần túy là 1 cái cớ để quy chụp các object- mà ko có 1 điểm gì giống
    nhau về prop - lại vs nhau, nên khi các object vào đây thì sẽ tự có thêm
    cái điểm chung mà trc đây nó ko có), ở đây họ chỉ quan tâm đến sự ham học,
    còn học như nào thì kệ em 
=> tức là em đang bth nhưng khi vô nhóm này em bắt buộc phải ham học(bắt đầu có  
    điểm chung)

*Thực tế là 1 interface chỉ nên có 1 abs method

*Bản chất của interface và abs class là giống nhau, đuề dung anno, 1 class 
    khác kế thừa..
    +abs class thì gôm nhóm nhưng class có props và method giống nhau
    +interface trong java là cái cớ để gôm những nhóm bậc cao hơn 
        những cái khác nhau hoàn toàn - trong js thì interface dùng để định 
        nghĩa nhưng object ko biết rõ là gì(khác vs java)
 */
package data;

public interface StudyEnthusiasts {
    //Ai cx có thể tham gia vào clb, nhưng nếu tham gia thì phải ham học
        //và vì thế ko quan tâm đến prop => ko có prop
    
    //Nhưng nếu em cố tình tạo 1 prop ?
            //thì nó sẽ trở thành đồ xài chung của clb -> static
            //nếu viết: public int fan = 3 ko cần viết gì thêm 
            //thì StudyEnthusiasts sẽ báo lỗi(đặt tên) và ta sửa thành:
            public int FAN = 3;
            //thì StudyEnthusiasts sẽ tự động hiểu là:
            //public static final int FAN = 3
        //=> nên các prop cố tình tạo trong StudyEnthusiasts đều là hằng số
        //=> final==const(hằng số) lúc tạo ra phải có giá trị(nếu ko sẽ báo lỗi)
        //mà trong interface tất các các props đều là static final
        //=>ko có ngăn nào bỏ trống
        //=>ko cần phễu để rót giá trị vào ngăn,
        //interface sẽ có 1 cái phễu mặc định(phễu rỗng).
        //ko có props thì cx ko có getter và setter
    
    //Tất cả các method trong interface đều là abstract method dù em có code 
        // chữ abs hay ko thì cx vậy à, nếu code body của method thì nó sẽ báo
        //lỗi
    
    public double studyHard();//nếu viết body sẽ báo lỗi, method này tự có thêm
                        //static final
    
    public void showProfile();
    
}



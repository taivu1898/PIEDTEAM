
package runtime;

import java.util.AbstractQueue;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

public class Program {

    public static void main(String[] args) {
        playWithArrayList();
        playWithQueue();
    }
    
    public static void playWithArrayList(){
        /*
            ArrayList là 1 mảng đặc biệt và là class triển khai của interface 
        list (triển khai là implements), mảng này rất nặng, dùng cho việc thêm, 
        xóa rất tối ưu
        
            ArrayList rất giống array primitive(mảng cùi bên C) nhưng array
        primitive ko co giãn đc còn ArratList là mảng động(co giản)
        */
        
        //Tạo mảng cùi:
        int arrPrimitive[] = new int[10];//thiếu 10 là bug ngay
        //tạo ra mảng cì có 10 phần tử mà thôi, muốn thêm thì ko đc mà xài ít 
            //hơn cx ko cho, đặc trưng mảng cùi rất là nhẹ, dùng cho việc truy
            //xuất nhìu vì nó tối ưu hơn mảng đặc biệt
        //arrPrimitive thì sẽ lưu đc gì? primitive datatype
                                        //object datatype
                                        //wrapper class | String
        
        //Tạo thửu mảng bằng ArrayList
        //ArrayList: lại là 1 mảng có khả năng co giản, nhưng nó chỉ chs đc vs 
            //object
        ArrayList<Integer> arrInList = new ArrayList<>();
        //các Collection (bao gồm ArrayList) thì ko chs vs primitive datatype
        //  nên phải dùng wrapper class tương ứng
        //  ngoài ra ta có thể khai báo như thế này:
        List<Integer> arrInListV2 = new ArrayList<>();
        //khai cha new con
        
        //Các method của ArrayList:
            //.add(value): thêm 1 value vào trong List
        arrInList.add(new Integer(3));//vì mình lưu Integer ko phải int
        arrInList.add(new Integer(2));//vì mình lưu Integer ko phải int
        arrInList.add(4);// vẫn đc vì nó có cơ chế auto - unboxing
        System.out.println(arrInList);//[3, 2, 4] //arrInList.toString()
            //.clear(): xóa hế tất cả phần tử trong mảng
        arrInList.clear();//xóa sạch
        System.out.println(arrInList);//mảng rỗng []
            //.add(index, value): 'nhét' value vào vị trí index
        arrInList.add(0, 3);
        arrInList.add(1, 5);
        arrInList.add(2, 4);
        arrInList.add(1, 4);
        System.out.println(arrInList);
            //.addAll(index, list) thêm list vào index;
        arrInListV2.add(9);
        arrInListV2.add(12);
        arrInList.addAll(2, arrInListV2);//nhét 9, 12 vào vị trí thứ 2
        System.out.println(arrInList);
        System.out.println(arrInListV2);

        //Giả xử, anh cần phải tác truy xuất mảng bằng mảng cùi, rồi sau đó quay
            //lại xài mảng ArrayList để có thể co giản thì làm sao
        Integer arrDemo[] = {3,5,7};//mảng cùi chỉ có 3 phần tử
        //giờ mình phải chuyển mảng cùi thành mảng xịn
        //Arrays là class chứa method hỗ trợ cho array
        ArrayList<Integer> arrList = new ArrayList<>(Arrays.asList(arrDemo));
        //arrList là phiên bản ArrayList của arrDemo
        //arrList sẽ co giản đc nhưng truy xuất chậm
        //biến từ List về lại arrayPrimitive đc ko??
        ////
        //.toArray(): biến từ List về lại arrayPrimitive:
        //Biến từ List về lại arraPrimitive:
            //+B1: tạo mảng cùi trc
        Integer numList[] = new Integer[arrList.size()];//dùng size của mảng
                                        //xịn để tạo arrayPrimitive vì nó cần 
                                        //kích thước lúc khởi tạo
            //+B2: nạp giá trị từ mảng xnj vào arrayPrimitive
        arrList.toArray(numList);//numList đc nạp giá trị từ arrList
        System.out.println(numList);//mảng cùi thì toString ch đc override để
                            //hiển thị đẹp, nếu muốn đẹp thì phải dùng for
        for (int i = 0; i < 10; i++) {
            
        }
        
        //.get(index): lấy ra để xem phần tử ở vị trị index trong List, chỉ có
                        //List ms có hàm get
        System.out.println(arrList.get(1));;// đc 5 vì nó nằm ở vị trí 1
        
        //.set(index, value): 'gán' | thay thế giá trị ở vị trí index bằng value
        //Muốn đổi số 5 thành 9:
        arrList.set(1, 9);//[3,9,7]
        
        //Thử Thách swap 3 và 7 trong mảng, chỉ dùng set và get
        Integer tmp = arrList.get(0);//lưu số 3 vào tmp
        arrList.set(0, arrList.get(2));//thay số ở vị trí số 0 bằng số ở vị trí 
                                        //thứ 2
        arrList.set(2, tmp);//thay vị trí số 2 bằng tmp
        //=> vậy là ArrayList sẽ là 7, 9, 3
        System.out.println(arrList);
        
        //iterable: tính khả lập(khả duyệt), có 1 method là iterator
        //iterator là 1 object có khả năng định nghĩa đc trinhg tự và giá trị
                //có thể trả ra cho lần gói tiếp theo
        //Mô tả những gì diễn ra trong fore:
            //+khi mà mình muốn fore thằng arrList, anh sẽ tạo ra iterator từ 
                    //arrList
        Iterator<Integer> it = arrList.iterator();//kêu arrList cung cấp 1
                                    //iterator để anh duyệt
            //+it là iterator của arrList và fore sẽ dùng it để duyệt thay vì
                    //dùng for từ 0 nến size-1
            System.out.println(it.hasNext());//còn true | hết false
            System.out.println(it.next());//7
            System.out.println(it.next());//9
            System.out.println(it.next());//3
            //System.out.println(it.hasNext());//hết rồi và bị bug
            
            //.remove(index): xóa phần tử ở vị trí index trong list
            //arrList[7,9,3] muốn xóa số 9
            arrList.remove(1);
            
            //.removeAll(list): xóa hết phần tử trong list
            arrList.add(5);
            arrList.add(9);
            arrList.add(2);
            arrList.add(12);
            //arrList[7,3,5,9,2,12]
            //arrInList[9,12]
            arrList.removeAll(arrInListV2);// trong arrList xóa hết phần tử thuộc
                                //arrInListV2
            System.out.println(arrInListV2);
            System.out.println(arrList);
            
            //.size() láy kích thước
            //.clone() tạo ra 1 list mới có cùng pt và cùng kích thước, dung lượng
                //chỉ ở tầm shallow và trả về object
            ArrayList<Integer> demoClone = (ArrayList)arrList.clone();
            //clone là shalow copy: copy nhưng ch cắt hết dây mơ rễ má
            
            //.contain(): tìm key trong danh sách(trả về boolean)
            //.notifyCapacity(): thông tin giới hạn lưu trữ
            //.isEmpty()bcos trống hay ko(boolean)
            //.indexOf(key): tìm key ở vị trí nào
            //.trimToSize(): thu nhỏ đến kích thước thật, nhưng nếu add thêm
                    //thì nso tăng tiếp
            
    }

    public static void playWithQueue(){
        Queue<Integer> numList = new LinkedList<>();
        //khai cha new con
        //.adđ(value): chỉ có duy nhất 1 hàm add này, nhét pt vào tail của danh
                    //sách, nếu máy tính ko đủ dung lượn để add
                    //(true | illegal exception-báo bug)
        numList.add(3);//ko có add theo dạng .add(index, value) vì nếu xài là 
                        //chen hàng
        //những ng dùng queue sẽ ko bao giwof dùng adđ mà dùng .offer(): nhét
            //pt vào tail của danh sách (true | false), hàm này dùng riêng cho 
            //queue
        numList.offer(1);
        numList.offer(5);
        numList.offer(4);
        //numList: head[3,1,5,4]tail
        //vẫn giữ đc thứ tự truyền vào vì linkedList thuộc List
        //Hàng đợi thì ko có get() => ko đc phép lấy ra 1 phần tử bất kì trong 
            //hàng, chỉ đc quyền lấy ở head
            
        //.element(): lấy ra pt đầu tiên ở head và xem, ko ảnh hưởng đến, lấy 
            //đc thì return pt, nhưng nếu ko có ai để lấy thì nullPoiter
            //exception vì element này của Collection
        numList.element();//3
        numList.element();//3     
        //.peek(): nhìn trộm, lấy ra xem pt đầu tiên ở head(pt | null)
        numList.peek();//lấy ra 3
        //=> nên dùng peek để tránh axception
        //.remove(): xóa pt đầu ở vị trí head và return pt đã xóa 
        //=> mình lấy ra để xử lý(pt | nullPoiter exception)
        numList.remove();//xóa số 3 và ném số 3 ra ngoài cho mình xử lý
        System.out.println(numList);
        numList.remove();
        System.out.println(numList);
        //.poll(): lấy pt đầu tiên của head ra khỏi danh sách để xử lý(null | pt)
        numList.poll();//lấy ra 5 khỏi danh sách
        System.out.println(numList);
        //nhét thêm vài số vào lại:
        numList.offer(5);
        numList.offer(1);
        numList.offer(2);
        System.out.println(numList);
        //thường thì khi dùng queue ng ta ko quan tâm bên trong chứa gì cả,
                //ko quan tâm số lượng bao nhiu, chỉ quan tâm là tk típ theo 
                //là còn hay ko, ko còn thì end
        //mô phỏng xử lý hàng đợi:
        while(true){
            Integer tmp = numList.poll();//lấ tk đầu hàng của numList
            if(tmp == null) break;//thoát nếu k còn ai trong danh sách
            //do sonmething:
            System.out.println("Ahihi: " + tmp + " là đứa bị xử típ theo"); 
        }
        //numList là []
        
        //PRIORITY QUEUE: hàng đợi ưu tiên(min heap)
        Queue<Integer> numListV2 = new PriorityQueue<>();
        numListV2.offer(3);
        numListV2.offer(1);
        numListV2.offer(5);
        numListV2.offer(9);
        numListV2.offer(2);
        System.out.println(numListV2);
        //rút:
        numListV2.poll();
        System.out.println(numListV2);
        numListV2.poll();
        System.out.println(numListV2);
        numListV2.poll();
        System.out.println(numListV2);
        
        //ArrayDeque: mạnh nhất cảu nhà queue
        Deque<Integer> numDeque = new ArrayDeque<>();
        //ko có head mà tail mà có front(first)...rear(last)
            //.add() | .off() | addLast() | .offerLast: nhét vào rear
            //.addFirst() | offerFirst(): nhét vào front
        //nhìn:
            //.element() | .peek() | .elementFirst() | .peekFirst(): nhìn ở front
            ///elementLast() | peekLast(): nhìn ở rear
        //lấy ra:
            //.remove() | .poll() | .removeFirst() | .pollFirst(): lấy ở front
            //.removeLast() | .pollLast(): lấy ở rear
        //muốn dùng arrayDeque để mô tả 1 queue FIFO(vào tail ra head)
        //front(first)..rear(last)
            //thêm: .offerLast()
            //nhìn: .peekFirst()
            //lấy: .pollFirst()
        //muốn dùng arrayDeque để ô tả 1 stack LIFO(vào tail ra tail)
        //front(first)..rear(last)
            //thêm: .offerLast()
            //nhìn: .peeklast()
            //lấy: .pollLast()
        
        
        
        
    }
}
//shallow copy: copy kiểu nông cạn, dễ dẫn đến hiện tượng 2 chàng trỏ 1 nàng
//deep copy: cắt đc hết, ko dẫn đến hiện tượng 2 chàng trỏ 1 nàng, cắt hết 
    //dây mơ rễ má, phải tự làm
// đây là một middlewares giúp mình lọc lại request body
// chỉ lấy những thứ mình muốn thôi, còn những cái mình ko muốn thì bỏ đi

type FilterKey<T> = Array<keyof T>

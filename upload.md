## 新增h5 拍照上传

>1、技术关键点

    a) input type=file  capture="camera"
    b) js: 监听 input 事件变化 
    c) fileReader 读取文件
    d) 将读取到多文件 用canvas 进行画布，最后使用 toDataURL 转换成 base64 格式

>2、技术难点

    a) 兼容问题。
    b) ...
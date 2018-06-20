# 简介
这是一个可以全局监听键盘按键事件的Node.js C++插件（只在Windows平台下可用），开始监听后无论对焦在系统运行中的那个程序上都可以捕获事件。

# 文件功能
kbhook.cc是C++插件的源代码

kbhook.node是kbhook.cc编译完成后的二进制文件，可以在Node.js中直接加载

kbevent.js是对从kbhook.node得到的信息进行包装，里面加载了kbhook.node，使用时直接加载kbevent.js即可

test.js是使用演示

# 使用方法
1、下载kbhook.node、kbevent.js文件

2、使用require()加载kbevent.js
```javascript
const kbevent = require('./kbevent');
```

3、开始捕获指定键盘按键
```javascript
function callback(){
  console.log('catch it');
}

kbevent.catchKeys({
  eventType: 'keydown',  //Optional, default: 'keydown'
  keys: ['CONTROL', 'ALT', 'SPACEBAR'],  // required
  catchAgain: true  // Optional, default: false
}, callback);
```

kbevent.js中有一个catchKeys方法，接受两个参数：
> 第一个参数是一个描述符对象，其中可以有3个属性，分别是eventType(事件类型)、keys(按键)、catchAgain(是否继续捕获)。

> eventType是可选的属性，取值为'keydown'(按下)或'keyup'(抬起)，默认值为'keydown'（当指定按键全部都在按下状态时才触发事件）。

> keys是必选的属性，为一个包含所需按键的数组，数组中的元素都是按键名称，不区分大小写。

> catchAgain是可选的属性，取值为一个布尔值，默认值是false（事件只触发一次就不再继续捕获）。


第二个参数是一个自定义函数，当事件触发后回调。

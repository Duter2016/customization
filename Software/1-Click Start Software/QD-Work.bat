::2018.11.02

@echo off

::最小化运行批处理
::From: http://www.jb51.net/article/7347.htm
::if "%1"=="h" goto begin
::start mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:begin

::設置程序文件夾位置
set dir=D:\Program Files
set dir2=C:\Program Files (x86)

::公司用軟件
::start "" "%dir%\CloudHubX\CloudHubX.exe"
start "" "%dir%\Tencent\WeChat\WeChat.exe"


::完成後退出
exit

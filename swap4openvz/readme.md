https://www.ahao.me/archives/175

OpenVZ 添加SWAP的方法：
 
        这方法是好不容易在网上找到的。按正常的Linux下添加SWAP的方法是不行的，提示没有权限。
        可以写这样一个脚本：
#!/bin/bash
#Addition SWAP For OpenVZ
echo 'Start adding SWAP space ......';
SWAP="${1:-512}";
NEW="$[SWAP*1024]";
TEMP="${NEW//?/ }";
OLD="${TEMP:1}0";
umount /proc/meminfo 2> /dev/null
sed "/^Swap\(Total\|Free\):/s,$OLD,$NEW," /proc/meminfo > /etc/fake_meminfo
mount --bind /etc/fake_meminfo /proc/meminfo
echo 'Add the ready!';
1
2
3
4
5
6
7
8
9
10
11
	
#!/bin/bash
#Addition SWAP For OpenVZ
echo 'Start adding SWAP space ......';
SWAP="${1:-512}";
NEW="$[SWAP*1024]";
TEMP="${NEW//?/ }";
OLD="${TEMP:1}0";
umount /proc/meminfo 2> /dev/null
sed "/^Swap\(Total\|Free\):/s,$OLD,$NEW," /proc/meminfo > /etc/fake_meminfo
mount --bind /etc/fake_meminfo /proc/meminfo
echo 'Add the ready!';

        保存成swap4openvz.sh或者直接从本站下载：
wget http://www.mixsite.org/download/linux/sh/swap4openvz.sh
1
	
wget http://www.mixsite.org/download/linux/sh/swap4openvz.sh

        然后设置成可执行文件：
chmod +x swap4openvz.sh
1
	
chmod +x swap4openvz.sh

        最后执行一下：
sh ./swap4openvz.sh
1
	
sh ./swap4openvz.sh

 
        执行完毕后再用命令：
free -m
1
	
free -m

        这样就有SWAP空间了！
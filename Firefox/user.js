//2017.12.12

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.userContext.enabled", true);//启用身份标签页
user_pref("privacy.trackingprotection.enabled", true);//使用跟踪保护
user_pref("privacy.donottrackheader.enabled", true);//请勿跟踪
user_pref("accessibility.force_disabled", 1);//强制阻止无障碍服务,容易被第三方跟踪
//搜索
user_pref("browser.search.suggest.enabled", false);//提供搜索建议(否)
user_pref("browser.search.redirectWindowsSearch", false);//使用此搜索引擎处理Windows的搜索(否)
user_pref("browser.search.openintab", true);//新标签打开搜索栏
user_pref("browser.search.context.loadInBackground", true);//后台打开搜索

//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
//动画
user_pref("browser.download.animateNotifications",false); //取消下载提醒动画
user_pref("browser.fullscreen.animate",false); //取消全屏动画
user_pref("toolkit.cosmeticAnimations.enabled",false); //取消标签动画
user_pref("browser.fullscreen.animateUp",0);//关闭全屏时工具栏隐藏显示动画
user_pref("full-screen-api.transition-duration.enter","0 0");//去除全屏淡进淡出效果
user_pref("full-screen-api.transition-duration.leave","0 0");//去除全屏淡进淡出效果
user_pref("full-screen-api.warning.delay",0);//去除全屏提醒
user_pref("full-screen-api.warning.timeout",0);//去除全屏提醒

//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========FX其它类==========*//
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("general.warnOnAboutConfig", false);//About:Config警告
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("xpinstall.signatures.required", false);//去除扩展签名验证
//不抓取页面缩略图
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
//功能禁用
user_pref("media.gmp-gmpopenh264.provider.enabled", false); // GMP Open H264插件，主要用于WebRTC通话功能，对大多数用户来说意义不大，关闭后仅停用该插件。
user_pref("media.gmp-manager.url", ""); //完全不下载GMP Open H264
user_pref("loop.enabled", false); //实时通话功能Firefox Hello。主要用于用户间的交互联系等，但对大局域网来说意义不大，甚至可能直接连不上服务器。
user_pref("extensions.pocket.enabled", false); //禁用自带Pocket
user_pref("reader.parse-on-load.enabled", false);//禁用阅读模式
user_pref("extensions.screenshots.disabled", true);//自带截图(禁用)

/******************************************************************************************
 *这里是个人设置。
个人设置存放位置: ProfD\\Chrome\\Local\\_user.js
 *******************************************************************************************/
//*==========多进程==========*//
//Nightly特性
user_pref("layers.gpu-process.dev.enabled", true);//强制启用Quantum Compositor
user_pref("layout.css.servo.enabled", true);//强制启用Stylo
user_pref("layout.css.servo.chrome.enabled", true);//强制启用Stylo

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(12个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.nytimes.com/\",\"title\":\"NYTimes\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnBeta\"},{\"url\":\"http://dig.chouti.com/\",\"title\":\"抽屉新热榜\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\"知乎\"},{\"url\":\"http://www.qdaily.com/\",\"title\":\"好奇心日报\"}]");
 
//*==========Firefox设置==========*//
user_pref("browser.shell.checkDefaultBrowser", false);//不检查是否为默认浏览器
user_pref("dom.disable_open_during_load", false);//拦截弹出式窗口(否)

//证书
user_pref("security.default_personal_cert", "Select Automatically");//自动选择一个个人证书
user_pref("security.OCSP.enabled", 0);//禁用OCSP查询

//字体语言编码
user_pref("font.name.serif.zh-CN", "Arial");//衬线字体
user_pref("font.name.sans-serif.zh-CN", "Arial");//无衬线字体
user_pref("font.name.monospace.zh-CN", "Arial");//等宽字体

//书签相关
user_pref("browser.bookmarks.autoExportHTML", true);//关闭Firefox时自动生成HTML书签备份
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//平滑滚动参数
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 150);
user_pref("mousewheel.acceleration.factor", 15);
user_pref("mousewheel.acceleration.start", 3);
user_pref("mousewheel.default.delta_multiplier_y", 160);

//插件
user_pref("dom.ipc.plugins.unloadASAP", true); //网页不使用flash后自动关闭Plugin-container

//*=隐私相关=*//
user_pref("browser.newtabpage.directory.ping", "");//禁止新标签页面的建议磁贴和增强磁贴
user_pref("browser.urlbar.suggest.searches", false);//禁止地址栏搜索提供搜索建议
//其它隐私相关
user_pref("dom.webnotifications.enabled", false);//关闭 WEB 推送通知
user_pref("dom.webnotifications.serviceworker.enabled", false);//关闭 WEB 推送通知
user_pref("browser.polaris.enabled", false);//彻底关闭Tracking protection 跟踪保护
user_pref("privacy.trackingprotection.pbmode.enabled", false);//彻底关闭Tracking protection 跟踪保护
user_pref("browser.send_pings", false);//禁止Hyperlink Auditing/Beacon: Hyperlink Auditing 就是 ping 服务，Firefox 会把你点击过的链接及其时间发回给服务器，Hyperlink Beacon 是使用 navigator.sendBeacon()在你离开一个页面时将一些数据回传给服务器
user_pref("privacy.firstparty.isolate", true); //开启火狐FPI隔离功能

//*=FX其它类=*/
/**
*会话相关
*/
user_pref("browser.sessionstore.resume_from_crash", false);//关闭Firefox会话恢复功能
user_pref("browser.sessionstore.max_tabs_undo", 10);//最近撤销标签历史最大数
user_pref("browser.sessionstore.interval", 600000);//防止向SSD写入大量数量: 重写recovery.js文件的默认数值为“15000ms”(间隔时间15s), 改为10分钟

//其它FX
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
user_pref("browser.link.open_newwindow.restriction", 0);//单窗口模式(弹出窗口用标签打开)
user_pref("media.mediasource.enabled", false);//关闭DASH,加载全部视频

//硬件加速相关
user_pref("gfx.content.azure.backends", "direct2d1.1,cairo");//图形渲染;FX52默认的Skia不支持Mactype
//user_pref("gfx.webrender.enabled", true);//开启WebRender(开启后有bug)

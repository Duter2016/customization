//2018.04.19

/*
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.
*/

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.userContext.enabled", true);//启用身份标签页
user_pref("signon.rememberSignons", false);//不保存密码

//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
user_pref("toolkit.cosmeticAnimations.enabled", false); //取消标签动画

//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========FX其它类==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("general.warnOnAboutConfig", false);//About:Config警告
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("extensions.blocklist.enabled", false);//禁用Blocklist
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("datareporting.healthreport.uploadEnabled", false);//允许发送技术信息及交互数据(否)
//功能禁用
user_pref("loop.enabled", false); //实时通话功能Firefox Hello。主要用于用户间的交互联系等，但对大局域网来说意义不大，甚至可能直接连不上服务器。
user_pref("extensions.pocket.enabled", false); //禁用自带Pocket
user_pref("reader.parse-on-load.enabled", false);//禁用阅读模式
user_pref("extensions.screenshots.disabled", true);//自带截图(禁用)


/******************************************************************************************
 *这里是个人设置。
个人设置存放位置: ProfD\\Chrome\\Local\\_user.js
 *******************************************************************************************/

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(16个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.nytimes.com/\",\"title\":\"NYTimes\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnBeta\"},{\"url\":\"http://dig.chouti.com/\",\"title\":\"抽屉新热榜\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\"知乎\"},{\"url\":\"https://www.jianshu.com/\",\"title\":\"简书\"},{\"url\":\"http://www.douban.com/\",\"title\":\"豆瓣\"},{\"url\":\"http://www.qdaily.com/\",\"title\":\"好奇心日报\"},{\"url\":\"http://www.statista.com/\",\"title\":\"Statista\"},{\"url\":\"http://focus.tianya.cn/\",\"title\":\"天涯聚焦\"}]");
 
//*==========Firefox设置==========*//
user_pref("browser.shell.checkDefaultBrowser", false);//不检查是否为默认浏览器

//证书
user_pref("security.default_personal_cert", "Select Automatically");//自动选择一个个人证书

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
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);//禁用火狐插件防崩溃功能
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示


//*=FX其它类=*/
user_pref("network.http.max-persistent-connections-per-server", 10);//多线程下载管理器用:设置对每个服务器持久连接（keep-alive connections ）的最大个数，推荐10

//Delay设置, 来源于贴吧
user_pref("accessibility.delay_plugin_time", 1000);
user_pref("apz.frame_delay.enabled", false);
user_pref("apz.scale_repaint_delay_ms", 50);
user_pref("browser.overlink-delay", 8);
user_pref("dom.serviceWorkers.disable_open_click_delay", 100);
user_pref("gfx.font_loader.delay", 12000);
user_pref("media.suspend-bkgnd-video.delay-ms", 1000);
user_pref("network.http.tailing.delay-max", 600);
user_pref("network.http.tailing.delay-quantum", 60);
user_pref("network.http.tailing.delay-quantum-after-domcontentloaded", 10);
user_pref("network.tickle-wifi.delay", 3);
user_pref("toolkit.scrollbox.clickToScroll.scrollDelay", 15);
user_pref("ui.touch_activation.delay_ms", 10);
user_pref("javascript.options.compact_on_user_inactive_delay", 1500);
user_pref("security.dialog_enable_delay", 100);
user_pref("security.notification_enable_delay", 50);


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

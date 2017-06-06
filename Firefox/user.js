//2017.06.02
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.donottrackheader.enabled", true);//请勿跟踪
//搜索
user_pref("browser.search.suggest.enabled", false);//提供搜索建议(否)
user_pref("browser.search.redirectWindowsSearch", false);//使用此搜索引擎处理Windows的搜索(否)
user_pref("browser.search.openintab", true);//新标签打开搜索栏
user_pref("browser.search.context.loadInBackground", true);//后台打开搜索

//safebrowsing安全浏览
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

//*==========标签相关==========*//
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
//动画
user_pref("browser.download.animateNotifications",false); //取消下载提醒动画
user_pref("browser.fullscreen.animate",false); //取消全屏动画
user_pref("browser.tabs.animate",false); //取消标签动画
user_pref("browser.fullscreen.animateUp",0);//关闭全屏时工具栏隐藏显示动画
user_pref("full-screen-api.transition-duration.enter","0 0");//去除全屏淡进淡出效果
user_pref("full-screen-api.transition-duration.leave","0 0");//去除全屏淡进淡出效果
user_pref("full-screen-api.warning.delay",0);//去除全屏提醒
user_pref("full-screen-api.warning.timeout",0);//去除全屏提醒

//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========附加组件==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项

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
//功能去除
user_pref("media.gmp-gmpopenh264.provider.enabled", false); // GMP Open H264插件，主要用于WebRTC通话功能，对大多数用户来说意义不大，关闭后仅停用该插件。
user_pref("media.gmp-manager.url", ""); //完全不下载GMP Open H264
user_pref("loop.enabled", false); //实时通话功能Firefox Hello。主要用于用户间的交互联系等，但对大局域网来说意义不大，甚至可能直接连不上服务器。


/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/
//个人设置存放位置: ProfD\\Chrome\\Local\\_user.js

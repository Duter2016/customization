//2016.12.20
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

//遥测
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true); 
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");

//健康
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

//*==========標籤相關==========*//
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//關閉多個標籤時不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//關閉其它標籤時不提示
//取消动画(from: 奶酪)
user_pref("browser.download.animateNotifications",false); //取消下载提醒动画
user_pref("browser.fullscreen.animate",false); //取消全屏动画
user_pref("browser.tabs.animate", false);//關閉标签页动画

//*==========下載相關==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次訊問我要存到何處
user_pref("browser.safebrowsing.downloads.enabled", false);//解決下載卡在最後一秒的問題
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========插件相關==========*//
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//禁用保护模式
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位关闭沙箱

//*==========附加組件==========*//
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
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁用Firefox的thumbnails
user_pref("xpinstall.signatures.required", false);//去除扩展签名验证

/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/
//个人设置存放位置: ProfD\\Chrome\\Local\\_user.js
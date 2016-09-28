//2016.09.28
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/
 
//*==========主页==========*//
//user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
//user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首頁
user_pref("browser.newtabpage.columns", 6);//新标签页列数
user_pref("browser.newtabpage.rows", 3);//新标签页行数
//标签页固定的网站
user_pref("browser.newtabpage.pinned", "[{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"Kafan\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://twitter.com/\",\"title\":\"Twitter\"},{\"url\":\"http://www.facebook.com/\",\"title\":\"Facebook\"},{\"url\":\"http://www.linkedin.com/today/?trk=nav_responsive_sub_nav_pulse\",\"title\":\"Pulse\"},{\"url\":\"https://docs.google.com/spreadsheets/u/0/\",\"title\":\"Google Sheets\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnBeta\"},{\"url\":\"http://www.woshipm.com/\",\"title\":\"pm\"},{\"url\":\"http://www.douban.com/\",\"title\":\"Douban\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\" Zhihu\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"Guokr\"},{\"url\":\"http://www.jianshu.com/\",\"title\":\"Jianshu\"},{\"url\":\"http://open.163.com/\",\"title\":\"网易公开课\"},{\"url\":\"http://music.163.com/\",\"title\":\"Music\"},{\"url\":\"http://email.163.com/\",\"title\":\"Mail\"},{\"url\":\"https://app.yinxiang.com/Home.action\",\"title\":\"Evernote\"}]");

//*==========选项卡里的设置==========*//
user_pref("layers.acceleration.disabled", true);//禁用硬件加速MacType才生效
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("accessibility.blockautorefresh", false);//当网站试图重定向或重新载入时警告(否)
//字體語言編碼
user_pref("intl.charset.detector", "universal_charset_detector");//自動選擇
user_pref("font.name.serif.zh-CN", "Arial");//衬線字體
user_pref("font.name.sans-serif.zh-CN", "Arial");//無衬線字體
user_pref("font.name.monospace.zh-CN", "Arial");//等寬字體
//搜索
user_pref("browser.search.suggest.enabled", false);//提供搜索建议(否)
user_pref("browser.search.redirectWindowsSearch", false);//使用此搜索引擎处理Windows的搜索
user_pref("browser.search.openintab", true);//新标签打开搜索栏
user_pref("browser.search.context.loadInBackground", true);//后台打开搜索

//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);

//*==========標籤相關==========*//
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.newtabpage.introShown", true);//去除新版newtab提示
user_pref("browser.tabs.warnOnClose", false);//關閉多個標籤時不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//關閉其它標籤時不提示

//*==========書籤相關==========*//
user_pref("browser.bookmarks.autoExportHTML", true);//關閉Firefox时自動生成HTML書籤備份
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//*==========下載相關==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次訊問我要存到何處
user_pref("browser.safebrowsing.downloads.enabled", false);//解決下載卡在最後一秒的問題
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========網路相關==========*//
//HTTPS不允许混合内容，以下两条参数用以禁用此特性
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.mixed_content.block_display_content", false);
//网络设定
user_pref("nglayout.initialpaint.delay", 0);
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);

//*==========平滑滾動==========*//
user_pref("general.smoothScroll.durationToIntervalRatio", 500);
user_pref("mousewheel.min_line_scroll_amount", 35);

//*==========插件相關==========*//
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//禁用保护模式
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位关闭沙箱
user_pref("layers.async-pan-zoom.enabled",true);//开启异步平移/缩放
user_pref("dom.ipc.plugins.asyncInit.enabled", true);//开启插件异步加载
user_pref("dom.ipc.plugins.asyncdrawing.enabled", true);//开启插件异步绘制

//*==========附加組件==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项

//*==========FX其它类==========*//
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("general.warnOnAboutConfig", false);//About:Config警告
user_pref("view_source.editor.external", true);//页面源代码——使用外部編輯器查看
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("network.standard-url.escape-utf8", false);//是否转化中文URL为utf-8格式，默认true
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁用Firefox的thumbnails
user_pref("xpinstall.signatures.required", false);//去除扩展签名验证
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
//会话相关
user_pref("browser.sessionstore.resume_from_crash", false);//关闭Firefox会话恢复功能
user_pref("browser.sessionstore.max_tabs_undo", 10);//最近撤销标签历史最大数
user_pref("browser.sessionstore.interval", 600000);//防止向SSD写入大量数量: 重写recovery.js文件的默认数值为“15000ms”(间隔时间15s), 改为10分钟
//终于找到了，可以解决某些网站密码存不了的情况……(from sky)
user_pref("signon.importedFromSqlite", true);
user_pref("signon.overrideAutocomplete", true);

/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/

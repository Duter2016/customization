//2018.10.23

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
user_pref("privacy.trackingprotection.enabled", true);//跟踪保护
user_pref("privacy.donottrackheader.enabled", true);//始终向网站发出“请勿跟踪”信号

//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
user_pref("toolkit.cosmeticAnimations.enabled", false); //取消标签动画

//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//功能开启
//user_pref("layout.css.servo.chrome.enabled", true); //FF58+开启stylo引擎 (开启会导致在使用开发者工具栏的时候奔溃)
user_pref("layout.display-list.retain", true);//FF58+提升浏览器界面绘制性能，只重新计算显示的列表项而非所有列表项
user_pref("network.standard-url.enable-rust", true);//Rust的URL解析器
user_pref("network.tcp.tcp_fastopen_enable", true);//TCP快速启用过滤,减少http延迟
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//开启Flash去沙盒
user_pref("browser.xul.error_pages.expert_bad_cert", true);//自动展开：此连接是不受信任的


//功能去除
user_pref("extensions.pocket.enabled", false); //关闭自带的pocket
user_pref("geo.enabled", false);//禁用地理位置
user_pref("browser.urlbar.oneOffSearches", false);//地址栏下拉菜单隐藏切换搜索引擎模块
user_pref("browser.taskbar.lists.enabled", false);//关闭Jumplist跳转列表
user_pref("dom.vr.enabled", false);//关闭vr
user_pref("signon.rememberSignons", false); //关闭自带的保存密码功能
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("extensions.e10sBlockedByAddons", false);//扩展禁用列表
user_pref("accessibility.force_disabled", 1); //禁用无障碍环境
user_pref("security.sandbox.content.level", 0); //禁用沙盒
user_pref("security.mixed_content.block_active_content", false); //关闭ssl不安全内容和混合内容保护1 (让小书签在https页面上起作用 )
user_pref("security.mixed_content.block_display_content", false); //关闭ssl不安全内容和混合内容保护2
user_pref("security.dialog_enable_delay", 0);//安装附加组件时的等待时间
user_pref("browser.backspace_action", 1); //去除退格键使网页后退的功能，改成向上滚动页面。
user_pref("browser.urlbar.formatting.enabled", false);//关闭域名高亮
user_pref("extensions.pocket.enabled",false); //取消自带的稍后阅读功能
user_pref("services.sync.engine.prefs",false); //取消首选项的同步功能
user_pref("datareporting.healthreport.uploadEnabled", false);//关闭安全检测健康中心
user_pref("datareporting.policy.dataSubmissionEnabled", false); //关闭安全检测健康中心
user_pref("dom.flyweb.enabled", false);//关闭物联网扩展
user_pref("security.enterprise_roots.enabled", true);//去除访问所有HTTPS网站显示连接不安全

//偏好设置
user_pref("ui.osk.enabled", false);//触摸键盘
user_pref("media.eme.enabled", false);//drm内容
user_pref("security.OCSP.enabled", 0);//OCSP服务器
user_pref("browser.search.update", false);//禁用搜索引擎自动更新
user_pref("dom.popup_maximum", 5); //Firefox弹窗的最大数量
user_pref("datareporting.healthreport.service.enabled", false);//紧张遥测往prefs.js写入数据
user_pref("extensions.ui.lastCategory", "addons://list/extension");//附加组件默认打开扩展项
user_pref("browser.safebrowsing.enabled", false);//safebrowsing
user_pref("browser.safebrowsing.malware.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); //让拓展在Mozilla的网站上正常工作
user_pref("browser.urlbar.maxRichResults",15); //地址栏里的历史记录数量
user_pref("browser.sessionstore.max_tabs_undo", 20);//最近撤销标签历史最大数

//*==========FX其它类==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("datareporting.healthreport.uploadEnabled", false);//允许发送技术信息及交互数据(否)


/******************************************************************************************
 *这里是个人设置。
个人设置存放位置: ProfD\\Chrome\\Local\\_user.js
 *******************************************************************************************/

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(16个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.nytimes.com/\",\"title\":\"NYTimes\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"https://www.techmeme.com/\",\"title\":\"Techmeme\"},{\"url\":\"http://www.statista.com/\",\"title\":\"Statista\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnBeta\"},{\"url\":\"http://dig.chouti.com/\",\"title\":\"抽屉新热榜\"},{\"url\":\"http://www.zhihu.com/",\"title\":\"知乎\"},{\"url\":\"http://www.douban.com/\",\"title\":\"豆瓣\"},{\"url\":\"http://www.pingwest.com/\",\"title\":\"品玩\"},{\"url\":\"http://focus.tianya.cn/\",\"title\":\"天涯聚焦\"}]");
 
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
user_pref("media.gmp-provider.enabled", false); //干掉插件
user_pref("plugin.scan.plid.all", false); //disable Plugin Scan
user_pref("dom.ipc.plugins.sandbox-level.flash", 0);//64位flash关闭沙箱
user_pref("extensions.blocklist.enabled", false);//关闭flash版本过旧被屏蔽的提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true); //直接用火狐禁用flash保护模式
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); //flash崩溃报告crashreporter
user_pref("plugin.state.flash",2);//flash总是开启

//开启流媒体API
user_pref("javascript.options.streams", true); 
user_pref("dom.streams.enabled", true); 


/**
*会话相关
*/
user_pref("browser.sessionstore.resume_from_crash", false);//关闭Firefox会话恢复功能
user_pref("browser.sessionstore.max_tabs_undo", 10);//最近撤销标签历史最大数
user_pref("browser.sessionstore.interval", 600000);//防止向SSD写入大量数量: 重写recovery.js文件的默认数值为“15000ms”(间隔时间15s), 改为10分钟

//其它FX
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
user_pref("browser.link.open_newwindow.restriction", 0);//单窗口模式(弹出窗口用标签打开)

//硬件加速相关
user_pref("gfx.content.azure.backends", "direct2d1.1,cairo");//图形渲染;FX52默认的Skia不支持Mactype

let LoaderDict = {
   ToolTip:"3141",
   Business: {
      UpdateTime: "更新时间",
      UpdateUser: "更新人",
      UpdateContent: "更新内容",
      Longitude: "经度",
      Latitude: "纬度",
      Prompts: "提示",
      PageSize: "每页显示条数",
      Name: "名称",
      Date: "日期",
      Time: "时间",
      Remark: "备注",
      StartDate: "开始日期",
      EndDate: "结束日期",
      CompanyId: "所属集团",
      CompanyName: "集团名称",
      Visible: "是否显示",
      Rank: "次序",
      Host: "主机信息",
      MenuLevel: "菜单级别",
      Email: "邮箱",
      PluginsCount: "插件数量",
      PageIcon: "页面图标",
      MobileIcon: "移动端图标",
      SwPlatform: "适用平台",
      MallIds: "案场列表",
      ComponentName: "组件名称",
      RelatedMall: "关联案场",

      ///营业时间相关
      T_BusinessTime: {
         StartTime: "开始时间",
         EndTime: "结束时间",
         Weekdays: "星期",
         Monday: "星期一",
         Tuesday: "星期二",
         Wednesday: "星期三",
         Thursday: "星期四",
         Friday: "星期五",
         Saturday: "星期六",
         Sunday: "星期日"
      },

      ///活动相关
      T_Activity: {
         StartHour: "开始时段",
         EndHour: "结束时段"
      },

      ///节日相关
      T_Holiday: {
         HolidayType: "节假日类型"
      },

      ///天气相关
      T_Weather: {
         CityId: "城市",
         WeatherName: "天气名称",
         LowTemp: "最低温度",
         HighTemp: "最高温度",
         PM25: "PM2.5",
         Wind: "风向风力"
      },

      ///标签
      T_Tag: {
         TagClass: "标签主类别",
         TagValue: "标签"
      },

      ///更新
      T_Update: {
         ZoneId: "区域ID",
         MallId: "全部ID"
      },

      /// 集团字段
      T_Company: {
         Title: "集团信息",
         Name: "集团名称",
         NumberOfCharts: "图表数量"
      },

      //位置字段
      T_Locatoin: {
         GetWeather: "获取天气",
         PreviousName: "上级名称",
         GetWeatherOrNot: "是否获取天气",
         NotObtain: "不获取",
         Obtain: "获取"
      },
      /// 案场字段
      T_Mall: {
         Name: "案场名称",
         Province: "省/市/区",
         Title: "案场信息",
         MallLocation: "地理位置",
         Tags: "标签",
         Area: "经营面积",
         Clerks: "营业员数",
         Address: "详细地址",
         Coordinate: "地图位置",
         MallCode: "编码",
         SalesInterface: "销售接口",
         TimeZone: "时区"
      },
      ///物理区域
      T_PhysicalZone: {
         Title: "物理区域信息",
         ZoneName: "区域名称",
         ZoneType: "类型",
         ZoneRelated: "区域关联",
         CorridorRelated: "通道关联"
      },
      ///图样式
      R_ChartStyle: {
         Title: "图样式信息",
         Code: "图样式码",
         CodeType: "样式类别",
         JsonCode: "图样式定义",
         CorAttributes: "对应属性"
      },
      ///图配置
      R_ChartOption: {
         Title: "图配置信息",
         Property: "属性名",
         Code: "图配置码",
         ChartType: "图类型",
         JsonCode: "图参数定义",
         chartstyle: "样式配置"
      },
      ///条件配置
      R_ConditionOption: {
         Title: "条件配置信息",
         Name: "条件名称",
         Label: "显示文字",
         Code: "条件编码",
         OptionType: "条件类别",
         Filter: "过滤条件",
         Compare: "对比条件",
         GroupBy: "分组方式",
         KPIField: "指标选择"
      },
      ///指标配置
      R_IndexOption: {
         Title: "指标配置信息",
         Code: "指标Code",
         Label: "名称",
         Field: "外部字段名",
         ChartView: "可支持图形",
         ButtonView: "按钮处理方式",
         TableView: "表格显示方式",
         RowAvg: "表行平均公式",
         RowTotal: "行合计公式",
         Unit: "单位",
         MainReport: "云端表前缀",
         LocalReport: "分组表前缀",
         HistoryTable: "历史表前缀",
         InnerField: "内部字段名",
         MainField: "是否主库字段",
         ServiceId: "服务名称"
      },
      ///报表菜单
      R_ReportMenu: {
         All: "全部",
         Website: "网站",
         MobileTerminal: "手机端",
         Title: "报表菜单信息",
         MenuType: "菜单类型"
      },
      S_Category: {
         Title: "类别管理",
         Name: "分类名称",
         KeyName: "键名",
         Data: "数据",
         ImageUrl: "图标",
         ParentId: "上级类别"
      },
      S_Menu: {
         Title: "后台菜单管理",
         Name: "菜单名称",
         ParentId: "上级菜单",
         PageUrl: "访问地址"
      },
      S_Role: {
         Title: "角色授权",
         Name: "角色名称",
         MenuIds: "可用菜单",
         ParentId: "上级角色",
         FulleMenuIds: "全局可用菜单"
      },
      S_User: {
         Title: "用户管理",
         Name: "姓名",
         UserCode: "帐号",
         UserPass: "密码",
         UserGroupId: "所属用户组",
         UserPage: "默认页面",
         RoleId: "角色"
      },
      S_UserGroup: {
         Title: "用户组管理",
         Name: "用户组名称",
         GroupLevel: "用户组级别",
         ZoneIds: "区域列表",
         ReportPages: "报表列表",
         MallCount: "案场数量",
         PagesCount: "报表数量"
      },
      R_ReportPage: {
         Title: "报表页面信息",
         ConditionFields: "可用条件",
         Name: "报表名称",
         ReportMenuId: "上级菜单Id",
         ReportUrl: "报表地址",
         Conditions: "条件",
         IndexFields: "可用指标",
         Charts: "图表",
         ChartOption: "图表配置",
         UpdateUserName: "更新人",
         MenuName: "菜单名称",
         ReportIcon: "报表图标"
      },
      S_ServiceList: {
         Name: "服务名",
         Filename: "文件名",
         Interface: "接口",
         Description: "描述",
         Url: "服务地址",
         MarkDownUrl: "文档地址"
      },
      S_ComponentsList: {
         Title: "开发文档",
         Name: "组件名",
         Description: "描述",
         Attribute: "属性",
         Url: "测试地址"
      },
      T_Device: {
         MallId: "所属案场",
         DeviceCode: "设备编码",
         Location: "位置",
         DeviceType: "设备类型",
         BothWay: "正反向",
         Forward: "正向",
         Backward: "反向",
         DataClass: "数据类型",
         MACAddress: "MAC地址",
         IPAddress: "IP地址",
         RemoteCode: "远程编码",
         CheckLog: "查看日志",
         RemoteManagement: "远程管理",
         Version: "版本"
      },
      T_DeviceZone: {
         DeviceZoneCode: "子设备码",
         IpAddress: "终端IP",
         EnterLine: "Irisys进线",
         ExitLine: "Irisys出线",
         LastDataTime: "最后数据时间",
         FinalConnectTime: "最后连接时间"
      },
      Radio: {
         Flow: "客流",
         Pass: "经过",
         FittingRoom: "试衣间",
         Service: "服务",
         Queue: "队列",
         Alarm: "警报",
         HeatMap: "热力图",
         Level: "级别",
         Level_1: "级别一",
         Level_2: "级别二",
         Level_3: "级别三",
         Level_4: "级别四",
         Nationwide: "全国",
         Filiale: "分公司",
         Store: "门店"
      }
   },
   Common: {
      /// 状态类
      DeviceStatus: "设备状态",
      Enabled: "启用状态",

      /// 常用按钮类
      Add: "新增",
      Save: "保存",
      SaveAs: "另存为",
      Cancel: "取消",
      Close: "关闭",
      Search: "查询",
      Submit: "提交",

      /// 表格操作类
      Operation: "操作",
      Modify: "修改",
      Delete: "删除",
      Remove: "移除",
      Choose: "选择",
      Check: "查看",

      /// 其它类
      Password: "密码",
      Available: "可用",
      ServerInfo: "服务器信息",
      Count: "数量",
      Plugins: "插件",
      ChartTable: "图表",
      DeleteConfirm: "是否删除当前记录？"
   },
   Pages: {
      ///系统设置
      System: {
         RoleManager: "角色授权",
         UserGroupManager: "用户组管理",
         UserManager: "用户管理",
         CategoryManager: "类别管理",
         MenuManager: "菜单管理"
      },

      ///场地设置
      Location: {
         LocationManager: "地理位置管理",
         CompanyManager: "集团信息管理",
         MallManager: "案场信息管理",
         PhysicalManager: "物理区域管理",
         PhysicalZoneManager: "采集区域关联管理"
      },

      ///设备设置
      Device: {
         DeviceManager: "采集主机管理",
         DeviceZoneManager: "采集终端管理",
         DeviceZoneStatus: "采集终端状态",
         DeviceZoneQuery: "终端采集区域查询",
         ZoneRelatedTable: "区域关联一览表",
         Mall: "案场",
         PhysicalZone: "物理区域",
         TerminalCode: "终端码"
      },

      ///数据维护
      Business: {
         HolidayManager: "节假日管理",
         BusinessTime: "营业时间管理",
         ActivityManager: "主题活动管理",
         WeatherManager: "天气管理",
         AggregatorManager: "历史数据汇总",
         HistoryFlowManager: "客流历史数据",
         TagManager: "标签管理",
         MallUpdateLog: "案场变化日志",
         ZoneUpdateLog: "区域变化日志",
         AdjustManager: "历史数据调整",
         RecoverManager: "历史数据恢复",
         SalesDataMaintain: "销售数据维护"
      },
      ///报表配置
      Template: {
         IndexManager: "指标管理",
         ChartStyleManager: "图样式参数管理",
         ChartOptionManager: "图表显示配置",
         ConditionOptionManager: "条件选项管理",
         ReportMenuManager: "报表菜单管理",
         ReportPageManager: "报表页面管理"
      },

      ///任务管理qe
      Task: {
         TaskManager: "任务管理",
         TaskLog: "任务日志",
         Interval: "间隔时间",
         ExecutionMethod: "执行方法",
         LastException: "最后异常",
         LastExceptionTime: "最后异常时间",
         LastRunTime: "最后运行时间",
         RunTime: "运行时间",
         RunResult: "运行结果",
         TaskName: "任务名称",
         ExecutionInfo: "执行信息",
         ExecutionFile: "执行文件",
         ServicePort: "服务端口",
         ServicePath: "服务路径"
      },

      ///邮件日志qe
      MailLog: {
         MailLog: "邮件日志",
         Server: "服务器",
         SourceModule: "来源模块",
         Email: "接收邮箱",
         MailTheme: "邮件主题",
         MailContent: "邮件内容",
         RecordTime: "记录时间",
         SendTime: "发送时间",
         SendResult: "发送结果",
         SendTimes: "发送次数"
      },

      ///操作日志qe
      OperationLog: {
         Title: "操作日志",
         UserIP: "来源IP",
         UserCode: "操作用户",
         RunTime: "操作时间",
         OperateTime: "执行时长",
         ServiceName: "服务名称",
         ServiceOp: "服务接口",
         ServiceData: "操作数据",
         Message: "异常信息",
         OperateResult: "操作结果",
         FromSource: "调用源",
         TraceId: "跟踪码"
      },

      ///代理商管理qe
      Agent: {
         AgentManager: "代理商管理",
         AgentChoose: "代理商选择",
         AgentContact: "负责人",
         AgentName: "代理商名称",
         Title: "代理商信息"
      },

      ///告警定义
      AlarmCode: {
         title: "告警定义",
         Name: "告警名称",
         Code: "告警码",
         Description: "告警内容",
         Keys: "告警内容键值",
         Remark: "备注"
      },

      ///告警过滤
      AlarmFilter: {
         Title: "告警过滤",
         Name: "名称",
         Fitlers: "过滤条件"
      },

      ///当前告警
      AlarmLog: {
         Title: "当前告警",
         MallId: "案场Id",
         MallName: "案场名称",
         DeviceCode: "设备码",
         AlarmCode: "告警码",
         AlarmLevel: "告警级别",
         Description: "告警内容",
         FirstTime: "首次时间",
         LastTime: "末次时间",
         AlarmCount: "告警次数"
      },

      ///历史告警
      AlarmLogHistory: {
         Title: "历史告警",
         MallId: "案场Id",
         MallName: "案场名称",
         DeviceCode: "设备码",
         AlarmCode: "告警码",
         AlarmLevel: "告警级别",
         Description: "告警内容",
         FirstTime: "首次时间",
         LastTime: "末次时间",
         AlarmCount: "告警次数",
         RecoverTime: "恢复时间"
      },

      //告警策略
      AlarmPolicy: {
         AlarmPolicyName: "策略名称",
         FirestRun: "首次执行",
         TryModel: "重发模式"
      }
   },
   Placeholder: {
      PleaseInput: "请输入",
      PleaseChoose: "请选择",
      PleaseQuery: "请输入查询内容",
      InputUserName: "请输入用户名",
      UserLogin: "用户登录",
      InputPassword: "请输入密码"
   },
   DataTable: {
      SizePerPage: "按 _MENU_ 条记录/页",
      Previous: "上一页",
      Next: "下一页",
      NoRecords: "目前没有数据记录",
      ZeroRecords: "该过滤条件没有找到任何数据记录",
      TotalCount: "当前数据查询结果：共 _TOTAL_ 条",
      FilterCount: "从 _MAX_ 条总记录中过滤"
   },
   Status: {
      Display: "显示",
      Hide: "隐藏",
      Enabled: "启用",
      Disabled: "停用",
      Connect: "正常",
      Disconnect: "已断线",
      NotChoose: "未选择",
      HasChoosen: "已选择",
      One: "一级",
      Two: "二级",
      Three: "三级",
      Four: "四级"
   },
   Label: {
      Filtration: "过滤条件"
   },
   Container: {
      ChangePassword: "修改密码",
      LanguageSelection: "语言选择",
      LogOut: "退出系统",
      OldPassword: "旧密码",
      NewPassword: "新密码",
      ConfirmPassword: "确认密码",
      ExitOrNot: "是否确认退出?",
      PasswordsDiffer: "两次输入密码不一致"
   },
   Login: {
      NeedPass: "请输入密码",
      NeedUser: "请输入用户名",
      Processing: "正在登入中..."
   }
};

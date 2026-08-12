const tripData = {
  dates: [
    { key: "2027-01-24", dayNum: "1/24", week: "日", title: "Day 1 台灣 → 成田 → 越後湯澤" },
    { key: "2027-01-25", dayNum: "1/25", week: "一", title: "Day 2 石打丸山滑雪 Day 1" },
    { key: "2027-01-26", dayNum: "1/26", week: "二", title: "Day 3 石打丸山滑雪 Day 2" },
    { key: "2027-01-27", dayNum: "1/27", week: "三", title: "Day 4 石打丸山滑雪 Day 3" },
    { key: "2027-01-28", dayNum: "1/28", week: "四", title: "Day 5 半天滑雪 → 新幹線回東京" },
    { key: "2027-01-29", dayNum: "1/29", week: "五", title: "Day 6 東京自由活動 (逛街/抱石)" },
    { key: "2027-01-30", dayNum: "1/30", week: "六", title: "Day 7 東京自由活動 (上野/銀座)" },
    { key: "2027-01-31", dayNum: "1/31", week: "日", title: "Day 8 東京 → 返台" }
  ],

  itinerary: {
    "2027-01-24": {
      subtitle: "成田集合 → 接駁巴士 → 越後之御宿 Inamoto",
      weather: { temp: "2°C / -4°C", condition: "陰有雪 (越後湯澤)" },
      timeline: [
        { time: "17:00 前", title: "最晚抵達成田機場", desc: "請預留入境與領取行李時間。" },
        { 
          time: "18:00 🚨", 
          title: "成田機場 8 人集合資訊", 
          desc: "集合區域：第二航廈 1F 到達大廳中央服務台前。若從不同航廈抵達，請利用航廈間免費巡迴巴士移動（約10~15分鐘）。" 
        },
        { 
          time: "18:10", 
          title: "滑雪中毒者接駁巴士發車", 
          desc: "時刻表尚未公布，以下為預估時間。請提前10分鐘報到核對姓名。行李限制：每人限一大件行李箱與一組雪具袋。" 
        },
        { 
          time: "21:40~22:10", 
          title: "抵達越後湯澤飯店", 
          desc: "入住「越後之御宿 Inamoto」（JR越後湯澤站西口徒步2分鐘）。辦理 Check-in。" 
        }
      ],
      restaurants: [
        { name: "保よし (Yasuyoshi)", type: "越後鄉土料理 / 炸豬排", note: "營業至 22:00，抵達時間早可前往。" },
        { name: "7-Eleven 越後湯澤站前店", type: "超商採買", note: "推薦採買：飯糰、牛奶、三明治、能量飲（滑雪備用）。" }
      ]
    },

    "2027-01-25": {
      isSkiDay: true,
      skiPlan: { beginner: "教練課 (基礎觀念/滑行/安全跌倒)", advanced: "自由滑雪 (勘查地形)" },
      weather: { temp: "1°C / -5°C", condition: "降雪 (雪況極佳)" },
      timeline: [
        { time: "07:00", title: "起床與早餐", desc: "於房內享用前晚採買之早餐。" },
        { time: "08:15", title: "飯店大廳集合出發", desc: "穿著基本保暖底層與雪褲。" },
        { time: "08:30", title: "搭乘雪場接駁車", desc: "至 JR 越後湯澤站東口搭乘石打丸山免費 Shuttle Bus (約 10-15 分鐘)。" },
        { time: "09:00~12:00", title: "上午滑雪/教練課", desc: "新手組於 Resort Center 集合與教練會合；老手組自由熱身。" },
        { time: "12:00~13:15", title: "雪場午餐", desc: "8 人一同於雪場餐廳用餐與休息。" },
        { time: "13:15~15:30", title: "下午滑雪", desc: "新手組練習初級道，老手組挑戰高處雪道。" },
        { time: "16:00", title: "歸還租借裝備/搭車回飯店", desc: "搭接駁車返回越後湯澤站。" },
        { time: "18:00", title: "晚餐：越後湯澤團體聚餐", desc: "享用在地新潟米與燒肉/居酒屋。" }
      ],
      restaurants: [
        { name: "人情所 (Ninjo-dokoro)", type: "居酒屋", note: "適合 8 人，需提前預約，距離飯店徒步 3 分鐘。" }
      ]
    },

    "2027-01-26": {
      isSkiDay: true,
      skiPlan: { beginner: "教練課 (轉彎/纜車搭乘)", advanced: "自由滑雪 / 拍照" },
      weather: { temp: "0°C / -6°C", condition: "晴時多雲" },
      timeline: [
        { time: "08:15", title: "集合出發", desc: "搭乘免費接駁車前往石打丸山。" },
        { time: "09:00~12:00", title: "上午滑雪", desc: "新手進階轉彎練習。" },
        { time: "12:00~13:00", title: "午餐時間", desc: "於 Resort Center 2F 景觀餐廳用餐。" },
        { time: "13:00~15:30", title: "下午滑雪", desc: "老手可陪同新手於綠線進行觀光滑行與拍照。" },
        { time: "17:30", title: " CoCoLo Yuzawa 逛街", desc: "前往越後湯澤站內 CoCoLo 逛街、試飲日本酒。" }
      ],
      restaurants: [
        { name: "𪡏代川 (Yagashiro-gawa)", type: "燒肉", note: "肉質極佳，適合滑雪後補充蛋白質，建議預約。" }
      ]
    },

    "2027-01-27": {
      isSkiDay: true,
      skiPlan: { beginner: "全員 Free Ski (成果發表)", advanced: "全員 Free Ski" },
      weather: { temp: "2°C / -3°C", condition: "多雲" },
      timeline: [
        { time: "08:30", title: "出發前往雪場", desc: "最後一天全天滑雪。" },
        { time: "09:00~15:30", title: "全天自由滑雪", desc: "8 人可分組拍攝滑雪影片。" },
        { time: "16:30", title: "返飯店泡湯", desc: "返回 Inamoto 飯店享用日式溫泉紓解肌肉痠痛。" },
        { time: "19:00", title: "慶功晚餐", desc: "慶祝全員順利完成滑雪行程！" }
      ],
      restaurants: [
        { name: "食樂庵 湯澤", type: "日式居酒屋", note: "提供多樣化下酒菜與鍋物，適合 8 人大桌。" }
      ]
    },

    "2027-01-28": {
      subtitle: "上午滑雪 → 新幹線 → 東京 Check-in",
      weather: { temp: "3°C / -2°C", condition: "晴" },
      timeline: [
        { time: "08:00", title: "辦理退房與寄放行李", desc: "將大行李寄放於飯店櫃檯。" },
        { time: "08:30~12:00", title: "半天滑雪 / 拍照", desc: "把握最後雪場時光。" },
        { time: "15:00~17:00", title: "越後湯澤站內採買", desc: "買伴手禮、爆彈飯糰。" },
        { 
          time: "17:30 🚄", 
          title: "JR 上越新幹線 (前往東京)", 
          desc: "時刻表尚未公布，預估推薦班次：Toki 336 號 (17:28 越後湯澤 → 18:40 東京)。8 人團體強烈建議提早訂指定席！" 
        },
        { time: "19:00 左右", title: "抵達東京飯店 Check-in", desc: "入住上野或東京車站周邊飯店。" }
      ],
      restaurants: [
        { name: "爆彈飯糰 雪ん洞", type: "新潟飯糰", note: "位於越後湯澤站內，用上一斤新潟米製作的大飯糰。" }
      ]
    },

    "2027-01-29": {
      subtitle: "東京自由活動 (分組：逛街組 / 抱石運動組)",
      noTime: true,
      timeline: [
        { time: "", title: "【逛街組】上野 & 阿美橫町", desc: "採買藥妝、零食、逛多慶屋與上野公園。" },
        { time: "", title: "【運動組】東京室內抱石體驗", desc: "前往 B-Pump Akihabara 或附近初學者友善抱石館。" },
        { time: "", title: "【全體聚餐】銀座 / 秋葉原晚宴", desc: "8 人可於銀座燒肉或居酒屋聚餐慶祝。" }
      ],
      restaurants: [
        { name: "銀座 篝 (Kagari)", type: "雞白湯拉麵", note: "排隊名店，濃郁美味。" }
      ]
    },

    "2027-01-30": {
      subtitle: "東京深度自由行 (逛街與文化散策)",
      noTime: true,
      timeline: [
        { time: "", title: "秋葉原動漫周邊與電器尋寶", desc: "適合開逛動漫公仔、3C產品。" },
        { time: "", title: "銀座精品與平價潮流採買", desc: "Uniqlo 旗艦店、鳩居堂、伊東屋文具。" },
        { time: "", title: "東京車站番外篇 / 伴手禮掃貨", desc: "東京車站一番街，買壓軸伴手禮。" }
      ],
      restaurants: []
    },

    "2027-01-31": {
      subtitle: "東京 → 成田機場 → 平安返台",
      noTime: true,
      timeline: [
        { time: "", title: "飯店 Check-out 與行李移動", desc: "確認無遺留物品後辦理退房。" },
        { time: "", title: "搭乘 Skyliner 前往成田機場", desc: "京成上野搭乘 Skyliner (約 41 分鐘抵達第二航廈)。" },
        { time: "", title: "成田機場免稅店巡禮與登機", desc: "預留 2.5 小時至機場辦理報到與享用最後日本美食。" }
      ],
      restaurants: []
    }
  },

  skiLunchList: [
    { name: "Resort Center 2F 餐廳", pos: "山麓中央", type: "咖哩/拉麵/丼飯", price: "¥1,200~1,800", note: "空間寬敞、桌位多，最適合 8 人團體大桌。" },
    { name: "Austria House", pos: "山頂區", type: "歐式輕食/熱可可/漢堡", price: "¥1,500~2,200", note: "展望視野極佳，適合滑累了喝下午茶。" },
    { name: "Komorebi 咖啡館", pos: "中腹區", type: "義大利麵/披薩", price: "¥1,400~2,000", note: "氣氛溫馨，無預約服務，熱門時段需避開 12:30 尖峰。" }
  ],

  // 結構化分區之行前準備清單
  pretripChecklistGrouped: [
    {
      category: "重要證件與財務",
      items: [
        { id: "p1", text: "護照 (效期6個月以上) & 護照影本/電子檔" },
        { id: "p2", text: "來回機票憑證 / Visit Japan Web 填寫完成" },
        { id: "p3", text: "日幣現金 / 信用卡 / 網卡 eSIM" },
        { id: "p4", text: "海外滑雪特定旅遊平安險保單" },
        { id: "p23", text: "防水夾鏈袋 (保護護照、手機與現金)" }
      ]
    },
    {
      category: "滑雪個人裝備",
      items: [
        { id: "p35", text: "防水雪衣" },
        { id: "p36", text: "防水雪褲" },
        { id: "p37", text: "雪衣中層 (保暖帽T或毛衣)" },
        { id: "p9", text: "吸濕排汗發熱底層衣 (2-3件)" },
        { id: "p5", text: "防水保暖滑雪手套 (可多備副薄手套)" },
        { id: "p6", text: "滑雪專用長襪 (3-4雙，厚度適中)" },
        { id: "p7", text: "防風保暖脖圍 / 面罩" },
        { id: "p8", text: "滑雪護目鏡 (Goggles)" },
        { id: "p24", text: "護具類 (防摔褲/護臀、護膝、護肘)" },
        { id: "p25", text: "安全帽 / 頭套 (戴在頭盔內的薄毛帽)" },
        { id: "p26", text: "雪票夾 / 帶伸縮扣小包" },
        { id: "p27", text: "雪鏡專用擦拭布 (或防霧噴霧)" }
      ]
    },
    {
      category: "一般衣物與鞋履",
      items: [
        { id: "p10", text: "外出行走保暖羽絨外套 / 外套" },
        { id: "p11", text: "換洗上衣 / 保暖褲裝 / 貼身內衣褲" },
        { id: "p12", text: "睡衣 / 飯店內穿舒適服飾" },
        { id: "p13", text: "雪地防滑保暖鞋 / 抓地力佳靴子" },
        { id: "p28", text: "飯店/室內便攜拖鞋 (脫下雪鞋後穿著)" },
        { id: "p29", text: "鞋用除濕乾燥包" }
      ]
    },
    {
      category: "盥洗保養與護理",
      items: [
        { id: "p14", text: "高保濕乳液 / 護手霜 (雪場極乾燥)" },
        { id: "p15", text: "防曬乳 / 高保濕潤唇膏" },
        { id: "p16", text: "個人盥洗保養試用包 / 牙刷牙膏" },
        { id: "p17", text: "肌肉痠痛貼布 / 痠痛軟膏 (滑雪必備)" },
        { id: "p18", text: "個人常備藥 (感冒、腸胃、止痛藥)" },
        { id: "p30", text: "大小毛巾 / 快乾毛巾 (雪場休息與日歸溫泉用)" },
        { id: "p31", text: "強效舒緩足貼 / 休足時間" },
        { id: "p32", text: "高保濕眼藥水 / 人工淚液" },
        { id: "p33", text: "指甲剪 (避免滑雪時腳趾壓傷)" }
      ]
    },
    {
      category: "電子與常備備品",
      items: [
        { id: "p19", text: "手機 & 充電線 & 轉接頭" },
        { id: "p20", text: "高容量行動電源 (極寒下掉電快)" },
        { id: "p34", text: "行動電源保溫袋 (防止低溫快速掉電)" },
        { id: "p21", text: "暖暖包 / 發熱貼" },
        { id: "p22", text: "摺疊傘 / 環保購物袋" }
      ]
    },
    {
      category: "其他",
      items: [
        { id: "p38", text: "(若東京抱石) 岩鞋" }
      ]
    }
  ],

  dailyChecklistTemplate: [
    "雪衣 / 雪褲",
    "吸濕排汗發熱衣 / 保暖中層",
    "滑雪專用長襪",
    "防水滑雪手套",
    "保暖脖圍 / 面罩",
    "雪鏡 (Goggles)",
    "安全帽 (Helmet)",
    "雪場 Lift Pass 纜車票",
    "防曬乳 / 高保濕潤唇膏",
    "小保溫瓶 / 水管包",
    "行動電源 + 手機",
    "飯店房卡",
    "少量日幣現金"
  ],

  // 東京好吃好玩精選推薦資料（純文字標籤）
  tokyoSpots: [
    {
      name: "阿美橫町 & 上野商圈",
      cat: "購物 / 美食",
      area: "上野",
      desc: "藥妝店（二木菓子、OS Drug）極為集中，還有多慶屋與各式屋台平價小吃、海鮮丼與居酒屋街。"
    },
    {
      name: "銀座中央通 & 精品文具散策",
      cat: "購物 / 咖啡",
      area: "銀座",
      desc: "匯集 Uniqlo 12層旗艦店、伊東屋文具（Itoya）、GINZA SIX，週末有步行者天國，適合悠閒逛街。"
    },
    {
      name: "銀座 篝 (Kagari) 本店",
      cat: "美食 (拉麵)",
      area: "銀座",
      desc: "米其林推薦濃郁雞白湯拉麵，湯頭宛如法式濃湯般滑順，極受饕客喜愛。"
    },
    {
      name: "東京車站一番街 (拉麵街 & 伴手禮街)",
      cat: "美食 / 伴手禮",
      area: "東京車站",
      desc: "集合六厘舍沾麵、斑鳩拉麵等名店，還有動漫角色街（吉卜力、神奇寶貝）與壓軸伴手禮採買。"
    },
    {
      name: "秋葉原電器街 & 扭蛋會館",
      cat: "娛樂 / 購物",
      area: "秋葉原",
      desc: "動漫公仔模型、3C 電子產品尋寶首選，還有超過數百台扭蛋機的秋葉原扭蛋會館。"
    },
    {
      name: "澀谷 Sky (SHIBUYA SKY) 展望台",
      cat: "景點 / 夜景",
      area: "澀谷",
      desc: "47樓露天無邊際展望台，可 360 度鳥瞰東京夜景與遠眺富士山，建議提早預約夕陽時段入場。"
    }
  ],

  boulderingSites: [
    { name: "B-Pump Akihabara", area: "秋葉原", feature: "東京極具代表性抱石館，路線多樣，英文友善，可現場租用鞋。" },
    { name: "BOULDERING SPACE Q-BLOCK", area: "淺草/上野", feature: "空間舒適、路線豐富，交通便利。" }
  ],

  boulderingSites: [
    { name: "B-Pump Akihabara", area: "秋葉原", feature: "東京極具代表性抱石館，氣氛佳，英文友善，可現場租用鞋。" },
    { name: "BOULDERING SPACE Q-BLOCK", area: "淺草/上野", feature: "路線溫馨多元，適合初學者與第一次嘗試抱石的人。" }
  ]
};

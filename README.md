# chinese menu — 旅游建站框架

**生成日期**：2026-08-18  
**关键词**：chinese menu  
**语言**：英文站（面向海外游客，内容可同时保留中文菜单原文和拼音）  
**站点定位**：面向旅行者的“Chinese Menu Decoder”，首页直接解决“看懂、点对、吃得放心”的问题。

---

## 研究口径

本次 Google 直接抓取触发反爬，Google Trends 也被限流。以下首页竞争分析综合了：

- Google 搜索建议（`chinese menu a-z` 全字母扩展）
- Bing 国际版代理结果
- 当前英文搜索结果中稳定占据首页的常见页面类型

上线前仍建议用住宅代理或真实浏览器把 Google US 首页 10 条、People Also Ask、图片/视频/本地包再复核一次。

---

## 一、搜索意图拆解：用户搜 `chinese menu` 到底要什么

这是一个“宽泛 + 混合意图”的核心词，不能被当作单一餐厅菜单词处理。主要需求如下：

| 用户身份 | 核心需求 | 最希望立刻看到的内容 |
|---|---|---|
| 第一次去中国或去海外中餐馆的游客 | 看得懂菜单、知道怎么点、不敢乱点 | 图片、英文菜名、中文、拼音、价格区间、点餐句子 |
| 有饮食限制的人 | 避免过敏、不吃辣、素食、清真、无麸质 | 过敏原、素食/清真/无麸质筛选 |
| 正在计划城市旅行的吃货 | 每个城市吃什么 | 北京、上海、西安、成都、广州、香港、台北菜单 |
| 学习中文/中餐文化的人 | 学菜单词汇和菜名 | 常见词表、拼音、中文写法、例句 |
| 想找本地中餐菜单的人 | 附近中餐馆菜单、价格、评价 | 菜单照片、价格、评分、电话、地址、点外卖 |
| 活动/家庭场景 | 生日、婚礼、派对、晚餐菜单 | 套餐菜单、适合人数、点菜组合 |

结论：不要只做百科文章，也不要去和 Google Maps 抢“near me”本地包。  
**真正可打的位置是“旅行者版中文菜单解码器”：让用户在一个页面完成浏览菜单、看懂菜名、按饮食需求筛选、生成点餐卡。**

---

## 二、当前谷歌首页/首页类结果在提供什么

| 页面类型 | 典型代表 | 已有功能 | 明显弱点 |
|---|---|---|---|
| 品牌连锁餐厅菜单页 | Panda Express、P.F. Chang's 等 | 菜品分类、价格、营养信息、过敏原、在线点单 | 只覆盖自己品牌，不能帮用户看懂任意中餐菜单 |
| 菜单聚合/点评页 | MenuPix、Zmenu、Restaurantji、Yelp、Tripadvisor | 菜单照片、价格、评分、地址、电话、外卖入口 | 数据分散、菜单照片经常不完整，图片质量不稳，缺少旅行点餐卡片 |
| 旅游攻略列表 | Tripadvisor、China Highlights、美食博客 | 菜品介绍、图片、“must try”列表、部分拼音 | 多为长文列表，缺少交互筛选、点餐短语、城市菜单工具 |
| 食谱/内容站 | The Woks of Life 等 | 菜品做法、图片、文化背景 | 解决“怎么做”，不完全解决“旅行中怎么点” |
| 图片/视频结果 | Google Images、YouTube | 菜品图片、探店视频 | 无法按饮食需求、城市、价格筛选 |
| 词典/翻译工具 | Pleco、Yabla、在线词典 | 菜单词汇、翻译 | 菜单词覆盖不全，缺少整句点餐、场景化卡片 |
| People Also Ask | Google 自带问答 | 常见问题入口 | 内容浅，很多答案没有图片和价格 |

首页空缺：没有一个页面同时做到 **真实菜单照片 + 中英拼音 + 价格区间 + 饮食筛选 + 点餐卡片 + 城市菜单导航**。

---

## 三、如何超过它们：内容差异化和超车点

### 3.1 首页直接上“工具”，不要只上文章

把首页做成一个可交互的菜单探索器：

- 顶部搜索框：搜 `kung pao chicken`、`menu`、`vegetarian`、`beef`、`spicy`
- 快捷筛选：城市、菜系、食材、辣度、价格、素食/清真/无麸质
- 每道菜卡片：真实照片、英文名、中文名、拼音、主要食材、辣度、价格区间、饮食标签
- “Order by pointing” 点餐卡：一键切换大字号中英卡片，方便递给服务员看
- “Hear it” 发音按钮：用浏览器 TTS 读拼音或中文，解决不会念的问题

这是当前首页大多数结果没有的差异化功能。

### 3.2 覆盖旅行者的完整决策链

| 用户阶段 | 我们提供什么 | 竞争页面通常缺什么 |
|---|---|---|
| 出发前研究 | 城市菜单页、必吃菜、价格区间 | 缺少按城市组织的菜单解码 |
| 点餐前 | 搜索/筛选、图片、拼音、过敏原 | 缺少交互筛选和饮食标签 |
| 点餐时 | 点餐卡片、中文句子、离线可用 | 大多只有静态文章 |
| 点餐后 | 菜谱背景、文化故事、相似菜推荐 | 内容站有菜谱但没形成完整链路 |

### 3.3 数据质量建立 E-E-A-T

- 每道菜标注“价格采集日期”和“参考城市”，避免信息过时。
- 尽量使用真实菜品照片，注明来源或自己拍摄。
- 加入“我们怎么测试”和作者实地体验信息。
- 对过敏原和宗教饮食标签提供保守提示，并提醒用户与餐厅再次确认。

### 3.4 页面类型覆盖 SERP 特征

- 图片意图：`chinese menu with pictures` 页面做图片网格。
- 工具意图：`chinese menu translator` 做交互工具。
- 列表意图：`chinese menu list`、`chinese menu items` 做结构化列表。
- 本地意图：不硬抢 `near me`，用城市页承接北京/上海/纽约/伦敦等具体目的地。
- 问答意图：首页和内页挂 FAQPage，争取 People Also Ask。

---

## 四、关键词竞争确认

### 4.1 谷歌趋势

直接请求被限流，但从搜索建议和页面类型判断：

- 不是刚冒头的新词，需求长期稳定。
- 在美国、英国、澳大利亚、加拿大等英语国家有稳定搜索。
- 旅游旺季、中国春节前后、海外中餐外卖需求上升期会有波动。

### 4.2 谷歌搜索建议（已实际抓取）

`chinese menu` 及 a-z 扩展中的高价值长尾：

```text
chinese menu near me
chinese menu with pictures
chinese menu with prices
chinese menu card
chinese menu list
chinese menu items
chinese menu vegetarian
chinese menu veg
chinese menu gluten free
chinese menu translations
chinese menu template
chinese menu pdf
chinese menu explained with pictures
chinese menu in mandarin
chinese menu in chinese language
chinese menu shanghai
chinese menu beijing
chinese menu hong kong
chinese menu london
chinese menu nyc
```

这些词应分配到独立内页，避免首页重复堆叠。

### 4.3 allintitle 竞争判断

```text
allintitle: "chinese menu"
```

直接结果数会在不同地区变化，且核心词竞争不低。  
**判断**：不是蓝海核心词，但“旅行者菜单解码器”的功能型内页存在明显长尾空间。打法应是：

- 首页打核心词 `chinese menu`
- 内页打 `chinese menu with pictures`、`chinese menu translator`、`chinese menu vegetarian`、城市菜单等长尾
- 菜品页打 `kung pao chicken`、`mapo tofu`、`xiaolongbao` 等精准词

### 4.4 搜索意图确认

搜索出来的内容以信息 + 本地商业为主，不是单一交易页。  
我们的站型选择：**内容 + 工具混合站**，首页即工具，内页做内容矩阵。

---

## 五、网站结构规划

### 5.1 网站类型

**多页内容 + 工具站**：首页是核心菜单工具，内页承接长尾和城市目的地。后期可增加 OCR 菜单翻译、AI 菜单解释、可打印点餐卡等能力。

### 5.2 网站结构

| 页面 | URL | 目标关键词 | 类型 |
|---|---|---|---|
| 首页 | `/` | chinese menu | 首页/工具聚合 |
| 中文菜单图片页 | `/chinese-menu-with-pictures/` | chinese menu with pictures | 图片工具页 |
| 中文菜单翻译器 | `/chinese-menu-translator/` | chinese menu translator | 交互工具页 |
| 中文菜单列表 | `/chinese-menu-list/` | chinese menu list | 结构化列表页 |
| 中文菜单菜品项 | `/chinese-menu-items/` | chinese menu items | 列表页 |
| 菜单价格指南 | `/chinese-menu-prices/` | chinese menu with prices | 内容页 |
| 中文菜单分类 | `/chinese-menu-categories/` | chinese menu categories | 内容页 |
| 如何看懂中文菜单 | `/how-to-read-a-chinese-menu/` | how to read a chinese menu | 教程页 |
| 素食菜单 | `/chinese-menu-vegetarian/` | chinese vegetarian menu | 筛选内容页 |
| 无麸质菜单 | `/chinese-menu-gluten-free/` | gluten free chinese menu | 筛选内容页 |
| 点餐卡 | `/chinese-menu-card/` | chinese menu card | 工具页 |
| 打印菜单 PDF | `/chinese-menu-pdf/` | chinese menu pdf | 下载工具页 |
| 北京菜单 | `/beijing-chinese-menu/` | beijing chinese menu | 城市内容页 |
| 上海菜单 | `/shanghai-chinese-menu/` | shanghai chinese menu | 城市内容页 |
| 西安菜单 | `/xian-chinese-menu/` | xian chinese menu | 城市内容页 |
| 成都菜单 | `/chengdu-chinese-menu/` | chengdu chinese menu | 城市内容页 |
| 广州菜单 | `/guangzhou-chinese-menu/` | guangzhou chinese menu | 城市内容页 |
| 香港菜单 | `/hong-kong-chinese-menu/` | hong kong chinese menu | 城市内容页 |
| 台北菜单 | `/taipei-chinese-menu/` | taipei chinese menu | 城市内容页 |
| 菜品页 | `/kung-pao-chicken/` | kung pao chicken | 菜品详情页 |
| 菜品页 | `/mapo-tofu/` | mapo tofu | 菜品详情页 |
| 菜品页 | `/peking-duck/` | peking duck | 菜品详情页 |
| 菜品页 | `/xiaolongbao/` | xiaolongbao | 菜品详情页 |
| 菜品页 | `/char-siu/` | char siu | 菜品详情页 |
| 菜品页 | `/hotpot/` | chinese hotpot | 菜品详情页 |
| 博客 | `/blog/` | - | 内容更新 |
| 关于 | `/about/` | - | 品牌页 |
| 隐私政策 | `/privacy-policy/` | - | 合规页 |

### 5.3 横向拓展建议

| 拓展方向 | 示例关键词 | 对应页面 |
|---|---|---|
| 图片变体 | chinese menu pictures, photos, images | 图片工具页 |
| 饮食限制 | vegetarian, vegan, halal, gluten free, spicy, no msg | 筛选页 |
| 价格/数据 | chinese menu prices, calories, near me with prices | 价格页 |
| 场景 | lunch, dinner, birthday, wedding, party, takeaway | 场景内容页 |
| 城市组合 | beijing, shanghai, xian, chengdu, london, nyc, sydney | 城市页 |
| 菜品词 | kung pao chicken, mapo tofu, peking duck, xiaolongbao, char siu | 菜品页 |
| 语言/翻译 | in mandarin, chinese menu translation, chinese menu words | 翻译器内页 |
| 下载/模板 | chinese menu card, pdf, template, design | 工具页 |

---

## 六、页面 SEO 方案

### 6.1 首页

```text
URL: /
Title: Chinese Menu: Browse, Translate & Order Real Chinese Dishes
Meta Description: Explore a visual Chinese menu with pictures, pinyin, prices, and dietary filters. Search dishes, read a Chinese menu, and generate a point-to-order card for your trip.
H1: Chinese Menu Explorer for Travelers
Schema: WebSite + SearchAction + ItemList + FAQPage + BreadcrumbList
```

页面内容模块：

1. Hero 区：标题 + 菜单搜索框 + 快速筛选项  
2. “Point to order” 点餐卡生成器：中英文大字号显示，可切换  
3. 热门菜品网格：照片、英文名、中文名、拼音、辣度、价格区间、饮食标签  
4. 按饮食需求入口：素食、清真、无麸质、不吃辣  
5. 城市菜单快捷入口：北京、上海、西安、成都、广州、香港、台北  
6. 如何看懂中文菜单：4-6 步简短教程  
7. FAQ：8-10 个高频问题，争取 People Also Ask  

内部链接：指向图片菜单页、翻译器、城市页、菜品页、素食/无麸质筛选页。

### 6.2 中文菜单翻译器

```text
URL: /chinese-menu-translator/
Title: Chinese Menu Translator: Search, Read & Pronounce Dishes
Meta Description: Translate Chinese menu items into English with pinyin, photos, ingredients, and audio pronunciation. Use our Chinese menu translator to order food confidently.
H1: Chinese Menu Translator
Schema: WebApplication + HowTo + FAQPage + BreadcrumbList
```

页面内容模块：

1. 搜索框：支持英文、中文、拼音模糊搜索  
2. 菜名卡片：中文、拼音、英文翻译、TTS 发音按钮、主要食材  
3. 常见菜单词表：鸡、鸭、鱼、牛、猪、豆腐、面、饭、辣、蒸、炒、煮等  
4. 点餐短语库：  
   - “不要辣” / bù yào là  
   - “我是素食者” / wǒ shì sù shí zhě  
   - “我对花生过敏” / wǒ duì huā shēng guò mǐn  
5. 上传菜单照片说明：OCR 功能预留入口  
6. 生成点餐卡按钮  
7. FAQ  

内部链接：指向图片菜单页、菜单分类、常见菜品页、城市页。

### 6.3 中文菜单图片页

```text
URL: /chinese-menu-with-pictures/
Title: Chinese Menu with Pictures: See Every Dish Before You Order
Meta Description: Browse a Chinese menu with pictures. See real dish photos, English names, Chinese characters, pinyin, prices, and dietary tags before you order.
H1: Chinese Menu with Pictures
Schema: ItemList + ImageObject + FAQPage + BreadcrumbList
```

页面内容模块：

1. 筛选工具栏：城市、菜系、食材、辣度、饮食限制、价格  
2. 图片网格：每张图片对应一道菜，点击展开详情  
3. 菜品详情弹层/卡片：中英文名、拼音、成分、价格区间、饮食标签、相似菜  
4. 按城市分组：北京菜单、上海菜单、成都菜单等  
5. 可打印点餐卡  
6. FAQ  

内部链接：指向翻译器、城市页、菜品页、价格页。

### 6.4 北京城市菜单页

```text
URL: /beijing-chinese-menu/
Title: Beijing Chinese Menu: 25 Dishes You Must Know
Meta Description: A visual Beijing Chinese menu with 25 must-know dishes, pinyin, photos, prices, and how to order them. Perfect for first-time visitors to Beijing.
H1: Beijing Chinese Menu Guide
Schema: Article + ItemList + FAQPage + BreadcrumbList
```

页面内容模块：

1. 北京菜单速览：烤鸭、炸酱面、铜锅涮肉、豆汁、驴打滚等  
2. 每道菜：照片、中文、拼音、英文解释、价格区间、推荐吃法  
3. 北京点餐卡片：常用句子和招牌菜  
4. 游客常去区域：王府井、簋街、前门、牛街等  
5. 素食/清真/无麸质提示  
6. FAQ  

内部链接：指向首页翻译器、其他城市页、烤鸭菜品页、价格页。

---

## 七、建站执行方案

### 7.1 技术选型

| 项目 | 选择 | 理由 |
|---|---|---|
| 框架 | Next.js 14+ App Router | SSG 适合内容页，工具页可做客户端交互 |
| 样式 | Tailwind CSS | 快速实现筛选器、点餐卡片、图片网格 |
| 数据 | TypeScript + JSON/MDX | 菜品数据、城市数据、菜单词表统一维护 |
| 图片 | Sharp 生成 WebP/AVIF 多尺寸 | 图片密集站必须做响应式图片和懒加载 |
| 部署 | Cloudflare Pages 或 Vercel | SSG 静态导出，CDN 快 |
| 分析 | GA4 + Search Console | 观察搜索词、点击率、内页表现 |
| 搜索 | 前端模糊搜索，后续可接 Algolia/Meilisearch | 先轻量，数据量大再升级 |
| 点餐卡 | 原生 JS + 打印 CSS | 避免过度依赖框架 |

### 7.2 菜品数据模型

```ts
type Dish = {
  slug: string;
  englishName: string;
  chineseName: string;
  pinyin: string;
  region: string;
  category: string;
  mainIngredients: string[];
  allergens: string[];
  dietaryTags: "vegetarian" | "vegan" | "halal" | "gluten-free" | "spicy" | "mild";
  priceRange: { low: number; high: number; currency: "CNY" | "USD" };
  description: string;
  image: string;
  pronunciation: string;
  relatedDishes: string[];
  updatedAt: string;
};
```

### 7.3 域名建议

| 优先级 | 域名 | 说明 |
|---|---|---|
| 首选 | `chinese-menu.com` | 精确词，品牌直接 |
| 备选1 | `chinesemenuguide.com` | 含核心词 + guide |
| 备选2 | `chinesemenudecoder.com` | 突出解码器定位 |
| 备选3 | `chinamenutraveler.com` | 突出旅行者受众 |

### 7.4 完整 URL 清单

```text
/                                   — 首页 — chinese menu
/chinese-menu-with-pictures/        — 图片 — chinese menu with pictures
/chinese-menu-translator/           — 工具 — chinese menu translator
/chinese-menu-list/                 — 列表 — chinese menu list
/chinese-menu-items/                — 列表 — chinese menu items
/chinese-menu-prices/               — 内容 — chinese menu with prices
/chinese-menu-categories/           — 内容 — chinese menu categories
/how-to-read-a-chinese-menu/        — 教程 — how to read a chinese menu
/chinese-menu-vegetarian/           — 筛选 — chinese vegetarian menu
/chinese-menu-gluten-free/          — 筛选 — gluten free chinese menu
/chinese-menu-card/                 — 工具 — chinese menu card
/chinese-menu-pdf/                  — 工具 — chinese menu pdf
/beijing-chinese-menu/              — 城市 — beijing chinese menu
/shanghai-chinese-menu/             — 城市 — shanghai chinese menu
/xian-chinese-menu/                 — 城市 — xian chinese menu
/chengdu-chinese-menu/              — 城市 — chengdu chinese menu
/guangzhou-chinese-menu/            — 城市 — guangzhou chinese menu
/hong-kong-chinese-menu/            — 城市 — hong kong chinese menu
/taipei-chinese-menu/               — 城市 — taipei chinese menu
/kung-pao-chicken/                  — 菜品 — kung pao chicken
/mapo-tofu/                         — 菜品 — mapo tofu
/peking-duck/                       — 菜品 — peking duck
/xiaolongbao/                       — 菜品 — xiaolongbao
/char-siu/                          — 菜品 — char siu
/hotpot/                            — 菜品 — chinese hotpot
/blog/                              — 博客索引
/about/                             — 品牌页
/privacy-policy/                    — 合规页
```

---

## 八、上线优先级

1. 首页：菜单搜索 + 筛选 + 20 道基础菜 + 点餐卡  
2. 三张核心内页：`chinese-menu-with-pictures`、`chinese-menu-translator`、`how-to-read-a-chinese-menu`  
3. 首批城市页：北京、上海、成都、西安  
4. 首批菜品页：宫保鸡丁、麻婆豆腐、北京烤鸭、小笼包、火锅  
5. 饮食限制页：素食、无麸质  
6. 下载/打印页：`chinese-menu-card`、`chinese-menu-pdf`  
7. 博客持续更新，每篇内部链接到工具页和城市页

---

## 九、Checklist 交付清单

- [ ] Google 直接首页 10 条用住宅代理复核
- [ ] Google Trends 趋势复核
- [ ] allintitle 结果数复核
- [ ] 完成 100 道高频菜的字段录入（中英拼音、成分、过敏原、饮食标签）
- [ ] 完成首页菜单搜索器和筛选器
- [ ] 完成点餐卡生成器
- [ ] 完成翻译器内页
- [ ] 完成图片菜单内页
- [ ] 完成首批 4 个城市页
- [ ] 完成首批 5 个菜品页
- [ ] 提交 Search Console 和 sitemap
- [ ] 配置 GA4 事件：搜索、筛选、点餐卡点击、发音点击
- [ ] 每周更新 3-5 个长尾内页

---

> 核心策略：首页用可交互菜单工具打 **chinese menu**，用图片、翻译器、城市页和菜品页吃长尾。比首页竞品更强的不是文章长度，而是“看完就能点”的旅行者菜单解码体验。

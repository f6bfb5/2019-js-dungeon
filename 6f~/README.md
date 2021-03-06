## 6F - 60 秒算數遊戲

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-02-14_06-13-37-9d5955ae355ba97c0fd52bacfc60f94c.png)

### BOSS 弱點

1. 【特定技術】遊戲規則

> 0 ～ 20 秒為 1 位數計算 `(5-3)`，21 ～ 40 秒為 2 位數計算 `(30\*19)`，41 ～ 60 秒為 3 位數計算 `(332+312)`，加減乘除規則請用隨機產生，不可寫死題目，60 秒內可無限次數答題。
>
> 0 ～ 40 秒答對加一分，41 ～ 60 秒答對加五分，答錯扣一分，最多僅能扣到零分

2. 【特定技術】不可設計跳轉頁面，都得在同一頁內部切換頁面完成。

### 下載資源

- [UI 線上設計稿](https://xd.adobe.com/spec/778c6e57-07eb-4499-69da-779013227c65-01bd/)

### 撰寫 BLOG 技術文章

1. 如果你是駭客，是否能透過 console 執行 JS ，逆向工程讓自己在遊戲上獲得 999 分以上
2. 承 2，如何寫出具備資訊安全的 JS 程式？可思考純 JS 解法，或結合後端設計
3. 延伸擴充功能，例如線上排行榜、雙人遊戲

## 7F - 畫版

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-02-22_06-15-56-9a26e69e33dad23b2e3632cf831562d0.png)

### BOSS 弱點

1. 【特定技術】遊戲規則

> 繪圖區請使用 Canvas 來設計，上方的控制列與下方的畫筆調整可>不用
>
> SAVE ：點擊後可直接下載轉出的 PNG 圖片
>
> CLEAR ALL：清除畫版樣式
>
> UNDO、REDO：上一步、下一步
>
> 點擊箭頭時，功能列介面皆可進行收闔

2. 【擴充功能】請再自行增加「兩個功能」，我相信勇者們都是很有梗的~

### 下載資源

- [UI 線上設計稿](https://xd.adobe.com/spec/07109501-5cfa-494b-5338-e76e97b3fba2-7121/screen/6fcf7e9a-ce01-497d-a677-8cc02b883712/canvas-panel-open/)

### 撰寫 BLOG 技術文章

1. 你學習 Canvas 的學習過程
2. 為什麼要用 Canvas，與一般 DOM 繪製有什麼優缺點？

## 8F - 井字遊戲

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-02-27_08-55-53-ba1d898dc2075f1b49bd53a5cafa85b4.png)

### BOSS 弱點

1. 【特定技術】先手為 O，後手為 X，某方獲勝時，上方會紀錄各方的獲勝戰績
2. 【特定技術】每回合結束後，會判定結果頁(平手、Ｏ 獲勝、X 獲勝)
3. 【特定技術】需符合 RWD，能在低螢幕解析度也能遊玩，介面不能超出 x 軸，至少在以下解析度能夠遊玩。

> iPhone SE 320px
>
> iPhone 8 375px
>
> iPhone PLUS 414px

4. 【特定技術】請使用瀏覽器離線儲存技術，將戰績保留起來，重新打開遊戲也仍可觀看到歷史戰績。技術請任選以下幾種

> Cookie
>
> localStorage

5. 【書寫能力】請寫 BLOG，描述你在開發「滿足獲勝條件」解題思維來進行加強描述

> 上面三個 O 符合獲勝條件
>
> 斜線三個 X 符合獲勝條件

請先不要參考網路上的寫法，試著用自身開發能力來解題，進以提升開發思維。但這段並非強制，真的卡關到爆炸，就還是試圖尋找攻略吧，但我相信想立志成為前端之碑的樓主，一定辦得到的！（崇拜眼神

### 下載資源

- [UI 線上設計稿](https://xd.adobe.com/spec/c8786c93-bea8-4f98-5f86-0899c78d7e9f-be49/screen/74431524-d89f-4151-80ed-294798a78043/start/)

## 9F - 抽獎轉盤

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-03-08_09-56-39-7edf7771e1d5339fc4e8f829dfa42730.png)

有時候現實不會如想像中美好，總是會有許多讓人瞠目結舌的情境。這次遊戲輪盤是有故事性的，請見以下故事：

2017 年尾牙前一個禮拜，員工人數 20 人

腦闆：「那個某某前端，這次尾牙有抽獎，你做個轉盤讓大家來抽獎吧，品項大概個位數而已，我請設計師做好了，你就看看吧」

前端：「好喔~ ( 等等，Child 是啥..??」

--

前端：「設計師，你只給我靜態設計稿而已，啊那個指針你是打算怎麼滾動啊？要怎樣滾才比較滑順？」

設計：「別煩我，老闆剛塞給我急件，你自己搞搞看吧，網路上搜尋一下不就得了？」

前端：「喔..... (進行通靈模式」

2018 年尾牙前一個禮拜，員工 150 人

腦闆：「上次你做的那個抽獎轉盤大家很愛，還是繼續沿用吧！不過這次獎品有 20 種，介面你再調一下啦！」

前端：「蛤？？可是這樣文字跟 ICON 放不下欸！頂多只能放獎品編號(1~20)。而且設計師也辭職了，他只留下原本的版型說..」

腦闆：「沒關係啊，那就放上編號就好，到時我們會把編號用貼紙貼在獎品上，大家就知道是什麼獎項，那就靠你啦！」

前端：「喔....(心裡百萬個草泥馬奔騰」

### BOSS 弱點

1. 【特定技術】2017 遊戲輪盤規則，樣式請參考 Adobe XD 設計稿

> 輪盤只能轉 20 次，人人有獎
>
> Flight：1 份
>
> Child：4 份
>
> Anything：5 份
>
> Wifi：5 份
>
> Wish：5 份
>
> 已經被抽到的獎項，就不可再次出現

2. 【特定技術】2018 遊戲輪盤規則

> 編號 20：69 份
>
> 編號 19：20 份
>
> 編號 18：10 份
>
> 編號 17：5 份
>
> 編號 16~2：各編號皆 1 份
>
> 編號 1：1 份
>
> 請移除獎品名稱與 icon，僅單純顯示編號
>
> 已經被抽到的獎項，就不可再次出現

3. 【特定技術】以上兩個遊戲轉盤，不可直接寫死樣式在網頁上，請將品項以「JSON」格式來儲存，再藉由 JS 跑迴圈依序顯示獎項在輪盤上，此舉用意為若日後輪盤會新增獎項時，只要在 JSON 格式上新增即可。

4. 【特定技術】點選中間的「PRESS」後，指針開始滾動，滾動到一定時間後，就會停止並指向到獎項上。

5. 【特定技術】請考量中獎機率，以 2018 來說，總計有 120 份獎品，所以編號 1 的獎品第一次抽中機率是 1/120，而隨著品項變少也會跟著重新計算中獎率。

### 下載資源

- [UI 線上設計稿](https://xd.adobe.com/spec/e7136641-75fd-4359-5960-f092bdfaa633-9122/)

## 10F - Chrome 應用程式 (幹話產生器)

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-03-16_11-20-15-a8983f9ef09a1c1de5e60743f994af6f.png)

### 校長的話

許多新手勇者誤以為，JS 只能單純開發 web，但其實 JavaScript 已經偷偷潛入在各應用程式上了，

例如 做 Desktop APP 你會聯想用 [Electronjs](https://electronjs.org/)，想做 APP 會想到 [React Native](https://facebook.github.io/react-native/)，想做 VR 3D 介面你會用到 [aframe.io](https://aframe.io/)。

為了讓各位主動跨領域，得到雙修技能，我們將會在每 10 關穿插大 BOSS，好讓未來的你/妳工作上遇到挑戰時，也早已藉由此地下城試煉過一回，助您無懼地面對工作挑戰！

### BOSS 弱點

1. 【特定技術】請開發 [Chrome extension](https://chrome.google.com/webstore/category/extensions?hl=zh-TW)，不需上架，投稿時請提供安裝檔放在雲端，以供 GM 下載測試。什麼？你說你想上架？嘛.. 人生想要什麼都嘗試，也是可以的啦。
2. 【特定技術】打開 Chrome 新頁(tab)時，會隨機顯示你自己新增的語錄，或者是幹話。
3. 【特定技術】可切換夜間/日間模式
4. 【特定技術】新增語錄時，有兩種方式新增，一種是在頁面裡新增，另一種是點選瀏覽器右上角 icon 來新增
5. 【特定技術】背景插圖固定即可，目前的圖片只提供兩張，設計師本來很殘忍地說：「要不要也讓語錄也能新增客製化背景圖片？」，校長想了想，還是決定固定就好，不要太殘忍，當然你想試試看，校長也是不反對啦。
6. 【書寫能力】請寫一篇 BLOG 來介紹你的挑戰過程，目前 Chrome 插件的教學文尚嫌太少，曾經鐵人邦有寫過[一系列](https://ithelp.ithome.com.tw/users/20079450/ironman/1149)教學文，但仍尚缺整個上架流程的文章，為了豐富網路上的各種攻略資源，這個重責大任就交給地下城的各位勇者們了！（拍肩

### 下載資源

- [UI 線上設計稿](https://xd.adobe.com/spec/8a78de7b-86f0-4e48-4c3d-3ce613a59358-fc49/)

## 11F - 燈箱效果

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-03-29_07-41-56-b66002b03f409c7f7a3d754ef0af94a7.png)

### BOSS 弱點

### 下載資源

[UI 線上設計稿]

## 12F - 拼圖

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-04-12_03-50-59-1140d4bc3367fed4b829d6945c936ffe.png)

### BOSS 弱點

### 下載資源

[UI 線上設計稿]

## 13F - 貪吃蛇

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-04-19_06-54-03-c5b17a89b62aaad4978711acbde4ee28.png)

### BOSS 弱點

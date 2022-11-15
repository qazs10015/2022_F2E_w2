# 2022 The F2E Week2

## 作品說明

本作品為六角學院 2022 The F2E Week1 的競賽主題：[Week2 - The F2E 活動網站設計](https://2022.thef2e.com/news/week2)

作品採用設計師[K-T](https://2022.thef2e.com/users/12061579703802991521)的[Figma 設計稿](https://www.figma.com/file/6ZjDFQSrwRy6OUAXDmJNhz/%E5%B0%8F%E7%B6%A0%E7%B0%BD?node-id=0%3A1)

[Demo](https://qazs10015.github.io/2022_F2E_w1/)


## 系統說明

專案運行方式是使用 `npm install`、`npm start`

* NodeJS：16.14.0

* Angular CLI：14.2.7

## 資料夾說明

依照設計師的設計稿，拆成 9 等份，名稱以 story-board1、story-board2 依此類推

```
src
 | --- app
 |       | --- story-board1 (分鏡1)
 |       | --- story-board2 (分鏡2)
 |       | --- story-board3 (分鏡3)
 |       | --- story-board4 (分鏡4)
 |       | --- story-board5 (分鏡5)
 |       | --- story-board6 (分鏡6)
 |       | --- story-board7 (分鏡7)
 |       | --- story-board8 (分鏡8)
 |       | --- story-board9 (分鏡9)
 |       | --- app-routing.module.ts
 |       | --- app.component.html
 |       | --- app.component.scss
 |       | --- app.component.ts
 |       | --- app.module.ts
 |
 | --- assets (images、styles、fonts)
 | --- shared (共用元件)
```

## 使用技術

* Framework：Angular

* Programming Language：Typescript、Javascript、HTML、SCSS

* 其他套件：
  * PDF.js：[官網](https://mozilla.github.io/pdf.js/)、[GitHub](https://github.com/mozilla/pdf.js/)
  * fabricJS：[官網](http://fabricjs.com/)、[GitHub](https://github.com/fabricjs/fabric.js)
  * jsPDF：[Documentation](http://raw.githack.com/MrRio/jsPDF/master/docs/index.html)、[GitHub](https://github.com/parallax/jsPDF)

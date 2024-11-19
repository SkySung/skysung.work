---
title: react
tags: [ReactJS]
last_edit: 2024-11-19 16:37
---

[NextJS 中文 doc](https://nextjs.tw/learn/foundations/from-javascript-to-react/updating-ui-with-javascript)
透過這種方式，開發者會消耗大量時間去寫指令告訴電腦它該 如何（how） 去做事。那能不能只告訴電腦說你想要顯示 什麼（what），然後電腦就可以去理解該 如何（how） 去更新 DOM 呢？

命令式（Imperative） 與 宣告式（Declarative）編程
上述的程式是一個 命令式編程 的好範例，你一步一步告訴電腦該 如何（how） 去更新使用者介面，但我們通常傾向透過宣告式方法來加速開發過程。宣告式方法中，我們不需要寫 DOM 方法，而是專注於宣告我們想要顯示 什麼（what） 內容（在本文的例子中，即 h1 標籤和一些文字）。

換句話說， 命令式編程 像是告訴廚師該如何一步一步去做一個披薩； 宣告式編程 像是直接點一個披薩，我們不需要知道要做出披薩的每一步驟。🍕

其中一個有名的宣告式函式庫為 React，他可以用來幫助開發者建立使用者介面。

React: 一個宣告式 UI 函式庫
作為開發者，你可以單純告訴 React 你想在介面上顯示 什麼（what），React 就會幫你處理好 如何（how） 更新 DOM （即所需的步驟）。


https://nextjs.tw/learn/foundations/from-javascript-to-react/displaying-data-with-props
如果你運行這段程式，React 會給我們一個關於缺少 key 屬性的警告。這是因為 React 需要這個屬性來唯一標記陣列中的每一項，以便知道要在 DOM 中更新哪些元素。

你現在可以使用 names 陣列，因為它們目前每一項還是唯一的（沒有重複的字串），但建議使用保證唯一的名稱，例如每一項的 ID。
```javascript
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```
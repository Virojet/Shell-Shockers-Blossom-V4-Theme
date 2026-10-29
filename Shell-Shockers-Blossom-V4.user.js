// ==UserScript==
// @name         Blossom V4 Theme
// @namespace    blossom-v4.shellshock.theme
// @version      4.0.3
// @description  Revamped Blossom V3 for today's Shell Shockers: black and pink menus over cherry blossom art, a pink HUD and "You blossomed" kill messages. CSS only.
// @author       Virojet (Blossom V2 and V3 by ThatOneGuySS)
// @license      MIT
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Blossom-V4-Theme
// @supportURL   https://github.com/Virojet/Shell-Shockers-Blossom-V4-Theme/issues
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Blossom-V4-Theme/main/Shell-Shockers-Blossom-V4.user.js
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Blossom-V4-Theme/main/Shell-Shockers-Blossom-V4.user.js
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMTQiIGZpbGw9IiMxMTEiIHN0cm9rZT0iI2Y5YjViNSIgc3Ryb2tlLXdpZHRoPSIzIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzEgMzQpIj48ZyBpZD0icCI+PHBhdGggZD0iTTAtM0MtOC03LTEyLTE3LTctMjMtNC0yNi0yLTI0IDAtMjAgMi0yNCA0LTI2IDctMjMgMTItMTcgOC03IDAtM1oiIGZpbGw9IiNmOWI1YjUiIHN0cm9rZT0iIzViMTczMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTAtN1YtMTYiIHN0cm9rZT0iI2ZlYzVlNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PHVzZSBocmVmPSIjcCIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+PHVzZSBocmVmPSIjcCIgdHJhbnNmb3JtPSJyb3RhdGUoMTQ0KSIvPjx1c2UgaHJlZj0iI3AiIHRyYW5zZm9ybT0icm90YXRlKDIxNikiLz48dXNlIGhyZWY9IiNwIiB0cmFuc2Zvcm09InJvdGF0ZSgyODgpIi8+PGNpcmNsZSByPSI1LjUiIGZpbGw9IiM1YjE3MzAiIHN0cm9rZT0iI2ZlYzVlNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjxwYXRoIGQ9Ik01MCA5YzQgMCA2IDMgNSA2LTMgMS02LTEtNS02WiIgZmlsbD0iI2ZlYzVlNSIgc3Ryb2tlPSIjNWIxNzMwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==
// @match        https://shellshock.io/*
// @match        https://www.shellshock.io/*
// @match        https://new.shellshock.io/*
// @match        https://shellgame.me/*
// @match        https://www.shellgame.me/*
// @match        https://algebra.best/*
// @match        https://algebra.vip/*
// @match        https://biologyclass.club/*
// @match        https://deadlyegg.com/*
// @match        https://deathegg.world/*
// @match        https://egg.dance/*
// @match        https://eggboy.club/*
// @match        https://eggboy.xyz/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://egghead.institute/*
// @match        https://eggisthenewblack.com/*
// @match        https://eggsarecool.com/*
// @match        https://eggshooter.best/*
// @match        https://geometry.best/*
// @match        https://geometry.monster/*
// @match        https://geometry.pw/*
// @match        https://geometry.report/*
// @match        https://hardboiled.life/*
// @match        https://hardshell.life/*
// @match        https://humanorganising.org/*
// @match        https://mathactivity.xyz/*
// @match        https://mathdrills.info/*
// @match        https://mathdrills.life/*
// @match        https://mathfun.rocks/*
// @match        https://mathgames.world/*
// @match        https://math.international/*
// @match        https://mathlete.fun/*
// @match        https://mathlete.pro/*
// @match        https://overeasy.club/*
// @match        https://scrambled.best/*
// @match        https://scrambled.tech/*
// @match        https://scrambled.today/*
// @match        https://scrambled.us/*
// @match        https://scrambled.world/*
// @match        https://shellsocks.com/*
// @match        https://shellshockers.club/*
// @match        https://shellshockers.site/*
// @match        https://shellshockers.us/*
// @match        https://shellshockers.world/*
// @match        https://shellshockers.xyz/*
// @match        https://softboiled.club/*
// @match        https://urbanegger.com/*
// @match        https://violentegg.club/*
// @match        https://violentegg.fun/*
// @match        https://yolk.best/*
// @match        https://yolk.life/*
// @match        https://yolk.quest/*
// @match        https://yolk.rocks/*
// @match        https://yolk.tech/*
// @match        https://yolk.today/*
// @match        https://zygote.cafe/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

/* Blossom V4: an update of Blossom V3 (ThatOneGuySS) for the current game.
   The artwork is the same Blossom V3 art, still loaded from Foggier01/Blossom-V3-Fix-by-Foggier on GitHub.
   Only colours and images change; team colours and the game's layout are left alone. */

(() => {
  "use strict";
  if (document.getElementById("blossom-v4-style")) return;

  const ART = "https://raw.githubusercontent.com/Foggier01/Blossom-V3-Fix-by-Foggier/main/";
  const css = document.createElement("style");
  css.id = "blossom-v4-style";
  css.textContent = `
    /* The game paints its UI with --ss-* colours, so most of the theme is just new values for them.
       html:root outranks the game's :root, so these win even before the style moves into <body>. */
    html:root {
      --bv-art: url("${ART}MryoShellBG.jpg");
      --bv-art-dim: linear-gradient(rgb(40 6 20 / .35), rgb(40 6 20 / .35)), var(--bv-art);
      --bv-pink: #f9b5b5;
      --bv-pink-light: #fec5e5;
      --bv-rose: #ffb6c1;
      --bv-wine: #5b1730;
      --bv-field: #323232;

      --ss-yolk0: #ff6060;
      --ss-yolk: var(--bv-pink);
      --ss-yolk2: var(--bv-pink);
      --ss-brown: #fff;
      --ss-blue00: #000;
      --ss-blue0: #9d9d9d;
      --ss-blue1: #000;
      --ss-blue2: #000;
      --ss-blue3: #fff;
      --ss-blue4: var(--bv-pink);
      --ss-blue5: #fff;
      --ss-blue6: #2e2e2e;
      --ss-blue7: var(--bv-pink);
      --ss-blue8: var(--bv-pink-light);
      --ss-green0: #fff;
      --ss-green1: #606060;
      --ss-green2: #000;
      --ss-green-login: #a7a7a7;
      --ss-twitch: transparent;
      --twitch-yellow: #fff;
      --twitch-lt-purple: transparent;
      --ss-blue2clear: rgb(0 0 0 / 0);
      --ss-blue2alpha7: rgb(249 181 181 / .7);
      --ss-blueblend1: linear-gradient(#000, #2e2e2e);
      --ss-blueshadow: rgb(0 0 0 / .5);
      --ss-fieldbg: linear-gradient(var(--bv-field), var(--bv-field));
      --ss-text-shadow-1: .1em .1em 0 rgb(0 0 0 / .8);
      --ss-box-shadow-1: .16em .16em 0 #000;
      --ss-box-shadow-2: .15em .15em 0 rgb(0 0 0 / .9);
      --ss-lightoverlay: var(--bv-art);
      --ss-popupbackground: var(--bv-art-dim);
      --ss-scrollmask1: linear-gradient(transparent, transparent);
      --ss-scrollmask2: linear-gradient(transparent, transparent);
      --ss-me-player-bg: rgb(205 205 205 / .8);
      --ss-red-btn-fill: #e0365f;
      --ss-red-btn-outline: #7a1530;
      --ss-vip-store-bg: linear-gradient(to right bottom, #d4708f, #a8406a, #6e1d3c, #3d0f22);
      --ss-adblocker-text: #fff;
      --ss-big-message-border-color: var(--bv-pink);
    }

    /* The game's selection uses --ss-blue5 (white here). Keep selected text readable on blossom pink. */
    ::selection { background: var(--bv-pink); color: var(--bv-wine); text-shadow: none; }

    /* ---------- Home screen ---------- */
    .load_screen { background: var(--bv-art) center / cover no-repeat; }
    .main-menu-button:hover .main-nav-item-bg, .current-screen .main-nav-item-bg { fill: var(--bv-pink-light); stroke: #fff; color: #fff; }
    .main-menu-button.current-screen, .main-menu-button:hover { color: var(--bv-wine); }
    .main-menu-button.current-screen .menu-icon, .main-menu-button:hover .menu-icon { fill: var(--bv-wine); }
    /* The tab's drop shadow is a path with an inline blue fill. */
    .main-menu-button svg path:not(.main-nav-item-bg) { fill: #000 !important; }
    .ss_field, .firebaseui-input {
      background: var(--bv-field) !important; color: #fff !important; border-color: var(--bv-pink) !important;
      box-shadow: inset -.3em .3em .03em rgb(0 0 0 / .3), .2em .2em .01em #000 !important;
    }
    .ss_field::placeholder, .firebaseui-input::placeholder { color: #a9a9a9; }
    .ss_smtab.selected, .ss_smtab:hover { background: var(--bv-rose); }
    .btn_yolk { background: linear-gradient(#8a2c4f, var(--bv-wine)); }
    .ss_bigtab.selected, .btn_toggleon { color: var(--bv-wine); }
    .bevel_yolk { box-shadow: var(--ss-box-shadow-1), var(--ss-btn-dark-bevel) var(--ss-yolk2), var(--ss-btn-light-bevel) #420000; }
    .icon-star { fill: #fff; stroke: var(--bv-pink); }
    .player-challenges-container { background: var(--bv-art-dim) center / cover; }
    .text_yellow { color: var(--bv-pink); }
    .text_yellow_bright { color: var(--bv-pink-light); }
    .text_blue { color: var(--bv-pink); }
    /* Server list: the yellow ping bar matched the pink track, so all four get pastel colours on a dark track. */
    .regionPingWrap { background: rgb(0 0 0 / .45); }
    .greenPing { background-color: #8fe3b0; }
    .yellowPing { background-color: #ffe08a; }
    .orangePing { background-color: #ffb27a; }
    .redPing { background-color: #ff6b81; }
    .select-box-wrap { background: var(--bv-field); }

    /* ---------- Loading screen ---------- */
    /* The first loader is built with inline styles: the art has no size (so it tiles) and the bar is brown and orange. */
    #progress-container { background-size: cover !important; background-position: center !important; }
    #progress-outer { background: var(--bv-wine) !important; }
    #progress-outer > div { background: #1a1a1a !important; }
    #progressBar { background: linear-gradient(90deg, var(--bv-rose), var(--bv-pink-light)) !important; }
    .spinner-tips.tipMsg { background: #1a1a1a; border: .15em solid var(--bv-pink); color: #fff; }
    .spinner-tips.tipMsg::after { border-top-color: #1a1a1a; }
    html .spinner-tips.LoadingMsgs p { color: #fff !important; text-shadow: var(--ss-text-shadow-1) !important; }
    .loading-progress-outer { background: var(--bv-wine); }
    .loading-progress { background: #1a1a1a; }
    .loading-progress-bar { background: linear-gradient(90deg, var(--bv-rose), var(--bv-pink-light)); }

    /* ---------- Stats ---------- */
    .stat-wrapper .stat:nth-child(odd) > div, .stat-wrapper .stat:nth-child(even) > div { background-color: transparent; }

    /* ---------- Inventory ---------- */
    .weapon_img { background-color: #000; border-color: #fff; fill: #fff; }
    #weapon_select .weapon_selected { background-color: #000; }
    .weapon_img:hover, #weapon_select .weapon_selected { border-color: var(--bv-rose); box-shadow: var(--ss-box-shadow-1); }
    .secondary .equip_icon, .primary .equip_icon { filter: none; }
    .ico_itemtype { border-color: var(--bv-pink); background: rgb(0 0 0 / .2); }
    .btn_green { background: radial-gradient(#fff, #f4c2c2, #000); border-color: #000; color: var(--bv-wine); text-shadow: none; }
    .bevel_green { box-shadow: var(--ss-box-shadow-1), var(--ss-btn-dark-bevel) #e7e7e7, var(--ss-btn-light-bevel) #fff; }
    .ss_bigtab { color: #fff; border-color: #fff; background: #000; box-shadow: var(--ss-box-shadow-1) !important; }
    /* Premium, limited and VIP items keep their own backgrounds so the tiers stay recognisable. */
    #equip_grid .grid-item:not(.morestuff, .is-premium, .item-tag-limited, .item-tag-vipitem) { background: var(--bv-art) center / cover; border-color: #fff; }
    #equip_grid .highlight { color: var(--bv-wine); }
    #stamp-controls .button .arrow { fill: var(--bv-wine); }

    /* ---------- Shop ---------- */
    #bundlePopup { background-image: var(--bv-art-dim); }
    .single-egg-store-item.single-egg-store-item-is-bundle { background-image: linear-gradient(#a8325a, var(--bv-wine)); }
    .eggshop_pricebox.slashed { color: rgb(255 255 255 / .6); }
    /* VIP club: the blossom art replaces the rainbow backdrop, cut to the same rounded panel. */
    .vip-club-background {
      content: var(--bv-art); object-fit: cover; aspect-ratio: 1180 / 918; height: auto;
      filter: brightness(.8); clip-path: inset(7% 7.5% 6% 7.5% round 1.2em);
    }
    .vip-club { color: #fff; }
    .vip-club-log-content--outer { background: rgb(0 0 0 / .7); border: .15em solid var(--bv-pink); color: #fff; }
    .vip-club-log-content--outer li, .vip-club-log-content--outer span:not([class*="text_"]) { color: #fff; }
    .vip-club-log-content--outer .text_darkgreen { color: #5fd36a; }

    /* ---------- Popups, buttons and text colours ---------- */
    .popup_window, .play-panel-panels, #tutorialPopup { background-size: cover; background-position: center; border-color: #fff; }
    #tutorialPopup { background-image: var(--bv-art-dim); }
    .tutorial-labels span { z-index: 1; }
    .tutorial-labels span:not(.tutorial-special-keys) { color: var(--bv-pink-light); }
    .tutorial-labels .tutorial-special-keys { color: var(--bv-wine) !important; text-shadow: none; }
    .tutorial-keyboard, .tutorial-mouse { filter: hue-rotate(145deg) saturate(.85); }
    #adBlockerVideo { background: var(--bv-art-dim) center / cover; border: .2em solid #fff; }
    .box_blue4 { background-color: rgb(0 0 0 / .6); }
    .ss_button_join { background: linear-gradient(#8a2c4f, var(--bv-wine)); color: #fff; box-shadow: .1em .1em 3px #000; }
    .bevel_blue { box-shadow: var(--ss-box-shadow-1), var(--ss-btn-dark-bevel) #000, var(--ss-btn-light-bevel) #fff; }
    .btn_blue { background-color: var(--bv-rose); border-color: #fff; }
    .bevel_blue_light { box-shadow: var(--ss-box-shadow-1), var(--ss-btn-dark-bevel) #6e6e6e, var(--ss-btn-light-bevel) #6e6e6e; }
    /* White text on light pink was V3's weak spot; light pink surfaces get wine text instead. */
    .btn_blue, .btn_blue_light, .tool-tip--bubble { color: var(--bv-wine); }
    .btn_blue, .btn_blue_light { text-shadow: none; }
    .text_blue1, .text_blue8 { color: #fff !important; }
    .btn_blue.text_blue1 { color: var(--bv-wine) !important; }
    .text_blue4 { color: #a9a9a9 !important; }
    .bg_blue2 { background-color: transparent; }
    .bg_blue3 { background-color: transparent !important; }
    /* Big panels like Profile: dark glass, so the 3D egg behind them doesn't show through. */
    .bg_blue6 { background-color: rgb(0 0 0 / .7) !important; }
    .option-box { border-color: #fff; box-shadow: .26em .26em 0 rgb(0 0 0 / .5); }
    .option-box li:hover { background: rgb(241 241 241 / .5); }
    .changelog_content { color: #fff; background: transparent; }
    #feedback_panel p, #feedback_panel li, .load_message { color: #fff; }

    /* ---------- Settings ---------- */
    .ss_keybind { color: #fff; background: transparent; }
    .label { color: rgb(255 255 255 / .85); }
    .checkmark { background-color: rgb(0 0 0 / .3); box-shadow: inset 0 0 0 .15em rgb(255 255 255 / .75); }
    .ss_checkbox .checkmark:after { border-color: #fff; }
    .ss_select { background: transparent; color: #fff; }
    .ss_select option { background: #1a1a1a; color: #fff; }
    #joinPrivateGamePopup .inner-wrapper { background-color: transparent; }

    /* ---------- Pause menu and chat ---------- */
    .playerSlot--name { color: var(--bv-pink) !important; }
    .pause-screen-btn-spectate { box-shadow: .15em .15em 0 rgb(0 0 0 / .3), var(--ss-btn-dark-bevel) #000, var(--ss-btn-light-bevel) #000 !important; }
    .btn-respawn.bevel_green { box-shadow: .15em .15em 0 rgb(0 0 0 / .3), var(--ss-btn-dark-bevel) #fff, var(--ss-btn-light-bevel) #fff; }
    .is-paused .pause-ui-element { background-color: rgb(249 181 181 / .4); border: var(--ss-common-border-width) solid #fff; }
    .chat { color: #fff; opacity: .7; }
    #chatIn { color: var(--bv-pink); }
    .chat-player-name { color: var(--bv-pink); }
    .chat-pinned-item { color: var(--bv-pink-light); }
    .is-paused .chat-item:first-child.chat-pinned-item { color: #fff; background-color: var(--bv-wine); }

    /* ---------- In-game HUD ---------- */
    #inGameUI { background-color: transparent; border-color: var(--bv-rose); }
    #inGameUI .title { color: var(--bv-pink); }
    .crosshair { border: solid .03em var(--bv-pink); opacity: 1; }
    .crosshair.normal { background: var(--bv-rose); opacity: .4; }
    #reticleDot { background: var(--bv-pink); border-color: #000; }
    #healthContainer { background: var(--bv-pink); opacity: .6; }
    .healthYolk { fill: var(--bv-pink); }
    .healthBar-hardBoiled { stroke: var(--bv-pink-light); }
    .kill-death-box-img { content: url("${ART}MyroStreak.png"); }
    #bigMessageCaption { color: var(--bv-pink); }
    .egg-breaker-icon { fill: var(--bv-pink); }
    .egg-breaker-msg { color: var(--bv-pink); }
    #egg-breaker-icon-wrap .centered, .egg-breaker-timer { color: var(--bv-wine); }

    /* The game writes "You killed" / "Killed by" into these headings. That text is hidden with no line height,
       and V3's wording takes its place as a block, so a two-line message still pushes the name down. */
    #kill-death-box .killed h3, #kill-death-box .died h2 { visibility: hidden; line-height: 0; text-transform: uppercase; }
    #kill-death-box .killed h3::before, #kill-death-box .died h2::before {
      display: block; visibility: visible; line-height: 1.1; font-weight: 900; color: var(--bv-pink);
    }
    #kill-death-box .killed h3::before { content: "You blossomed"; }
    #kill-death-box .died h2::before { content: "You were blossomed by"; }

    /* ---------- Chicken Winner, rewards and Twitch drops ---------- */
    .chw-circular-timer-container-shadow { background: transparent; }
    .egg-chick-wrapper { background-color: transparent; }
    /* The track used --ss-blue5, which is white here, under white text. */
    .chw-progress-bar-wrap, .chw-progress-bar-wrap-popup { background-color: rgb(0 0 0 / .55) !important; border-color: var(--bv-pink); }
    .chw-progress-bar-inner, .chw-progress-bar-inner-popup { background: #c2607f; }
    .chw-progress-bar-wrap-complete .chw-progress-bar-inner, .chw-progress-bar-wrap:hover .chw-ready.chw-progress-bar-inner { background: #e0365f; }
    .giveStuffPopup-content .equip_icon { filter: drop-shadow(rgb(91 23 48 / .5) 0 2mm 0); }
    html #notificationPopup.popup_lg .notify-group-eggs h1, html #notificationPopup.popup_lg .notify-group-subscription h1,
    html .notify-group-subscription.notify-group-items .item-name { color: #fff !important; }
    #giveStuffPopup.twitchDrops { background-image: var(--bv-art-dim); border-color: #fff; }
    #giveStuffPopup.twitchDrops .twitch-btn { background: #000; }
    #giveStuffPopup.twitchDrops footer { background-color: transparent; }
    #giveStuffPopup.twitchDrops .egg-give-stuff, #giveStuffPopup.twitchDrops .grid-item { background-color: rgb(0 0 0 / .23); }
  `;

  // At document-start <head> may not exist yet, so the style goes on <html> and the loading screen is themed
  // from its first frame. Once <body> exists it moves there: after every stylesheet in <head>, so the rules
  // below win ties with the game's own without needing !important.
  const settle = () => document.body.appendChild(css);
  const mount = () => {
    document.documentElement.appendChild(css);
    document.body ? settle() : document.addEventListener("DOMContentLoaded", settle, { once: true });
  };
  document.documentElement ? mount() : new MutationObserver((_, o) => document.documentElement && (o.disconnect(), mount())).observe(document, { childList: true });

  // install-counter:begin
  // Install counter: one anonymous hit per browser, sent once and never again (key "ssBlossomV4-install-counted").
  // Nothing is sent but the hit itself: no settings, names or IDs. Total: abacus.jasoncameron.dev/get/virojet-blossom-v4/installs
  (() => {
    const KEY = "ssBlossomV4-install-counted";
    try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }
    setTimeout(() => {
      fetch("https://abacus.jasoncameron.dev/hit/virojet-blossom-v4/installs", { credentials: "omit", referrerPolicy: "no-referrer" })
        .then(r => { if (r.ok) localStorage.setItem(KEY, "1"); })
        .catch(() => { });
    }, 8000);
  })();
  // install-counter:end
})();

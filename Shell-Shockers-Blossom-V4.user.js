// ==UserScript==
// @name         Blossom V4 Theme
// @namespace    blossom-v4.shellshock.theme
// @version      4.0.5
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
// @match        https://eggboy.club/*
// @match        https://eggboy.xyz/*
// @match        https://eggcombat.com/*
// @match        https://egg.dance/*
// @match        https://eggfacts.fun/*
// @match        https://egghead.institute/*
// @match        https://eggisthenewblack.com/*
// @match        https://eggsarecool.com/*
// @match        https://geometry.best/*
// @match        https://geometry.monster/*
// @match        https://geometry.pw/*
// @match        https://geometry.report/*
// @match        https://hardboiled.life/*
// @match        https://hardshell.life/*
// @match        https://humanorganising.org/*
// @match        https://mathactivity.xyz/*
// @match        https://mathactivity.club/*
// @match        https://mathdrills.info/*
// @match        https://mathdrills.life/*
// @match        https://mathfun.rocks/*
// @match        https://mathgames.world/*
// @match        https://math.international/*
// @match        https://mathlete.fun/*
// @match        https://mathlete.pro/*
// @match        https://overeasy.club/*
// @match        https://risenegg.com/*
// @match        https://scrambled.tech/*
// @match        https://scrambled.today/*
// @match        https://scrambled.us/*
// @match        https://scrambled.world/*
// @match        https://shellshockers.club/*
// @match        https://shellshockers.life/*
// @match        https://shellshockers.site/*
// @match        https://shellshockers.us/*
// @match        https://shellshockers.world/*
// @match        https://shellshockers.xyz/*
// @match        https://shellsocks.com/*
// @match        https://softboiled.club/*
// @match        https://urbanegger.com/*
// @match        https://violentegg.club/*
// @match        https://violentegg.fun/*
// @match        https://yolk.best/*
// @match        https://yolk.life/*
// @match        https://yolk.rocks/*
// @match        https://yolk.tech/*
// @match        https://yolk.quest/*
// @match        https://yolk.today/*
// @match        https://zygote.cafe/*
// @match        https://shellshockers.best/*
// @match        https://eggboy.me/*
// @match        https://algebra.monster/*
// @match        https://combateggs.com/*
// @match        https://deathegg.life/*
// @match        https://eggbattle.com/*
// @match        https://egggames.best/*
// @match        https://eggshock.com/*
// @match        https://eggshock.me/*
// @match        https://eggshock.net/*
// @match        https://eggshooter.best/*
// @match        https://eggshooter.com/*
// @match        https://eggwarfare.com/*
// @match        https://eggwars.io/*
// @match        https://scrambled.best/*
// @match        https://shellplay.live/*
// @match        https://shellshock.guru/*
// @match        https://shellshockers.ca/*
// @match        https://shellshockers.today/*
// @match        https://shellshockers.website/*
// @match        https://shellshockers.wiki/*
// @match        https://yolk.monster/*
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
  css.dataset.version = "4.0.5";
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
      --bv-ink: #fff4f7;
      --bv-sub: rgb(255 224 234 / .78);
      --bv-glass: rgb(24 6 14 / .64);
      --bv-glass-hi: rgb(46 12 26 / .78);
      --bv-glass-on: rgb(72 20 42 / .82);
      --bv-edge: rgb(249 181 181 / .34);
      --bv-edge-hi: rgb(254 197 229 / .68);
      --bv-accent: linear-gradient(180deg, #ff8ab5 0%, #e04b7f 100%);
      --bv-accent-solid: #ee5e91;
      --bv-accent-hi: #ff7aa8;
      --bv-accent-edge: #9b224d;
      --bv-accent-glow: rgb(238 94 145 / .38);
      --bv-bar-bg: linear-gradient(180deg, rgb(32 8 18 / .86), rgb(20 5 12 / .92));

      /* Better HUD palette tokens */
      --ssb-ink: var(--bv-ink);
      --ssb-blue: var(--bv-pink);
      --ssb-blue-hi: var(--bv-pink-light);
      --ssb-blue-shadow: #3a0d1e;
      --ssb-panel: #2b0b18;
      --ssb-orange: var(--bv-accent-solid);
      --ssb-yolk: var(--bv-accent-solid);
      --ssb-yolk-hi: var(--bv-accent-hi);
      --ssb-yolk-shadow: var(--bv-accent-edge);
      --ssb-red: #e0365f;
      --ssb-red-hi: #f25279;
      --ssb-red-shadow: #7a1530;
      --ssb-red-shadow-hi: #941c3c;
      --ssb-muted: var(--bv-sub);
      --ssb-deep: #1a060e;
      --ssb-line: rgb(249 181 181 / .24);
      --ssb-card: rgb(34 10 20 / .78);
      --ssb-card-hi: rgb(56 16 32 / .86);
      --ssb-card-shadow: #18050d;
      --ssb-card-shadow-hi: #290916;
      --ssb-accent: var(--bv-pink);
      --ssb-focus: var(--bv-pink-light);

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

    /* ---------- Better HUD compatibility ---------- */
    /* MODS & CROSSHAIR tabs: wine text on the light-pink active tab, crisp white on dark inactive tabs. */
    html #mod-settings-tab:not(.mod-tab-is-active),
    html #mod-crosshair-tab:not(.mod-tab-is-active) {
      background: #000 !important;
      border-color: #fff !important;
      color: #fff !important;
    }
    html #mod-settings-tab.mod-tab-is-active,
    html #mod-crosshair-tab.mod-tab-is-active {
      background: var(--bv-pink) !important;
      border-color: #fff !important;
      color: var(--bv-wine) !important;
    }
    html #mod-settings-tab.mod-tab-is-active .mod-tab-label,
    html #mod-crosshair-tab.mod-tab-is-active .mod-tab-label {
      color: var(--bv-wine) !important;
      text-shadow: none !important;
    }

    /* MODS & CROSSHAIR shared frosted-glass palette */
    html #popupInnards.mod-tab-active {
      --pm-glass: var(--bv-glass);
      --pm-glass-hi: var(--bv-glass-hi);
      --pm-edge: var(--bv-edge);
      --pm-sub: var(--bv-sub);
      --pm-lift: 0 10px 28px rgb(0 0 0 / .42);
      --pm-orange: var(--bv-accent);
      --pm-orange-edge: var(--bv-accent-edge);
      --pm-line: rgb(249 181 181 / .18);
      --pm-field: rgb(18 5 11 / .82);
    }

    /* Sidebar & Crosshair left panel */
    html #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar,
    html #popupInnards > #mod-crosshair-section .ch2-preview-col {
      background: linear-gradient(180deg, rgb(28 7 16 / .76), rgb(16 4 10 / .70)) !important;
      border-color: var(--bv-edge) !important;
      box-shadow: inset 0 1px 0 rgb(255 215 228 / .18), var(--pm-lift) !important;
    }

    /* Search box */
    html #popupInnards.mod-tab-active #mod-top-bar .mod-search {
      background: rgb(16 5 10 / .84) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f9b5b5' stroke-width='3' stroke-linecap='round'%3E%3Ccircle cx='10.5' cy='10.5' r='6.5'/%3E%3Cpath d='M15.5 15.5 21 21'/%3E%3C/svg%3E") no-repeat 11px 50% / 16px 16px !important;
      border-color: rgb(249 181 181 / .42) !important;
      color: var(--bv-ink) !important;
      box-shadow: inset 0 2px 6px rgb(0 0 0 / .35) !important;
    }
    html #mod-top-bar .mod-search::placeholder { color: rgb(249 181 181 / .62); }
    html #mod-top-bar .mod-search-clear { background: var(--bv-accent-solid); color: #fff; }
    html #mod-top-bar .mod-search-clear:hover { background: var(--bv-accent-hi); }

    /* Active sidebar item & segmented controls */
    html #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip.active,
    html #popupInnards > #mod-crosshair-section .ch2-shape-btn.active,
    html #mod-settings-section .mod-seg-btn[aria-pressed="true"] {
      border-color: var(--bv-accent-edge) !important;
      background: var(--bv-accent) !important;
      color: #fff !important;
      box-shadow: inset 0 1px 0 rgb(255 255 255 / .38), inset 0 -3px 0 rgb(0 0 0 / .18), 0 6px 16px var(--bv-accent-glow) !important;
    }
    html #mod-settings-section .mod-seg,
    html #popupInnards > #mod-crosshair-section .ch2-shape-row {
      background: rgb(14 4 9 / .58) !important;
      box-shadow: inset 0 1px 3px rgb(0 0 0 / .45), 0 0 0 1px rgb(249 181 181 / .18) !important;
    }

    /* Section headings & cards */
    html #mod-settings-section.ssb-paged .mod-header,
    html #popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-title,
    html #popupInnards > #mod-crosshair-section .ch2-gallery-header {
      color: var(--bv-ink) !important;
      text-shadow: 0 2px 8px rgb(0 0 0 / .48);
      border-bottom-color: rgb(249 181 181 / .28) !important;
    }
    html #mod-settings-section.ssb-paged .mod-item,
    html #mod-settings-section.ssb-paged .mod-slider-container,
    html #mod-settings-section.ssb-paged .ssb-om-card,
    html #popupInnards > #mod-crosshair-section .ch2-right-col :is(.ch2-card-enable, .ch2-card-list),
    html #popupInnards > #mod-crosshair-section .ch2-gallery-card {
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .12), 0 4px 12px rgb(0 0 0 / .28) !important;
    }
    html #mod-settings-section.ssb-paged .mod-item:hover,
    html #mod-settings-section.ssb-paged .ssb-om-card:hover,
    html #popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:hover,
    html #popupInnards > #mod-crosshair-section .ch2-gallery-card:hover {
      border-color: rgb(249 181 181 / .52) !important;
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .2), 0 8px 20px rgb(0 0 0 / .36) !important;
    }
    html #mod-settings-section.ssb-paged .mod-item:has(input:checked),
    html #mod-settings-section.ssb-paged .ssb-om-card.on,
    html #popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:has(input:checked) {
      background: var(--bv-glass-on) !important;
      border-color: var(--bv-edge-hi) !important;
    }

    /* Toggle switches (off track) & gear button */
    html #mod-settings-section.ssb-paged .mod-box,
    html #popupInnards > #mod-crosshair-section .ch2-check-box {
      background: rgb(255 210 224 / .2) !important;
      box-shadow: inset 0 2px 4px rgb(0 0 0 / .42), 0 0 0 1px rgb(249 181 181 / .22);
    }
    html #mod-settings-section .ssb-uc-gear {
      border-color: var(--bv-edge);
      background: rgb(255 210 224 / .12);
      color: var(--bv-pink-light);
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .16), 0 2px 6px rgb(0 0 0 / .26);
    }
    html #mod-settings-section .ssb-uc-gear:hover {
      background: rgb(255 210 224 / .24);
      border-color: var(--bv-edge-hi);
      color: #fff;
    }
    html #mod-settings-section .ssb-uc-gear[aria-expanded="true"] {
      background: rgb(238 94 145 / .28);
      border-color: var(--bv-accent-solid);
      color: #fff;
    }

    /* Sliders, number fields, color fields & dropdowns */
    html #mod-settings-section .mod-slider {
      background: rgb(255 215 228 / .26) !important;
      border-color: rgb(249 181 181 / .32);
    }
    html #popupInnards > #mod-crosshair-section .ch2-slider::-webkit-slider-runnable-track {
      background: rgb(255 215 228 / .26);
      box-shadow: inset 0 0 0 1px rgb(249 181 181 / .32);
    }
    html #popupInnards > #mod-crosshair-section .ch2-slider::-moz-range-track {
      background: rgb(255 215 228 / .26);
      box-shadow: inset 0 0 0 1px rgb(249 181 181 / .32);
    }
    html #popupInnards > #mod-crosshair-section .ch2-slider-wrap::before,
    html #popupInnards > #mod-crosshair-section .ch2-slider-wrap::after { color: var(--bv-sub); }
    html #mod-settings-section .mod-num-input,
    html #popupInnards > #mod-crosshair-section .ch2-num,
    html #popupInnards > #mod-crosshair-section .ch2-control-right {
      background: rgb(16 5 10 / .84) !important;
      color: var(--bv-ink) !important;
      box-shadow: inset 0 1px 3px rgb(0 0 0 / .45), 0 0 0 1px rgb(249 181 181 / .34) !important;
    }
    html #mod-settings-section .mod-style-select {
      background: linear-gradient(180deg, rgb(42 12 24 / .9), rgb(24 7 15 / .94));
      color: var(--bv-ink);
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .18), 0 0 0 1px var(--bv-edge), 0 4px 12px rgb(0 0 0 / .3);
    }
    html #mod-settings-section .mod-style-select option,
    html #popupInnards > #mod-crosshair-section .ch2-profile-select option,
    html #popupInnards > #mod-crosshair-section .ch2-pw-select option {
      background: #1c0811;
      color: var(--bv-ink);
    }
    html #mod-settings-section .mod-key-warn { color: #ff8aa4; }

    /* Manage tiles & Other Mods buttons */
    html #mod-settings-section .ch2-profile-btn,
    html #mod-crosshair-section .ch2-profile-btn {
      background: linear-gradient(180deg, #9d2e57, #6d1b3b) !important;
      color: #fff !important;
      box-shadow: 0 3px 0 #3d0d20 !important;
    }
    html #mod-settings-section .ch2-profile-btn:hover,
    html #mod-crosshair-section .ch2-profile-btn:hover {
      background: linear-gradient(180deg, #b53867, #812147) !important;
      box-shadow: 0 4px 0 #3d0d20 !important;
    }
    html #mod-settings-section .ch2-profile-btn.danger,
    html #mod-crosshair-section .ch2-profile-btn.danger,
    html #mod-settings-section .ch2-reset-btn {
      background: linear-gradient(180deg, #d62d57, #9e173a) !important;
      box-shadow: 0 4px 0 #570a1f !important;
    }
    html #mod-settings-section.ssb-paged .ssb-om-meta::before { background: rgb(249 181 181 / .32); }
    html #mod-settings-section.ssb-paged .ssb-om-btn {
      background: rgb(255 210 224 / .14);
      border-color: var(--bv-edge);
      color: var(--bv-ink);
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .16);
    }
    html #mod-settings-section.ssb-paged .ssb-om-btn:hover { background: rgb(255 210 224 / .26); color: #fff; }
    html #mod-settings-section.ssb-paged .ssb-om-btn.quiet { background: transparent; border-color: transparent; color: var(--bv-pink-light); }
    html #mod-settings-section.ssb-paged .ssb-om-btn.quiet:hover { background: rgb(255 210 224 / .16); color: #fff; }
    html #mod-settings-section .ssb-storage-card { border-color: var(--bv-edge); background: var(--bv-glass); color: var(--bv-ink); }

    /* Footer bar */
    html :is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer {
      border-color: var(--bv-edge) !important;
      background: var(--bv-bar-bg) !important;
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .16), 0 8px 22px rgb(0 0 0 / .38) !important;
    }
    html #mod-settings-footer .mod-footer-version::before {
      background: radial-gradient(circle at 50% 50%, var(--bv-accent-solid) 0 38%, var(--bv-pink-light) 40% 100%) !important;
      box-shadow: 0 0 0 1.5px rgb(249 181 181 / .4), 0 1px 4px rgb(0 0 0 / .4) !important;
    }
    html #mod-settings-footer .mod-footer-btn {
      border-color: var(--bv-edge) !important;
      background: rgb(255 210 224 / .12) !important;
      color: var(--bv-ink) !important;
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .16), 0 2px 6px rgb(0 0 0 / .24) !important;
    }
    html #mod-settings-footer .mod-footer-btn:hover { background: rgb(255 210 224 / .24) !important; color: #fff !important; }
    html #mod-settings-footer > a { color: var(--bv-pink-light) !important; }
    html #mod-settings-footer > a:hover { color: #fff !important; }
    html #ssb-update-status.is-latest { background: rgb(143 227 176 / .18); color: #9ff0bf; }
    html #ssb-update-status.is-checking,
    html #ssb-update-status.is-error,
    html #ssb-update-status.is-reload { background: rgb(249 181 181 / .16); color: var(--bv-ink); }
    html #ssb-update-status .ssb-upd-go { border-color: var(--bv-accent-edge); background: var(--bv-accent); }

    /* Crosshair tab: preview, profile toolbar, gallery & reset */
    html #popupInnards > #mod-crosshair-section .ch2-preview-wrap {
      border-color: var(--bv-edge) !important;
      box-shadow: inset 0 0 0 1px rgb(255 220 232 / .2), 0 6px 18px rgb(0 0 0 / .36);
    }
    html #popupInnards > #mod-crosshair-section .ch2-bg-swatches { border-right-color: rgb(249 181 181 / .24); }
    html #popupInnards > #mod-crosshair-section .ch2-bg-swatch { box-shadow: 0 0 0 1px rgb(249 181 181 / .45) !important; }
    html #popupInnards > #mod-crosshair-section .ch2-bg-swatch.on,
    html #popupInnards > #mod-crosshair-section .ch2-mini-tile.selected {
      box-shadow: 0 0 0 2.5px var(--bv-accent-solid), 0 4px 12px var(--bv-accent-glow) !important;
    }
    html #popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-prof-tools {
      border-color: var(--bv-edge);
      background: linear-gradient(180deg, rgb(32 9 19 / .88), rgb(20 5 12 / .92));
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .16), 0 8px 18px rgb(0 0 0 / .34);
    }
    html #popupInnards > #mod-crosshair-section .ch2-hist-row::before {
      background: linear-gradient(90deg, transparent, rgb(249 181 181 / .28) 16%, rgb(249 181 181 / .28) 84%, transparent);
      box-shadow: none;
    }
    html #popupInnards > #mod-crosshair-section .ch2-hist-btn + .ch2-hist-btn::before,
    html #popupInnards > #mod-crosshair-section .ch2-icon-divider { background: rgb(249 181 181 / .22) !important; }
    html #popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled),
    html #popupInnards > #mod-crosshair-section .ch2-icon-btn:hover { background: rgb(249 181 181 / .18) !important; color: #fff !important; }
    html #popupInnards > #mod-crosshair-section .ch2-hist-btn:disabled { color: rgb(249 181 181 / .32) !important; }
    html #popupInnards > #mod-crosshair-section #ch2-open-gallery-btn {
      border-color: var(--bv-edge) !important;
      background: linear-gradient(180deg, #8a2c4f, var(--bv-wine)) !important;
      color: #fff !important;
      box-shadow: inset 0 1px 0 rgb(255 220 232 / .24), 0 3px 10px rgb(0 0 0 / .3) !important;
    }
    html #popupInnards > #mod-crosshair-section #ch2-open-gallery-btn:hover {
      background: linear-gradient(180deg, #a63861, #6f1d3c) !important;
    }
    html #popupInnards > #mod-crosshair-section .ch2-mini-more,
    html #popupInnards > #mod-crosshair-section .ch2-gallery-abtn {
      border-color: var(--bv-edge) !important;
      background: rgb(28 8 16 / .86) !important;
      color: var(--bv-ink) !important;
    }
    html #popupInnards > #mod-crosshair-section .ch2-mini-more:hover,
    html #popupInnards > #mod-crosshair-section .ch2-gallery-abtn:hover { background: rgb(56 16 32 / .94) !important; }
    html #popupInnards > #mod-crosshair-section .ch2-gallery-card.selected {
      border-color: var(--bv-accent-solid) !important;
      background: var(--bv-glass-on) !important;
      box-shadow: 0 0 0 2px var(--bv-accent-solid), 0 8px 18px var(--bv-accent-glow) !important;
    }
    html #popupInnards > #mod-crosshair-section .ch2-gallery-card.selected .ch2-gallery-title { color: var(--bv-pink-light) !important; }
    html #popupInnards > #mod-crosshair-section .ch2-gallery-new-card {
      border-color: rgb(249 181 181 / .42) !important;
      background: rgb(24 6 14 / .48) !important;
    }
    html #popupInnards > #mod-crosshair-section .ch2-disabled-msg { border-color: rgb(249 181 181 / .42) !important; }
    html #popupInnards > #mod-crosshair-section #ch2-reset-crosshair { color: #ff8aa4 !important; }
    html #popupInnards > #mod-crosshair-section #ch2-reset-crosshair:hover {
      border-color: rgb(255 138 164 / .55) !important;
      background: rgb(72 16 34 / .8) !important;
    }

    /* Scrollbars inside MODS & CROSSHAIR */
    html :is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb {
      background: rgb(249 181 181 / .36);
    }
    html :is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb:hover {
      background: rgb(249 181 181 / .64);
    }

    /* Match History & Live Stats panel */
    html #ssb-stats-overlay { background: rgb(18 4 10 / .68); }
    html #ssb-stats-panel {
      --st-ink: var(--bv-ink);
      --st-sub: var(--bv-sub);
      --st-glass: var(--bv-glass);
      --st-glass-hi: var(--bv-glass-hi);
      --st-edge: var(--bv-edge);
      --st-line: rgb(249 181 181 / .18);
      --st-field: rgb(20 6 12 / .84);
      --st-orange: var(--bv-accent);
      --st-orange-edge: var(--bv-accent-edge);
      --st-red: #ff7a96;
      border-color: var(--bv-pink);
      background: var(--bv-art-dim) center / cover no-repeat;
    }
    html #ssb-stats-panel .ssb-chip { background: rgb(24 6 14 / .66); }
    html #ssb-stats-panel .ssb-chip-strong,
    html #ssb-stats-panel .ssb-kept-pill { box-shadow: inset 0 1px 0 rgb(255 220 232 / .18); }
    html #ssb-stats-panel .ssb-btn:hover { background: rgb(52 14 30 / .92); box-shadow: 0 6px 14px rgb(0 0 0 / .32); }
    html #ssb-stats-panel .ssb-link { text-decoration-color: rgb(249 181 181 / .45); }
    html #ssb-stats-panel .ssb-team-blue { --tc: #68c8ff; --st-bar: rgb(104 200 255 / .22); }
    html #ssb-stats-panel .ssb-team-red { --tc: #ff6b7b; --st-bar: rgb(255 107 123 / .22); }
    html #ssb-stats-panel .ssb-team-hdr { background: rgb(16 4 10 / .44); }
    html #ssb-stats-panel tr.ssb-me td { box-shadow: inset 0 0 0 999px rgb(249 181 181 / .16); }
    html #ssb-stats-panel .ssb-empty { border-color: rgb(249 181 181 / .35); background: rgb(24 6 14 / .55); }
    html #ssb-stats-panel .ssb-history-search,
    html #ssb-stats-panel .ssb-dd-btn,
    html #ssb-stats-panel .ssb-date-pop input {
      border-color: rgb(249 181 181 / .38);
      background: rgb(16 5 10 / .86);
      color: var(--bv-ink);
    }
    html #ssb-stats-panel .ssb-history-search:focus-visible,
    html #ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-btn,
    html #ssb-stats-panel .ssb-date-active,
    html #ssb-stats-panel .ssb-date[open] > summary {
      border-color: var(--bv-pink-light);
      background: rgb(32 9 19 / .94);
    }
    html #ssb-stats-panel .ssb-dd-list,
    html #ssb-stats-panel .ssb-date-pop,
    html #ssb-stats-panel .ssb-export-menu {
      background: #220713;
      border-color: var(--bv-edge);
      box-shadow: 0 14px 32px rgb(0 0 0 / .5);
    }
    html #ssb-stats-panel .ssb-dd-opt:is(:hover, :focus),
    html #ssb-stats-panel .ssb-export-menu button:is(:hover, :focus-visible) { background: rgb(249 181 181 / .18); }
    html #ssb-stats-panel .ssb-prog-metric,
    html #ssb-stats-panel .ssb-date-modes { background: rgb(14 4 9 / .62); }
    html #ssb-stats-panel .ssb-prog-metric button[aria-pressed="true"],
    html #ssb-stats-panel .ssb-date-modes button[aria-pressed="true"] { background: var(--bv-accent); color: #fff; }
    html #ssb-stats-panel .ssb-prog-each { stroke: rgb(249 181 181 / .38); }
    html #ssb-stats-panel .ssb-prog-dot { fill: #220713; stroke: var(--bv-pink-light); }
    html #ssb-stats-panel .ssb-prog-ring { stroke: var(--bv-pink-light); }
    html #ssb-stats-panel .ssb-prog-pt:is(:hover, :focus-visible) .ssb-prog-dot { fill: var(--bv-accent-solid); stroke: #fff; }
    html #ssb-stats-panel :is(.ssb-hist-pick, .ssb-bulk input[type="checkbox"]) {
      background-color: rgb(16 5 10 / .84);
      box-shadow: inset 0 0 0 1.5px rgb(249 181 181 / .5);
    }
    html #ssb-stats-panel :is(.ssb-hist-pick, .ssb-bulk input[type="checkbox"]):checked {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4.5 12.5l5 5L19.5 6.5' fill='none' stroke='%23fec5e5' stroke-width='4.2'/%3E%3C/svg%3E");
    }
    html #ssb-stats-panel .ssb-bulk input[type="checkbox"]:indeterminate {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 12h12' fill='none' stroke='%23fec5e5' stroke-width='4.2'/%3E%3C/svg%3E");
    }
    html #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list, .ssb-prog)::-webkit-scrollbar-thumb { background: rgb(249 181 181 / .36); }
    html #ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list, .ssb-prog)::-webkit-scrollbar-thumb:hover { background: rgb(249 181 181 / .64); }

    /* Better HUD dialogs, toasts, tooltip, changelog & welcome guide */
    html #ssb-dialog-overlay,
    html #ssb-changelog-overlay,
    html #ssb-intro-overlay { background: rgb(18 4 10 / .68); }
    html #ssb-dialog-panel {
      border-color: var(--bv-pink);
      background: var(--bv-art-dim) center / cover no-repeat;
    }
    html #ssb-dialog-panel .ssb-dlg-title { text-shadow: 3px 3px 0 rgb(0 0 0 / .6); }
    html #ssb-dialog-panel .ssb-dlg-input,
    html #ssb-dialog-panel .ssb-restore-profile select {
      border-color: var(--bv-edge-hi);
      background: rgb(18 5 11 / .88);
      color: var(--bv-ink);
    }
    html #ssb-dialog-panel .ssb-dlg-list li,
    html #ssb-dialog-panel .ssb-restore-group {
      background: rgb(22 6 14 / .82);
      border: 1px solid var(--bv-edge);
      color: var(--bv-ink);
    }
    html #ssb-dialog-panel .ssb-dlg-btn { box-shadow: 3.4px 3.4px 0 0 rgb(0 0 0 / .45), var(--i1) -2.1px -3.2px 2.1px 0 inset, var(--i2) 0 3.2px 4.2px 0 inset; }
    html #ssb-dialog-panel .ssb-dlg-blue { --c: #8a2c4f; --b: var(--bv-pink); --i1: #5b1730; --i2: #c4547d; }
    html #ssb-dialog-panel .ssb-dlg-yolk { --c: var(--bv-accent-solid); --b: var(--bv-accent-edge); --i1: #b53463; --i2: #ffa6c7; }
    html #ssb-toast-stack .ssb-toast {
      border-color: var(--bv-pink);
      background: rgb(28 7 16 / .94);
      color: var(--bv-ink);
    }
    html #ssb-toast-stack .ssb-toast-error { background: #470d1f; border-color: #ff6b8b; color: #ffd6e0; }
    html #ssb-toast-stack .ssb-toast-code { background: rgb(0 0 0 / .4); color: var(--bv-pink-light); }
    html #ssb-global-tooltip {
      background: rgb(24 6 14 / .95) !important;
      color: var(--bv-ink) !important;
      border-color: var(--bv-pink) !important;
      box-shadow: 0 6px 20px rgb(0 0 0 / .45) !important;
    }
    html #ssb-changelog-panel,
    html #ssb-intro-panel {
      background: #240814;
      border-color: var(--bv-pink);
      color: var(--bv-ink);
    }
    html #ssb-changelog-panel .ssb-changelog-head,
    html #ssb-intro-panel .ssb-intro-head {
      background: linear-gradient(180deg, #7a2244, #4e1229);
      border-bottom-color: var(--bv-pink);
    }
    html #ssb-changelog-panel .ssb-changelog-kicker,
    html #ssb-intro-panel .ssb-intro-kicker { color: var(--bv-pink-light); }
    html #ssb-changelog-panel .ssb-changelog-item,
    html #ssb-intro-panel .ssb-intro-card {
      border-color: var(--bv-edge);
      background: rgb(255 210 224 / .08);
    }
    html #ssb-changelog-panel .ssb-changelog-tag,
    html #ssb-changelog-panel .ssb-changelog-switcher select,
    html #ssb-changelog-panel button {
      background: rgb(18 5 11 / .86);
      border-color: var(--bv-edge-hi);
      color: var(--bv-ink);
    }
    html #ssb-changelog-panel button:hover { background: rgb(56 16 32 / .94); }

    /* Pinned Match Stats on the pause / respawn screen */
    html #ssb-pinned-stats {
      border: 2px solid var(--bv-pink) !important;
      border-radius: 12px !important;
      background: var(--bv-art-dim) center / cover no-repeat !important;
      box-shadow: 0 10px 26px rgb(0 0 0 / .44), inset 0 1px 0 rgb(255 220 232 / .2) !important;
      color: var(--bv-ink) !important;
    }
    html #ssb-pinned-stats > .title {
      background: linear-gradient(180deg, rgb(64 16 36 / .88), rgb(38 10 22 / .8)) !important;
      border-bottom: 1px solid var(--bv-edge) !important;
      color: var(--bv-pink-light) !important;
      text-shadow: 0 2px 6px rgb(0 0 0 / .65) !important;
    }
    html #ssb-pinned-stats-content {
      background: var(--bv-glass) !important;
    }
    html #ssb-pinned-stats-content > div > span:first-child {
      color: var(--bv-sub) !important;
      letter-spacing: 0.06em;
    }
    html #ssb-pinned-stats-content > div > span:last-child {
      color: var(--bv-ink) !important;
      text-shadow: 0 2px 6px rgb(0 0 0 / .7) !important;
    }
    html #ssb-pinned-stats-content > div:nth-child(2) > span:last-child {
      color: #ff7a96 !important;
    }
    html #ssb-pinned-stats-content > div:nth-child(3) > span:last-child {
      color: var(--bv-pink-light) !important;
    }
    html #ssb-pinned-stats .ssb-admin-cell:focus {
      background-color: rgb(249 181 181 / .16) !important;
    }
  `;

  // At document-start <head> may not exist yet, so the style goes on <html> and the loading screen is themed
  // from its first frame. Once <body> exists it moves into <body> (after every stylesheet in <head>) so ties
  // resolve in our favour, and stays attached across fast/cached reloads, bfcache, or DOM replacements.
  const ensureMounted = () => {
    if (document.body) {
      if (css.parentNode !== document.body) document.body.appendChild(css);
    } else if (document.documentElement && !css.isConnected) {
      document.documentElement.appendChild(css);
    }
  };
  let rootObs = null;
  const startMount = () => {
    ensureMounted();
    if (!rootObs && document.documentElement) {
      rootObs = new MutationObserver(ensureMounted);
      rootObs.observe(document.documentElement, { childList: true });
    }
  };
  if (document.documentElement) startMount();
  else new MutationObserver((_, o) => {
    if (document.documentElement) {
      o.disconnect();
      startMount();
    }
  }).observe(document, { childList: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ensureMounted, { once: true });
  }
  window.addEventListener("load", ensureMounted, { once: true });
  window.addEventListener("pageshow", ensureMounted);

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

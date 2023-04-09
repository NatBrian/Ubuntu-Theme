import displaySpotify from './components/apps/spotify';
import displayMap from './components/apps/map';
import displayTodoist from './components/apps/todoist';
import displayVsCode from './components/apps/vscode';
import displayWindy from './components/apps/windy';
import displayDrawBoard from './components/apps/drawboard';
import displayPexels from './components/apps/pexels';
import displayArtBot from './components/apps/artbot';
import displayNewsFront from './components/apps/news';
import displayOnlineGallery from './components/apps/onlinegallery';
import displayGameDino from './components/apps/gamedino';
import displayGamePacman from './components/apps/gamepacman';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayAboutAuthor } from './components/apps/author';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    // {
    //     id: "about-author",
    //     title: "About Me",
    //     icon: './themes/Yaru/apps/notes.png',
    //     disabled: false,
    //     favourite: true,
    //     desktop_shortcut: true,
    //     screen: displayAboutAuthor,
    // },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displaySpotify,
    },
    {
        id: "newsfront",
        title: "NewsFront",
        icon: './themes/Yaru/apps/news.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayNewsFront,
    },
    {
        id: "onlinegallery",
        title: "OnlineGallery",
        icon: './themes/Yaru/apps/onlinegallery.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayOnlineGallery,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "map",
        title: "Google Map",
        icon: './themes/Yaru/apps/map.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayMap,
    },
    {
        id: "todoist",
        title: "TodoIst",
        icon: './themes/Yaru/apps/todoist.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTodoist,
    },
    {
        id: "windy",
        title: "Windy",
        icon: './themes/Yaru/apps/windy.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayWindy,
    },
    {
        id: "drawboard",
        title: "WhiteBoard",
        icon: './themes/Yaru/apps/draw.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayDrawBoard,
    },
    {
        id: "pexels",
        title: "Pexels",
        icon: './themes/Yaru/apps/pexels.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayPexels,
    },
    {
        id: "artbot",
        title: "ArtBot",
        icon: './themes/Yaru/apps/artbot.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayArtBot,
    },
    {
        id: "gamedino",
        title: "Dino",
        icon: './themes/Yaru/apps/dino.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGameDino,
    },
    {
        id: "gamepacman",
        title: "Pacman",
        icon: './themes/Yaru/apps/pacman.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGamePacman,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
]

export default apps;
/* Создать страницу, которая выводит нумерованный список песен:

var playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];*/


let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let list = document.createElement('ol');

for (let i = 0; i < playList.length; i++) {
    let listElem = document.createElement('li');
    let authorP = document.createElement('p');
    let songP = document.createElement('p');
    let linkA = document.createElement('a');

    authorP.innerHTML = playList[i].author + ' -';
    songP.innerText = playList[i].song;

    linkA.setAttribute('href', '#');

    authorP.style = 'display:inline-block;';
    songP.style = 'display:inline-block;';

    let linkAStyle = 'display:block;color:#222;';
    linkAStyle += i % 2 ? 'background-color: #eee;' : 'background-color: white;';
    linkA.style = linkAStyle;

    linkA.setAttribute('onMouseOver', "this.style.color='#C00'");
    linkA.setAttribute('onMouseOut', "this.style.color='#222'");

    linkA.appendChild(authorP);
    linkA.appendChild(songP);
    listElem.appendChild(linkA);
    list.appendChild(listElem);
}

document.body.appendChild(list);

let offset = 0;
const api = {
    resetNextLinkInfosOffset(new_offset){
        if (!new_offset){
            new_offset = 0;
        }
        offset = new_offset;
    },
    nextLinkInfos(callback) {
        if (blog.nextFileLinks && offset < blog.nextFileLinks.length) {
            ajaxRequest('get', blog.nextFileLinks[offset], callback)
            offset++
        }
        else{
            callback(false);
        }
    },
    getArticleFromAddress(address, callback) {
        ajaxRequest('get', address, callback);
    },
    getLinkInfosWithTag(tagName, callback) {
        if (blog.tags.length) {
            blog.tags.forEach(tag => {
                if (tag == tagName) {
                    let r = Math.random();
                    ajaxRequest('get', `${meta.publicPath}tags/${tag}.json?r=${r}`, callback)
                }
            });
        }
        else{
            callback(false)
        }
    },
    getLinkInfosWithCategory(categoryName, callback) {
        if (blog.categories.length) {
            blog.categories.forEach(category => {
                if (category == categoryName) {
                    let r = Math.random();
                    ajaxRequest('get', `${meta.publicPath}categories/${category}.json?r=${r}`, callback)
                }
            });
        }
        else{
            callback(false)
        }
    }
}

let ajaxRequest = function(type, url, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open(type, url, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(JSON.parse(xmlHttp.responseText))
        }
    }
}
const blog = {"categories":["live","network"],"tags":["doing","saying"],"links":[{"title":"HolyShit","date":"2022-02-07 17:57:43Z","categories":["live","network"],"tags":["doing","saying"],"address":"/articles/2022/2/8/HolyShit.425d2ae6d.json"},{"title":"Minute","date":"2022-02-07 17:57:36Z","categories":["network"],"address":"/articles/2022/2/8/Minute.2f60c0344.json"},{"title":"Seconds","date":"2022-02-07 17:57:32Z","address":"/articles/2022/2/8/Seconds.b3d0fd02b.json"},{"title":"WhatUDo","date":"2022-02-07 17:57:26Z","address":"/articles/2022/2/8/WhatUDo.a51d3a9c7.json"},{"title":"ShitMan","date":"2022-02-07 17:57:18Z","address":"/articles/2022/2/8/ShitMan.8955a548d.json"},{"title":"Scare","date":"2022-02-07 17:57:14Z","tags":["doing"],"address":"/articles/2022/2/8/Scare.633cc5036.json"},{"title":"Nothing","date":"2022-02-07 17:57:07Z","address":"/articles/2022/2/8/Nothing.33cd19f23.json"},{"title":"TryAgain","date":"2022-02-07 17:57:03Z","address":"/articles/2022/2/8/TryAgain.6315bb67f.json"},{"title":"IAmJinker","date":"2022-02-07 17:56:56Z","categories":["live"],"tags":["saying"],"address":"/articles/2022/2/8/IAmJinker.a925a8f52.json"},{"title":"Bepeace","date":"2022-02-07 17:56:51Z","address":"/articles/2022/2/8/Bepeace.8d6a181ac.json"}],"nextFileLinks":["/nextLinkInfoFiles/next.0a307a1b0.js"]}
const meta =  {"blogName":"Bbob - Serverless Blog Framework","author":"Jinker","description":"Nothing description...","about":"Nothing about...","copyright":"\u00A9 2022 Jinker Powered by Bbob \u0026 default","publicPath":"/","extra":{}}
var Bbob = { blog, meta, api }
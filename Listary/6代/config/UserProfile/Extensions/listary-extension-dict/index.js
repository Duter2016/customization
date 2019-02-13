const request = require('request');
const api = "http://www.iciba.com/index.php";

function search(query) {
    var noResult = {
        title: "没有找到相关结果"
    };

    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: api,
            qs:
                {
                    a: 'getWordMean',
                    c: 'search',
                    list: '1',
                    word: query
                },
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            var json =  JSON.parse(body);
            if (json.errno != 0) {
                resolve([{
                    title: json.errmsg
                }]);
                return;
            }
            // console.log(json)

            if (json.baesInfo.symbols) {
                var results = json.baesInfo.symbols[0].parts.map(part => {
                    var meaning = part.part + " ";
                    meaning += part.means.join("；");

                    var result = {
                        title: meaning
                    }
                    return result;
                });

                resolve(results);
            }
            else if (json.baesInfo.translate_result) {
                resolve([{
                    title: json.baesInfo.translate_result
                }])
            }
            else {
                resolve([{
                    title: noResult
                }])
            }
        });
    });
}
module.exports = {
    search: search
};
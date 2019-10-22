
var ghpages = require('gh-pages');

export default async function() {
    ghpages.publish('build', {
        branch: 'master',
        repo: ''
    }, function(res) {
        console.log(res)
    });
};

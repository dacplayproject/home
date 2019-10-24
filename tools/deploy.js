
var ghpages = require('gh-pages');

export default async function() {
    ghpages.publish('build', {
        branch: 'master',
        repo: 'git@github.com:dacplayproject/home.git'
    }, function(res) {
        console.log(res)
    });
};

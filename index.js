const octokit = require('@octokit/rest')()
const fs = require('fs');

octokit.repos.getContent({
  owner: 'jessicaleighschmitz',
  repo: 'Le-Labo-clone',
  path: 'src/main.js'
}).then(result => {
    // content will be base64 encoded
    const content = Buffer.from(result.data.content, 'base64').toString()
    console.log(content)
})

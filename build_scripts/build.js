#!/user/bin/env node

const fs = require('fs');
const mustache = require('mustache');
const path = require('path');

const sourcePath = path.resolve('./src/themes');
const destPath = path.resolve('./themes');

const template = fs.readFileSync('./src/template.json', 'utf8')

fs.readdir(sourcePath, function(err, list) {
  console.log(list);
  list.forEach(file => {
    const fileName = sourcePath + '/' + file
    fs.readFile(fileName, 'utf8', function(err, data) {
      values = JSON.parse(data)
      finalFile = mustache.render(template, values)
      fs.writeFile(`./themes/Nightwing-${file}`, finalFile, function(err) {
        console.log(err)
      })
    })
  })
})

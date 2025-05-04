const fs = require('fs')
const path = require('path')

function getAllFiles(dirPath, arrayOfFiles = [], prefix = '') {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    const relativePath = path.join(prefix, file)
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles, relativePath)
    } else {
      arrayOfFiles.push(relativePath.replace(/\\/g, '/'))
    }
  })

  return arrayOfFiles
}

const publicDir = path.join(__dirname, '../public')
const files = getAllFiles(publicDir)

const tsContent = `// This file is auto-generated. Do not edit manually.
export const staticFiles = ${JSON.stringify(files, null, 2)} as const;
export type StaticFile = typeof staticFiles[number];
`

fs.writeFileSync(
  path.join(__dirname, '../app/domains/staticFiles.ts'),
  tsContent
)
console.log('Static files list generated successfully!')

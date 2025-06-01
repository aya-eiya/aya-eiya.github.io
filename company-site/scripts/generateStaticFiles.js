const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext)
}

function isSvgFile(filePath) {
  return path.extname(filePath).toLowerCase() === '.svg'
}

function getSvgDimensions(content) {
  const widthMatch = content.match(/width="(\d+)"/)
  const heightMatch = content.match(/height="(\d+)"/)
  if (widthMatch && heightMatch) {
    return {
      width: parseInt(widthMatch[1], 10),
      height: parseInt(heightMatch[1], 10),
    }
  }
  const viewBoxMatch = content.match(/viewBox="([^"]*)"/)
  if (viewBoxMatch) {
    const [, , , width, height] = viewBoxMatch[1].split(/\s+/).map(Number)
    if (!isNaN(width) && !isNaN(height)) {
      return { width, height }
    }
  }
  return null
}

async function getFileInfo(absolutePath) {
  const stats = fs.statSync(absolutePath)
  const ext = path.extname(absolutePath).toLowerCase()
  const baseInfo = {
    size: stats.size,
    type: ext.slice(1), // remove the dot
    mtime: stats.mtime.toISOString(),
  }

  if (isImageFile(absolutePath)) {
    try {
      const metadata = await sharp(absolutePath).metadata()
      if (metadata.width && metadata.height) {
        return {
          ...baseInfo,
          dimensions: {
            width: metadata.width,
            height: metadata.height,
          },
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not get dimensions for ${absolutePath}`)
    }
  } else if (isSvgFile(absolutePath)) {
    try {
      const content = fs.readFileSync(absolutePath, 'utf8')
      const dimensions = getSvgDimensions(content)
      if (dimensions) {
        return {
          ...baseInfo,
          dimensions,
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not get dimensions for SVG ${absolutePath}`)
    }
  }

  return baseInfo
}

async function getAllFiles(
  dirPath,
  arrayOfFiles = [],
  fileDetailsMap = {},
  prefix = ''
) {
  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const absolutePath = path.join(dirPath, file)
    const relativePath = path.join(prefix, file)

    if (fs.statSync(absolutePath).isDirectory()) {
      const result = await getAllFiles(
        absolutePath,
        arrayOfFiles,
        fileDetailsMap,
        relativePath
      )
      arrayOfFiles = result.files
      Object.assign(fileDetailsMap, result.details)
    } else {
      const normalizedPath = relativePath.replace(/\\/g, '/')
      const fileInfo = await getFileInfo(absolutePath)
      arrayOfFiles.push(normalizedPath)
      fileDetailsMap[normalizedPath] = fileInfo
    }
  }

  return {
    files: arrayOfFiles,
    details: fileDetailsMap,
  }
}

async function main() {
  const publicDir = path.join(__dirname, '../public')
  const { files, details } = await getAllFiles(publicDir)

  const tsContent = `// This file is auto-generated. Do not edit manually.

export interface Dimensions {
  width: number;
  height: number;
}

export interface FileInfo {
  size: number;
  type: string;
  mtime: string;
  dimensions?: Dimensions;
}

export const staticFiles = ${JSON.stringify(files, null, 2)} as const;

export const fileDetails = ${JSON.stringify(details, null, 2)} as const;

export type StaticFile = typeof staticFiles[number];

export type FileDetails = typeof fileDetails;
`

  fs.writeFileSync(
    path.join(__dirname, '../app/domains/staticFiles.ts'),
    tsContent
  )
  console.log('Static files list generated successfully!')
}

main().catch(console.error)

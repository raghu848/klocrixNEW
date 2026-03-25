const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const directoriesToScan = ['app', 'components', 'lib', 'data'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next')) {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
                arrayOfFiles.push(fullPath);
            }
        }
    });
    return arrayOfFiles;
}

let allFiles = [];
directoriesToScan.forEach(dir => {
    allFiles = getAllFiles(path.join(projectRoot, dir), allFiles);
});

console.log('Total files checked: ' + allFiles.length);

const unusedFiles = [];

allFiles.forEach(targetFile => {
    const targetBaseName = path.basename(targetFile, path.extname(targetFile));

    // Ignore layout, page, globals, route, etc as they are Nextjs specifics
    if (['page', 'layout', 'route', 'not-found', '_app', '_document', 'globals', 'tailwind.config', 'next.config', 'postcss.config', 'caseStudies', 'animations', 'utils'].includes(targetBaseName)) {
        return;
    }

    let isUsed = false;
    for (const file of allFiles) {
        if (file === targetFile) continue;

        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(targetBaseName)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        unusedFiles.push(targetFile.replace(projectRoot + '\\', ''));
    }
});

console.log('Unused Files:');
console.log(unusedFiles.join('\n'));

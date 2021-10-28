// import YAML from 'yaml';

const printWidth = 120; // чтоб массивы выстраивались в одну линию
const tabWidth = 4;

export default {
    js: {
        opts: {
            parser: 'babel',
            trailingComma: 'all',
            printWidth,
            tabWidth,
        },
        formatting(content, runnerName = null) {
            return `
                // generated by ${(runnerName) ? `${runnerName}.js runner` : 'JsonRaw class'}

                export default ${JSON.stringify(content)}
            `;
        },
    },
    json: {
        opts: {
            parser: 'json',
            trailingComma: 'es6',
            printWidth,
            tabWidth,
        },
        formatting(content) {
            return JSON.stringify(content);
        },
    },
    // yaml: {
    //     opts: {
    //         parser: 'yaml',
    //         printWidth
    //     },
    //     formatting(content, pluginName) {
    //         let str = `# generated by GenerateGameData ${pluginName}\n\n`;
    //         const doc = new YAML.Document(content);
    //
    //         // чтоб массивы выстраивались в одну линию
    //         Object.keys(content).forEach((key) => {
    //             Object.keys(content[key]).forEach((k) => {
    //                 if (Array.isArray(content[key][k])) {
    //                     doc.getIn([key, k]).type = 'FLOW_SEQ';
    //                 }
    //             });
    //         });
    //         str += String(doc);
    //         return str;
    //     },
    // },
};

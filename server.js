const nodePackage = require('./package.json');
const {spawn} = require('child_process');

async function startFramework() {
    
    //
    // todo: Build commandline from process.args
    //


    const command = '';

    try {
        const frameWork = spawn(command, [], {shell:true, stdio: 'inherit'});

        frameWork.on('data', (data) => {
            console.log(data);
        });

        // User pressed <ctrl> C
        frameWork.on('SIGINT', () => {
            frameWork.kill();
        });

        frameWork.on('exit', (code) => {
            console.log('\n\nFramework process terminated. Goodbye\n\n');
            process.exit(code);
        });
    }
    catch(e) {
        console.error(e);
        process.exit(1);
    }

}


startFramework();
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
            switch (instruction) {
                case "/exit": 
                    process.stdout.write("Quiting app!");
                    process.exit();
                    break;
                case "/ver":
                    var hostname = process.env.hostname.toString();
                    var lang = process.env.lang.toString();
                    var nodeversion = process.versions.node.toString();

                        process.stdout.write(hostname+"\n");
                        process.stdout.write(lang+"\n");
                        process.stdout.write(nodeversion+"\n");

                    break;
                case "/global":
                    console.log(global);
                    break;
                default: 
                    process.stderr.write("Wrong instruction!\n");
                    break;
            }
    }
});
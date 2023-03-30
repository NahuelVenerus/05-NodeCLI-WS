const commands = require('./commands')

function print(str) {
    process.stdout.write(str)
}

print("prompt > ");

process.stdin.on("data", function (data) {
    let cmd = data.toString().trim();
    let comando = cmd.split(' ')[0]
    let argumento = cmd.split(' ')[1]
    let argumento2 = cmd.split(' ')[2]

    ejecutarComandos(comando, argumento, argumento2)
    print("prompt > ");
});

ejecutarComandos = (cmd, argumento, argumento2) => {
    switch (cmd) {
        case 'pwd':
            commands.pwd(print)
            break;
        case 'date':
            commands.date(print)
            break;
        case 'ls':
            commands.ls(print)
            break;
        case 'echo':
            commands.echo(print, argumento)
            break;
        case 'cat':
            commands.cat(print, argumento)
            break;
        case 'head':
            commands.head(argumento, argumento2)
            break;
        case 'tail':
            commands.tail(argumento, argumento2)
            break;
        case 'sort':
            commands.sort(argumento)
            break;
        case 'wc':
            commands.wc(argumento)
            break;
        case 'uniq':
            commands.uniq(argumento)
            break;
        default:
            print("You typed: " + cmd);
            break;
    }
}
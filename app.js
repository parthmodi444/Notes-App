const yargs=require("yargs");
const notes=require("./notes");
console.log(yargs.argv);


yargs.command({
    command:"add",
    describe:"to add",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body",
            demandOption:true,
            type:'string'

        }
    },
    handler : argv => {
        notes.addNote(argv.title,argv.body);
    }

})

yargs.command({
    command:"remove",
    describe:"to remove",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'
        }
    },
    handler : argv => {
        notes.removeNote(argv.title);
    }

})

yargs.command({
    command:"read",
    describe:"to read",

    handler : argv => {
        notes.readNote();
    }

})

yargs.command({
    command:"view",
    describe:"to read",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'
        }
    },

    handler : argv => {
        notes.view(argv.title);
    }

}).argv;






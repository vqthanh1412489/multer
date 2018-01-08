const multer = require('multer');
const mkdirp = require('mkdirp');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { originalname } = file;  
        const extend = originalname.slice(originalname.lastIndexOf('.') + 1);              
        mkdirp(`./public/${extend}`);
        cb(null, `./public/${extend}`);
    },
    filename: (req, file, cb) => {
        const date = Date.now();
        const random = Math.random();
        const { originalname } = file;
        cb(null, `${date}${random}${originalname}`);
    }
});

const upload = multer({ 
    storage,
    fileFilter: function(req, file, cb) {
        const { originalname } = file;
        const arrExtend = ['jpg','txt','xls'];
        const extend = originalname.slice(originalname.lastIndexOf('.') + 1);
        if (arrExtend.indexOf(extend) <= -1) {
            cb(new Error('Format file invalid!'));
        }
        cb(null, true);
    }
});
module.exports = upload;
const multer = require('multer')
const moment = require('moment')


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images')
    },
    filename(req, file, cb) {
        let str = moment().format('DDMMYYYHHmmssSSS')
        cb(null, str)
    }
})

const allowevTypes = ['image/png', 'image/jpg', 'image/jpeg', 'video/mp4']

const fileFilter = (req, file, cb) => {
    if (allowevTypes.includes(file.mimetype)) {
        cb(null, true)
    }   else {
        cb(null, false)
    }
}

module.exports = multer({
    storage,
    fileFilter
})
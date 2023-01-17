const db = require('../models')

const multer = require('multer')
const bcrypt = require('bcrypt');

const path = require('path')


const User = db.users



const regUser = async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    let info = {
        image: req.file.path,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}


const getAllUsers = async(req, res) => {

    let users = await User.findAll({})
    res.json(users)

}

const login = async(req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


module.exports = {
    regUser,
    getAllUsers,
    login,
    upload

}
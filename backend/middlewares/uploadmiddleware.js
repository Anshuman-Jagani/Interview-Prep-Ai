const multer = require('multer');

//Configure Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File Filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG', 'image/PNG', 'image/JPG'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .png, .jpg, .JPEG, .PNG, .JPG formates are allowed'), fasle);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
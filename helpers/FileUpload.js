import multer from "multer";
import async from "async";
import path from 'path';
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});
  
  // Define the file filter function
const fileFilter = (req, file, cb) => {
// Check the file type
if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true); // Accept the file
} else {
    cb(new Error('Only image and video files are allowed!'), false); // Reject the file
}
}; 

export const FilePathResolver = (file) => {
    if (file) {
        return path.join(file.destination, file.filename);
    }
    return null;
};

/**
 * Multiple Image Path Resolver
 * 
 * @param {File} file
 */
export const FilesPathResolver = (files)  => {
    console.log("files",files)
    let images = [];
        files.forEach(file => {
            console.log("file",file)
            images.push(file.destination+file.filename);
        });
    return images;
};
  // Create the multer middleware with the storage and file filter configurations
export const upload = multer({ storage: storage, fileFilter: fileFilter });
  
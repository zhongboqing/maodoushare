/**
 * Created by zhongbq on 2015/5/26.
 */

var uploadsStore = new FS.Store.FileSystem("uploads", {path:'~/temp'});
var thumbStore = new FS.Store.FileSystem("thumbs", {
    path: '~/temp/thumbs',
beforeWrite: function (fileObj) {
    // We return an object, which will change the
    // filename extension and type for this store only.
    return {
        extension: 'png',
        type: 'image/png'
    };
},
transformWrite: function (fileObj, readStream, writeStream) {
    // Transform the image into a 120x120px PNG thumbnail
    gm(readStream).resize('120','120').stream('PNG').pipe(writeStream);
    // The new file size will be automatically detected and set for this store
}
});
Uploads = new FS.Collection("uploads", {
    stores: [
        uploadsStore,
        thumbStore
    ],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});

Shares  = new Mongo.Collection("shares");

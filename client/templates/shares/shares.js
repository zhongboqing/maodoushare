/**
 * Created by zhongbq on 2015/5/26.
 */
Template.shares.helpers({
    shares:function(){
        return Shares.find({},{sort:{createdAt:-1}});
    }
});


Template.shareItem.helpers({
    uploads:function(){
        console.log(this.fileIds);
        return Uploads.find({_id:{$in:this.fileIds}});
    }
});
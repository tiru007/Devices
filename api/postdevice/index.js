
module.exports = async function (context, req) {
    var Device = {
        Device : req.body.Device, 
        RequestedDate : new Date(),
        completed : req.body.completed 
    }
   

    if (Device.Device != null) {

        context.bindings.outputDocument = Device;
        context.res = {
            body: {'result': 'success'}
        };
    }else{
        context.res = {
            status: 400,
            body: {'result': 'error'}
        };
    }
};
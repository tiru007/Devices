module.exports = async function (context, req, Device) {

    var Device1 = {
        Device : req.body.Device,
        completed : req.body.completed 
    }

    context.bindings.outputDocument = Device[0];
    context.bindings.outputDocument.Device = Device1.Device
    context.bindings.outputDocument.completed = Device1.completed

    context.res = {
        body: {'result': 'success'}
    };
};
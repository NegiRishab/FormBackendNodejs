const controller = {}
const viewModel = require('./viewModel')
const dbHelper = require('./dbHelper')
controller.create = async ({ body }) => {
    try {
        const createViewModel = await viewModel.createFormData(body)
        const data = await dbHelper.saveDAta(createViewModel)
        console.log(data);
        return data


    } catch (error) {
        console.log(error)
    }
}
controller.editdata = async ({ body }) => {
    try {
        const createViewModel = await viewModel.createFormData(body)
        console.log('createViewModel',createViewModel)
        const data = await dbHelper.editdata(createViewModel,body.id)
        console.log(data);
        return data


    } catch (error) {
        console.log(error)
    }
}
controller.getdata = async ({ params }) => {
    try {
        console.log(params)
     let data=await dbHelper.getdata(params.userid);
     return data;
    } catch (error) {
        console.log(error)
    }
}
controller.deletedata = async ({ body }) => {
    try {
        const id = body.id;
        await dbHelper.deletedata(id);
        return 'data deleted';

    } catch (error) {
        console.log(error)
    }
}
controller.userExist = async ({ body }) => {
    try {
        const email = body.email;
        return  await dbHelper.userExist(email);
       

    } catch (error) {
        console.log(error)
    }
}


module.exports = controller;
const dbHelper = {};
const model = require('./module')

dbHelper.saveDAta = async (data) => {
    try {

        const obj = new model(data);
        return await obj.save();

    } catch (error) {
        console.log(error)
    }
}

dbHelper.editdata = async (data, id) => {
    try {
        const updateddata = await model.findOneAndUpdate({ _id: id }, { $set: data }, { new: true })
        return updateddata;

    } catch (error) {
        console.log(error)
    }
}
dbHelper.getdata = async (id) => {
    try {
        return await model.findOne({ _id: id, active: true })

    } catch (error) {
        console.log(error)
    }
}
dbHelper.deletedata = async (id) => {
    try {

        return await model.findOneAndDelete({ _id: id })


    } catch (error) {
        console.log(error)
    }
}
dbHelper.userExist = async (id) => {
    try {

        let data = await model.findOne({ email: id })
        if (data) {
            return data;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = dbHelper;
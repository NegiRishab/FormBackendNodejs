const viewModel = {}


viewModel.createFormData = (data) => {
    console.log('data', data)

    const viewdata = {};

    viewdata.name = data.name;
    viewdata.email = data.email;
    viewdata.number = data.number;
    viewdata.country = data.country;
    viewdata.monthly = data.monthly;
    viewdata.daily = data.daily;
    viewdata.yearly = data.yearly;
    viewdata.gender = data.gender;

    return viewdata;
}





module.exports = viewModel;
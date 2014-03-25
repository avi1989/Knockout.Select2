var IndexVM = function() {
    var test = ko.observable("Binding Successful");
    var colorList = ['Blue', 'Red', 'White', 'Green', 'Black', 'Orange'];
    var vm = {
        test: test,
        colorList: colorList
    };
    return vm;
}
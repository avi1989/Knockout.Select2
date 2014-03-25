var IndexVM = function() {
    var test = ko.observable("Binding Successful");
    var colorList = [
    { Id: 0, Name: 'Blue' }, { Id: 1, Name: 'Red' }, { Id: 2, Name: 'White' }, { Id: 3, Name: 'Green' }, { Id: 4, Name: 'Black' }, { Id: 5, Name: 'Orange' }];

var colorListBasic = [
    { id: 0, text: 'Blue' }, { id: 1, text: 'Red' }, { id: 2, text: 'White' }, { id: 3, text: 'Green' }, { id: 4, text: 'Black' }, { id: 5, text: 'Orange' }];


    var selectedColor = ko.observableArray();
//    var selectedColor = ko.observable();

    var vm = {
        test: test,
        colorList: colorList,
        selectedColor: selectedColor,
        colorListBasic: colorListBasic,
        debugMe: function() { debugger; }
    };
    return vm;
}
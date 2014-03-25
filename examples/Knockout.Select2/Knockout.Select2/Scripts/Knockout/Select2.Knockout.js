ko.bindingHandlers.ko_select2 = {

    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        debugger;

        //#region Properties
        var settings = allBindingsAccessor().settings;
        var listData = settings.data;
        var observableItem = valueAccessor();
        var isMultiple = settings.multiple == true ? true : false;
        var url = settings.url != null ? settings.url : null;

        //#endregion

        //#region Error checks

        if (settings.save.toUpperCase() != ("Entity").toUpperCase() && settings.save.toUpperCase() != ("Value").toUpperCase()) {
            throw new Error("Please select either entity or value in the save binding");
        }

        if (!listData && !settings.url) {
            debugger;
            console.log("No data parameter. Will not work unless you are using a select control with params. It is better to pass a data parameter in settings as it gives you more control");
        }
        debugger;
        if (listData && !Array.isArray(listData)) {
            throw new Error("Error!, data is not an array");
        }

        if (isMultiple && !Array.isArray(observableItem())) {
            throw new Error("You have multiple select enabled and have not mapped it to an observable array.");
        }

        if (url && listData) {
            throw new Error("You have provided both data and url. Please only provide one. Current version does not concatenate results");
        }


        //#endregion

        //#region Default Values and Operations

        if (!settings.save) {
            settings.save = "Entity";
        }

        var optionsValue = function (item) {
            if (settings.optionsValue)
                return item[settings.optionsValue];
            else {
                return item.id;
            }
        };
        var optionsText = function (item) {
            if (settings.optionsText)
                return item[settings.optionsText];
            else {
                return item.text;
            }
        };

        if (settings.url) {
            var ajax = {
                url: settings.url,
                dataType: 'json',
                data: function(term) {
                    return {
                        q: term,
                    };
                },
                results: function(data) {
                    return { results: data };
                }
            };

            allBindingsAccessor().settings.ajax = ajax;
        }
        //#endregion

        //#region Initialization

        this.settings = allBindingsAccessor().settings;
        this.items = valueAccessor();
        $(element).select2($.extend(settings, {
            formatSelection: optionsText,
            formatResult: optionsText,
            id: optionsValue,
            
        }));

        //#endregion

        //#region Change event
        $(element).on("change", function (item) {
            if (!isMultiple) {
                if (settings.save.toUpperCase() == ("Entity").toUpperCase()) {
                    observableItem(item.added);
                } else {
                    observableItem(item.val);
                }
            } else {
                if (settings.save.toUpperCase() == ("Entity").toUpperCase()) {
                    if (item.removed) {
                        observableItem.remove(item.removed);
                    }
                    if (item.added) {
                        observableItem.push(item.added);
                    }
                } else {
                    observableItem(item.val);
                }
            }
            
        });

        //#endregion

    },
};

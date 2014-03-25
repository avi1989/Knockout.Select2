Knockout.Select2
================

This project is a knockout binding for select2. The intention with this project is to make a single select2 binding that encompasses all the features of select2. This reduces the need to create a custom formatSelection or formatResults or other settings that require a function as a parameter. This binding will be able to take care all but the most complex needs. Features will be added to this to also expose the more intricate methods of select2 for more advance users.

This binding also supports ajax calls to query an Api. There is still some pending work on Ajax. Basic ajax calls do work but currently only works with q as the query parameter. This binding does not currently also support jsonpcallback, quietMilis and paging. Tagging is still a work in progress as is drag drop.These features will be added as soon as they are completed

This binding was developed using C#.net and an MVC application. The sample application is currently very lacking and will need some work before it is presentable. I have checked it in if anyone needs it for reference though. This page should explain how to use the binding though.
### Basic Usage
    
    <input id="select" data-bind="ko_select2:selectedColor , 
                            settings: { data:colorList, multiple:true,}"/>

The binding above lists some of the most basic bindings in ko_select2.

- ko_select2 : This is the call needed to be made to initialize the select2 binding. The binding to ko_select2 needs to be the observable/observableArray where the selected data needs to be saved
- data: The list elements needs to be passed into the data element.
- multiple: This field allows you to choose if you want to only select a single value or multiple. If multiple is selected, make sure that the property passed to ko_select2 is an observableArray;

### Advanced Usage (More will be added later.)
    <input id="select" data-bind="ko_select2:selectedColor , 
                            settings: { width: '100px', optionsValue: 'Id', 
                                        save: 'entity', optionsText: 'Country', multiple: true, }"/>

- width: Allows you to select a fixed width for the control
- OptionsValue: This binding allows you to select the field in the entity that contains the id field
- OptionsText: This binding allows you to select the field containing the text field;
- save: (default: 'entity')There are currently 2 save options. One is 'entity' and the other is 'value'. Entity will save the entire entity to your selectedData observable. Value will only save the ids.  By default, you the control needs id and text to populate the list. The more advanced examples will show how to select a custom field.

### Ajax Querying
This binding can currently make ajax calls to retrieve a list which can be used in conjecture with the select2 control. The binding uses select2's default ajax parser. There are still some limitations with the ajax binding which are listed above. 

    <input id="select" data-bind="ko_select2: selectedColor, settings: { width: '100px', optionsValue: 'Id', 
                            save: 'entity', optionsText: 'Country', 
                            multiple: true, url: '/api/DefaultApi/GetCountry' }"/>
                            
The sample code above shows how to make an ajax call to get query results. Note: The query param should be q(Will expose setting to change that in a later release). The only additional parameter to pass here is the url parameter. The url points to an api which takes q as the query paramter. This will return data after ajax calls.

### Notes
The following settings parameters should work as well. I haven't tested it as of now but I am confident that it will work
- placeholder
- allowClear
- minimumInputLength
- escapeMarkup (Needs a function passed to it as per http://ivaynberg.github.io/select2/ Will add an easier way to pass it in the next release)
- sortResults: (Needs a function passed to it as per http://ivaynberg.github.io/select2/)
I'm sure more settings are supported. Will check and confirm with time.


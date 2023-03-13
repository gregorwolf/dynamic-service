using {CustomizingService as my} from '../srv/customizing-service';

annotate my.Service with @(UI: {
  Identification         : [{Value: name}],

  SelectionFields        : [
    name,
    destination,
    path,
    active
  ],

  LineItem               : [
    {Value: name, },
    {Value: destination},
    {Value: path},
    {Value: active},
  ],

  Facets                 : [{
    $Type : 'UI.ReferenceFacet',
    Label : 'Description',
    Target: '@UI.FieldGroup#Description'
  }],

  FieldGroup #Description: {Data: [
    {Value: name},
    {Value: destination},
    {Value: path},
    {Value: active},
  ]},
}) {

};

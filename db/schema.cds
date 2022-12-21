namespace customizing;

using {cuid} from '@sap/cds/common';

@assert.unique: {name: [name], }
entity Service : cuid {
    name        : String;
    destination : String;
    path        : String;
}

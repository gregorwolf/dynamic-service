using {customizing} from '../db/schema';

service DynamicService {


    @cds.persistence.skip
    entity Services {
        key name     : String;
            entities : Composition of many {
                           name    : String;
                           columns : Composition of many {
                                         name  : String;
                                         type  : String;
                                         isKey : Boolean;
                                     }
                       }
    }

}

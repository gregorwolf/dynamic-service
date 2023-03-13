using {customizing} from '../db/schema';

service CustomizingService {

    @odata.draft.enabled
    entity Service as projection on customizing.Service;

    action loadServices() returns array of Service;
}

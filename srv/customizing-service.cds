using {customizing} from '../db/schema';

service CustomizingService {

    @fiori.draft.enabled
    entity Service as projection on customizing.Service;

    action loadServices() returns array of Service;
}

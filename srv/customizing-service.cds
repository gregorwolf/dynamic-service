using {customizing} from '../db/schema';

service CustomizingService {

    entity Service as projection on customizing.Service;
    action loadServices() returns array of Service;
}

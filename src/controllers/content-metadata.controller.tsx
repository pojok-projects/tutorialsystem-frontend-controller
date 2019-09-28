import { ContentMetadataModel } from '../models/content-metadata.models'
import { baseUrl } from '../config'


export const getAllContentMetadata =  () : Promise<any> => {
        return fetch(baseUrl +"/content/metadata")
        .then(res => res.json())
}





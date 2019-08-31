import { ContentMetadataModel } from '../models/content-metadata.models'
import { baseUrl } from '../config'

class ContentMetadataController {
    public getAllContentMetadata () :Promise<ContentMetadataModel> {
        return fetch(baseUrl +"/content/metadata")
        .then(res => res.json())
        .then( (json : ContentMetadataModel) =>{ 
            return json
        })
    }

}

export default new ContentMetadataController()


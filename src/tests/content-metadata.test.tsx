import ContentMetadataController  from '../controllers/content-metadata.controller'
import { ContentMetadataModel }  from '../models/content-metadata.models'

it('request api content metadata', () => {
    
    ContentMetadataController.getAllContentMetadata()
    .then(content => {
        console.log(content)
        expect(content).toBe(new ContentMetadataModel())
    })
    
});
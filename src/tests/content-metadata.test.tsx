import ContentMetadataController  from '../controllers/category-manager.controller'
import { ContentMetadataModel }  from '../models/content-metadata.models'

it('request api content metadata', () => {
    
    ContentMetadataController.getAllContentMetadata()
    .then(content => {
        console.log(content)
        expect(content).toBe(new ContentMetadataModel())
    })
    
});
import { ExemplePipe } from './exemple.pipe';

describe('ExemplePipe', function(){
    let instancePipe:ExemplePipe;

    beforeEach(function(){
        instancePipe = new ExemplePipe();
    });

    it('devrait rajouter du texte', function() {
        let parametre = 'test';
        let valeurAttendue = 'test mon pipe d\'exemple';

        expect(instancePipe.transform(parametre)).toBe(valeurAttendue);
    });

    
})
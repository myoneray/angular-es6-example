

import CommonModule from '../../common.module';
import './reverse.filter.js';

describe('reverse.filter',  () => {
    beforeEach(angular.mock.module(CommonModule.name));
    
    describe('reverse', () => { 
    
        var reverse;
        beforeEach(angular.mock.inject( ($filter) => {
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', () => {
            expect(reverse('dian')).toBe('naid');
            
            
        });

    });

});
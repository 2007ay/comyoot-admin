import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'referralFilter'
})
export class ReferralFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row => (row.userName && row.userName.indexOf(query)) > -1);
        }
        return array;
    }
}

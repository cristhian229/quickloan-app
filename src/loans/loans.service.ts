import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
    calculateLoanRisk(userProfile: any):string{
        if (userProfile.creditScore > 700){
            return 'low Risk'
        }else{
            return 'high Risk'
        }
    }
}

import { IsEnum } from "class-validator";
import { PaymentPlanType } from "../athlete.entity";

export class SetAthletePlanDto {
    @IsEnum(PaymentPlanType)
    readonly plan: PaymentPlanType;
}
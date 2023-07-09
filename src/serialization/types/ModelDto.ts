/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Optimizely from "../../api";
import * as core from "../../core";

export const ModelDto: core.serialization.ObjectSchema<serializers.ModelDto.Raw, Optimizely.ModelDto> =
    core.serialization.object({
        name: core.serialization.string(),
        vendorName: core.serialization.property("vendor_name", core.serialization.string()),
        vendor: core.serialization.string(),
        tokenLimit: core.serialization.property("token_limit", core.serialization.number()),
        millicentsPer1K: core.serialization.property("millicents_per_1k", core.serialization.number()),
    });

export declare namespace ModelDto {
    interface Raw {
        name: string;
        vendor_name: string;
        vendor: string;
        token_limit: number;
        millicents_per_1k: number;
    }
}

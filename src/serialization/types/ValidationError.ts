/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Optimizely from "../../api";
import * as core from "../../core";

export const ValidationError: core.serialization.ObjectSchema<
    serializers.ValidationError.Raw,
    Optimizely.ValidationError
> = core.serialization.object({
    loc: core.serialization.list(core.serialization.lazy(async () => (await import("..")).ValidationErrorLocItem)),
    msg: core.serialization.string(),
    type: core.serialization.string(),
});

export declare namespace ValidationError {
    interface Raw {
        loc: serializers.ValidationErrorLocItem.Raw[];
        msg: string;
        type: string;
    }
}

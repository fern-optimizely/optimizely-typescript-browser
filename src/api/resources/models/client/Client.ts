/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Optimizely from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Models {
    interface Options {
        environment: core.Supplier<string>;
    }
}

export class Models {
    constructor(protected readonly options: Models.Options) {}

    public async get(): Promise<Optimizely.ModelsResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "api/models"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fern-optimizely-browser",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ModelsResponseDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.OptimizelyError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Optimizely.UnprocessableEntityError}
     */
    public async getByName(name: unknown): Promise<Optimizely.ModelDto> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `api/model/${name}`),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fern-optimizely-browser",
                "X-Fern-SDK-Version": "0.0.6",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ModelDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Optimizely.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.OptimizelyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OptimizelyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OptimizelyTimeoutError();
            case "unknown":
                throw new errors.OptimizelyError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

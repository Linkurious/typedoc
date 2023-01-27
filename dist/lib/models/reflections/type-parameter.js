"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParameterReflection = exports.VarianceModifier = void 0;
const abstract_1 = require("./abstract");
const kind_1 = require("./kind");
/**
 * Modifier flags for type parameters, added in TS 4.7
 * @enum
 */
exports.VarianceModifier = {
    in: "in",
    out: "out",
    inOut: "in out",
};
class TypeParameterReflection extends abstract_1.Reflection {
    constructor(name, constraint, defaultType, parent, varianceModifier) {
        super(name, kind_1.ReflectionKind.TypeParameter, parent);
        this.type = constraint;
        this.default = defaultType;
        this.varianceModifier = varianceModifier;
    }
    toObject(serializer) {
        return {
            ...super.toObject(serializer),
            type: serializer.toObject(this.type),
            default: serializer.toObject(this.default),
            varianceModifier: this.varianceModifier,
        };
    }
}
exports.TypeParameterReflection = TypeParameterReflection;
//# sourceMappingURL=type-parameter.js.map
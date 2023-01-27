"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const utils_1 = require("../../../../utils");
function members(context, props) {
    if (props.categories && props.categories.length) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, props.categories.map((item) => !item.allChildrenHaveOwnDocument() && (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-member-group " + props.cssClasses },
            utils_1.JSX.createElement("h2", null, item.title),
            item.children.map((item) => !item.hasOwnDocument && context.member(item)))))));
    }
    return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, props.groups?.map((item) => !item.allChildrenHaveOwnDocument() && context.membersGroup(item)));
}
exports.members = members;
//# sourceMappingURL=members.js.map
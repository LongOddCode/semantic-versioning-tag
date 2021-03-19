const core = require("@actions/core");
const github = require("@actions/github");

const regexStr = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm;

const regex = new RegExp(regexStr);

const ref = github.context.ref;
const tagPath = "refs/tags/";
console.log(ref);
console.log(tagPath);

if (ref && ref.startsWith(tagPath)) {
    var tag = ref.substr(tagPath.length, ref.length);
    console.log(tag);
    var result = regex.exec(tag);
    if (!result) {
        core.setFailed("not semantic versionning tag");
    } else {
        console.log(result);
        core.setOutput("major", result["major"]);
        core.setOutput("minor", result["minor"]);
        core.setOutput("patch", result["patch"]);
        core.setOutput("prerelease", result["prerelease"]);
        core.setOutput("buildmetadata", result["buildmetadata"]);
    }
}

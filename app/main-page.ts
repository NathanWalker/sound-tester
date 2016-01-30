import {Jukebox} from "./main-view-model";
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new Jukebox();
}
exports.pageLoaded = pageLoaded;

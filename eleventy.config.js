// This file is used to configure Eleventy.

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(cfg) {
    // Copy files from /static to the final site unchanged
    cfg.addPassthroughCopy({
        "src/static": "/static"
    });
    cfg.addGlobalData("buildTime", new Date());

    // Add a custom shortcode for opening links in other tabs
    cfg.addShortcode("extLink", (text, href) => 
        `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`);
    // Add a filter that formats dates in Carleton's time zone (by default it prints dates in GMT)
    cfg.addFilter("formatDateToMN", function(date) {
        return date.toLocaleTimeString("en-US", {timeZone: "America/Chicago"});
    });


    return {
        dir: {
            // Read files from `src` and not the root folder
            input: "src",
            // Output files to the `site` folder. You can't see the `site` folder because
            // it's in the .gitignore file; that file tells Git to ignore certain things in it.
            // There's no reason to have a record of the `site` folder on the git repo because
            // it wastes space.
            output: "site"
        }
    }
};

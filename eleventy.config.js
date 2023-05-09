// This file is used to configure Eleventy.

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(cfg) {
    // Copy files from /static to the final site unchanged
    cfg.addPassthroughCopy({
        "src/static": "/static"
    });
    cfg.addGlobalData("buildTime", new Date());

    cfg.addShortcode("extLink", (text, href) => 
        `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`);

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

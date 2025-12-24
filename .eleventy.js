module.exports = function(eleventyConfig) {
  // Create a "posts" collection from files in the posts/ folder (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md").sort((a, b) => {
      return (b.date || b.data.date) - (a.date || a.data.date);
    });
  });

  // Human-friendly date filter (e.g. "27 Nov 2025")
  eleventyConfig.addFilter("formatDate", function(value) {
    if (!value) return "";
    const d = (value instanceof Date) ? value : new Date(value);
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(d);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

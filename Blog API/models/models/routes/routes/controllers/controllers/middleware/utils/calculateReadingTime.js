module.exports = function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return `${Math.ceil(words / wordsPerMinute)} min read`;
  };
  
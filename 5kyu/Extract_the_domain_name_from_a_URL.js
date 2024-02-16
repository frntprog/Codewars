function domainName(url) {
  let sub = ["http://www.", "https://www.", "http://", "https://", "www."];
  for (let i = 0; i < sub.length; i++) {
    if (url.includes(sub[i])) {
      return url.split(sub[i])[1].split(".")[0];
    }
    if (i == sub.length - 1) return url.split(".")[0];
  }
}

console.log(domainName("http://google.com")); // "google"

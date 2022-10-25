const StringCount = new Map();

const text = ["sumomo", "mo", "momo", "mo", "momo", "no", "uchi"];

for (const s of text) {
  let currentCount = StringCount.get(s) || 0;
  StringCount.set(s, currentCount + 1);
}

console.log(StringCount);

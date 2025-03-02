
#### `docs/challenges-solutions.md`
```md
---
title: Challenges & Solutions
---

## Challenges Faced
### 1. Tailwind CSS Not Working
**Issue:** Tailwind classes are not applied properly. Tried to debug the issue but later switched to using styles.

### 2. Loading Indicator Visibility
**Issue:** Loader was not showing for enough time.  
**Solution:** Used a `setTimeout` to delay data display after fetching.

### 3. API Rate Limiting
**Issue:** Frequent API calls hit the rate limit.  
**Solution:** Implemented caching with state management to reduce unnecessary requests.

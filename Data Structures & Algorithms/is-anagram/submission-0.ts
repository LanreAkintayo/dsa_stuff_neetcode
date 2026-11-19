class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // First safety check
        if (s.length != t.length){
            return false
        }
        const counts = new Map<string, number>()


        for (const char of s){
            // Populate the counts map
            counts.set(char, (counts.get(char) || 0) + 1)
        }

        // Use t to compare the counts
        for (const char of t){
            const charCount = counts.get(char) || 0
            if (!charCount){
                return false
            }
            counts.set(char, charCount - 1)
        } 

        return true
    }
}

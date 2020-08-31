function isBalanced(str) {
    const track = []
    for (const char of str.split("")) {
        switch (char) {
            case ")":
                if (track[track.length - 1] === "(") {
                    track.pop()
                } else {
                    return false
                }
                break;
        
            case "]":
                if (track[track.length - 1] === "[") {
                    track.pop()
                } else {
                    return false
                }
                break;
        
            case "}":
                if (track[track.length - 1] === "{") {
                    track.pop()
                } else {
                    return false
                }
                break;
        
            default:
                track.push(char)
        }
    }
    return track.length === 0
}

function num() {
for (const char of s.split("")) {
    console.log(char)
    if (char === "d") {
        return true
    }
}
}
function isBalanced(string){

    let bracketHash={
        "[":"]", 
        "{":"}", 
        "(":")"
    }

    let opens= [ "[", "{", "("]
    let closed= [ "]", "}", ")"]
    let stack=[]

    for (let i=0; i<string.length; i++){
        if (opens.includes(string[i])){
            stack.push(string[i])
        }
        if (closed.includes(string[i])){
            if(bracketHash[stack[stack.length-1]]=== string[i]){
                stack.pop()
            }
            else {
                return false
            }
        }
    }

    return stack.length === 0

}


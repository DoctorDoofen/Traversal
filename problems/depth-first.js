const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 3],
    6: [4]
}



function depthFirst(start) {
    // Put the starting node on a stack.
    let stack = [start]
    let visited = new Set()

    // While the stack is not empty, repeat steps 3-4.
    while (stack.length) {
        // Pop a node and print it.
        const first = stack.pop()
        if (visited.has(first)) continue
        visited.add(first)
        console.log(first)

        // Put all of the node's children on the top of the stack.
        for (let el of adjList[first]) {
            stack.push(el)
        }
    }
}



depthFirst(6)
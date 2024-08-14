function breadthFirst(start) {
    const queue = [start]
    const visited = new Set()

    while (queue.length) {
        let first = queue.shift()
        if (visited.has(first)) continue

        visited.add(first)
        console.log(first)

        for (let el of list[first]) {
            queue.push(el)
        }


    }
}

let list = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 3],
    6: [4]
}

breadthFirst(6)


// Put the starting node in a queue.
// While the queue is not empty, repeat steps 3-4.
// Dequeue a node and print it.
// Put all of the node's children in the back of the queue.
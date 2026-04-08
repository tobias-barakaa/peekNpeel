const myMap = new Map([[1, 'one', 3]]);

// myMap.clear(1);

console.log(myMap.size);

// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');


// const routes = [
//     ['PHX', 'LAX'],
//     ['PHX', 'JFK'],
//     ['JFK', 'OKC'],
//     ['JFK', 'HEL'],
//     ['JFK', 'LOS'],
//     ['MEX', 'LAX'],
//     ['MEX', 'LIM'],
//     ['MEX', 'EZE'],
//     ['LIM', 'BKK']
// ];

// const adjacenyLIst = new Map();

// function addNode(airport) {
//     adjacenyLIst.set(airport, []);
// }

// function addEdge(origin, destination) {
//     adjacenyLIst.get(origin).push(destination);
//     adjacenyLIst.get(destination).push(origin);
// };


// //Create the graph
// airports.forEach(addNode);
// console.log(adjacenyLIst, 'this is the graph');
// console.log(airports, 'this is the airports');

// routes.forEach(route => addEdge(...route));

// console.log(adjacenyLIst);




// // BFS Breadth First SEarch

// // function bfs(start) {
// //     const visited = new Set();
// //     const queue = [start]

// //     while(queue.length > 0) {
// //         const airport = queue.shift();

// //         const destinations = adjacenyLIst.get(airport);

// //         for(const destination of destinations) {
// //             queue.push(destination);

// //             queue.push(destination);

// //             if (destination === 'BKK') {
// //                 console.log('Found it!');
// //             }

// //             if(!visited.has(destination)) {
// //                 visited.add(destination);
// //                 queue.push(destination);
// //             }
// //         }

        
// //     }

// // }


// // bfs('PHX');

// function dfs(start, visited = new Set()) {
//   console.log(start)

//   visited.add(start);
//   const destinations = adjacenyLIst.get(start);
//   for (const destination of destinations) {
//     if(destination === 'BKK') {
//         console.log(`Dfs found Bankok in steps`)
//         return
//     };
//     if(!visited.has(destination)) {
//         dfs(destination, visited)
//     }
//   }
// }


// dfs('PHX');
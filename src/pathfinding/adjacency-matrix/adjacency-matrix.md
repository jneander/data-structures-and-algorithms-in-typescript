# Adjacency Matrix

An adjacency matrix is a representation of a graph. The primary structure is an indexed list or
array, where contiguous indices starting from 0 refer to nodes on the graph. Each position in this
list or array holds its own indexed list or array. For each of these inner lists, contiguous indices
starting from 0 also refer to nodes on the graph. At each intersection of outer index and inner
index, the value store determines whether or not the node at the outer index is connected to the
node at the inner index. With each node having an index in the outer list as well as each inner
list, the overall shape of this structure is a square matrix.

## Finding a Path Between Nodes

Given a starting node and an ending node, finding a path involves walking the graph from the
starting node until either the ending node is found or all nodes in the graph have been visited.
Without additional information to optimally guide this search, the first complete path found will be
the path returned.

Since this can potentially visit every node in the graph, which also means visiting every edge in
the graph, the time complexity of this algorithm is considered linear to the graph. For a graph,
this is notated in terms of vertices and edges, O(V + E).

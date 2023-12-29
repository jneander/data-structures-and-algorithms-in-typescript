# Dijkstra's Shortest Path

This algorithm finds the shortest path between nodes in a weighted graph. It was created by Edsger
W. Dijkstra in 1956.

[Wikipedia: Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

The algorithm takes three parameters:

- a representation of the graph
- a reference to the node which begins the path
- a reference to the node which ends the path

The graph can be represented as an adjacency list or adjacency matrix. Though, the list form is more
efficient as it eliminates checks for the edges connecting nodes. In the case of either, the node
references would be list indices.

Each edge in the graph has an associated weight, which determines the efficiency of the connection
between two nodes.

The weights are absolute values, so any edge can be compared to any other as being more, less, or
equally efficient. As a path is constructed from one or more edges, the sum of the weights of the
edges in the path is an absolute measure of the path's efficiency. Therefore, as with individual
edges, different paths between start and end nodes can be compared to each other for efficiency.

Edge and path efficiency is often referred to as the "distance" between nodes. The comparison
between paths identifies the most efficient (or "shortest") path connecting any two given nodes in
the graph.

The algorithm ultimately traverses the entirety of the graph, visiting each node and its connections
once. Each visit to a node calculates the cumulative weight of connections to this node from the
starting node. The total distance to each node is calculated and recalculated as each connection to
it is visited. Each time the distance decreases (becoming more efficient), the node connecting to it
is recorded as being a part of the shortest path to the current node. This means each node connected
from the starting node will have only one node recorded as being a part of the shortest path from
the start.

Consider the following graph:

```
╭ B ╮
A │ D
╰ C ╯
```

For simplicity, all connections are directional to larger letters. The connections and their weights
are as follows:

- A is connected to B with a weight of 1
- A is connected to C with a weight of 4
- B is connected to C with a weight of 2
- B is connected to D with a weight of 3
- C is connected to D with a weight of 3

For this example, (A) will be the starting node and (B) will be the ending node. Using the steps
described earlier, the following would be the sequence of comparisons and state changes:

**Step 1**: Calculate distances to nodes connected from (A)

Node A is connected to nodes B and C. Since (A) is the starting node, it has an implicit shortest
distance of zero.

First, the distance to node B (1) is added to the distance to the current distance (0). The sum of 1
is compared to the recorded shortest distance to node B. Since there is no record yet, the sum is
recorded as the shortest distance to node B and node A is recorded as the connecting node on the
shortest path.

Next, the same steps occur with node C. The distance to node C (4) is added to the current distance
(0). There is no recorded shortest distance to node C, so this sum (4) is used and node A is
recorded as the connecting node on the shortest path.

At this point, the data recorded is as follows:

| Node | Distance | Connection |
| ---- | -------- | ---------- |
| A    | 0        | -          |
| B    | 1        | A          |
| C    | 4        | A          |
| D    |          |            |

**Step 2**: Calculate distances to nodes connected from (B)

Node B is connected to nodes C and D. Its recorded shortest distance is 1, from node A.

First, the distance from node B to node C (2) is added to the current distance (1). The sum of 3 is
compared to the current shortest distance to node C (4, from node A). Since this sum is less than
the previous shortest distance, it replaces that distance, and node B is recorded as the connected
node on the shortest path.

Next, the distance from node B to node D (3) is added to the current distance (1). There is no
recorded shortest distance to node D, so the sum of 4 is used and node B is recorded as the
connecting node on the shortest path.

At this point, the data recorded is as follows:

| Node | Distance | Connection |
| ---- | -------- | ---------- |
| A    | 0        | -          |
| B    | 1        | A          |
| C    | 3        | B          |
| D    | 4        | B          |

**Step 3**: Calculate distances to nodes connected from (C)

Node C is connected only to node D. Its current recorded shortest distance (from the starting node)
is 3, through node B.

The distance to node D (3) is added to the distance to the current node (3). The current shortest
distance to node D is also 3, through node B. Since the sum in this step is not less than that
distance, node C is not considered to be on a shorter path. Therefore, the current distance and
recorded connecting node are not updated.

At this point, the data recorded is as follows:

| Node | Distance | Connection |
| ---- | -------- | ---------- |
| A    | 0        | -          |
| B    | 1        | A          |
| C    | 3        | B          |
| D    | 4        | B          |

**Step 4**: Calculate distances to nodes connected from (D)

Node D does connect to any other nodes.

When all nodes have been visited, the path from the starting node to the ending node is constructed,
but in reverse. Starting with the ending node as the current node, the steps are as follows:

1. The current node is added to the path.
2. The node recorded as being on the shortest path to the current node itself becomes the current
   node.
3. Repeat from step 1 until the starting node is reached.

These steps use the data from above:

| Node | Distance | Connection |
| ---- | -------- | ---------- |
| A    | 0        | -          |
| B    | 1        | A          |
| C    | 3        | B          |
| D    | 4        | B          |

Following the steps, the end node is added first.

```
[D]
```

The connected node on the shortest path to (D) is node B. This becomes the current node and is added
to the path.

```
[D] -> [B]
```

The connected node on the shortest path to (B) is node A. This becomes the current node and is added
to the path.

```
[D] -> [B] -> [A]
```

This node is the starting node, so the steps conclude and the path is complete.

## Time Complexity

The time complexity of this algorithm is complicated. There are several steps which inform the
runtime.

First, there are data structures for recording shortests distances and connecting nodes for each
node in the graph. They are created and populated once, at the start of the algorithm, which has a
time complexity of linear to the number of nodes in the graph. For a graph, this is notated in terms
of vertices, O(V).

With the setup complete, the algorithm next walks the entirety of the graph, one node at a time.
This is also linear to the nodes in the graph, but is itself not important. Within this loop over
each node, each of the node's connected edges are visited to calculate distances. In a graph that is
fully bidirectional, this would mean each bidirectional edge is visited from both its nodes.
Collectively, this iteration is considered linear to the number of edges in the graph. The 2x
multiplier for bidirectionality is worth noting, but as it is a constant in the time complexity
calculation, it is ignored. Now, since this iteration over edges occurs within an iteration over
nodes, these runtimes multiply together, O(V \* E).

The final step is assembling the path. This iterates through the references to nodes recorded as
being on the shortest path to other nodes. The shorter the path, the fewer iterations are required.
However, the worst case here would have every node included in the path. This would result in a time
complexity that is linear to the number of nodes in the graph, O(V).

These runtimes combined would result in O(V + V + V _ E). Simplifying for notation, this is O(V + V
_ E).

However, this is not the complete picture. An essential detail of the primary loop over nodes is
that those nodes must be ordered such that each subsequent node has the shortest recorded distance
of any remaining nodes. And since these distances change as connected nodes are visited within the
loop, each iteration of the outer loop must ensure that the remaining nodes are continually
re-sorted for this order.

### Using Lists

One approach to ordering the nodes is to simply search the nodes for the node which has the shortest
path of those not yet iterated over. Using a linear data structure, such as a list, would give this
a linear runtime to the number of nodes in the graph, O(V). But since this search occurs once
_within_ each iteration over nodes in the graph, these runtimes multiply together and become
exponential to the number of nodes in the graph, O(V²).

Combining this with the edge iteration results in the final time complexity, O(V² \* E).
Fortunately, this runtime can be improved.

### Using a Heap

Based on the list implementation in the previous section, the ordering of nodes has a substantial
impact on runtime. Using a linear data structure requires a lot of work to arrive at the one node
required for the each iteration of the primary loop. However, there's a subtle detail here which can
suggest a better optimization.

With each loop, only one node is needed. This node must have the shortest distance of all others not
yet iterated over. Though, while this means its distance must be strictly ordered, this does not
require any other nodes to be ordered. In fact, since the order of each subsequent node must be
recalculated, the order of the remaining nodes seems irrelevant.

A data structure exists to accommodate exactly this use case: a heap. A heap will remove items from
within in ascending order. In this case, the order would be each node's shortest distance from the
start. Since a heap also removes elements when consumed, it naturally eliminates the need to track
which nodes have been iterated over. Additionally, while the remaining nodes don't need ordering
until being iterated over, a heap is optimized to minimize the cost of maintaining order as elements
are removed.

So, with a heap used to store nodes, iterating over them in the primary loop means removing them
from the heap. Each removal from the heap requires an amount of work to maintain internal structure.
However, this work has a time complexity that is logarithmic to the number of nodes in the graph,
O(log V). This is a significant improvement over the linear cost of using lists.

Combining this with the other runtimes in the algorithm results in the final time complexity, O(log
V \* (V + E)).

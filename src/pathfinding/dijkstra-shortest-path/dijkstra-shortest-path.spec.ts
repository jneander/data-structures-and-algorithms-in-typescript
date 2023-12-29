import {expect} from 'chai'

import type {WeightedAdjacencyList} from './types'
import {shortestPath as shortestPathUsingHeap} from './using-heap'
import {shortestPath as shortestPathUsingLists} from './using-lists'

function testShortestPath(shortestPath: typeof shortestPathUsingLists) {
  describe('shortestPath()', () => {
    const list: WeightedAdjacencyList = [
      [
        {to: 1, weight: 3},
        {to: 2, weight: 3},
      ],
      [
        {to: 2, weight: 4},
        {to: 4, weight: 1},
      ],
      [
        {to: 1, weight: 4},
        {to: 2, weight: 7},
      ],
      [
        {to: 2, weight: 7},
        {to: 4, weight: 5},
        {to: 6, weight: 1},
      ],
      [
        {to: 1, weight: 1},
        {to: 3, weight: 5},
        {to: 5, weight: 2},
      ],
      [
        {to: 6, weight: 1},
        {to: 4, weight: 2},
        {to: 2, weight: 18},
      ],
      [
        {to: 3, weight: 1},
        {to: 5, weight: 1},
      ],
    ]

    it('returns the path between two connected nodes', () => {
      expect(shortestPath(list, 0, 6)).to.eql([0, 1, 4, 5, 6])
    })

    it('returns null when the given nodes are not connected', () => {
      expect(shortestPath(list, 2, 0)).to.be.null
    })

    it('returns null when the starting node does not exist', () => {
      expect(shortestPath(list, 7, 6)).to.be.null
    })

    it('returns null when the ending node does not exist', () => {
      expect(shortestPath(list, 0, 7)).to.be.null
    })
  })
}

const implementationMap = {
  'using-arrays': shortestPathUsingLists,
  'using-heap': shortestPathUsingHeap,
}

describe('pathfinding > dijkstra-shortest-path', () => {
  for (const key in implementationMap) {
    describe(key, () => {
      testShortestPath(implementationMap[key as keyof typeof implementationMap])
    })
  }
})

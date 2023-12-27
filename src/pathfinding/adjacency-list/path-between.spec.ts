import {expect} from 'chai'

import {pathBetweenBreadth, pathBetweenDepth} from './path-between'
import type {AdjacencyList} from './types'

describe('pathfinding > adjacency-list > path-between', () => {
  describe('pathBetweenBreadth()', () => {
    const list: AdjacencyList = [
      [{to: 1}, {to: 2}],
      [{to: 4}],
      [{to: 3}],
      [],
      [{to: 1}, {to: 3}, {to: 5}],
      [{to: 2}, {to: 6}],
      [{to: 3}], //
    ]

    it('returns the path between two connected nodes', () => {
      expect(pathBetweenBreadth(list, 0, 6)).to.eql([0, 1, 4, 5, 6])
    })

    it('returns null when the given nodes are not connected', () => {
      expect(pathBetweenBreadth(list, 6, 0)).to.be.null
    })

    it('returns null when the starting node does not exist', () => {
      expect(pathBetweenBreadth(list, 7, 6)).to.be.null
    })

    it('returns null when the ending node does not exist', () => {
      expect(pathBetweenBreadth(list, 0, 7)).to.be.null
    })
  })

  describe('pathBetweenDepth()', () => {
    const list: AdjacencyList = [
      [{to: 1}, {to: 2}],
      [{to: 4}],
      [{to: 3}],
      [],
      [{to: 1}, {to: 3}, {to: 5}],
      [{to: 2}, {to: 6}],
      [{to: 3}], //
    ]

    it('returns the path between two connected nodes', () => {
      expect(pathBetweenDepth(list, 0, 6)).to.eql([0, 1, 4, 5, 6])
    })

    it('returns null when the given nodes are not connected', () => {
      expect(pathBetweenDepth(list, 6, 0)).to.be.null
    })

    it('returns null when the starting node does not exist', () => {
      expect(pathBetweenDepth(list, 7, 6)).to.be.null
    })

    it('returns null when the ending node does not exist', () => {
      expect(pathBetweenDepth(list, 0, 7)).to.be.null
    })
  })
})

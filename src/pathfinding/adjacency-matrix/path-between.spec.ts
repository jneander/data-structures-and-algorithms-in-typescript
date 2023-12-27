import {expect} from 'chai'

import {pathBetweenBreadth, pathBetweenDepth} from './path-between'
import type {AdjacencyMatrix} from './types'

describe('pathfinding > adjacency-matrix > path-between', () => {
  describe('pathBetweenBreadth()', () => {
    const matrix: AdjacencyMatrix = [
      [false, true, true, false, false, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, true, false, true, false, true, false],
      [false, false, true, false, false, false, true],
      [false, false, false, true, false, false, false],
    ]

    it('returns the path between two connected nodes', () => {
      expect(pathBetweenBreadth(matrix, 0, 6)).to.eql([0, 1, 4, 5, 6])
    })

    it('returns null when the given nodes are not connected', () => {
      expect(pathBetweenBreadth(matrix, 6, 0)).to.be.null
    })

    it('returns null when the starting node does not exist', () => {
      expect(pathBetweenBreadth(matrix, 7, 6)).to.be.null
    })

    it('returns null when the ending node does not exist', () => {
      expect(pathBetweenBreadth(matrix, 0, 7)).to.be.null
    })
  })

  describe('pathBetweenDepth()', () => {
    const matrix: AdjacencyMatrix = [
      [false, true, true, false, false, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, true, false, true, false, true, false],
      [false, false, true, false, false, false, true],
      [false, false, false, true, false, false, false],
    ]

    it('returns the path between two connected nodes', () => {
      expect(pathBetweenDepth(matrix, 0, 6)).to.eql([0, 1, 4, 5, 6])
    })

    it('returns null when the given nodes are not connected', () => {
      expect(pathBetweenDepth(matrix, 6, 0)).to.be.null
    })

    it('returns null when the starting node does not exist', () => {
      expect(pathBetweenDepth(matrix, 7, 6)).to.be.null
    })

    it('returns null when the ending node does not exist', () => {
      expect(pathBetweenDepth(matrix, 0, 7)).to.be.null
    })
  })
})

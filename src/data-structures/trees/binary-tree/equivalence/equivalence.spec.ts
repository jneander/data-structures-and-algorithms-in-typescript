import {expect} from 'chai'

import type {BinaryTreeNode} from '../types'
import {areEquivalent} from './equivalence'

describe('data-structures > trees > binary-tree > equivalence', () => {
  describe('areEquivalent()', () => {
    context('when neither root element has children', () => {
      it('returns true when the root values are the same', () => {
        const rootA = {value: 1}
        const rootB = {value: 1}
        expect(areEquivalent(rootA, rootB)).to.be.true
      })

      it('returns false when the root values are not the same', () => {
        const rootA = {value: 1}
        const rootB = {value: 2}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })
    })

    context('when the only direct children exist for the roots', () => {
      it('returns true when the roots have matching children', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        rootA.right = {value: 3}
        const rootB: BinaryTreeNode<number> = {value: 1}
        rootB.left = {value: 2}
        rootB.right = {value: 3}
        expect(areEquivalent(rootA, rootB)).to.be.true
      })

      it('returns false when the roots have children with different values', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        rootA.right = {value: 3}
        const rootB: BinaryTreeNode<number> = {value: 1}
        rootB.left = {value: 3}
        rootB.right = {value: 3}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when the first root is missing a child present in the second', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        const rootB: BinaryTreeNode<number> = {value: 1}
        rootB.left = {value: 2}
        rootB.right = {value: 3}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when the second root is missing a child present in the first', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        rootA.right = {value: 3}
        const rootB: BinaryTreeNode<number> = {value: 1}
        rootB.right = {value: 3}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when only one root has children', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        const rootB: BinaryTreeNode<number> = {value: 1}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when the root values are not the same', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        rootA.right = {value: 3}
        const rootB: BinaryTreeNode<number> = {value: 2}
        rootB.left = {value: 2}
        rootB.right = {value: 3}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })
    })

    context('when many indirect children exist for the roots', () => {
      it('returns true when all nodes match between trees', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        const childAL: BinaryTreeNode<number> = (rootA.left = {value: 2})
        const childAR: BinaryTreeNode<number> = (rootA.right = {value: 3})
        childAL.left = {value: 4}
        childAR.right = {value: 5}
        const rootB: BinaryTreeNode<number> = {value: 1}
        const childBL: BinaryTreeNode<number> = (rootB.left = {value: 2})
        const childBR: BinaryTreeNode<number> = (rootB.right = {value: 3})
        childBL.left = {value: 4}
        childBR.right = {value: 5}
        expect(areEquivalent(rootA, rootB)).to.be.true
      })

      it('returns false when not all nodes match between trees', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        const childAL: BinaryTreeNode<number> = (rootA.left = {value: 2})
        const childAR: BinaryTreeNode<number> = (rootA.right = {value: 3})
        childAL.left = {value: 5}
        childAR.right = {value: 5}
        const rootB: BinaryTreeNode<number> = {value: 1}
        const childBL: BinaryTreeNode<number> = (rootB.left = {value: 2})
        const childBR: BinaryTreeNode<number> = (rootB.right = {value: 3})
        childBL.left = {value: 4}
        childBR.right = {value: 5}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when the first root is missing a node present in the second', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        const childAR: BinaryTreeNode<number> = (rootA.right = {value: 3})
        childAR.right = {value: 5}
        const rootB: BinaryTreeNode<number> = {value: 1}
        const childBL: BinaryTreeNode<number> = (rootB.left = {value: 2})
        const childBR: BinaryTreeNode<number> = (rootB.right = {value: 3})
        childBL.left = {value: 4}
        childBR.right = {value: 5}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when the second root is missing a child present in the first', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        const childAL: BinaryTreeNode<number> = (rootA.left = {value: 2})
        const childAR: BinaryTreeNode<number> = (rootA.right = {value: 3})
        childAL.left = {value: 5}
        childAR.right = {value: 5}
        const rootB: BinaryTreeNode<number> = {value: 1}
        const childBL: BinaryTreeNode<number> = (rootB.left = {value: 2})
        rootB.right = {value: 3}
        childBL.left = {value: 4}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })

      it('returns false when only one root has children', () => {
        const rootA: BinaryTreeNode<number> = {value: 1}
        rootA.left = {value: 2}
        const rootB: BinaryTreeNode<number> = {value: 1}
        expect(areEquivalent(rootA, rootB)).to.be.false
      })
    })
  })
})

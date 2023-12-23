import {expect} from 'chai'

import type {BinaryTreeNode} from './traversal'
import {traverseBreadth, traverseInorder, traversePostorder, traversePreorder} from './traversal'

describe('data-structures > trees > binary-tree > traversal', () => {
  describe('traversePreorder()', () => {
    it('returns an array', () => {
      const root = {value: 1}
      expect(traversePreorder(root)).to.be.instanceOf(Array)
    })

    it('includes only the root element when the root has no children', () => {
      const root = {value: 1}
      expect(traversePreorder(root)).to.eql([1])
    })

    it('includes the left child of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      expect(traversePreorder(root)).to.eql([2, 1])
    })

    it('includes the right child of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.right = {value: 1}
      expect(traversePreorder(root)).to.eql([2, 1])
    })

    it('includes both children of the root in preorder order', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      root.right = {value: 3}
      expect(traversePreorder(root)).to.eql([2, 1, 3])
    })

    it('includes all tree nodes in preorder order', () => {
      const root: BinaryTreeNode<number> = {value: 4}
      const childL: BinaryTreeNode<number> = (root.left = {value: 2})
      const childR: BinaryTreeNode<number> = (root.right = {value: 6})
      childL.left = {value: 1}
      childL.right = {value: 3}
      childR.left = {value: 5}
      childR.right = {value: 7}
      expect(traversePreorder(root)).to.eql([4, 2, 1, 3, 6, 5, 7])
    })

    it('skips absent children', () => {
      const root: BinaryTreeNode<number> = {value: 8}
      const childL: BinaryTreeNode<number> = (root.left = {value: 4})
      const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
      const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
      grandchildL1.right = {value: 3}
      grandchildL2.right = {value: 7}
      expect(traversePreorder(root)).to.eql([8, 4, 2, 3, 6, 7])
    })
  })

  describe('traverseInorder()', () => {
    it('returns an array', () => {
      const root = {value: 1}
      expect(traverseInorder(root)).to.be.instanceOf(Array)
    })

    it('includes only the root element when the root has no children', () => {
      const root = {value: 1}
      expect(traverseInorder(root)).to.eql([1])
    })

    it('includes the left child of the root before the root', () => {
      const root: BinaryTreeNode<number> = {value: 1}
      root.left = {value: 2}
      expect(traverseInorder(root)).to.eql([2, 1])
    })

    it('includes the right child of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.right = {value: 1}
      expect(traverseInorder(root)).to.eql([2, 1])
    })

    it('includes both children of the root in inorder order', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      root.right = {value: 3}
      expect(traverseInorder(root)).to.eql([1, 2, 3])
    })

    it('includes all tree nodes in inorder order', () => {
      const root: BinaryTreeNode<number> = {value: 4}
      const childL: BinaryTreeNode<number> = (root.left = {value: 2})
      const childR: BinaryTreeNode<number> = (root.right = {value: 6})
      childL.left = {value: 1}
      childL.right = {value: 3}
      childR.left = {value: 5}
      childR.right = {value: 7}
      expect(traverseInorder(root)).to.eql([1, 2, 3, 4, 5, 6, 7])
    })

    it('skips absent children', () => {
      const root: BinaryTreeNode<number> = {value: 8}
      const childL: BinaryTreeNode<number> = (root.left = {value: 4})
      const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
      const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
      grandchildL1.right = {value: 3}
      grandchildL2.right = {value: 7}
      expect(traverseInorder(root)).to.eql([2, 3, 4, 6, 7, 8])
    })
  })

  describe('traversePostorder()', () => {
    it('returns an array', () => {
      const root = {value: 1}
      expect(traversePostorder(root)).to.be.instanceOf(Array)
    })

    it('includes only the root element when the root has no children', () => {
      const root = {value: 1}
      expect(traversePostorder(root)).to.eql([1])
    })

    it('includes the left child of the root before the root', () => {
      const root: BinaryTreeNode<number> = {value: 1}
      root.left = {value: 2}
      expect(traversePostorder(root)).to.eql([2, 1])
    })

    it('includes the right child of the root before the root', () => {
      const root: BinaryTreeNode<number> = {value: 1}
      root.right = {value: 2}
      expect(traversePostorder(root)).to.eql([2, 1])
    })

    it('includes both children of the root in postorder order', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      root.right = {value: 3}
      expect(traversePostorder(root)).to.eql([1, 3, 2])
    })

    it('includes all tree nodes in postorder order', () => {
      const root: BinaryTreeNode<number> = {value: 4}
      const childL: BinaryTreeNode<number> = (root.left = {value: 2})
      const childR: BinaryTreeNode<number> = (root.right = {value: 6})
      childL.left = {value: 1}
      childL.right = {value: 3}
      childR.left = {value: 5}
      childR.right = {value: 7}
      expect(traversePostorder(root)).to.eql([1, 3, 2, 5, 7, 6, 4])
    })

    it('skips absent children', () => {
      const root: BinaryTreeNode<number> = {value: 8}
      const childL: BinaryTreeNode<number> = (root.left = {value: 4})
      const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
      const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
      grandchildL1.right = {value: 3}
      grandchildL2.right = {value: 7}
      expect(traversePostorder(root)).to.eql([3, 2, 7, 6, 4, 8])
    })
  })

  describe('traverseBreadth()', () => {
    it('returns an array', () => {
      const root = {value: 1}
      expect(traverseBreadth(root)).to.be.instanceOf(Array)
    })

    it('includes only the root element when the root has no children', () => {
      const root = {value: 1}
      expect(traverseBreadth(root)).to.eql([1])
    })

    it('includes the left child of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      expect(traverseBreadth(root)).to.eql([2, 1])
    })

    it('includes the right child of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.right = {value: 1}
      expect(traverseBreadth(root)).to.eql([2, 1])
    })

    it('includes both children of the root after the root', () => {
      const root: BinaryTreeNode<number> = {value: 2}
      root.left = {value: 1}
      root.right = {value: 3}
      expect(traverseBreadth(root)).to.eql([2, 1, 3])
    })

    it('includes all tree nodes in breadth-first order', () => {
      const root: BinaryTreeNode<number> = {value: 4}
      const childL: BinaryTreeNode<number> = (root.left = {value: 2})
      const childR: BinaryTreeNode<number> = (root.right = {value: 6})
      childL.left = {value: 1}
      childL.right = {value: 3}
      childR.left = {value: 5}
      childR.right = {value: 7}
      expect(traverseBreadth(root)).to.eql([4, 2, 6, 1, 3, 5, 7])
    })

    it('skips absent children', () => {
      const root: BinaryTreeNode<number> = {value: 8}
      const childL: BinaryTreeNode<number> = (root.left = {value: 4})
      const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
      const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
      grandchildL1.right = {value: 3}
      grandchildL2.right = {value: 7}
      expect(traverseBreadth(root)).to.eql([8, 4, 2, 6, 3, 7])
    })
  })
})

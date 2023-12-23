import {expect} from 'chai'

import type {BinaryTreeNode} from '../types'
import {containsBreadth, containsDepth} from './search'

describe('data-structures > trees > binary-tree > search', () => {
  describe('containsDepth()', () => {
    context('when the root element has no children', () => {
      it('returns true when the root matches the search value', () => {
        const root = {value: 1}
        expect(containsDepth(root, 1)).to.be.true
      })

      it('returns false when the root does not match the search value', () => {
        const root = {value: 2}
        expect(containsDepth(root, 1)).to.be.false
      })
    })

    context('when the root element has only direct children', () => {
      it('returns true when the root matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsDepth(root, 1)).to.be.true
      })

      it('returns true when the left child matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsDepth(root, 2)).to.be.true
      })

      it('returns true when the right child matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsDepth(root, 3)).to.be.true
      })

      it('returns false when no nodes match the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsDepth(root, 4)).to.be.false
      })
    })

    context('when the root element has many indirect children', () => {
      it('returns true when any node matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 4}
        const childL: BinaryTreeNode<number> = (root.left = {value: 2})
        const childR: BinaryTreeNode<number> = (root.right = {value: 6})
        childL.left = {value: 1}
        childL.right = {value: 3}
        childR.left = {value: 5}
        childR.right = {value: 7}
        expect(containsDepth(root, 5)).to.be.true
      })

      it('skips absent children', () => {
        const root: BinaryTreeNode<number> = {value: 8}
        const childL: BinaryTreeNode<number> = (root.left = {value: 4})
        const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
        const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
        grandchildL1.right = {value: 3}
        grandchildL2.right = {value: 7}
        expect(containsDepth(root, 7)).to.be.true
      })

      it('returns false when no node matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 4}
        const childL: BinaryTreeNode<number> = (root.left = {value: 2})
        const childR: BinaryTreeNode<number> = (root.right = {value: 6})
        childL.left = {value: 1}
        childL.right = {value: 3}
        childR.left = {value: 5}
        childR.right = {value: 7}
        expect(containsDepth(root, 8)).to.be.false
      })
    })
  })

  describe('containsBreadth()', () => {
    context('when the root element has no children', () => {
      it('returns true when the root matches the search value', () => {
        const root = {value: 1}
        expect(containsBreadth(root, 1)).to.be.true
      })

      it('returns false when the root does not match the search value', () => {
        const root = {value: 2}
        expect(containsBreadth(root, 1)).to.be.false
      })
    })

    context('when the root element has only direct children', () => {
      it('returns true when the root matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsBreadth(root, 1)).to.be.true
      })

      it('returns true when the left child matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsBreadth(root, 2)).to.be.true
      })

      it('returns true when the right child matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsBreadth(root, 3)).to.be.true
      })

      it('returns false when no nodes match the search value', () => {
        const root: BinaryTreeNode<number> = {value: 1}
        root.left = {value: 2}
        root.right = {value: 3}
        expect(containsBreadth(root, 4)).to.be.false
      })
    })

    context('when the root element has many indirect children', () => {
      it('returns true when any node matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 4}
        const childL: BinaryTreeNode<number> = (root.left = {value: 2})
        const childR: BinaryTreeNode<number> = (root.right = {value: 6})
        childL.left = {value: 1}
        childL.right = {value: 3}
        childR.left = {value: 5}
        childR.right = {value: 7}
        expect(containsBreadth(root, 5)).to.be.true
      })

      it('skips absent children', () => {
        const root: BinaryTreeNode<number> = {value: 8}
        const childL: BinaryTreeNode<number> = (root.left = {value: 4})
        const grandchildL1: BinaryTreeNode<number> = (childL.left = {value: 2})
        const grandchildL2: BinaryTreeNode<number> = (childL.right = {value: 6})
        grandchildL1.right = {value: 3}
        grandchildL2.right = {value: 7}
        expect(containsBreadth(root, 7)).to.be.true
      })

      it('returns false when no node matches the search value', () => {
        const root: BinaryTreeNode<number> = {value: 4}
        const childL: BinaryTreeNode<number> = (root.left = {value: 2})
        const childR: BinaryTreeNode<number> = (root.right = {value: 6})
        childL.left = {value: 1}
        childL.right = {value: 3}
        childR.left = {value: 5}
        childR.right = {value: 7}
        expect(containsBreadth(root, 8)).to.be.false
      })
    })
  })
})

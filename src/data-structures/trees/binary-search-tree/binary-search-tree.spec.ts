import {expect} from 'chai'

import {BinarySearchTree} from './binary-search-tree'

describe('data-structures > trees > binary-search-tree', () => {
  describe('BinarySearchTree', () => {
    function treeToArray<T>(tree: BinarySearchTree<T>) {
      const items: T[] = []

      for (const item of tree.iterateInorder()) {
        items.push(item)
      }

      return items
    }

    describe('#insert()', () => {
      it('adds an element to the tree', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(1)
        expect(treeToArray(tree)).to.eql([1])
      })

      it('orders lesser elements with existing elements', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(4)
        tree.insert(3)
        tree.insert(2)
        tree.insert(1)
        expect(treeToArray(tree)).to.eql([1, 2, 3, 4, 5])
      })

      it('orders greater elements with existing elements', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        expect(treeToArray(tree)).to.eql([1, 2, 3, 4, 5])
      })

      it('orders elements between existing lesser and greater elements', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(1)
        tree.insert(3)
        tree.insert(2)
        tree.insert(4)
        expect(treeToArray(tree)).to.eql([1, 2, 3, 4, 5])
      })

      it('allows duplicate values', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        tree.insert(5)
        tree.insert(2)
        tree.insert(4)
        expect(treeToArray(tree)).to.eql([1, 2, 2, 3, 4, 5, 5])
      })

      it('increments the size of the tree', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(4)
        expect(tree.size).to.equal(2)
      })
    })

    describe('#delete()', () => {
      it('removes the given value from the tree', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.delete(2)
        expect(treeToArray(tree)).to.eql([1, 3])
      })

      it('decrements the size of the tree', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.delete(2)
        expect(tree.size).to.equal(2)
      })

      it('ignores duplicates of the given value', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(1)
        tree.insert(1)
        tree.insert(2)
        tree.insert(2)
        tree.insert(3)
        tree.insert(3)
        tree.delete(2)
        expect(treeToArray(tree)).to.eql([1, 1, 2, 3, 3])
      })

      context('when the given value is not in the tree', () => {
        it('does not remove any elements', () => {
          const tree = new BinarySearchTree<number>()
          tree.insert(1)
          tree.insert(2)
          tree.insert(3)
          tree.delete(4)
          expect(treeToArray(tree)).to.eql([1, 2, 3])
        })

        it('does not modify the size of the tree', () => {
          const tree = new BinarySearchTree<number>()
          tree.insert(1)
          tree.insert(2)
          tree.insert(3)
          tree.delete(4)
          expect(tree.size).to.equal(3)
        })
      })

      it('does nothing when the tree is empty', () => {
        const tree = new BinarySearchTree<number>()
        tree.delete(1)
        expect(tree.size).to.equal(0)
      })
    })

    describe('#contains()', () => {
      it('returns true when the tree has a node with the given value', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(1)
        tree.insert(3)
        tree.insert(2)
        tree.insert(4)
        expect(tree.contains(4)).to.be.true
      })

      it('returns false when the tree does not have a node with the given value', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(1)
        tree.insert(3)
        tree.insert(2)
        tree.insert(4)
        expect(tree.contains(6)).to.be.false
      })

      it('returns false when the tree is empty', () => {
        const tree = new BinarySearchTree<number>()
        expect(tree.contains(1)).to.be.false
      })
    })

    describe('#iterateInorder()', () => {
      it('yields each value in the tree with inorder traversal', () => {
        const tree = new BinarySearchTree<number>()
        tree.insert(5)
        tree.insert(1)
        tree.insert(3)
        tree.insert(2)
        tree.insert(4)

        const items: number[] = []

        for (const item of tree.iterateInorder()) {
          items.push(item)
        }

        expect(items).to.eql([1, 2, 3, 4, 5])
      })
    })
  })
})

function foo() {
    console.log("foo was called")
}
const array = []
const num = [1, 2, 3, 4]
const strs = ['john', 'nonito', 'manny', 'ali']
const mixins = [1, 'gelica', foo]
mixins[2]()
console.log(strs[2])
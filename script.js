class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(rootA, rootB) {
    if (!rootA && !rootB) return true;
    if (!rootA || !rootB) return false;
    return rootA.value === rootB.value && areIdentical(rootA.left, rootB.left) && areIdentical(rootA.right, rootB.right);
}

function copyTree(root) {
    if (!root) return null;
    const newRoot = new TreeNode(root.value);
    newRoot.left = copyTree(root.left);
    newRoot.right = copyTree(root.right);
    return newRoot;
}

function getNodesAtLevel(root, level) {
    const result = [];
    if (!root) return result;
    if (level === 1) {
        result.push(root.value);
    } else {
        result.push(...getNodesAtLevel(root.left, level - 1));
        result.push(...getNodesAtLevel(root.right, level - 1));
    }
    return result;
}

function countLeaves(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return countLeaves(root.left) + countLeaves(root.right);
}

// Ejemplo de árbol binario
const rootA = new TreeNode(1);
rootA.left = new TreeNode(2);
rootA.right = new TreeNode(3);
rootA.left.left = new TreeNode(4);
rootA.left.right = new TreeNode(5);

const rootB = new TreeNode(1);
rootB.left = new TreeNode(2);
rootB.right = new TreeNode(3);
rootB.left.left = new TreeNode(4);
rootB.left.right = new TreeNode(5);

function checkIdentical() {
    const isIdentical = areIdentical(rootA, rootB);
    displayOutput(isIdentical ? 'Los árboles A y B son idénticos.' : 'Los árboles A y B no son idénticos.');
}

function copyTree() {
    const copiedTree = copyTree(rootA);
    displayOutput('Árbol A copiado: ' + JSON.stringify(copiedTree));
}

function showNodesAtLevel() {
    const level = parseInt(document.getElementById('level').value);
    const nodesAtLevel = getNodesAtLevel(rootA, level);
    displayOutput(`Nodos en el nivel ${level}: ${nodesAtLevel.join(', ')}`);
}

function countLeaves() {
    const leavesCount = countLeaves(rootA);
    displayOutput(`Número de hojas del árbol A: ${leavesCount}`);
}

function displayOutput(message) {
    document.getElementById('output').innerText = message;
}

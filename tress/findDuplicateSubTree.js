var findDuplicateSubtrees = function (root) {
    const dfs = (node) => {
        if (!node) return "#";
        const key = `${node.val}_${dfs(node.left)}_${dfs(node.right)}`;
        seen[key] ? seen[key]++ : (seen[key] = 1);
        if (seen[key] > 1) result.push(node);
        return key;
    };
    const result = [],
        seen = {};
    dfs(root);
    return result;
};

findDuplicateSubtrees([1, 2, 3, 4, null, 2, 4, null, null, 4]);

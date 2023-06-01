### Question : https://leetcode.com/problems/validate-binary-search-tree/

### Solution : 

- Time complexity: O(n);
- Space complexity: O(n);

```
class Solution {
public:
    vector<int> nodes;
    void inOrder(TreeNode* root){
        if(root->left){
            inOrder(root->left);
        }
        nodes.push_back(root->val);

        if(root->right){
            inOrder(root->right);
        }
    }
    bool isValidBST(TreeNode* root) {
        inOrder(root);
        for(int i=0; i<nodes.size()-1; i++){
            if(nodes[i]>=nodes[i+1]){
                return false;
            }
        }
        return true;
    }
};
```
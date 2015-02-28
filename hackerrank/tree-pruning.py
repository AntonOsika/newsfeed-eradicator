from collections import *

a = deque()

N, K = map(int,input().split())
ws  = [x for x  in map(int,input().split())]

a = [{} for _ in range(N+1)]
for _ in range(N-1):
    u, v = input().split()
    a[int(u)][int(v)] = True
    

def f(t, k):
    tt = 



"""
Idea:

Represent the tree as a graph.
Bottom up decide how good each pruning is. When every child is taken care of, 
we have to EITHER prune here or make any pruning below.

Represent this as a decision tree. -> Memoize f(s, k) where s are the decisions in the tree.



"""
    
   

    
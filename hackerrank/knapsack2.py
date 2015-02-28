INF = 2000**2

T = int(input())

for _ in range(T):
    n, k = map(int, input().split())
    ws = [x for x in map(int, input().split())]
    a = [-1]*2001
    for kk in range(k+1):
        best = 0
        for w in ws:
            if kk - w == 0:
                best = w
            elif kk - w > 0:
                best = max(best, w + a[kk-w])
        a[kk] = best
        
    print(a[k])
    
    
    
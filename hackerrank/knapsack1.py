INF = 2000**2

T = int(input())

for _ in range(T):
    n, k = map(int,input().split())
    ws = [x for x in map(int,input().split())]
    a = {}
    def f(s, k):
        if k < 0:
            return -INF
        if k == 0:
            return 0
        if s == -1:
            return 0
        if not (s, k) in a:
            a[(s, k)] = max(f(s-1, k), ws[s] + f(s-1, k-ws[s]))
        return a[(s, k)]
    print(f(n-1, k))
